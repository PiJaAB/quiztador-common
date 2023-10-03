import { z } from 'zod';
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodString;
    weight: z.ZodNumber;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    published: boolean;
    weight: number;
    id?: string | undefined;
}, {
    name: string;
    description: string;
    published: boolean;
    weight: number;
    id?: string | undefined;
}>;
export declare const CategoriesSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodString;
    weight: z.ZodNumber;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    published: boolean;
    weight: number;
    id?: string | undefined;
}, {
    name: string;
    description: string;
    published: boolean;
    weight: number;
    id?: string | undefined;
}>>;
