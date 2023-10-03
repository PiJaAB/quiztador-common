import { z } from 'zod';
import AnswerQuestionResponseSchema from '../../schemas/http-functions/answerQuestionResponseSchema';
export type AnswerQuestionResponse = z.infer<typeof AnswerQuestionResponseSchema>;
