import { z } from 'zod';

const GameInviteSchema = z.object({
  sender: z.object({
    userId: z.string(),
  }),
  invitees: z.object({
    userId: z.string(),
    status: z.union([
      z.literal('Pending'),
      z.literal('Accepted'),
      z.literal('Declined'),
    ]),
    answeredAt: z.date(),
  }),
  senderId: z.string(),
  startedGameId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default GameInviteSchema;
