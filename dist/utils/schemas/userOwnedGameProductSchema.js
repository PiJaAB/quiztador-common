"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserOwnedGameProductSchema = zod_1.z.record(zod_1.z.string(), zod_1.z.number().nonnegative());
exports.default = UserOwnedGameProductSchema;
