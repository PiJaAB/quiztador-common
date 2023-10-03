import { z } from 'zod';
declare const AnswerQuestionParamsSchema: z.ZodObject<{
    gameId: z.ZodString;
    questionId: z.ZodString;
    roundNumber: z.ZodNumber;
    timeMs: z.ZodNumber;
    answer: z.ZodUnion<[z.ZodLiteral<-1>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>;
    tacticsUsed: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodLiteral<"50-50">, z.ZodLiteral<"addTime">, z.ZodLiteral<"copyAnswer">, z.ZodLiteral<"seeStats">, z.ZodLiteral<"none">]>, "many">>;
}, "strip", z.ZodTypeAny, {
    gameId: string;
    questionId: string;
    roundNumber: number;
    timeMs: number;
    answer: 0 | 2 | 1 | -1 | 3;
    tacticsUsed?: ("none" | "50-50" | "addTime" | "copyAnswer" | "seeStats")[] | undefined;
}, {
    gameId: string;
    questionId: string;
    roundNumber: number;
    timeMs: number;
    answer: 0 | 2 | 1 | -1 | 3;
    tacticsUsed?: ("none" | "50-50" | "addTime" | "copyAnswer" | "seeStats")[] | undefined;
}>;
export default AnswerQuestionParamsSchema;
