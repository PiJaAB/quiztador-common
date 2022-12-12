import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().optional(),
  role: z.string().optional(),
  eloRating: z.number().nullish(),
  private: z.never(),
});

export default UserSchema;
