import { z } from 'zod';

const GameInviteSchema = z.object({
  receivers: z.object({
    userId: z.string(),
    status: z.union([
      z.literal('pending'),
      z.literal('accepted'),
      z.literal('declined'),
    ]),
  }),
  senderId: z.string(),
  startGame: z.boolean(),
});

export default GameInviteSchema;

