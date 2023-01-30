import { z } from 'zod';
import {
  PrivateUserSchema,
  PublicUserSchema,
  PrivateUserMapSchema,
} from '../schemas/userSchema';

export type PublicUser = z.infer<typeof PublicUserSchema>;
export type PrivateUser = z.infer<typeof PrivateUserSchema>;
export type PrivateUserMap = z.infer<typeof PrivateUserMapSchema>;
