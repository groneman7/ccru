import { EventCalendar } from "~/components/EventCalendar";
import { getEvents } from "~/server/queries";

export default async function EventsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { data: events } = await getEvents();
    // console.log(events);

    return (
        <div className="flex flex-1 justify-between gap-4">
            <div className="flex flex-1">
                <EventCalendar
                    canEdit
                    events={events}
                />
            </div>
            <div className="w-96">{children}</div>
        </div>
    );
}
