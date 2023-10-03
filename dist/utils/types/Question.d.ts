import { z } from 'zod';
import QuestionSchema from '../schemas/questionSchema';
export type Question = z.infer<typeof QuestionSchema>;
