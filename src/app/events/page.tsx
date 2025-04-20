import { currentUser } from "@clerk/nextjs/server";
import { EventCalendar } from "~/components/event-calendar";
import { can } from "~/data/auth";
import { getEvents } from "~/data/events";

// Events Page
export default async function Page() {
    const me = await currentUser();
    const { data: events } = await getEvents().then((res) => res);

    return (
        <div className="flex flex-1">
            <EventCalendar
                canCreateEvents={me ? await can(me.id, "events:create") : false}
                events={events}
            />
        </div>
    );
}
