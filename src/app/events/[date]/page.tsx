import { SignedIn } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Button, Empty } from 'antd'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getEvents } from '~/server/queries'
import EventDetail from '../_components/EventDetail'

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

export default async function DatePage({ params }: { params: { date: string }}) {
  const user = await currentUser()
  const date = dayjs(params.date)
  const { data: events } = await getEvents(date.toISOString())

  return (
    <div className="p-4">
      <div className='flex justify-between'>
        <h3 className="text-2xl font-semibold">{date.format('dddd, MMMM D, YYYY')}</h3>
        <SignedIn>
          {user?.privateMetadata?.permissions?.events?.['create-new'] && <Button>Create New Event</Button>}
        </SignedIn>
      </div>
      <div>
        {
          events && events.length > 0
          ? events.map((event) => <EventDetail key={event.id} event={event} />)
          : <Empty />
        }
      </div>
    </div>
  )
}