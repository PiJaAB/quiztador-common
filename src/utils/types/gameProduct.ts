import { z } from 'zod';
import GameProductSchema from '../schemas/gameProductSchema';

export type GameProduct = z.infer<typeof GameProductSchema>;

