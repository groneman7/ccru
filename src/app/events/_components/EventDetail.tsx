import { clerkClient, currentUser } from '@clerk/nextjs/server';
import type { Event } from '@prisma/client'
import { getPositions, getShiftsForEvent } from '~/server/queries';
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import ShiftListItem from './ShiftListItem';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

type EventDetailProps = {
  event: Event;
}

export default async function EventDetail({ event }: EventDetailProps) {
  const user = await currentUser()
  const clerk = clerkClient()

  const shiftsResponse = await getShiftsForEvent(event.id)
  console.log(shiftsResponse)
  const { data: positions } = await getPositions()
  
  async function getVolunteer(userId: string) {
    const user = await clerk.users.getUser(userId)
    return `${user.firstName} ${user.lastName}`
  }

  return (
    <div className="p-4">
      <div className="text-lg font-semibold">{event.eventName}</div>
      <div>{dayjs.tz(event.timeStart).format('h:mm A')} – {dayjs.tz(event.timeEnd).format('h:mm A')}</div>
      <div>{event.location}</div>
      <div className="flex flex-col gap-2 px-2 py-1 divide-y">
        {
          shiftsResponse?.data?.map(async (shift) => {
            const volunteer = shift.userId ? await getVolunteer(shift.userId) : undefined
            return <ShiftListItem key={shift.id} currentUser={{ id: user!.id, name: user!.fullName!, username: user!.username!}} event={event} position={positions!.find(p => p.id === shift.positionId)!} volunteer={volunteer} shiftId={shift.id}/>; 
          })}
      </div>
    </div>
  )
}