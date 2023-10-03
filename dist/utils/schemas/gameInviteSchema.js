"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const GameInviteSchema = zod_1.z.object({
    sender: zod_1.z.object({
        userId: zod_1.z.string(),
        username: zod_1.z.string().optional(),
    }),
    // invitees: z.array(
    //   z.object({
    //     userId: z.string(),
    //     status: z.union([
    //       z.literal('Pending'),
    //       z.literal('Accepted'),
    //       z.literal('Declined'),
    //     ]),
    //     username: z.string().optional(),
    //     answeredAt: z.date().optional(),
    //   }),
    // ),
    activeUids: zod_1.z.array(zod_1.z.string()),
    senderId: zod_1.z.string(),
    startedGameId: zod_1.z.string().nullish(),
});
exports.default = GameInviteSchema;
