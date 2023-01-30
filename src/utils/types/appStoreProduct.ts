import { z } from 'zod';

import AppStoreProductSchema from '../schemas/appStoreProductSchema';

export type AppStoreProduct = z.infer<typeof AppStoreProductSchema>;
