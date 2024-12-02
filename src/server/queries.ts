"use server";
import dayjs, { type Dayjs } from "dayjs";
import { db } from "./db";
import { defaultQueryReturns } from "./defaultQueryResponses";
import type { QueryResponse } from "./defaultQueryResponses";

export async function getUserRolesAndTypes() {
    try {
        const userRoles = await db.userRole.findMany();
        const userTypes = await db.userType.findMany();
        return {
            status: 200,
            userRoles,
            userTypes,
        };
    } catch (ex) {
        return {
            status: 500,
            error: ex,
        };
    }
}

export async function getPositions() {
    try {
        const positions = await db.eventPosition.findMany();
        return {
            status: 200,
            data: [...positions],
        };
    } catch (ex) {
        return {
            status: 500,
            error: ex,
        };
    }
}

export async function getEvents(startDate?: Dayjs, endDate?: Dayjs) {
    try {
        if (!startDate) {
            const allEvents = await db.event.findMany();
            return {
                status: 200,
                data: [...allEvents],
            };
        } else if (startDate && !endDate) {
            const eventsOnDate = await db.event.findMany({
                where: {
                    date: startDate.toDate(),
                },
            });
            return {
                status: 200,
                data: [...eventsOnDate],
            };
        } else if (startDate && endDate) {
            const eventsInRagne = await db.event.findMany({
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
