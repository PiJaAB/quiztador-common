"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateUserSchema = exports.PrivateUserMapSchema = exports.AccessFlags = exports.PublicUserSchema = void 0;
const zod_1 = require("zod");
exports.PublicUserSchema = zod_1.z.object({
    username: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    eloRating: zod_1.z.number().nullish(),
    avatar: zod_1.z.record(zod_1.z.string(), zod_1.z.string().nullish()).optional(),
    avatarStyle: zod_1.z.enum(['masculine', 'feminine']).optional(),
    friends: zod_1.z
        .record(zod_1.z.string(), zod_1.z.object({
        date: zod_1.z.string(),
    }))
        .optional(),
    gamesWon: zod_1.z.number().optional(),
    gamesPlayed: zod_1.z.number().optional(),
});
exports.AccessFlags = zod_1.z
    .record(zod_1.z.string(), zod_1.z.boolean().optional())
    .nullish();
exports.PrivateUserMapSchema = zod_1.z.object({
    email: zod_1.z.string().optional(),
    emailVerified: zod_1.z.boolean(),
    phoneNumber: zod_1.z.string().optional(),
    accessFlags: exports.AccessFlags,
    gold: zod_1.z.number().nullish(),
    maxEloRating: zod_1.z.number().nullish(),
    tempPassword: zod_1.z.boolean().nullish(),
    deviceToken: zod_1.z.string().optional(),
    hasDeviceToken: zod_1.z.boolean().optional(),
    subscribedTopics: zod_1.z.array(zod_1.z.string()).optional(),
    notificationKey: zod_1.z.string().nullish(),
    disabled: zod_1.z.boolean(),
    premium: zod_1.z.boolean().nullish().default(false),
    premiumForever: zod_1.z.boolean().nullish().default(false),
    premiumEndDate: zod_1.z.string().nullish(),
});
exports.PrivateUserSchema = exports.PublicUserSchema.extend({
    private: exports.PrivateUserMapSchema,
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
});
