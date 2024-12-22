import { prisma } from "~/lib/prisma";
import type { Event, EventPosition } from "~/prisma/client";
import { defaultQueryResponses, type QueryResponse } from "~/lib/defaultQueryResponses";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export async function getEvents(
    startDate?: Dayjs,
    endDate?: Dayjs
): Promise<QueryResponse<Event[]>> {
    try {
        if (!startDate) {
            const allEvents = await prisma.event.findMany();
            return {
                status: 200,
                data: [...allEvents],
            };
        } else if (startDate && !endDate) {
            const eventsOnDate = await prisma.event.findMany({
                where: {
                    date: {
                        gte: dayjs(startDate).toDate(),
                        lte: dayjs(startDate).add(1, "day").toDate(),
                    },
                },
            });
            return {
                status: 200,
                data: [...eventsOnDate],
            };
        } else if (startDate && endDate) {
            const eventsInRagne = await prisma.event.findMany({
                where: {
                    date: {
                        gte: dayjs(startDate).toISOString(),
                        lte: dayjs(endDate).toISOString(),
                    },
                },
            });
            return {
                status: 200,
                data: [...eventsInRagne],
            };
        } else {
            return {
                status: 400,
            };
        }
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
    }
}

export async function getEventById(eventId: string): Promise<QueryResponse<Event>> {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id: eventId,
            },
        });
        if (!event) {
            return {
                ...defaultQueryResponses[404],
            };
        }
        return {
            ...defaultQueryResponses[200],
            data: event,
        };
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
    }
}

export async function getPositions(): Promise<QueryResponse<EventPosition[]>> {
    try {
        const positions = await prisma.eventPosition.findMany();
        return {
            status: 200,
            data: [...positions],
        };
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
    }
}
