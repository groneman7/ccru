import { type Metadata } from "next";
import { EventCalendar } from "~/components/EventCalendar";
import { getEvents } from "~/prisma/events";

export const metadata: Metadata = {
    title: "CCRU | Events",
    description: "Our event calendar.",
};

// Events Layout
export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { data: events } = await getEvents().then((res) => res);

    return (
        <div className="flex flex-1 justify-between gap-4">
            <div className="flex flex-1">
                <EventCalendar
                    canEdit
                    events={events}
                />
            </div>
            <div className="w-[32rem]">{children}</div>
        </div>
    );
}
