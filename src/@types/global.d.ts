declare global {
  // interface UserPublicMetadata {
  //       [k: string]: unknown;
  //   }
  
  interface UserPrivateMetadata {
    isConfigured: boolean;
    roleId: string;
    typeId: string;
    officerTypeId?: string;
    permissions?: {
      events?: {
        'create-new'?: boolean;
      }
    }
  }
}

export { type UserPublicMetadata, type UserPrivateMetadata }