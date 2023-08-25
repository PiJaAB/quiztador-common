import { z } from 'zod';
import GameInviteSchema from '../schemas/gameInviteSchema';

export type InviteeStatus = 'Pending' | 'Accepted' | 'Declined';

export type Invitee<Timestamp> = {
  userId: string;
  status: InviteeStatus;
  username?: string;
  answeredAt?: Timestamp;
};

export type GameInviteData<Timestamp> = z.infer<typeof GameInviteSchema> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  invitees: Invitee<Timestamp>[];
  startedGameId: string | null;
  rematchFromGameId: string | null;
  completed: boolean;
};
