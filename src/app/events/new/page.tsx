import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { has } from "~/prisma/auth";
import type { Event, Prisma } from "~/prisma/client";
import { createEvent, getAllPositions } from "~/prisma/events";
import NewEventForm from "~/components/NewEventForm";

export default async function Page() {
    const user = await currentUser();
    if (!user || (await has(user.id, "events:create_new")) === false) {
        return <div>You don't have access to create new events.</div>;
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

    const { data: positionList } = await getAllPositions().then((res) => res);

    return (
        <div className="flex flex-col gap-6 p-4">
            <span className="text-2xl font-semibold">Create a new event</span>
            <NewEventForm
                currentUserId={user.id}
                positionList={positionList || []}
                onSubmitAction={createEventAction}
            />
        </div>
    );
}
