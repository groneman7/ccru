import { clerkClient } from "@clerk/nextjs/server";
import { getPositionById } from "~/prisma/events";

// export async function getMe(userId: string) {
//     const clerk = await clerkClient();
//     const me = await clerk.users.getUser(userId);
// }

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
    const { data: position } = await getPositionById(positionId);

    return position?.allowedUserTypes?.includes(user.privateMetadata.typeId) || false;
}
