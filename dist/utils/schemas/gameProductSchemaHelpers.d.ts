import { z } from 'zod';
export declare function makeSchemaDefEntries<T extends readonly [
    readonly [string, unknown],
    ...(readonly [string, unknown])[]
]>(defs: T): T;
export declare function CategoriesTuple<Tuple extends readonly [
    readonly [unknown, {
        readonly category: z.ZodEnum<[string, ...string[]]>;
    }],
    ...(readonly [
        unknown,
        {
            readonly category: z.ZodEnum<[string, ...string[]]>;
        }
    ])[]
]>(tuple: Tuple): {
    -readonly [key in keyof Tuple]: Tuple[key][1]['category'];
};
export declare function SchemaTuple<Tuple extends readonly [
    readonly [unknown, z.ZodObject<z.ZodRawShape>],
    ...(readonly [unknown, z.ZodObject<z.ZodRawShape>])[]
]>(tuple: Tuple): {
    -readonly [key in keyof Tuple]: Tuple[key][1];
};
export declare function SchemaDefTuple<Base extends z.ZodObject<z.ZodRawShape>, Tuple extends readonly [
    readonly [unknown, z.ZodRawShape],
    ...(readonly [unknown, z.ZodRawShape])[]
]>(base: Base, tuple: Tuple): {
    -readonly [key in keyof Tuple]: [
        Tuple[key][0],
        Base extends z.ZodObject<infer T extends z.ZodRawShape, infer UnknownKeys, infer Catchall> ? z.ZodObject<z.objectUtil.extendShape<T, Tuple[key][1]>, UnknownKeys, Catchall, z.objectOutputType<z.objectUtil.extendShape<T, Tuple[key][1]>, Catchall>, z.objectInputType<z.objectUtil.extendShape<T, Tuple[key][1]>, Catchall>> : never
    ];
};
