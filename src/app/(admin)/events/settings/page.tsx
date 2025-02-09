import ActivityTitle from "~/components/ActivityTitle";
import PositionsSettings from "~/components/PositionsSettings";
import { getAllPositions } from "~/prisma/events";

export default async function Page() {
    const positions = await getAllPositions().then((res) =>
        res.data?.sort((a, b) => {
            const aKey = a.label ?? a.name;
            const bKey = b.label ?? b.name;
            return aKey.localeCompare(bKey);
        })
    );

    return (
        <div className="page-wrapper self-center">
            <ActivityTitle>Events Settings</ActivityTitle>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Scheduling</span>
                    <div className="px-4">[Scheduling settings go here]</div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Positions</span>
                    <PositionsSettings positions={positions || []} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Templates</span>
                    <div className="px-4">[Templates settings go here]</div>
                </div>
            </div>
        </div>
    );
}
