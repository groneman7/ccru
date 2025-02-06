import { currentUser } from "@clerk/nextjs/server";
import { EventCalendar } from "~/components/EventCalendar";
import { can } from "~/prisma/auth";
import { getEvents } from "~/prisma/events";

// Events Page
export default async function Page() {
    const me = await currentUser();
    const { data: events } = await getEvents().then((res) => res);

    return (
        <div className="flex flex-1">
            <EventCalendar
                canCreateEvents={me ? await can(me.id, "events:create_new") : false}
                events={events}
            />
        </div>
    );
}
