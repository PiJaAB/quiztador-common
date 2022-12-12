export interface PublicUser {
  username?: string;
  role?: string;
  eloRating?: number | null;
  private?: never;
}

export interface PrivateUser extends Omit<PublicUser, 'private'> {
  private: {
    email?: string;
    emailVerified: boolean;
    phoneNumber?: string;
    accessFlags?: Partial<Record<string, boolean>> | null;
    gold?: number | null;
    tempPassword?: boolean;
    disabled: boolean;
    deviceTokens?: string[];
    subscribedTopics?: string[];
    notificationKey?: string | null;
  };
}
