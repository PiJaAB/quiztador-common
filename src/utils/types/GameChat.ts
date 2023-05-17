import { z } from 'zod';
import type {
  GameChatMessageSchema,
  GameChatSchema,
  GameChatMetaDataSchema,
} from '../schemas/gameChatSchema';

export type GameChatMessage = z.infer<typeof GameChatMessageSchema>;
export type GameChat = z.infer<typeof GameChatSchema>;
export type GameChatMetaData = z.infer<typeof GameChatMetaDataSchema>;
