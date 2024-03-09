import React from 'react';
import { Data } from '../../../DataProvider';
import { Identifier } from '../../Identifier.enum';
declare type KeysMatching<T, V> = {
    [K in keyof T]?: T[K] extends V ? K : never;
}[keyof T];
export declare abstract class BaseBlock<T = {}, A = unknown> {
    abstract readonly identifier: Identifier;
    metadata?: T;
    accessor?: KeysMatching<Data, A | undefined>;
    items: BaseBlock[];
    constructor({ items, metadata, accessor }: {
        accessor?: KeysMatching<Data, A | undefined>;
        items?: BaseBlock[];
        metadata?: T;
    });
    abstract Component: React.FC<T>;
}
export {};
