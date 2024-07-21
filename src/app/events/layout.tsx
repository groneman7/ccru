import EventCalender from "./_components/event-calendar";
import { getEvents } from '~/server/queries'

export default async function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { data: events} = await getEvents()

  return (
    <div className="flex gap-4 justify-between">
      <div className="basis-2/3">
        <EventCalender events={events}/>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}