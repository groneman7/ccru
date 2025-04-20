import { currentUser } from "@clerk/nextjs/server";
import ActivityTitle from "~/components/activity-title";
import FullPageMessage from "~/components/full-page-message";
import PositionsSettings from "~/components/positions-settings";
import TemplateSettings from "~/components/template-settings";
import { isAdmin } from "~/prisma/auth";
import { createEventTemplate, getAllPositions } from "~/data/events";

export default async function AdminEventsPage() {
    const me = await currentUser();
    if (!me)
        return (
            <FullPageMessage className="items-center gap-8 pt-24">
                <span className="text-6xl font-bold">Oops!</span>
                <span className="text-center text-xl/8">
                    It looks like you aren't signed in. Please sign in to access administrator
                    activities.
                </span>
            </FullPageMessage>
        );

    if (!(await isAdmin(me.id))) {
        return (
            <FullPageMessage className="items-center gap-8 pt-24">
                <span className="text-6xl font-bold">Oops!</span>
                <span className="text-center text-xl/8">
                    It looks like you don't have access to administrator activities.
                </span>
            </FullPageMessage>
        );
    }

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
                    <div className="px-4">
                        <TemplateSettings
                            positionList={positions || []}
                            // onSubmitAction={createEventTemplate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
