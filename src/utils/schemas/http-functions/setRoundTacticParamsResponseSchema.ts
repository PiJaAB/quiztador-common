import { z } from 'zod';

const SetRoundTacticParamsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export default SetRoundTacticParamsResponseSchema;
