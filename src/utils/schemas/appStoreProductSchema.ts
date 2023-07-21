import { z } from 'zod';

const AppStoreProductSchema = z.object({
  title: z.string(),
  productId: z.string(),
  adFreeMilliseconds: z.number(),
  adFreeForever: z.boolean(),
  goldAmount: z.number(),
  bonusGoldAmount: z.number(),
  createdAt: z.string(),
});

export default AppStoreProductSchema;
