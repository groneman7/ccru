import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button, Empty } from "antd";
import dayjs from "dayjs";
import { getEvents } from "~/server/queries";
import EventDetail from "../_components/EventDetail";

export default async function DatePage({ params }: { params: { date: string } }) {
    const { date } = params;
    const user = await currentUser();
    const { data: events } = await getEvents(dayjs(date));
    console.log("events", events);

    return (
        <div className="p-4">
            <div className="flex flex-col justify-between gap-2">
                <h3 className="text-2xl font-bold">{dayjs(date).format("dddd, MMMM D")}</h3>
                <SignedIn>
                    {user?.privateMetadata?.permissions?.["events:create_new"] && (
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
                    <Empty />
                )}
            </div>
        </div>
    );
}
