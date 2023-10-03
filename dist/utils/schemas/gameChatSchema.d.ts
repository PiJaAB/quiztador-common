import { z } from 'zod';
export declare const GameChatMessageSchema: z.ZodObject<{
    _id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    text: z.ZodString;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodNumber]>;
    user: z.ZodObject<{
        _id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        name: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    }, "strip", z.ZodTypeAny, {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    }, {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    }>;
    image: z.ZodOptional<z.ZodString>;
    video: z.ZodOptional<z.ZodString>;
    audio: z.ZodOptional<z.ZodString>;
    system: z.ZodOptional<z.ZodBoolean>;
    sent: z.ZodOptional<z.ZodBoolean>;
    received: z.ZodOptional<z.ZodBoolean>;
    pending: z.ZodOptional<z.ZodBoolean>;
    quickReplies: z.ZodOptional<z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"radio">, z.ZodLiteral<"checkbox">]>;
        values: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            value: z.ZodString;
            messageId: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            title: string;
            messageId?: any;
        }, {
            value: string;
            title: string;
            messageId?: any;
        }>, "many">;
        keepIt: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        values: {
            value: string;
            title: string;
            messageId?: any;
        }[];
        type: "radio" | "checkbox";
        keepIt?: boolean | undefined;
    }, {
        values: {
            value: string;
            title: string;
            messageId?: any;
        }[];
        type: "radio" | "checkbox";
        keepIt?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: (number | Date) & (number | Date | undefined);
    _id: string | number;
    text: string;
    user: {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    };
    image?: string | undefined;
    video?: string | undefined;
    audio?: string | undefined;
    system?: boolean | undefined;
    sent?: boolean | undefined;
    received?: boolean | undefined;
    pending?: boolean | undefined;
    quickReplies?: {
        values: {
            value: string;
            title: string;
            messageId?: any;
        }[];
        type: "radio" | "checkbox";
        keepIt?: boolean | undefined;
    } | undefined;
}, {
    createdAt: (number | Date) & (number | Date | undefined);
    _id: string | number;
    text: string;
    user: {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    };
    image?: string | undefined;
    video?: string | undefined;
    audio?: string | undefined;
    system?: boolean | undefined;
    sent?: boolean | undefined;
    received?: boolean | undefined;
    pending?: boolean | undefined;
    quickReplies?: {
        values: {
            value: string;
            title: string;
            messageId?: any;
        }[];
        type: "radio" | "checkbox";
        keepIt?: boolean | undefined;
    } | undefined;
}>;
export declare const GameChatSchema: z.ZodObject<{
    createdAt: z.ZodString;
    gameRef: z.ZodString;
    text: z.ZodObject<{
        _id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        text: z.ZodString;
        createdAt: z.ZodUnion<[z.ZodDate, z.ZodNumber]>;
        user: z.ZodObject<{
            _id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
            name: z.ZodOptional<z.ZodString>;
            avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        }, {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        }>;
        image: z.ZodOptional<z.ZodString>;
        video: z.ZodOptional<z.ZodString>;
        audio: z.ZodOptional<z.ZodString>;
        system: z.ZodOptional<z.ZodBoolean>;
        sent: z.ZodOptional<z.ZodBoolean>;
        received: z.ZodOptional<z.ZodBoolean>;
        pending: z.ZodOptional<z.ZodBoolean>;
        quickReplies: z.ZodOptional<z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"radio">, z.ZodLiteral<"checkbox">]>;
            values: z.ZodArray<z.ZodObject<{
                title: z.ZodString;
                value: z.ZodString;
                messageId: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                title: string;
                messageId?: any;
            }, {
                value: string;
                title: string;
                messageId?: any;
            }>, "many">;
            keepIt: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        }, {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createdAt: (number | Date) & (number | Date | undefined);
        _id: string | number;
        text: string;
        user: {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        };
        image?: string | undefined;
        video?: string | undefined;
        audio?: string | undefined;
        system?: boolean | undefined;
        sent?: boolean | undefined;
        received?: boolean | undefined;
        pending?: boolean | undefined;
        quickReplies?: {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        } | undefined;
    }, {
        createdAt: (number | Date) & (number | Date | undefined);
        _id: string | number;
        text: string;
        user: {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        };
        image?: string | undefined;
        video?: string | undefined;
        audio?: string | undefined;
        system?: boolean | undefined;
        sent?: boolean | undefined;
        received?: boolean | undefined;
        pending?: boolean | undefined;
        quickReplies?: {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        } | undefined;
    }>;
    sender: z.ZodObject<{
        _id: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
        name: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    }, "strip", z.ZodTypeAny, {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    }, {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    sender: {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    };
    text: {
        createdAt: (number | Date) & (number | Date | undefined);
        _id: string | number;
        text: string;
        user: {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        };
        image?: string | undefined;
        video?: string | undefined;
        audio?: string | undefined;
        system?: boolean | undefined;
        sent?: boolean | undefined;
        received?: boolean | undefined;
        pending?: boolean | undefined;
        quickReplies?: {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        } | undefined;
    };
    gameRef: string;
}, {
    createdAt: string;
    sender: {
        _id: string | number;
        name?: string | undefined;
        avatar?: string | number | undefined;
    };
    text: {
        createdAt: (number | Date) & (number | Date | undefined);
        _id: string | number;
        text: string;
        user: {
            _id: string | number;
            name?: string | undefined;
            avatar?: string | number | undefined;
        };
        image?: string | undefined;
        video?: string | undefined;
        audio?: string | undefined;
        system?: boolean | undefined;
        sent?: boolean | undefined;
        received?: boolean | undefined;
        pending?: boolean | undefined;
        quickReplies?: {
            values: {
                value: string;
                title: string;
                messageId?: any;
            }[];
            type: "radio" | "checkbox";
            keepIt?: boolean | undefined;
        } | undefined;
    };
    gameRef: string;
}>;
export declare const GameChatMetaDataSchema: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodObject<{
    lastReadMessageId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    lastReadMessageTimestamp: z.ZodOptional<z.ZodString>;
    unreadCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    unreadCount: number;
    lastReadMessageId?: string | number | undefined;
    lastReadMessageTimestamp?: string | undefined;
}, {
    unreadCount: number;
    lastReadMessageId?: string | number | undefined;
    lastReadMessageTimestamp?: string | undefined;
}>>, z.ZodRecord<z.ZodString, z.ZodObject<{
    latestMessageId: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    latestMessageTimestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    latestMessageId?: string | number | undefined;
    latestMessageTimestamp?: string | undefined;
}, {
    latestMessageId?: string | number | undefined;
    latestMessageTimestamp?: string | undefined;
}>>]>;
