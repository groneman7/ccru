import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { can } from "~/prisma/auth";
import type { Event, Prisma } from "~/prisma/client";
import { createEvent, getAllPositions } from "~/data/events";
import NewEventForm from "~/components/new-event-form";
import ActivityTitle from "~/components/activity-title";
import FullPageMessage from "~/components/full-page-message";

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
    if ((await can(user.id, "events:create")) === false) {
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
            redirect(`/events/${event.id}`);
        }
    }

    const positionList = await getAllPositions().then((res) =>
        res.data?.sort((a, b) => {
            const aKey = a.label ?? a.name;
            const bKey = b.label ?? b.name;
            return aKey.localeCompare(bKey);
        })
    );

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
