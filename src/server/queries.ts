"use server"
import dayjs from "dayjs";
import { db } from "./db";
import type { EventShift } from '@prisma/client'
import { defaultQueryReturns } from './defaultQueryResponses'
import type { QueryResponse } from './defaultQueryResponses'

export async function getUserRolesAndTypes() {
  try {
    const userRoles = await db.userRole.findMany()
    const userTypes = await db.userType.findMany()
    return {
      status: 200,
      userRoles,
      userTypes
    }
  } catch (ex) {
    return {
      status: 500,
      error: ex
    }
  }
}

export async function addUserToShift(shiftId: string, userId: string) {
  try {
    const updatedShift = await db.eventShift.update({
      where: { id: shiftId },
      data: {
        userId: userId
      }
    })
    return {
      ...defaultQueryReturns[200],
      data: updatedShift
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getShiftsForEvent(eventId: string): Promise<QueryResponse<EventShift[]>> {
  try {
    const shifts = await db.eventShift.findMany({
      where: {
        eventId: eventId
      }
    })
    if (!shifts) {
      return defaultQueryReturns[404]
    }
    return {
      ...defaultQueryReturns[200],
      data: shifts
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getPositions() {
  try {
    const positions = await db.position.findMany();
    return {
      status: 200,
      data: [...positions]
    }
  } catch (ex) {
    return {
      status: 500,
      error: ex
    }
  }
}

export async function getEvents(startDate?: string, endDate?: string) {
  try {
    if (!startDate) {
      const allEvents = await db.event.findMany();
      return {
        status: 200,
        data: [...allEvents]
      }
    } else if (startDate && !endDate) {
      const eventsOnDate = await db.event.findMany({
        where: {
          date: startDate,
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
          }
        }
      })
      return {
        status: 200,
        data: [...eventsInRagne],
      };
    } else {
      return {
        status: 400,
      }
    }
  } catch (ex) {
    return {
      status: 500,
      error: ex
    }
  }
}