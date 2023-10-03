"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaDefTuple = exports.SchemaTuple = exports.CategoriesTuple = exports.makeSchemaDefEntries = void 0;
function makeSchemaDefEntries(defs) {
    return defs;
}
exports.makeSchemaDefEntries = makeSchemaDefEntries;
function CategoriesTuple(tuple) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return tuple.map(([, { category }]) => category);
}
exports.CategoriesTuple = CategoriesTuple;
function SchemaTuple(tuple) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return tuple.map(([, zodObj]) => zodObj);
}
exports.SchemaTuple = SchemaTuple;
function SchemaDefTuple(base, tuple) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return tuple.map(([key, schema]) => [key, base.extend(schema)]);
}
exports.SchemaDefTuple = SchemaDefTuple;
