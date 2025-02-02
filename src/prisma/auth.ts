import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { getPositionById } from "~/prisma/events";
import { success } from "~/lib/defaultQueryResponses";

export async function has(userId: string, permission: Permission) {
    const clerk = await clerkClient();
    return (await clerk.users.getUser(userId)).privateMetadata.permissions?.[permission];
}

export async function canModifySignups(userId: string): Promise<boolean> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);

    if (!user) return false;
    return user.privateMetadata.permissions?.["events:modify_signup"] || false;
}

export async function canSignUp(userId: string, positionId: string): Promise<boolean> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    const response = await getPositionById(positionId);

    if (success(response)) {
        const position = response.data;
        return position?.["allowed_user_types"]?.includes(user.privateMetadata.typeId) || false;
    }

    return false;
}
