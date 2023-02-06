import { z } from 'zod';

const GameInviteSchema = z.object({
  sender: z.object({
    userId: z.string(),
    username: z.string().optional(),
  }),
  // invitees: z.array(
  //   z.object({
  //     userId: z.string(),
  //     status: z.union([
  //       z.literal('Pending'),
  //       z.literal('Accepted'),
  //       z.literal('Declined'),
  //     ]),
  //     username: z.string().optional(),
  //     answeredAt: z.date().optional(),
  //   }),
  // ),
  activeUids: z.array(z.string()),
  senderId: z.string(),
  startedGameId: z.string().nullish(),
});

export default GameInviteSchema;
