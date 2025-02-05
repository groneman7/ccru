import { EventCalendar } from "~/components/EventCalendar";
import { getEvents } from "~/prisma/events";

// Events Page
export default async function Page() {
    const { data: events } = await getEvents().then((res) => res);

    return (
        <div className="flex flex-1">
            <EventCalendar
                canEdit
                events={events}
            />
        </div>
    );
}
