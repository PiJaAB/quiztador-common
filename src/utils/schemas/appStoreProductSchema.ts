import { z } from 'zod';

const AppStoreProductSchema = z.object({
  title: z.string(),
  productID: z.string(),
  price: z.number(),
  adFreeMilliseconds: z.number(),
  adFreeForever: z.boolean(),
  goldAmount: z.number(),
  bonusGoldAmount: z.number(),
  createdAt: z.string(),
});

export default AppStoreProductSchema;
