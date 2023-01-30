import { z } from 'zod';
import UserOwnedGameProductSchema from '../schemas/userOwnedGameProductSchema';

export type UserOwnedGameProduct = z.infer<typeof UserOwnedGameProductSchema>;
