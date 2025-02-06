import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { has } from "~/prisma/auth";
import type { Event, Prisma } from "~/prisma/client";
import { createEvent, getAllPositions } from "~/prisma/events";
import NewEventForm from "~/components/NewEventForm";
import ActivityTitle from "~/components/ActivityTitle";
import FullPageMessage from "~/components/FullPageMessage";

export default async function Page() {
    const user = await currentUser();
    if (!user)
        return (
            <FullPageMessage className="items-center gap-8 pt-24">
                <span className="text-6xl font-bold">Oops!</span>
                <span className="text-center text-xl/8">
                    It looks like you aren't signed in. Please sign in or contact a{" "}
                    <span className="font-semibold">Student Scheduler</span> for new events.
                </span>
            </FullPageMessage>
        );
    if ((await has(user.id, "events:create_new")) === false) {
        return (
            <FullPageMessage className="items-center gap-8 pt-24">
                <span className="text-6xl font-bold">Oops!</span>
                <span className="text-center text-xl/8">
                    It looks like you don't have access to create new events. Please sign in or
                    contact a <span className="font-semibold">Student Scheduler</span> for new
                    events.
                </span>
            </FullPageMessage>
        );
    }

    async function createEventAction(
        payload: Omit<Prisma.EventCreateInput, "created_by">,
        positions: string[]
    ) {
        "use server";

        const {
            data: event,
            status,
            message,
        } = await createEvent(payload, positions).then((res) => res);
        if (status === 201) {
            // toast.success("Event created!");
            redirect(`/events/${event.id}`);
        }
    }

    const { data: positionList } = await getAllPositions().then((res) => res);

    return (
        <div className="page-wrapper">
            <ActivityTitle>Create New Event</ActivityTitle>
            <NewEventForm
                currentUserId={user.id}
                positionList={positionList || []}
                onSubmitAction={createEventAction}
            />
        </div>
    );
}
