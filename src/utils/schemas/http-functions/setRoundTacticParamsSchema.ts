import { z } from 'zod';

const SetRoundTacticParamsSchema = z.object({
  gameId: z.string(),
  roundNumber: z.number(),
  tacticsUsed: z.array(z.literal('compareStrenghts')).optional(),
});

export default SetRoundTacticParamsSchema;
