import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { has } from "~/prisma/auth";
import type { Event } from "~/prisma/client";
import { createEvent, getAllPositions } from "~/prisma/events";
import NewEventForm from "~/components/NewEventForm";
import { success } from "~/lib/defaultQueryResponses";

export default async function Page() {
    const user = await currentUser();
    if (!user || (await has(user.id, "events:create_new")) === false) {
        return <div>You don't have access to create new events.</div>;
    }

    async function createEventAction(payload: Omit<Event, "id" | "created_at" | "created_by">) {
        "use server";
        console.log("Form data from EventPage server component =>", payload);
        const response = await createEvent(payload);
        if (response) {
            if (response.status === 201) {
                redirect(`/events/${response.data!.id}`);
            }
        }
    }

    const response = await getAllPositions();
    return (
        <div className="flex flex-col gap-6 p-4">
            <span className="text-2xl font-semibold">Create a new event</span>
            <NewEventForm
                currentUserId={user.id}
                positionList={success(response) ? response.data : []}
                onSubmitAction={createEventAction}
            />
        </div>
    );
}
