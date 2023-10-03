import { z } from 'zod';
import AnswerQuestionParamsSchema from '../../schemas/http-functions/answerQuestionParamsSchema';
export type AnswerQuestionParams = z.infer<typeof AnswerQuestionParamsSchema>;
