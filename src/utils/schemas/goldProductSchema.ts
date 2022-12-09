import { z } from 'zod';

const GoldProductSchema = z.object({
  title: z.string(),
  productID: z.string(),
  price: z.number(),
  adFreeSeconds: z.number(),
  goldAmount: z.number(),
  bonusGoldAmount: z.number(),
});

export default GoldProductSchema;

