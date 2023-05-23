import { z } from 'zod';

const ReplySchema = z.object({
  title: z.string(),
  value: z.string(),
  messageId: z.any().optional(),
});

const QuickRepliesSchema = z.object({
  type: z.union([z.literal('radio'), z.literal('checkbox')]),
  values: z.array(ReplySchema),
  keepIt: z.boolean().optional(),
});

const GameChatSenderSchema = z.object({
  _id: z.union([z.string(), z.number()]),
  name: z.string().optional(),
  avatar: z.union([z.string(), z.number()]).optional(),
});

export const GameChatMessageSchema = z.object({
  _id: z.union([z.string(), z.number()]),
  text: z.string(),
  createdAt: z.union([z.date(), z.number()]),
  user: GameChatSenderSchema,
  image: z.string().optional(),
  video: z.string().optional(),
  audio: z.string().optional(),
  system: z.boolean().optional(),
  sent: z.boolean().optional(),
  received: z.boolean().optional(),
  pending: z.boolean().optional(),
  quickReplies: QuickRepliesSchema.optional(),
});

export const GameChatSchema = z.object({
  createdAt: z.string(),
  gameRef: z.string(),
  text: GameChatMessageSchema,
  sender: GameChatSenderSchema,
});

const GameChatUserMetaData = z.record(
  z.string(),
  z.object({
    lastReadMessageId: z.union([z.string(), z.number()]).optional(),
    lastReadMessageTimestamp: z.string().optional(),
    unreadCount: z.number(),
  }),
);

const GameChatMeta = z.record(
  z.string(),
  z.object({
    latestMessageId: z.union([z.string(), z.number()]).optional(),
    latestMessageTimestamp: z.string().optional(),
  }),
);

export const GameChatMetaDataSchema = z.union([
  GameChatUserMetaData,
  GameChatMeta,
]);
