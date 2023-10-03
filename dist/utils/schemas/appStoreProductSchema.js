"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AppStoreProductSchema = zod_1.z.object({
    title: zod_1.z.string(),
    productId: zod_1.z.string(),
    adFreeMilliseconds: zod_1.z.number(),
    adFreeDays: zod_1.z.number(),
    adFreeForever: zod_1.z.boolean(),
    goldAmount: zod_1.z.number().default(0),
    bonusGoldAmount: zod_1.z.number().default(0),
    createdAt: zod_1.z.string(),
    published: zod_1.z.boolean().default(false),
});
exports.default = AppStoreProductSchema;
