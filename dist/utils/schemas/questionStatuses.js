"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const QuestionStatuses = zod_1.z.union([
    zod_1.z.literal('Published'),
    zod_1.z.literal('Draft'),
    zod_1.z.literal('Rejected'),
]);
exports.default = QuestionStatuses;
