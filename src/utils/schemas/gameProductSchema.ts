import { z } from 'zod';
import {
  makeSchemaDefEntries,
  CategoriesTuple,
  SchemaTuple,
  SchemaDefTuple,
} from './gameProductSchemaHelpers';

const GameProductType = z.enum(['CONSUMABLE', 'NON-CONSUMABLE']);

export const GameProductAvatarImageVariants = ['female', 'back'] as const;

const imageVariantProps: {
  [key in `imageUrl_${typeof GameProductAvatarImageVariants[number]}`]: z.ZodNullable<
    z.ZodOptional<z.ZodString>
  >;
} = Object.fromEntries(
  GameProductAvatarImageVariants.map((key) => [
    [`imageUrl_${key}`, z.string().nullish()],
    [`bundleImage_${key}`, z.string().nullish()],
  ]).flat(),
);

const SchemaDefEntries = makeSchemaDefEntries([
  [
    'Avatar' as const,
    {
      category: z.enum([
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
        'avatar-head',
        'avatar-collar',
        'avatar-glasses',
      ]),
      ...imageVariantProps,
    },
  ],
  [
    'Reward' as const,
    {
      category: z.enum(['reward']),
    },
  ],
  [
    'Tactic' as const,
    {
      type: GameProductType.default('CONSUMABLE'),
      category: z.enum(['tactic']),
    },
  ],
  [
    'Unlock' as const,
    {
      category: z.enum(['unlock']),
    },
  ],
]);

export const GameProductCategorySchema = z.union(
  CategoriesTuple(SchemaDefEntries),
);

export const GameProductCategories = GameProductCategorySchema.options
  .map(({ options }) => options)
  .flat();

/** Basic shared shape of all products */
export const AbstractGameProductSchema = z.object({
  type: GameProductType.default('NON-CONSUMABLE'),
  category: GameProductCategorySchema,
  title: z.string(),
  description: z.string().nullish(),
  price: z.number(),
  imageUrl: z.string().nullish(),
  bundledImage: z.string().nullish(),
});

const SchemaEntries = SchemaDefTuple(
  AbstractGameProductSchema,
  SchemaDefEntries,
);

type EntryToObj<T extends readonly [string, unknown]> = {
  [key in T[0]]: Extract<T, [key, unknown]>[1];
};

export const SchemaMap = Object.fromEntries(SchemaEntries) as {
  [key in keyof EntryToObj<typeof SchemaEntries[number]>]: EntryToObj<
    typeof SchemaEntries[number]
  >[key];
};

export const CategoriesMap = Object.fromEntries(
  SchemaDefEntries.map(([key, value]) => [key, value.category.options]),
) as {
  [key in keyof EntryToObj<typeof SchemaDefEntries[number]>]: EntryToObj<
    typeof SchemaDefEntries[number]
  >[key]['category']['options'];
};

export const GameProductSchema = z.discriminatedUnion(
  'category',
  SchemaTuple(SchemaEntries),
);
