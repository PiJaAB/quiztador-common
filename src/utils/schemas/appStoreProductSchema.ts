import { z } from 'zod';

const AppStoreProductSchema = z.object({
  title: z.string(),
  productId: z.string(),
  adFreeMilliseconds: z.number(),
  adFreeDays: z.number(),
  adFreeForever: z.boolean(),
  goldAmount: z.number().default(0),
  bonusGoldAmount: z.number().default(0),
  createdAt: z.string(),
  published: z.boolean().default(false),
});

export default AppStoreProductSchema;
