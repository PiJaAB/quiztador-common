"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSchema = exports.QuestionRoundSchema = void 0;
const zod_1 = require("zod");
const categorySchema_1 = require("./categorySchema");
const participantSchema_1 = require("./participantSchema");
exports.QuestionRoundSchema = zod_1.z.object({
    selectingParticipantIndex: zod_1.z.number().optional(),
    selectingUid: zod_1.z.string().optional(),
    category: categorySchema_1.CategorySchema.optional(),
    categoryOptions: zod_1.z.array(zod_1.z.string()).optional(),
    questions: zod_1.z.array(zod_1.z.string()).optional(),
    completed: zod_1.z.boolean(),
    type: zod_1.z.union([zod_1.z.literal('BuildUp'), zod_1.z.literal('KnockOut')]),
});
exports.GameSchema = zod_1.z.object({
    participants: zod_1.z.array(participantSchema_1.ParticipantSchema),
    timeOnUserWhosTurnExpiresNext: zod_1.z.string().nullish(),
    type: zod_1.z.union([
        zod_1.z.literal('FromInvite'),
        zod_1.z.literal('2P-Queue'),
        zod_1.z.literal('4P-Queue'),
    ]),
    rules: zod_1.z.object({
        buildUpRounds: zod_1.z.number(),
        allowedTimeMinutes: zod_1.z.number(),
    }),
    rounds: zod_1.z.record(zod_1.z.literal('roundNumber'), exports.QuestionRoundSchema),
    currentRoundNumber: zod_1.z.number(),
    answers: zod_1.z.record(zod_1.z.literal('playerId'), zod_1.z.record(zod_1.z.literal('roundNumber'), zod_1.z.record(zod_1.z.literal('questionId'), zod_1.z.object({
        timeMs: zod_1.z.number(),
        answer: zod_1.z.number(),
        tacticsUsed: zod_1.z
            .union([
            zod_1.z.literal('50-50'),
            zod_1.z.literal('addTime'),
            zod_1.z.literal('copyAnswer'),
            zod_1.z.literal('seeStats'),
            zod_1.z.literal('none'),
        ])
            .optional(),
    })))),
    completed: zod_1.z.boolean().default(false),
    winner: zod_1.z.string().nullable(),
    participatingUids: zod_1.z.array(zod_1.z.string()),
    firstRoundHasCategory: zod_1.z.boolean().default(false),
    slotsAvailable: zod_1.z.boolean(),
    createdAt: zod_1.z.string(),
    averageEloRating: zod_1.z.number().default(0),
    totalEloRating: zod_1.z.number().default(0),
    userStatsDistributed: zod_1.z.boolean().nullish().default(false),
    updatedAt: zod_1.z.string(),
});
