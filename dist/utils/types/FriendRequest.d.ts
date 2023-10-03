import { z } from 'zod';
import FriendRequestSchema from '../schemas/friendRequestSchema';
export type FriendRequest = z.infer<typeof FriendRequestSchema>;
