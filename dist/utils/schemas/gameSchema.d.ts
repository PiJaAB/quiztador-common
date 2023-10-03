import { z } from 'zod';
export declare const QuestionRoundSchema: z.ZodObject<{
    selectingParticipantIndex: z.ZodOptional<z.ZodNumber>;
    selectingUid: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodString;
        weight: z.ZodNumber;
        published: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        published: boolean;
        weight: number;
        id?: string | undefined;
    }, {
        name: string;
        description: string;
        published: boolean;
        weight: number;
        id?: string | undefined;
    }>>;
    categoryOptions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    questions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    completed: z.ZodBoolean;
    type: z.ZodUnion<[z.ZodLiteral<"BuildUp">, z.ZodLiteral<"KnockOut">]>;
}, "strip", z.ZodTypeAny, {
    type: "BuildUp" | "KnockOut";
    completed: boolean;
    selectingParticipantIndex?: number | undefined;
    selectingUid?: string | undefined;
    category?: {
        name: string;
        description: string;
        published: boolean;
        weight: number;
        id?: string | undefined;
    } | undefined;
    categoryOptions?: string[] | undefined;
    questions?: string[] | undefined;
}, {
    type: "BuildUp" | "KnockOut";
    completed: boolean;
    selectingParticipantIndex?: number | undefined;
    selectingUid?: string | undefined;
    category?: {
        name: string;
        description: string;
        published: boolean;
        weight: number;
        id?: string | undefined;
    } | undefined;
    categoryOptions?: string[] | undefined;
    questions?: string[] | undefined;
}>;
export declare const GameSchema: z.ZodObject<{
    participants: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    timeOnUserWhosTurnExpiresNext: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodUnion<[z.ZodLiteral<"FromInvite">, z.ZodLiteral<"2P-Queue">, z.ZodLiteral<"4P-Queue">]>;
    rules: z.ZodObject<{
        buildUpRounds: z.ZodNumber;
        allowedTimeMinutes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        buildUpRounds: number;
        allowedTimeMinutes: number;
    }, {
        buildUpRounds: number;
        allowedTimeMinutes: number;
    }>;
    rounds: z.ZodRecord<z.ZodLiteral<"roundNumber">, z.ZodObject<{
        selectingParticipantIndex: z.ZodOptional<z.ZodNumber>;
        selectingUid: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodString;
            weight: z.ZodNumber;
            published: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        }, {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        }>>;
        categoryOptions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        questions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        completed: z.ZodBoolean;
        type: z.ZodUnion<[z.ZodLiteral<"BuildUp">, z.ZodLiteral<"KnockOut">]>;
    }, "strip", z.ZodTypeAny, {
        type: "BuildUp" | "KnockOut";
        completed: boolean;
        selectingParticipantIndex?: number | undefined;
        selectingUid?: string | undefined;
        category?: {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        } | undefined;
        categoryOptions?: string[] | undefined;
        questions?: string[] | undefined;
    }, {
        type: "BuildUp" | "KnockOut";
        completed: boolean;
        selectingParticipantIndex?: number | undefined;
        selectingUid?: string | undefined;
        category?: {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        } | undefined;
        categoryOptions?: string[] | undefined;
        questions?: string[] | undefined;
    }>>;
    currentRoundNumber: z.ZodNumber;
    answers: z.ZodRecord<z.ZodLiteral<"playerId">, z.ZodRecord<z.ZodLiteral<"roundNumber">, z.ZodRecord<z.ZodLiteral<"questionId">, z.ZodObject<{
        timeMs: z.ZodNumber;
        answer: z.ZodNumber;
        tacticsUsed: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"50-50">, z.ZodLiteral<"addTime">, z.ZodLiteral<"copyAnswer">, z.ZodLiteral<"seeStats">, z.ZodLiteral<"none">]>>;
    }, "strip", z.ZodTypeAny, {
        timeMs: number;
        answer: number;
        tacticsUsed?: "none" | "50-50" | "addTime" | "copyAnswer" | "seeStats" | undefined;
    }, {
        timeMs: number;
        answer: number;
        tacticsUsed?: "none" | "50-50" | "addTime" | "copyAnswer" | "seeStats" | undefined;
    }>>>>;
    completed: z.ZodDefault<z.ZodBoolean>;
    winner: z.ZodNullable<z.ZodString>;
    participatingUids: z.ZodArray<z.ZodString, "many">;
    firstRoundHasCategory: z.ZodDefault<z.ZodBoolean>;
    slotsAvailable: z.ZodBoolean;
    createdAt: z.ZodString;
    averageEloRating: z.ZodDefault<z.ZodNumber>;
    totalEloRating: z.ZodDefault<z.ZodNumber>;
    userStatsDistributed: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "FromInvite" | "2P-Queue" | "4P-Queue";
    createdAt: string;
    updatedAt: string;
    answers: Partial<Record<"playerId", Partial<Record<"roundNumber", Partial<Record<"questionId", {
        timeMs: number;
        answer: number;
        tacticsUsed?: "none" | "50-50" | "addTime" | "copyAnswer" | "seeStats" | undefined;
    }>>>>>>;
    completed: boolean;
    participants: {
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
    }[];
    rules: {
        buildUpRounds: number;
        allowedTimeMinutes: number;
    };
    rounds: Partial<Record<"roundNumber", {
        type: "BuildUp" | "KnockOut";
        completed: boolean;
        selectingParticipantIndex?: number | undefined;
        selectingUid?: string | undefined;
        category?: {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        } | undefined;
        categoryOptions?: string[] | undefined;
        questions?: string[] | undefined;
    }>>;
    currentRoundNumber: number;
    winner: string | null;
    participatingUids: string[];
    firstRoundHasCategory: boolean;
    slotsAvailable: boolean;
    averageEloRating: number;
    totalEloRating: number;
    userStatsDistributed: boolean | null;
    timeOnUserWhosTurnExpiresNext?: string | null | undefined;
}, {
    type: "FromInvite" | "2P-Queue" | "4P-Queue";
    createdAt: string;
    updatedAt: string;
    answers: Partial<Record<"playerId", Partial<Record<"roundNumber", Partial<Record<"questionId", {
        timeMs: number;
        answer: number;
        tacticsUsed?: "none" | "50-50" | "addTime" | "copyAnswer" | "seeStats" | undefined;
    }>>>>>>;
    participants: {
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
    }[];
    rules: {
        buildUpRounds: number;
        allowedTimeMinutes: number;
    };
    rounds: Partial<Record<"roundNumber", {
        type: "BuildUp" | "KnockOut";
        completed: boolean;
        selectingParticipantIndex?: number | undefined;
        selectingUid?: string | undefined;
        category?: {
            name: string;
            description: string;
            published: boolean;
            weight: number;
            id?: string | undefined;
        } | undefined;
        categoryOptions?: string[] | undefined;
        questions?: string[] | undefined;
    }>>;
    currentRoundNumber: number;
    winner: string | null;
    participatingUids: string[];
    slotsAvailable: boolean;
    timeOnUserWhosTurnExpiresNext?: string | null | undefined;
    completed?: boolean | undefined;
    firstRoundHasCategory?: boolean | undefined;
    averageEloRating?: number | undefined;
    totalEloRating?: number | undefined;
    userStatsDistributed?: boolean | null | undefined;
}>;
