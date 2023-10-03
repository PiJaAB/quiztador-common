import { z } from 'zod';
import SetRoundTacticParamsResponseSchema from '../../schemas/http-functions/setRoundTacticParamsResponseSchema';
export type SetRoundTacticResponse = z.infer<typeof SetRoundTacticParamsResponseSchema>;
