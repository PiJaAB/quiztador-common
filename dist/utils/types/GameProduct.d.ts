import type { z } from 'zod';
import type { AbstractGameProductSchema, GameProductCategories, SchemaMap, CategoriesMap, GameProductSchema } from '../schemas/gameProductSchema';
export type AbstractGameProduct = z.infer<typeof AbstractGameProductSchema>;
export type GameProductCategory = (typeof GameProductCategories)[number];
export type GameProductCategoryType = keyof typeof SchemaMap;
export type GameProduct = z.infer<typeof GameProductSchema>;
export type GameProductByCategory<Category extends GameProductCategory | GameProductCategoryType> = Category extends GameProductCategoryType ? z.infer<(typeof SchemaMap)[Category]> : Category extends GameProductCategory ? {
    [key in keyof typeof CategoriesMap]: Category extends (typeof CategoriesMap)[key][number] ? z.infer<(typeof SchemaMap)[key]> : never;
}[keyof typeof CategoriesMap] : never;
