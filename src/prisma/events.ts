import dayjs, { type Dayjs } from "dayjs";
import { prisma } from "~/lib/prisma";
import type { Event } from "~/prisma/client";
import { defaultQueryReturns, type QueryResponse } from "~/lib/defaultQueryResponses";

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
                    date: startDate.toDate(),
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
            status: 500,
            error: ex,
        };
    }
}
