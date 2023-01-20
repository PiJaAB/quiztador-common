import { z } from 'zod';

const QuestionSchema = z.object({
  category: z.string(),
  question: z.string(),
  questionImage: z.string().nullable(),
  correctAnswer: z.string(),
  wrongAnswer1: z.string(),
  wrongAnswer2: z.string(),
  wrongAnswer3: z.string(),
  status: z.string(),
  author: z.string(),
  nid: z.string(),
});

export default QuestionSchema;
