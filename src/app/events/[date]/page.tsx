import { SignedIn } from '@clerk/nextjs'
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { Button, Empty } from 'antd'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getEvents, getPositions } from '~/server/queries'

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

export default async function DatePage({ params }: { params: { date: string }}) {
  const user = await currentUser()
  const date = dayjs(params.date)
  const { data: events } = await getEvents(date.toISOString())
  const { data: positions } = await getPositions()

  async function getVolunteer(userId: string) {
    const user = await clerkClient.users.getUser(userId)
    return user.firstName + ' ' + user.lastName
  }

  return (
    <div className="p-2">
      <div className='flex justify-between'>
        <h3 className="text-xl font-semibold">{date.format('dddd, MMMM D, YYYY')}</h3>
        <SignedIn>
          {user?.privateMetadata?.permissions?.events?.['create-new'] && <Button>Create New Event</Button>}
        </SignedIn>
      </div>
      <div>
        {events && events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="flex flex-col gap-1 p-2">
              <div className="text-lg font-semibold">{event.name}</div>
              <div>{dayjs.tz(event.timeStart).format('h:mm A')} – {dayjs.tz(event.timeEnd).format('h:mm A')}</div>
              <div>{event.location}</div>
              <div className="flex flex-col gap-2 px-2 py-1 divide-y">
                {event.shifts.map((shift, i: number) => {
                  const position = positions?.find((p) => p.id === shift.positionId)
                  const volunteer = shift.userId ? getVolunteer(shift.userId) : 'Sign up'
                  return (
                    <div key={`${i}-${shift.positionId}`} className="flex gap-4 items-center pt-2">
                      <div className="basis-1/3">{position?.label ?? position?.name}</div>
                      <div>{volunteer}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ): (
          <Empty />
        )}
      </div>
    </div>
  )
}