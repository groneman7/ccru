import NewEventForm from "~/components/NewEventForm";
import { getAllPositions } from "~/prisma/events";

export default async function Page() {
    const { data: positions } = await getAllPositions();

    return (
        <div className="flex flex-col gap-6 p-4">
            <span className="text-2xl font-semibold">Create a new event</span>
            <NewEventForm positionList={positions || []} />
        </div>
    );
}
