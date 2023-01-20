import { z } from 'zod';

// E.g "Headgear"
const InGameProductItem = z.object({
  category: z.string(),
  imageUrl: z.string().optional(),
  item: z
    .object({
      color: z.string().optional(),
      title: z.string(),
      price: z.number(),
    })
    .optional(),
  unlockLevel: z.number(),
});

export default InGameProductItem;
