import { z } from 'zod';
import SetRoundTacticParamsSchema from '../../schemas/http-functions/setRoundTacticParamsSchema';
export type SetRoundTacticParams = z.infer<typeof SetRoundTacticParamsSchema>;
