import { clerkClient } from "@clerk/nextjs/server";
import { getEventById, getPositionById } from "~/prisma/events";
import { EventPosition } from "~/prisma/client";

export async function can(userId: string, permission: Permission) {
    const clerk = await clerkClient();
    return (await clerk.users.getUser(userId)).privateMetadata.permissions?.[permission];
}

export async function canCreateEvents(userId: string): Promise<boolean> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);

    if (!user) return false;
    return user.privateMetadata.permissions?.["events:create_new"] || false;
}

export async function canModifySignups(userId: string): Promise<boolean> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);

    if (!user) return false;
    return user.privateMetadata.permissions?.["events:modify_signup"] || false;
}

// Is this the best place for this function?
export async function canSignUp(
    eventId: string,
    positionId: string,
    userId: string
): Promise<{ value: boolean; message?: string }> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    const position = (await getPositionById(positionId).then(
        (res) => res.data
    )) as EventPosition;

    if (!position) return { value: false, message: "Position not found." }; // This really shouldn't happen. Maybe we can log it somewhere to see if it does.
    if (!position["allowed_user_types"]?.includes(user.privateMetadata.typeId))
        return { value: false, message: "User type not allowed." };

    const event = await getEventById(eventId).then((res) => res.data);
    if (!event) return { value: false, message: "Event not found." }; // This really shouldn't happen. Maybe we can log it somewhere to see if it does.
    if (event.shifts.find((shift) => shift.user === userId))
        return { value: false, message: "User already signed up." };

    return { value: true };
}
