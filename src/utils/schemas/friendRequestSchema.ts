import { z } from 'zod';

const FriendRequestSchema = z.object({
  status: z.union([
    z.literal('Rejected'),
    z.literal('Approved'),
    z.literal('Pending'),
  ]),
  initiator: z.string(),
  friendRequestFor: z.string(),
});

export default FriendRequestSchema;
