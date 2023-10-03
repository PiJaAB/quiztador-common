"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameChatMetaDataSchema = exports.GameChatSchema = exports.GameChatMessageSchema = void 0;
const zod_1 = require("zod");
const ReplySchema = zod_1.z.object({
    title: zod_1.z.string(),
    value: zod_1.z.string(),
    messageId: zod_1.z.any().optional(),
});
const QuickRepliesSchema = zod_1.z.object({
    type: zod_1.z.union([zod_1.z.literal('radio'), zod_1.z.literal('checkbox')]),
    values: zod_1.z.array(ReplySchema),
    keepIt: zod_1.z.boolean().optional(),
});
const GameChatSenderSchema = zod_1.z.object({
    _id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    name: zod_1.z.string().optional(),
    avatar: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
});
exports.GameChatMessageSchema = zod_1.z.object({
    _id: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    text: zod_1.z.string(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.number()]),
    user: GameChatSenderSchema,
    image: zod_1.z.string().optional(),
    video: zod_1.z.string().optional(),
    audio: zod_1.z.string().optional(),
    system: zod_1.z.boolean().optional(),
    sent: zod_1.z.boolean().optional(),
    received: zod_1.z.boolean().optional(),
    pending: zod_1.z.boolean().optional(),
    quickReplies: QuickRepliesSchema.optional(),
});
exports.GameChatSchema = zod_1.z.object({
    createdAt: zod_1.z.string(),
    gameRef: zod_1.z.string(),
    text: exports.GameChatMessageSchema,
    sender: GameChatSenderSchema,
});
const GameChatUserMetaData = zod_1.z.record(zod_1.z.string(), zod_1.z.object({
    lastReadMessageId: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    lastReadMessageTimestamp: zod_1.z.string().optional(),
    unreadCount: zod_1.z.number(),
}));
const GameChatMeta = zod_1.z.record(zod_1.z.string(), zod_1.z.object({
    latestMessageId: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
    latestMessageTimestamp: zod_1.z.string().optional(),
}));
exports.GameChatMetaDataSchema = zod_1.z.union([
    GameChatUserMetaData,
    GameChatMeta,
]);
