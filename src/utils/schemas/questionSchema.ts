import { z } from 'zod';
import QuestionStatuses from './questionStatuses';

const QuestionSchema = z.object({
  category: z.string(),
  question: z.string(),
  questionImage: z.string().nullish(),
  correctAnswer: z.string(),
  wrongAnswer1: z.string(),
  wrongAnswer2: z.string(),
  wrongAnswer3: z.string(),
  status: QuestionStatuses,
  author: z.string(),
  createdAt: z.union([z.string(), z.date()]).optional(),
  updatedAt: z.union([z.string(), z.date()]).optional(),
  votes: z.number().optional(),
  nid: z.string().optional(),
  lastTenAnswers: z
    .array(
      z.union([
        z.literal(-1),
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
      ]),
    )
    .default([])
    .optional(),
  answers: z
    .object({
      countCorrect: z.number().default(0),
      countWrong1: z.number().default(0),
      countWrong2: z.number().default(0),
      countWrong3: z.number().default(0),
    })
    .optional(),
  upvotes: z.number().default(0).nullish(),
  downvotes: z.number().default(0).nullish(),
});

export default QuestionSchema;
