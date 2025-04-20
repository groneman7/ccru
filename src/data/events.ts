"use server";

import { currentUser } from "@clerk/nextjs/server";
import type { Event, EventPosition, EventShift, Prisma } from "~/data/client";
import { prisma } from "~/lib/prisma";
import {
    badRequest,
    created,
    forbidden,
    internalServerError,
    notFound,
    ok,
    type QueryResponse,
} from "~/lib/queryResponses";
import { can, canSignUp } from "./auth";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// Events

export async function createEvent(
    payload: Omit<Prisma.EventCreateInput, "created_by">,
    positions: string[]
) {
    try {
        const user = await currentUser();
        if (!user) return forbidden("User not logged in.");
        if ((await can(user.id, "events:create")) === false)
            return forbidden("User doesn't have permission to create new events.");

        const createdEvent = await prisma.event.create({
            data: {
                ...payload,
                created_by: user.id,
            },
        });
        if (!createdEvent) return internalServerError("Error creating event.");
        const { data, message, status } = await createShift(createdEvent.id, positions).then(
            (res) => res
        );
        if (status === 201 && data === positions.length) {
            return created(createdEvent);
        }
        return internalServerError(
            "The event was created, but there was an error creating shifts."
        );
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getEvents(startDate?: Dayjs, endDate?: Dayjs) {
    try {
        if (!startDate) {
            const allEvents = await prisma.event.findMany();

            return ok(allEvents);
        } else if (startDate && !endDate) {
            const eventsOnDate = await prisma.event.findMany({
                where: {
                    date: {
                        gte: dayjs(startDate).toDate(),
                        lte: dayjs(startDate).add(1, "day").toDate(),
                    },
                },
            });
            if (!eventsOnDate) return notFound();

            return ok(eventsOnDate);
        } else if (startDate && endDate) {
            const eventsInRange = await prisma.event.findMany({
                where: {
                    date: {
                        gte: dayjs(startDate).toISOString(),
                        lte: dayjs(endDate).toISOString(),
                    },
                },
            });
            if (!eventsInRange) return notFound();

            return ok(eventsInRange);
        } else {
            return badRequest();
        }
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getEventById(eventId: string) {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: eventId,
            },
            include: {
                shifts: {
                    include: {
                        position: true,
                    },
                },
            },
        });
        if (!event) return notFound();

        return ok(event);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

// Positions

export async function getAllPositions() {
    try {
        const positions = await prisma.eventPosition.findMany({
            include: { allowed_user_types: true },
        });

        return ok(positions);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getPositionById(positionId: string | string[]) {
    try {
        if (typeof positionId === "string") {
            const position = await prisma.eventPosition.findUnique({
                where: {
                    id: positionId,
                },
            });
            if (!position) return notFound();
            return ok(position);
        } else {
            const positions = await prisma.eventPosition.findMany({
                where: {
                    id: {
                        in: positionId,
                    },
                },
            });
            if (!positions) return notFound();
            return ok(positions);
        }
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

// Shifts

export type AssignUserToShiftPayload = {
    shiftId: string;
    userId: string | null;
    override?:
        | false
        | {
              reason: string;
              comments?: string;
          };
};
export async function assignUserToShift({
    shiftId,
    userId,
    override, // TODO: Add override to db.
}: AssignUserToShiftPayload) {
    try {
        const shift = await prisma.eventShift.findUnique({
            where: { id: shiftId },
        });
        if (!shift) return notFound();

        // 1. If userId is null, then we're just removing the current assigned user.
        if (!userId) {
            const updated = await prisma.eventShift.update({
                where: { id: shiftId },
                data: { user: userId },
            });
            return ok(updated);
        }

        // 2. If override is true, then we're overriding whatever reason the user can't sign up.
        if (override) {
            // TODO: Add override message.
            const updated = await prisma.eventShift.update({
                where: { id: shiftId },
                data: { user: userId },
            });
            return ok(updated);
        }

        // 3. Check if user can sign up for the shift
        const allowed = await canSignUp(shift.eventId, shift.positionId, userId).then(
            (res) => res
        );
        if (!allowed.value) return forbidden(allowed.message);

        const updated = await prisma.eventShift.update({
            where: { id: shiftId },
            data: { user: userId },
        });

        return ok(updated);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function createShift(
    eventId: string,
    positionId: string | string[],
    userId?: string
): Promise<QueryResponse<EventShift | number>> {
    try {
        if (typeof positionId === "string") {
            const shift = await prisma.eventShift.create({
                data: {
                    eventId,
                    positionId,
                    user: userId,
                },
            });
            if (!shift) return internalServerError("Error creating shift.");
            return created(shift);
        } else {
            const shifts = await prisma.eventShift.createMany({
                data: positionId.map((posId) => ({
                    eventId,
                    positionId: posId,
                    user: userId,
                })),
            });
            if (!shifts) return internalServerError("Error creating shifts.");
            return created(shifts.count);
        }
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

// Templates

export async function createEventTemplate(_: any, payload: Prisma.EventTemplateCreateInput) {
    try {
        const template = await prisma.eventTemplate.create({
            data: payload,
        });
        if (!template) return internalServerError("Error creating template.");
        return created(template);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}
