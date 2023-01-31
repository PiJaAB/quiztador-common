import { z } from 'zod';

const GameProductSchema = z.object({
  type: z
    .union([z.literal('CONSUMABLE'), z.literal('NON-CONSUMABLE')])
    .default('NON-CONSUMABLE'),
  category: z.string(),
  title: z.string(),
  price: z.number(),
  imageUrl: z.string().optional(),
  bundledImage: z.string().optional(),
});

export default GameProductSchema;
