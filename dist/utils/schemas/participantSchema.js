"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantSchema = exports.ParticipantStatusSchema = exports.QuestionToAnswerSchema = void 0;
const zod_1 = require("zod");
const userSchema_1 = require("./userSchema");
exports.QuestionToAnswerSchema = zod_1.z.object({
    availableTimeMs: zod_1.z.number().optional(),
    questionId: zod_1.z.string(),
    roundNumber: zod_1.z.number(),
});
exports.ParticipantStatusSchema = zod_1.z.union([
    zod_1.z.literal('Pending'),
    zod_1.z.literal('Waiting'),
    zod_1.z.literal('Playing'),
    zod_1.z.literal('Eliminated'),
    zod_1.z.literal('Winner'),
]);
exports.ParticipantSchema = zod_1.z.object({
    user: userSchema_1.PublicUserSchema.extend({ uid: zod_1.z.string() }).optional(),
    timeMs: zod_1.z.number().default(0),
    displayedTimeMs: zod_1.z.number(),
    status: exports.ParticipantStatusSchema,
    displayedStatus: exports.ParticipantStatusSchema,
    questionToAnswer: exports.QuestionToAnswerSchema.optional(),
    eloRatingChange: zod_1.z.number().optional(),
    goldChange: zod_1.z.number().optional(),
    turnExpiresAt: zod_1.z.string().optional(),
});
