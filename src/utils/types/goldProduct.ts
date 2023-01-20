import { z } from 'zod';
import GoldProductSchema from '../schemas/goldProductSchema';

export type GoldProduct = z.infer<typeof GoldProductSchema>;
