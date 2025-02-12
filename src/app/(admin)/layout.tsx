import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import FullPageMessage from "~/components/FullPageMessage";
import { isAdmin } from "~/prisma/auth";

export const metadata: Metadata = {
    title: "CCRU | Admin",
    description: "Welcome to CCRU.",
    icons: [{ rel: "icon", url: "/ccru.svg" }],
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
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

    return <div className="layout-wrapper">{children}</div>;
}
