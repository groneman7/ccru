import { prisma } from "~/lib/prisma";
import type { Event, EventPosition } from "~/prisma/client";
import { defaultQueryResponses, type QueryResponse } from "~/lib/defaultQueryResponses";
import { clerkClient } from "@clerk/nextjs/server";

export type UserList = {
    id: string;
    firstName: string;
    lastName: string;
    suffix?: string;
    username: string;
}[];

export async function getUserListForAssignments(): Promise<UserList> {
    const clerk = await clerkClient();
    const users = await clerk.users.getUserList({ limit: 500 });
    return users.data.map((user) => ({
        id: user.id,
        firstName: user.firstName!,
        lastName: user.lastName!,
        suffix: user.privateMetadata.suffix,
        username: user.username!,
    }));
}

export async function getUserNameAndSuffix(userId: string): Promise<string> {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    if (!user) {
        return "";
    }
    const suffix = user.privateMetadata.suffix;
    return `${user.firstName} ${user.lastName}${suffix ? `, ${suffix}` : ""}`;
}
