import { BaseBlock } from '../../RenderBlock/blocks/BaseBlock';
import { Identifier } from '../../RenderBlock/Identifier.enum';
export declare class BaseBlockDTO implements Omit<BaseBlock<unknown, string>, 'Component' | 'items'> {
    readonly identifier: Identifier;
    metadata?: unknown;
    accessor?: never;
    items: BaseBlockDTO[];
    Component: never;
}
