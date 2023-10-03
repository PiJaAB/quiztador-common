"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesSchema = exports.CategorySchema = void 0;
const zod_1 = require("zod");
exports.CategorySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    weight: zod_1.z.number(),
    published: zod_1.z.boolean(),
});
exports.CategoriesSchema = zod_1.z.record(zod_1.z.string(), exports.CategorySchema);
