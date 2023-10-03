"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProductSchema = exports.CategoriesMap = exports.SchemaMap = exports.AbstractGameProductSchema = exports.GameProductCategories = exports.GameProductCategorySchema = exports.GameProductAvatarImageVariants = void 0;
const zod_1 = require("zod");
const gameProductSchemaHelpers_1 = require("./gameProductSchemaHelpers");
const GameProductType = zod_1.z.enum(['CONSUMABLE', 'NON-CONSUMABLE']);
exports.GameProductAvatarImageVariants = ['feminine', 'back'];
const imageVariantProps = Object.fromEntries(exports.GameProductAvatarImageVariants.map((key) => [
    [`imageUrl_${key}`, zod_1.z.string().nullish()],
    [`bundleImage_${key}`, zod_1.z.string().nullish()],
]).flat());
const SchemaDefEntries = (0, gameProductSchemaHelpers_1.makeSchemaDefEntries)([
    [
        'Avatar',
        {
            category: zod_1.z.enum([
                'avatar-body',
                'avatar-mouth',
                'avatar-nose',
                'avatar-eyes',
                'avatar-hair-back',
                'avatar-headgear',
                'avatar-chest-decorations',
                'avatar-facial-hair',
                'avatar-torso',
                'avatar-legs',
                'avatar-eyebrows',
                'avatar-hair-front',
                'avatar-collar',
                'avatar-glasses',
            ]),
            ...imageVariantProps,
        },
    ],
    [
        'Tactic',
        {
            type: GameProductType.default('CONSUMABLE'),
            category: zod_1.z.enum(['tactic']),
        },
    ],
    [
        'Unlock',
        {
            category: zod_1.z.enum(['unlock']),
        },
    ],
]);
exports.GameProductCategorySchema = zod_1.z.union((0, gameProductSchemaHelpers_1.CategoriesTuple)(SchemaDefEntries));
exports.GameProductCategories = exports.GameProductCategorySchema.options
    .map(({ options }) => options)
    .flat();
/** Basic shared shape of all products */
exports.AbstractGameProductSchema = zod_1.z.object({
    type: GameProductType.default('NON-CONSUMABLE'),
    SKU: zod_1.z.string(),
    category: exports.GameProductCategorySchema,
    title: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    price: zod_1.z.number(),
    rewardOnly: zod_1.z.boolean().default(false),
    imageUrl: zod_1.z.string().nullish(),
});
const SchemaEntries = (0, gameProductSchemaHelpers_1.SchemaDefTuple)(exports.AbstractGameProductSchema, SchemaDefEntries);
exports.SchemaMap = Object.fromEntries(SchemaEntries);
exports.CategoriesMap = Object.fromEntries(SchemaDefEntries.map(([key, value]) => [key, value.category.options]));
exports.GameProductSchema = zod_1.z.discriminatedUnion('category', (0, gameProductSchemaHelpers_1.SchemaTuple)(SchemaEntries));
