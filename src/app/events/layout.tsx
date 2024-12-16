import { type Metadata } from "next";
import { EventCalendar } from "~/components/EventCalendar";
import { getEvents } from "~/prisma/events";

export const metadata: Metadata = {
    title: "CCRU | Events",
    description: "Our event calendar.",
};

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
            <div className="w-[24rem]">{children}</div>
        </div>
    );
}
