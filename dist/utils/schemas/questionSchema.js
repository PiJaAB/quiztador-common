"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const questionStatuses_1 = __importDefault(require("./questionStatuses"));
const QuestionSchema = zod_1.z.object({
    category: zod_1.z.string(),
    question: zod_1.z.string(),
    questionImage: zod_1.z.string().nullish(),
    correctAnswer: zod_1.z.string(),
    wrongAnswer1: zod_1.z.string(),
    wrongAnswer2: zod_1.z.string(),
    wrongAnswer3: zod_1.z.string(),
    status: questionStatuses_1.default,
    author: zod_1.z.string(),
    createdAt: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]).optional(),
    votes: zod_1.z.number().optional(),
    nid: zod_1.z.string().optional(),
    lastTenAnswers: zod_1.z
        .array(zod_1.z.union([
        zod_1.z.literal(-1),
        zod_1.z.literal(0),
        zod_1.z.literal(1),
        zod_1.z.literal(2),
        zod_1.z.literal(3),
    ]))
        .default([])
        .optional(),
    answers: zod_1.z
        .object({
        countCorrect: zod_1.z.number().default(0),
        countWrong1: zod_1.z.number().default(0),
        countWrong2: zod_1.z.number().default(0),
        countWrong3: zod_1.z.number().default(0),
    })
        .optional(),
    upvotes: zod_1.z.number().default(0).nullish(),
    downvotes: zod_1.z.number().default(0).nullish(),
});
exports.default = QuestionSchema;
