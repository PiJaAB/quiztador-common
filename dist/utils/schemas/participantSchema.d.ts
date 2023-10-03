import { z } from 'zod';
export declare const QuestionToAnswerSchema: z.ZodObject<{
    availableTimeMs: z.ZodOptional<z.ZodNumber>;
    questionId: z.ZodString;
    roundNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    questionId: string;
    roundNumber: number;
    availableTimeMs?: number | undefined;
}, {
    questionId: string;
    roundNumber: number;
    availableTimeMs?: number | undefined;
}>;
export declare const ParticipantStatusSchema: z.ZodUnion<[z.ZodLiteral<"Pending">, z.ZodLiteral<"Waiting">, z.ZodLiteral<"Playing">, z.ZodLiteral<"Eliminated">, z.ZodLiteral<"Winner">]>;
export declare const ParticipantSchema: z.ZodObject<{
    user: z.ZodOptional<z.ZodObject<{
        username: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
        eloRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        avatar: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>;
        avatarStyle: z.ZodOptional<z.ZodEnum<["masculine", "feminine"]>>;
        friends: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            date: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            date: string;
        }, {
            date: string;
        }>>>;
        gamesWon: z.ZodOptional<z.ZodNumber>;
        gamesPlayed: z.ZodOptional<z.ZodNumber>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        username?: string | undefined;
        role?: string | undefined;
        eloRating?: number | null | undefined;
        avatar?: Record<string, string | null | undefined> | undefined;
        avatarStyle?: "masculine" | "feminine" | undefined;
        friends?: Record<string, {
            date: string;
        }> | undefined;
        gamesWon?: number | undefined;
        gamesPlayed?: number | undefined;
    }, {
        uid: string;
        username?: string | undefined;
        role?: string | undefined;
        eloRating?: number | null | undefined;
        avatar?: Record<string, string | null | undefined> | undefined;
        avatarStyle?: "masculine" | "feminine" | undefined;
        friends?: Record<string, {
            date: string;
        }> | undefined;
        gamesWon?: number | undefined;
        gamesPlayed?: number | undefined;
    }>>;
    timeMs: z.ZodDefault<z.ZodNumber>;
    displayedTimeMs: z.ZodNumber;
    status: z.ZodUnion<[z.ZodLiteral<"Pending">, z.ZodLiteral<"Waiting">, z.ZodLiteral<"Playing">, z.ZodLiteral<"Eliminated">, z.ZodLiteral<"Winner">]>;
    displayedStatus: z.ZodUnion<[z.ZodLiteral<"Pending">, z.ZodLiteral<"Waiting">, z.ZodLiteral<"Playing">, z.ZodLiteral<"Eliminated">, z.ZodLiteral<"Winner">]>;
    questionToAnswer: z.ZodOptional<z.ZodObject<{
        availableTimeMs: z.ZodOptional<z.ZodNumber>;
        questionId: z.ZodString;
        roundNumber: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        questionId: string;
        roundNumber: number;
        availableTimeMs?: number | undefined;
    }, {
        questionId: string;
        roundNumber: number;
        availableTimeMs?: number | undefined;
    }>>;
    eloRatingChange: z.ZodOptional<z.ZodNumber>;
    goldChange: z.ZodOptional<z.ZodNumber>;
    turnExpiresAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "Pending" | "Waiting" | "Playing" | "Eliminated" | "Winner";
    timeMs: number;
    displayedTimeMs: number;
    displayedStatus: "Pending" | "Waiting" | "Playing" | "Eliminated" | "Winner";
    user?: {
        uid: string;
        username?: string | undefined;
        role?: string | undefined;
        eloRating?: number | null | undefined;
        avatar?: Record<string, string | null | undefined> | undefined;
        avatarStyle?: "masculine" | "feminine" | undefined;
        friends?: Record<string, {
            date: string;
        }> | undefined;
        gamesWon?: number | undefined;
        gamesPlayed?: number | undefined;
    } | undefined;
    questionToAnswer?: {
        questionId: string;
        roundNumber: number;
        availableTimeMs?: number | undefined;
    } | undefined;
    eloRatingChange?: number | undefined;
    goldChange?: number | undefined;
    turnExpiresAt?: string | undefined;
}, {
    status: "Pending" | "Waiting" | "Playing" | "Eliminated" | "Winner";
    displayedTimeMs: number;
    displayedStatus: "Pending" | "Waiting" | "Playing" | "Eliminated" | "Winner";
    user?: {
        uid: string;
        username?: string | undefined;
        role?: string | undefined;
        eloRating?: number | null | undefined;
        avatar?: Record<string, string | null | undefined> | undefined;
        avatarStyle?: "masculine" | "feminine" | undefined;
        friends?: Record<string, {
            date: string;
        }> | undefined;
        gamesWon?: number | undefined;
        gamesPlayed?: number | undefined;
    } | undefined;
    timeMs?: number | undefined;
    questionToAnswer?: {
        questionId: string;
        roundNumber: number;
        availableTimeMs?: number | undefined;
    } | undefined;
    eloRatingChange?: number | undefined;
    goldChange?: number | undefined;
    turnExpiresAt?: string | undefined;
}>;
