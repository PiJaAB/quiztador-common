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
  votes: z.number().optional(),
  nid: z.string().optional(),
  lastTenAnswers: z.array(z.number()).default([]),
  answers: z.object({
    countCorrect: z.number().default(0),
    countWrong1: z.number().default(0),
    countWrong2: z.number().default(0),
    countWrong3: z.number().default(0),
  }),
});

export default QuestionSchema;
