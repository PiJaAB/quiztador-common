import { z } from 'zod';

export const PublicUserSchema = z.object({
  username: z.string().optional(),
  role: z.string().optional(),
  eloRating: z.number().nullish(),
  avatar: z.record(z.string(), z.string().nullish()).optional(),
  gender: z.union([z.literal('male'), z.literal('female')]).optional(), // non-binary ...
  friends: z.array(z.string()).optional(),
  gamesWon: z.number().optional(),
  gamesPlayed: z.number().optional(),
  private: z.never().optional(),
});

export const AccessFlags = z
  .record(z.string(), z.boolean().optional())
  .nullish();

export const PrivateUserMapSchema = z.object({
  email: z.string().optional(),
  emailVerified: z.boolean(),
  phoneNumber: z.string().optional(),
  accessFlags: AccessFlags,
  gold: z.number().nullish(),
  tempPassword: z.boolean().nullish(),
  deviceTokens: z.array(z.string()).optional(),
  hasDeviceToken: z.boolean().optional(),
  subscribedTopics: z.array(z.string()).optional(),
  notificationKey: z.string().nullish(),
  disabled: z.boolean(),
  premium: z.boolean().optional(),
  premiumEndDate: z.string().optional(),
});

export const PrivateUserSchema = PublicUserSchema.omit({
  private: true,
}).extend({
  private: PrivateUserMapSchema,
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
