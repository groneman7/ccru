declare global {
    // interface UserPublicMetadata {
    //       [k: string]: unknown;
    //   }

    type Permissions =
        | "events:create_new"
        | "events:modify_signup"
        | "events:assign_user"
        | "events:edit_calendar";

    type UserPermisions = {
        [k in Permissions]?: boolean;
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

export { type UserPublicMetadata, type UserPrivateMetadata };
