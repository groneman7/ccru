import { prisma } from "~/lib/prisma";
import type { Event, EventPosition, EventShift } from "~/prisma/client";
import { getUserNameAndSuffix } from "~/prisma/users";
import { defaultQueryResponses, type QueryResponse } from "~/lib/defaultQueryResponses";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export async function assignUser(
    userId: string,
    eventId: string,
    positionId: string
): Promise<QueryResponse> {
    try {
        const event = await prisma.event.findUnique({ where: { id: eventId } });
        if (!event) {
            return {
                ...defaultQueryResponses[404],
                message: "Event not found",
            };
        }

        const index = event.shifts.findIndex((shift) => shift.positionId === positionId);
        if (index === -1) {
            // ADDS A SHIFT THAT WAS NOT PREVIOUSLY ON THE EVENT
        } else {
            const assignment = { positionId, userId };
            const updateShifts = prisma.event.update({
                where: { id: eventId },
                data: { shifts: { set: [...event.shifts, assignment] } },
            });
        }

        return {
            ...defaultQueryResponses[200],
        };
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
    }
}

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

export async function getEventById(eventId: string): Promise<
    QueryResponse<
        Omit<Event, "shifts"> & {
            shifts: (Omit<EventShift, "userId"> & { user?: { id: string; name: string } })[];
        }
    >
> {
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

        const mappedShifts = await Promise.all(
            event.shifts.map(async (shift) => {
                const { data: label } = await getPositionLabel(shift.positionId);
                const user = shift.userId
                    ? {
                          id: shift.userId,
                          name: await getUserNameAndSuffix(shift.userId),
                      }
                    : undefined;

                return {
                    positionId: shift.positionId,
                    positionLabel: label,
                    user,
                };
            })
        );

        return {
            ...defaultQueryResponses[200],
            data: { ...event, shifts: mappedShifts },
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

export async function getPositionById(
    positionId: string
): Promise<QueryResponse<EventPosition>> {
    try {
        const position = await prisma.eventPosition.findUnique({
            where: {
                id: positionId,
            },
        });
        if (!position) {
            return {
                ...defaultQueryResponses[404],
            };
        }
        return {
            ...defaultQueryResponses[200],
            data: position,
        };
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
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
        if (!position) {
            return {
                ...defaultQueryResponses[404],
            };
        }
        return {
            ...defaultQueryResponses[200],
            data: position.label,
        };
    } catch (ex) {
        return {
            ...defaultQueryResponses[500],
            message: ex as string,
        };
    }
}
