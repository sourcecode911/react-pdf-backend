"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeSchema = exports.getConstructorForIdentifier = exports.SchemaDeserializationError = void 0;
const Identifier_enum_1 = require("./Identifier.enum");
const BlockFragment_1 = require("./blocks/BlockFragment");
const Padding_1 = require("./blocks/Padding");
const Title_1 = require("./blocks/Title");
class SchemaDeserializationError extends Error {
    constructor(identifier) {
        super(`Block with identifier: "${identifier}" does not have a concrete implementation`);
        this.name = 'SchemaDeserializationError';
    }
}
exports.SchemaDeserializationError = SchemaDeserializationError;
const mapping = {
    [Identifier_enum_1.Identifier.Title]: Title_1.Title,
    [Identifier_enum_1.Identifier.Padding]: Padding_1.Padding,
    [Identifier_enum_1.Identifier.BlockFragment]: BlockFragment_1.BlockFragment,
};
const getConstructorForIdentifier = (identifier) => {
    const block = mapping[identifier];
    if (!block) {
        return null;
    }
    return block;
};
exports.getConstructorForIdentifier = getConstructorForIdentifier;
const deserializeSchema = (plainSchema) => {
    const iterate = (block) => {
        const ConcreteBlock = exports.getConstructorForIdentifier(block.identifier);
        if (!ConcreteBlock) {
            throw new SchemaDeserializationError(block.identifier);
        }
        return new ConcreteBlock({
            accessor: block.accessor,
            metadata: block.metadata,
            items: block.items.map(iterate)
        });
    };
    return iterate(plainSchema);
};
exports.deserializeSchema = deserializeSchema;
//# sourceMappingURL=mapping.js.map