"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const SetRoundTacticParamsSchema = zod_1.z.object({
    gameId: zod_1.z.string(),
    roundNumber: zod_1.z.number(),
    tacticsUsed: zod_1.z.array(zod_1.z.literal('compareStrenghts')).optional(),
});
exports.default = SetRoundTacticParamsSchema;
