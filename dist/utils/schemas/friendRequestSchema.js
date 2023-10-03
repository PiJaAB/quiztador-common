"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const FriendRequestSchema = zod_1.z.object({
    status: zod_1.z.union([
        zod_1.z.literal('Rejected'),
        zod_1.z.literal('Approved'),
        zod_1.z.literal('Pending'),
    ]),
    initiator: zod_1.z.string(),
    friendRequestFor: zod_1.z.string(),
});
exports.default = FriendRequestSchema;
