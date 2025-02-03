import { currentUser } from "@clerk/nextjs/server";
import type { Event, EventPosition, EventShift } from "~/prisma/client";
import { prisma } from "~/lib/prisma";
import {
    badRequest,
    created,
    forbidden,
    internalServerError,
    notFound,
    ok,
    type QueryResponse,
} from "~/lib/defaultQueryResponses";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { has } from "./auth";
dayjs.extend(utc);
dayjs.extend(timezone);

export async function assignUser(
    userId: string,
    eventId: string,
    positionId: string
): Promise<QueryResponse<Event>> {
    try {
        const event = await prisma.event.findUnique({ where: { id: eventId } });
        if (!event) return notFound();

        const index = event.shifts.findIndex((shift) => shift.position === positionId);
        if (index === -1) {
            // ADDS A SHIFT THAT WAS NOT PREVIOUSLY ON THE EVENT
        } else {
            const assignment = { positionId, userId };
            const updateShifts = prisma.event.update({
                where: { id: eventId },
                data: { shifts: { set: [...event.shifts, assignment] } },
            });
        }

        return ok(event);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function createEvent(
    event: Omit<Event, "id" | "created_at" | "created_by">
): Promise<QueryResponse<Event>> {
    try {
        const user = await currentUser();
        if (!user) return forbidden("User not logged in.");
        if ((await has(user.id, "events:create_new")) === false)
            return forbidden("User doesn't have permission to create new events.");

        const createdEvent = await prisma.event.create({
            data: {
                ...event,
                created_by: user.id,
                created_at: new Date(),
            },
        });
        if (!createdEvent) return internalServerError("Error creating event.");

        return created(createdEvent);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getEvents(
    startDate?: Dayjs,
    endDate?: Dayjs
): Promise<QueryResponse<Event[]>> {
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

export async function getEventById(eventId: string): Promise<QueryResponse<Event>> {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: eventId,
            },
        });
        if (!event) return notFound();

        return ok(event);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getAllPositions(): Promise<QueryResponse<EventPosition[]>> {
    try {
        const positions = await prisma.eventPosition.findMany();

        return ok(positions);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getPositionById(
    positionId: string
): Promise<QueryResponse<EventPosition>> {
    try {
        const position = await prisma.eventPosition.findUnique({
            where: {
                id: positionId,
            },
        });
        if (!position) return notFound();

        return ok(position);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getPositionsByIds(
    positionIds: string[]
): Promise<QueryResponse<Partial<EventPosition>[]>> {
    try {
        const positions = await prisma.eventPosition.findMany({
            where: {
                id: {
                    in: positionIds,
                },
            },
            select: {
                id: true,
                name: true,
                label: true,
            },
        });
        if (!positions) return notFound();

        return ok(positions);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

export async function getPositionLabel(
    positionId: string
): Promise<QueryResponse<string | null>> {
    try {
        const position = await prisma.eventPosition.findUnique({
            where: {
                id: positionId,
            },
        });
        if (!position) return notFound();
        return ok(position.label);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}
