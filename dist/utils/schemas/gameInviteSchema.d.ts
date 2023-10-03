import { z } from 'zod';
declare const GameInviteSchema: z.ZodObject<{
    sender: z.ZodObject<{
        userId: z.ZodString;
        username: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        username?: string | undefined;
    }, {
        userId: string;
        username?: string | undefined;
    }>;
    activeUids: z.ZodArray<z.ZodString, "many">;
    senderId: z.ZodString;
    startedGameId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    sender: {
        userId: string;
        username?: string | undefined;
    };
    activeUids: string[];
    senderId: string;
    startedGameId?: string | null | undefined;
}, {
    sender: {
        userId: string;
        username?: string | undefined;
    };
    activeUids: string[];
    senderId: string;
    startedGameId?: string | null | undefined;
}>;
export default GameInviteSchema;
