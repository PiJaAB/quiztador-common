import { z } from 'zod';
declare const AppStoreProductSchema: z.ZodObject<{
    title: z.ZodString;
    productId: z.ZodString;
    adFreeMilliseconds: z.ZodNumber;
    adFreeDays: z.ZodNumber;
    adFreeForever: z.ZodBoolean;
    goldAmount: z.ZodDefault<z.ZodNumber>;
    bonusGoldAmount: z.ZodDefault<z.ZodNumber>;
    createdAt: z.ZodString;
    published: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    title: string;
    productId: string;
    adFreeMilliseconds: number;
    adFreeDays: number;
    adFreeForever: boolean;
    goldAmount: number;
    bonusGoldAmount: number;
    published: boolean;
}, {
    createdAt: string;
    title: string;
    productId: string;
    adFreeMilliseconds: number;
    adFreeDays: number;
    adFreeForever: boolean;
    goldAmount?: number | undefined;
    bonusGoldAmount?: number | undefined;
    published?: boolean | undefined;
}>;
export default AppStoreProductSchema;
