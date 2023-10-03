import { z } from 'zod';
declare const SetRoundTacticParamsSchema: z.ZodObject<{
    gameId: z.ZodString;
    roundNumber: z.ZodNumber;
    tacticsUsed: z.ZodOptional<z.ZodArray<z.ZodLiteral<"compareStrenghts">, "many">>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    roundNumber: number;
    tacticsUsed?: "compareStrenghts"[] | undefined;
}, {
    gameId: string;
    roundNumber: number;
    tacticsUsed?: "compareStrenghts"[] | undefined;
}>;
export default SetRoundTacticParamsSchema;
