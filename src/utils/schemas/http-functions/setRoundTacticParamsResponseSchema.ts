import { z } from 'zod';

const SetRoundTacticParamsSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export default SetRoundTacticParamsSchema;
