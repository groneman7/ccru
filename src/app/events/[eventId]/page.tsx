import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getEventById } from "~/prisma/events";
import EventDetail from "../_components/EventDetail";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// Event Page
export default async function Page({ params }: { params: { eventId: string } }) {
    const { eventId } = await params;
    const user = await currentUser();
    const { data: event } = await getEventById(eventId);

    if (!event) {
        return <div>No event found..?</div>;
    }
    return (
        <div className="p-4">
            <div className="flex flex-col justify-between gap-2">
                <h3 className="text-2xl font-bold">{event.eventName}</h3>
            </div>
            <div>
                {event ? (
                    <EventDetail
                        key={event.id}
                        event={event}
                    />
                ) : (
                    <div>Empty</div>
                )}
            </div>
        </div>
    );
}
