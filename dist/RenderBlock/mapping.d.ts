import { Data } from '../DataProvider';
import { Identifier } from './Identifier.enum';
import { BaseBlock } from './blocks/BaseBlock';
import { BlockFragment } from './blocks/BlockFragment';
export declare class SchemaDeserializationError extends Error {
    constructor(identifier: Identifier);
}
export declare const getConstructorForIdentifier: (identifier: Identifier) => typeof BlockFragment;
interface PlainBlock extends BaseBlock<{}, keyof Data> {
    Component: never;
    items: PlainBlock[];
}
export declare const deserializeSchema: (plainSchema: PlainBlock) => BaseBlock;
export {};
