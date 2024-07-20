import EventCalender from "./_components/event-calendar";

export default function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="basis-2/3">
        <EventCalender />
      </div>
      <div className="flex-1 bg-slate-100">
        {children}
      </div>
    </div>
  )
}