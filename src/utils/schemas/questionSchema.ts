import { z } from 'zod';
import QuestionStatuses from './questionStatuses';

const QuestionSchema = z.object({
  category: z.string(),
  question: z.string(),
  questionImage: z.string().nullable(),
  correctAnswer: z.string(),
  wrongAnswer1: z.string(),
  wrongAnswer2: z.string(),
  wrongAnswer3: z.string(),
  status: QuestionStatuses,
  author: z.string(),
  nid: z.string().nullable(),
});

export default QuestionSchema;
