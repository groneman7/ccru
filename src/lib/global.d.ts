import { UserRole } from "~/prisma/client";

declare global {
    // interface UserPublicMetadata {
    //       [k: string]: unknown;
    //   }

    interface UserToRender {
        id: string;
        firstName: string;
        lastName: string;
        username: string;
        email?: string;
        imageUrl?: string;
        phoneNumber?: string;
        role?: UserRole;
        type?: UserType;
        officerTypeId?: string;
    }

    export type Permission =
        | "events:create_new"
        | "events:modify_signup"
        | "events:assign_user"
        | "events:edit_calendar";

    type UserPermisions = {
        [k in Permission]?: boolean;
    };

    interface UserPrivateMetadata {
        isConfigured: boolean;
        suffix?: string;
        roleId: string;
        typeId: string;
        officerTypeId?: string;
        permissions?: UserPermisions;
    }
}

export { type UserPublicMetadata, type UserPrivateMetadata, type UserToRender };
