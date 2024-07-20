declare global {
  // interface UserPublicMetadata {
  //       [k: string]: unknown;
  //   }
  
  interface UserPrivateMetadata {
    isConfigured: boolean;
    role: number;
    type: number;
    officer?: number;
    permissions?: {
      events?: {
        'create-new'?: boolean;
      }
    }
  }
}

export { type UserPublicMetadata, type UserPrivateMetadata }