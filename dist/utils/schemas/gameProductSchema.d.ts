import { z } from 'zod';
export declare const GameProductAvatarImageVariants: readonly ["feminine", "back"];
export declare const GameProductCategorySchema: z.ZodUnion<[z.ZodEnum<["avatar-body", "avatar-mouth", "avatar-nose", "avatar-eyes", "avatar-hair-back", "avatar-headgear", "avatar-chest-decorations", "avatar-facial-hair", "avatar-torso", "avatar-legs", "avatar-eyebrows", "avatar-hair-front", "avatar-collar", "avatar-glasses"]>, z.ZodEnum<["tactic"]>, z.ZodEnum<["unlock"]>]>;
export declare const GameProductCategories: ("avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses" | "tactic" | "unlock")[];
/** Basic shared shape of all products */
export declare const AbstractGameProductSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
    SKU: z.ZodString;
    category: z.ZodUnion<[z.ZodEnum<["avatar-body", "avatar-mouth", "avatar-nose", "avatar-eyes", "avatar-hair-back", "avatar-headgear", "avatar-chest-decorations", "avatar-facial-hair", "avatar-torso", "avatar-legs", "avatar-eyebrows", "avatar-hair-front", "avatar-collar", "avatar-glasses"]>, z.ZodEnum<["tactic"]>, z.ZodEnum<["unlock"]>]>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    rewardOnly: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "CONSUMABLE" | "NON-CONSUMABLE";
    category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses" | "tactic" | "unlock";
    title: string;
    SKU: string;
    price: number;
    rewardOnly: boolean;
    description?: string | null | undefined;
    imageUrl?: string | null | undefined;
}, {
    category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses" | "tactic" | "unlock";
    title: string;
    SKU: string;
    price: number;
    type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
    description?: string | null | undefined;
    rewardOnly?: boolean | undefined;
    imageUrl?: string | null | undefined;
}>;
export declare const SchemaMap: {
    Avatar: z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        SKU: z.ZodString;
        price: z.ZodNumber;
        rewardOnly: z.ZodDefault<z.ZodBoolean>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        imageUrl_feminine: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        imageUrl_back: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        category: z.ZodEnum<["avatar-body", "avatar-mouth", "avatar-nose", "avatar-eyes", "avatar-hair-back", "avatar-headgear", "avatar-chest-decorations", "avatar-facial-hair", "avatar-torso", "avatar-legs", "avatar-eyebrows", "avatar-hair-front", "avatar-collar", "avatar-glasses"]>;
    }, "strip", z.ZodTypeAny, {
        type: "CONSUMABLE" | "NON-CONSUMABLE";
        category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses";
        title: string;
        SKU: string;
        price: number;
        rewardOnly: boolean;
        description?: string | null | undefined;
        imageUrl?: string | null | undefined;
        imageUrl_feminine?: string | null | undefined;
        imageUrl_back?: string | null | undefined;
    }, {
        category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses";
        title: string;
        SKU: string;
        price: number;
        type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
        description?: string | null | undefined;
        rewardOnly?: boolean | undefined;
        imageUrl?: string | null | undefined;
        imageUrl_feminine?: string | null | undefined;
        imageUrl_back?: string | null | undefined;
    }>;
    Tactic: z.ZodObject<{
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        SKU: z.ZodString;
        price: z.ZodNumber;
        rewardOnly: z.ZodDefault<z.ZodBoolean>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
        category: z.ZodEnum<["tactic"]>;
    }, "strip", z.ZodTypeAny, {
        type: "CONSUMABLE" | "NON-CONSUMABLE";
        category: "tactic";
        title: string;
        SKU: string;
        price: number;
        rewardOnly: boolean;
        description?: string | null | undefined;
        imageUrl?: string | null | undefined;
    }, {
        category: "tactic";
        title: string;
        SKU: string;
        price: number;
        description?: string | null | undefined;
        rewardOnly?: boolean | undefined;
        imageUrl?: string | null | undefined;
        type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
    }>;
    Unlock: z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodString;
        SKU: z.ZodString;
        price: z.ZodNumber;
        rewardOnly: z.ZodDefault<z.ZodBoolean>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        category: z.ZodEnum<["unlock"]>;
    }, "strip", z.ZodTypeAny, {
        type: "CONSUMABLE" | "NON-CONSUMABLE";
        category: "unlock";
        title: string;
        SKU: string;
        price: number;
        rewardOnly: boolean;
        description?: string | null | undefined;
        imageUrl?: string | null | undefined;
    }, {
        category: "unlock";
        title: string;
        SKU: string;
        price: number;
        type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
        description?: string | null | undefined;
        rewardOnly?: boolean | undefined;
        imageUrl?: string | null | undefined;
    }>;
};
export declare const CategoriesMap: {
    Avatar: ["avatar-body", "avatar-mouth", "avatar-nose", "avatar-eyes", "avatar-hair-back", "avatar-headgear", "avatar-chest-decorations", "avatar-facial-hair", "avatar-torso", "avatar-legs", "avatar-eyebrows", "avatar-hair-front", "avatar-collar", "avatar-glasses"];
    Tactic: ["tactic"];
    Unlock: ["unlock"];
};
export declare const GameProductSchema: z.ZodDiscriminatedUnion<"category", [z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    SKU: z.ZodString;
    price: z.ZodNumber;
    rewardOnly: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl_feminine: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    imageUrl_back: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    category: z.ZodEnum<["avatar-body", "avatar-mouth", "avatar-nose", "avatar-eyes", "avatar-hair-back", "avatar-headgear", "avatar-chest-decorations", "avatar-facial-hair", "avatar-torso", "avatar-legs", "avatar-eyebrows", "avatar-hair-front", "avatar-collar", "avatar-glasses"]>;
}, "strip", z.ZodTypeAny, {
    type: "CONSUMABLE" | "NON-CONSUMABLE";
    category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses";
    title: string;
    SKU: string;
    price: number;
    rewardOnly: boolean;
    description?: string | null | undefined;
    imageUrl?: string | null | undefined;
    imageUrl_feminine?: string | null | undefined;
    imageUrl_back?: string | null | undefined;
}, {
    category: "avatar-body" | "avatar-mouth" | "avatar-nose" | "avatar-eyes" | "avatar-hair-back" | "avatar-headgear" | "avatar-chest-decorations" | "avatar-facial-hair" | "avatar-torso" | "avatar-legs" | "avatar-eyebrows" | "avatar-hair-front" | "avatar-collar" | "avatar-glasses";
    title: string;
    SKU: string;
    price: number;
    type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
    description?: string | null | undefined;
    rewardOnly?: boolean | undefined;
    imageUrl?: string | null | undefined;
    imageUrl_feminine?: string | null | undefined;
    imageUrl_back?: string | null | undefined;
}>, z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    SKU: z.ZodString;
    price: z.ZodNumber;
    rewardOnly: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
    category: z.ZodEnum<["tactic"]>;
}, "strip", z.ZodTypeAny, {
    type: "CONSUMABLE" | "NON-CONSUMABLE";
    category: "tactic";
    title: string;
    SKU: string;
    price: number;
    rewardOnly: boolean;
    description?: string | null | undefined;
    imageUrl?: string | null | undefined;
}, {
    category: "tactic";
    title: string;
    SKU: string;
    price: number;
    description?: string | null | undefined;
    rewardOnly?: boolean | undefined;
    imageUrl?: string | null | undefined;
    type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
}>, z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["CONSUMABLE", "NON-CONSUMABLE"]>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    SKU: z.ZodString;
    price: z.ZodNumber;
    rewardOnly: z.ZodDefault<z.ZodBoolean>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodEnum<["unlock"]>;
}, "strip", z.ZodTypeAny, {
    type: "CONSUMABLE" | "NON-CONSUMABLE";
    category: "unlock";
    title: string;
    SKU: string;
    price: number;
    rewardOnly: boolean;
    description?: string | null | undefined;
    imageUrl?: string | null | undefined;
}, {
    category: "unlock";
    title: string;
    SKU: string;
    price: number;
    type?: "CONSUMABLE" | "NON-CONSUMABLE" | undefined;
    description?: string | null | undefined;
    rewardOnly?: boolean | undefined;
    imageUrl?: string | null | undefined;
}>]>;
