import { currentUser } from "@clerk/nextjs/server";
import type { Event, EventPosition, EventShift, Prisma } from "~/prisma/client";
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
import { has } from "./auth";

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
        if ((await has(user.id, "events:create_new")) === false)
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

export async function getAllPositions(): Promise<QueryResponse<EventPosition[]>> {
    try {
        const positions = await prisma.eventPosition.findMany();

        return ok(positions);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getPositionById(
    positionId: string | string[]
): Promise<QueryResponse<EventPosition | EventPosition[]>> {
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

export async function assignUserToShift(
    shiftId: string,
    userId: string
): Promise<QueryResponse<EventShift>> {
    try {
        const shift = await prisma.eventShift.update({
            where: { id: shiftId },
            data: { user: userId },
        });
        if (!shift) return notFound();

        return ok(shift);
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

export async function removeUserFromShift(shiftId: string): Promise<QueryResponse<EventShift>> {
    try {
        const shift = await prisma.eventShift.update({
            where: { id: shiftId },
            data: { user: null },
        });
        if (!shift) return notFound();

        return ok(shift);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}
