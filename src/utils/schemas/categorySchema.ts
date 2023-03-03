import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  weight: z.number(),
  published: z.boolean(),
});

export const CategoriesSchema = z.record(z.string(), CategorySchema);
