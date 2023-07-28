import { z } from 'zod';

export function makeSchemaDefEntries<
  T extends readonly [
    readonly [string, unknown],
    ...(readonly [string, unknown])[],
  ],
>(defs: T): T {
  return defs;
}

export function CategoriesTuple<
  Tuple extends readonly [
    readonly [unknown, { readonly category: z.ZodEnum<[string, ...string[]]> }],
    ...(readonly [
      unknown,
      { readonly category: z.ZodEnum<[string, ...string[]]> },
    ])[],
  ],
>(tuple: Tuple): { -readonly [key in keyof Tuple]: Tuple[key][1]['category'] } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return tuple.map(([, { category }]) => category) as any;
}

export function SchemaTuple<
  Tuple extends readonly [
    readonly [unknown, z.ZodObject<z.ZodRawShape>],
    ...(readonly [unknown, z.ZodObject<z.ZodRawShape>])[],
  ],
>(tuple: Tuple): { -readonly [key in keyof Tuple]: Tuple[key][1] } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return tuple.map(([, zodObj]) => zodObj) as any;
}

export function SchemaDefTuple<
  Base extends z.ZodObject<z.ZodRawShape>,
  Tuple extends readonly [
    readonly [unknown, z.ZodRawShape],
    ...(readonly [unknown, z.ZodRawShape])[],
  ],
>(
  base: Base,
  tuple: Tuple,
): {
  -readonly [key in keyof Tuple]: [
    Tuple[key][0],
    Base extends z.ZodObject<
      infer T extends z.ZodRawShape,
      infer UnknownKeys,
      infer Catchall
    >
      ? z.ZodObject<
          z.objectUtil.extendShape<T, Tuple[key][1]>,
          UnknownKeys,
          Catchall,
          z.objectOutputType<
            z.objectUtil.extendShape<T, Tuple[key][1]>,
            Catchall
          >,
          z.objectInputType<
            z.objectUtil.extendShape<T, Tuple[key][1]>,
            Catchall
          >
        >
      : never,
  ];
} {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return tuple.map(([key, schema]) => [key, base.extend(schema)]) as any;
}
