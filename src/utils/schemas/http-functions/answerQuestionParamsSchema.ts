import { z } from 'zod';

const AnswerQuestionParamsSchema = z.object({
  gameId: z.string(),
  questionId: z.string(),
  roundNumber: z.number(),
  timeMs: z.number(),
  answer: z.union([
    z.literal(-1),
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
  ]),
  tacticsUsed: z
    .array(
      z.union([
        z.literal('50-50'),
        z.literal('addTime'),
        z.literal('copyAnswer'),
        z.literal('seeStats'),
        z.literal('none'),
        z.literal(0),
      ]),
    )
    .optional(),
});

export default AnswerQuestionParamsSchema;
