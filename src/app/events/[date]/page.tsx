import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { getEvents } from "~/prisma/events";
import EventDetail from "../_components/EventDetail";

import dayjs, { type Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default async function DatePage({ params }: { params: { date: string } }) {
    const { date } = params;
    const user = await currentUser();
    const { data: events } = await getEvents(dayjs(date));
    console.log("CALLING getEvents FROM DATE PAGE");
    console.log("date:", dayjs(date));
    console.log("date UTC", dayjs(date).utc());
    console.log("date EST", dayjs(date).tz("America/New_York"));

    return (
        <div className="p-4">
            <div className="flex flex-col justify-between gap-2">
                <h3 className="text-2xl font-bold">{dayjs(date).format("dddd, MMMM D")}</h3>
                <SignedIn>
                    {user && user.privateMetadata?.permissions?.["events:create_new"] && (
                        <Button>Create New Event</Button>
                    )}
                </SignedIn>
            </div>
            <div>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <EventDetail
                            key={event.id}
                            event={event}
                        />
                    ))
                ) : (
                    <div>Empty</div>
                )}
            </div>
        </div>
    );
}
