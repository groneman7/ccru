declare global {
  // interface UserPublicMetadata {
  //       [k: string]: unknown;
  //   }
  
  interface UserPrivateMetadata {
    isConfigured: boolean;
    role: string;
    permissions: {
      events: {
        'create-new': boolean;
      }
    }
  }
}

export { type UserPublicMetadata, type UserPrivateMetadata }