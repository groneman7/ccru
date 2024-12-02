declare global {
    // interface UserPublicMetadata {
    //       [k: string]: unknown;
    //   }

    type TestPermissions =
        | "events:create_new"
        | "events:modify_signup"
        | "events:edit_calendar";

    type UserPermisions = {
        [k in TestPermissions]?: boolean;
    };

    interface UserPrivateMetadata {
        isConfigured: boolean;
        roleId: string;
        typeId: string;
        officerTypeId?: string;
        permissions?: UserPermisions;
    }
}

export { type UserPublicMetadata, type UserPrivateMetadata };
