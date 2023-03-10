import { z } from 'zod';
import { PublicUserSchema } from './userSchema';

export const QuestionToAnswerSchema = z.object({
  availableTimeMs: z.number().optional(),
  questionId: z.string(),
  roundNumber: z.number(),
});

export const ParticipantStatusSchema = z.union([
  z.literal('Pending'),
  z.literal('Waiting'),
  z.literal('Playing'),
  z.literal('Eliminated'),
  z.literal('Winner'),
]);

export const ParticipantSchema = z.object({
  user: PublicUserSchema.extend({ uid: z.string() }).optional(),
  timeMs: z.number(),
  displayedTimeMs: z.number(),
  status: ParticipantStatusSchema,
  displayedStatus: ParticipantStatusSchema,
  questionToAnswer: QuestionToAnswerSchema.optional(),
  eloRatingChange: z.number().optional(),
  goldChange: z.number().optional(),
  turnExpiresAt: z.string().optional(),
});
