import { prisma } from "~/lib/prisma";
import type { Event, EventPosition } from "~/prisma/client";
import { defaultQueryResponses, type QueryResponse } from "~/lib/defaultQueryResponses";
import { clerkClient } from "@clerk/nextjs/server";

export async function getUserListForAssignments(): Promise<
    { firstName: string; lastName: string; suffix?: string; username: string }[]
> {
    const clerk = await clerkClient();
    const users = await clerk.users.getUserList();
    return users.data.map((user) => ({
        firstName: user.firstName!,
        lastName: user.lastName!,
        suffix: user.privateMetadata.suffix,
        username: user.username!,
    }));
}
