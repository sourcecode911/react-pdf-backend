import React from 'react';
import { Identifier } from '../../Identifier.enum';
import { BaseBlock } from '../BaseBlock';
interface Metadata {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export declare class Padding extends BaseBlock<Metadata> {
    identifier: Identifier;
    Component: React.FC<Metadata>;
}
export {};
