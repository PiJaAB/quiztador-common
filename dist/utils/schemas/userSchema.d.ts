import { z } from 'zod';
export declare const PublicUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    eloRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    avatar: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>;
    avatarStyle: z.ZodOptional<z.ZodEnum<["masculine", "feminine"]>>;
    friends: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        date: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
    }, {
        date: string;
    }>>>;
    gamesWon: z.ZodOptional<z.ZodNumber>;
    gamesPlayed: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    role?: string | undefined;
    eloRating?: number | null | undefined;
    avatar?: Record<string, string | null | undefined> | undefined;
    avatarStyle?: "masculine" | "feminine" | undefined;
    friends?: Record<string, {
        date: string;
    }> | undefined;
    gamesWon?: number | undefined;
    gamesPlayed?: number | undefined;
}, {
    username?: string | undefined;
    role?: string | undefined;
    eloRating?: number | null | undefined;
    avatar?: Record<string, string | null | undefined> | undefined;
    avatarStyle?: "masculine" | "feminine" | undefined;
    friends?: Record<string, {
        date: string;
    }> | undefined;
    gamesWon?: number | undefined;
    gamesPlayed?: number | undefined;
}>;
export declare const AccessFlags: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodBoolean>>>>;
export declare const PrivateUserMapSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    emailVerified: z.ZodBoolean;
    phoneNumber: z.ZodOptional<z.ZodString>;
    accessFlags: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodBoolean>>>>;
    gold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxEloRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tempPassword: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    deviceToken: z.ZodOptional<z.ZodString>;
    hasDeviceToken: z.ZodOptional<z.ZodBoolean>;
    subscribedTopics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notificationKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    disabled: z.ZodBoolean;
    premium: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    premiumForever: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    premiumEndDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    emailVerified: boolean;
    disabled: boolean;
    premium: boolean | null;
    premiumForever: boolean | null;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    accessFlags?: Record<string, boolean | undefined> | null | undefined;
    gold?: number | null | undefined;
    maxEloRating?: number | null | undefined;
    tempPassword?: boolean | null | undefined;
    deviceToken?: string | undefined;
    hasDeviceToken?: boolean | undefined;
    subscribedTopics?: string[] | undefined;
    notificationKey?: string | null | undefined;
    premiumEndDate?: string | null | undefined;
}, {
    emailVerified: boolean;
    disabled: boolean;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    accessFlags?: Record<string, boolean | undefined> | null | undefined;
    gold?: number | null | undefined;
    maxEloRating?: number | null | undefined;
    tempPassword?: boolean | null | undefined;
    deviceToken?: string | undefined;
    hasDeviceToken?: boolean | undefined;
    subscribedTopics?: string[] | undefined;
    notificationKey?: string | null | undefined;
    premium?: boolean | null | undefined;
    premiumForever?: boolean | null | undefined;
    premiumEndDate?: string | null | undefined;
}>;
export declare const PrivateUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    eloRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    avatar: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>;
    avatarStyle: z.ZodOptional<z.ZodEnum<["masculine", "feminine"]>>;
    friends: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        date: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
    }, {
        date: string;
    }>>>;
    gamesWon: z.ZodOptional<z.ZodNumber>;
    gamesPlayed: z.ZodOptional<z.ZodNumber>;
    private: z.ZodObject<{
        email: z.ZodOptional<z.ZodString>;
        emailVerified: z.ZodBoolean;
        phoneNumber: z.ZodOptional<z.ZodString>;
        accessFlags: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodBoolean>>>>;
        gold: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxEloRating: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tempPassword: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        deviceToken: z.ZodOptional<z.ZodString>;
        hasDeviceToken: z.ZodOptional<z.ZodBoolean>;
        subscribedTopics: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        notificationKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        disabled: z.ZodBoolean;
        premium: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        premiumForever: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        premiumEndDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        emailVerified: boolean;
        disabled: boolean;
        premium: boolean | null;
        premiumForever: boolean | null;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        accessFlags?: Record<string, boolean | undefined> | null | undefined;
        gold?: number | null | undefined;
        maxEloRating?: number | null | undefined;
        tempPassword?: boolean | null | undefined;
        deviceToken?: string | undefined;
        hasDeviceToken?: boolean | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        premiumEndDate?: string | null | undefined;
    }, {
        emailVerified: boolean;
        disabled: boolean;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        accessFlags?: Record<string, boolean | undefined> | null | undefined;
        gold?: number | null | undefined;
        maxEloRating?: number | null | undefined;
        tempPassword?: boolean | null | undefined;
        deviceToken?: string | undefined;
        hasDeviceToken?: boolean | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        premium?: boolean | null | undefined;
        premiumForever?: boolean | null | undefined;
        premiumEndDate?: string | null | undefined;
    }>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    private: {
        emailVerified: boolean;
        disabled: boolean;
        premium: boolean | null;
        premiumForever: boolean | null;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        accessFlags?: Record<string, boolean | undefined> | null | undefined;
        gold?: number | null | undefined;
        maxEloRating?: number | null | undefined;
        tempPassword?: boolean | null | undefined;
        deviceToken?: string | undefined;
        hasDeviceToken?: boolean | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        premiumEndDate?: string | null | undefined;
    };
    username?: string | undefined;
    role?: string | undefined;
    eloRating?: number | null | undefined;
    avatar?: Record<string, string | null | undefined> | undefined;
    avatarStyle?: "masculine" | "feminine" | undefined;
    friends?: Record<string, {
        date: string;
    }> | undefined;
    gamesWon?: number | undefined;
    gamesPlayed?: number | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}, {
    private: {
        emailVerified: boolean;
        disabled: boolean;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        accessFlags?: Record<string, boolean | undefined> | null | undefined;
        gold?: number | null | undefined;
        maxEloRating?: number | null | undefined;
        tempPassword?: boolean | null | undefined;
        deviceToken?: string | undefined;
        hasDeviceToken?: boolean | undefined;
        subscribedTopics?: string[] | undefined;
        notificationKey?: string | null | undefined;
        premium?: boolean | null | undefined;
        premiumForever?: boolean | null | undefined;
        premiumEndDate?: string | null | undefined;
    };
    username?: string | undefined;
    role?: string | undefined;
    eloRating?: number | null | undefined;
    avatar?: Record<string, string | null | undefined> | undefined;
    avatarStyle?: "masculine" | "feminine" | undefined;
    friends?: Record<string, {
        date: string;
    }> | undefined;
    gamesWon?: number | undefined;
    gamesPlayed?: number | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}>;
