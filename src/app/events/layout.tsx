import { EventCalendar } from "~/components/EventCalendar";
import { getEvents } from "~/server/queries";

export default async function EventsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { data: events } = await getEvents();

    return (
        <div className="flex flex-1 justify-between gap-4">
            <div className="flex basis-3/4 border-2 border-green-500">
                <EventCalendar
                    canEdit
                    events={events}
                />
            </div>
            <div className="flex-1 border-2 border-blue-500">{children}</div>
        </div>
    );
}
