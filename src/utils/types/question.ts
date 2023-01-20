import { z } from 'zod';
import QuestionSchema from '../schemas/questionSchema';

export type G_Question<PublicUserReference> = {
  id?: string;
  category: string;
  question: string;
  questionImage: string | null;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
  status: string;
  author: PublicUserReference;
  nid: string;
};

export type Question = z.infer<typeof QuestionSchema>;
