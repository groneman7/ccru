import { clerkClient } from "@clerk/nextjs/server";
import { prisma } from "~/lib/prisma";
import { internalServerError, ok } from "~/lib/queryResponses";

// Roles

export async function getAllRoles() {
    try {
        const roles = await prisma.userRole.findMany();

        return ok(roles);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

// Types

export async function getAllTypes() {
    try {
        const types = await prisma.userType.findMany();

        return ok(types);
    } catch (ex) {
        return internalServerError(ex as string);
    }
}

// Users

export async function getAllUsers() {
    const clerk = await clerkClient();
    const users = await clerk.users.getUserList({ limit: 500 });
    return users.data;
}

export async function getUserListForAssignments() {
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

export async function setUserRole(userId: string | string[], roleId: string) {
    try {
        const clerk = await clerkClient();
        if (typeof userId === "string") {
            const user = await clerk.users.getUser(userId);
            await clerk.users.updateUserMetadata(user.id, {
                privateMetadata: {
                    ...user.privateMetadata,
                    roleId,
                },
            });

            return ok(roleId);
        }

        const users = await clerk.users
            .getUserList({ userId: userId, limit: 500 })
            .then((res) => res.data);

        users.forEach(async (user) => {
            await clerk.users.updateUserMetadata(user.id, {
                privateMetadata: {
                    ...user.privateMetadata,
                    roleId,
                },
            });
        });
        return ok(roleId);
    } catch {
        return internalServerError("Error updating user type.");
    }
}

export async function setUserType(userId: string | string[], typeId: string) {
    try {
        const clerk = await clerkClient();
        if (typeof userId === "string") {
            const user = await clerk.users.getUser(userId);
            await clerk.users.updateUserMetadata(user.id, {
                privateMetadata: {
                    ...user.privateMetadata,
                    typeId,
                },
            });

            return ok(typeId);
        }

        const users = await clerk.users
            .getUserList({ userId: userId, limit: 500 })
            .then((res) => res.data);

        users.forEach(async (user) => {
            await clerk.users.updateUserMetadata(user.id, {
                privateMetadata: {
                    ...user.privateMetadata,
                    typeId,
                },
            });
        });
        return ok(typeId);
    } catch {
        return internalServerError("Error updating user type.");
    }
}
