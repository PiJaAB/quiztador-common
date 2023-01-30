import { z } from 'zod';

const UserOwnedGameProductSchema = z.record(z.string(), z.number().nonnegative());


export default UserOwnedGameProductSchema;
