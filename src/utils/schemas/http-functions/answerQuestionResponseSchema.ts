import { z } from 'zod';

const AnswerQuestionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export default AnswerQuestionResponseSchema;
