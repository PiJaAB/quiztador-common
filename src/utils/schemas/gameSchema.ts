import { z } from 'zod';
import { CategorySchema } from './categorySchema';
import { ParticipantSchema } from './participantSchema';

export const QuestionRoundSchema = z.object({
  selectingParticipantIndex: z.number().optional(),
  selectingUid: z.string().optional(),
  category: CategorySchema.optional(),
  categoryOptions: z.array(z.string()).optional(),
  questions: z.array(z.string()).optional(),
  completed: z.boolean(),
  type: z.union([z.literal('BuildUp'), z.literal('KnockOut')]),
});

export const GameSchema = z.object({
  participants: z.array(ParticipantSchema),
  participantWhosTurnExpiresNext: z.string().nullish(),
  type: z.union([
    z.literal('FromInvite'),
    z.literal('2P-Queue'),
    z.literal('4P-Queue'),
  ]),
  rules: z.object({
    buildUpRounds: z.number(),
    allowedTimeMinutes: z.number(),
  }),
  rounds: z.record(z.literal('roundNumber'), QuestionRoundSchema),
  currentRoundNumber: z.number(),
  answers: z.record(
    z.literal(
      'playerId',
      z.record(
        z.number(),
        z.record(
          z.literal('questionId'),
          z.object({ timeMs: z.number(), answer: z.number() }),
        ),
      ),
    ),
  ),
  completed: z.boolean(),
  winner: z.string().nullable(),
  participatingUids: z.array(z.string()),
  firstRoundHasCategory: z.boolean().default(false),
  slotsAvailable: z.boolean(),
  createdAt: z.string(),
  averageEloRating: z.number().default(0),
  totalEloRating: z.number().default(0),
});
