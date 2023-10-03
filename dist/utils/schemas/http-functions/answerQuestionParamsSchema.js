"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AnswerQuestionParamsSchema = zod_1.z.object({
    gameId: zod_1.z.string(),
    questionId: zod_1.z.string(),
    roundNumber: zod_1.z.number(),
    timeMs: zod_1.z.number(),
    answer: zod_1.z.union([
        zod_1.z.literal(-1),
        zod_1.z.literal(0),
        zod_1.z.literal(1),
        zod_1.z.literal(2),
        zod_1.z.literal(3),
    ]),
    tacticsUsed: zod_1.z
        .array(zod_1.z.union([
        zod_1.z.literal('50-50'),
        zod_1.z.literal('addTime'),
        zod_1.z.literal('copyAnswer'),
        zod_1.z.literal('seeStats'),
        zod_1.z.literal('none'),
    ]))
        .optional(),
});
exports.default = AnswerQuestionParamsSchema;
