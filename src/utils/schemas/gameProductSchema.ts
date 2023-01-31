import { z } from 'zod';

// E.g "Headgear"
const GameProductSchema = z.object({
  type: z
    .union([z.literal('CONSUMABLE'), z.literal('NON-CONSUMABLE')])
    .default('NON-CONSUMABLE'),
  category: z.string(),
  imageUrl: z.string().optional(),
  item: z.object({
    color: z.string().optional(),
    title: z.string(),
    price: z.number(),
  }),
  unlockLevel: z.number(),
});

export default GameProductSchema;
