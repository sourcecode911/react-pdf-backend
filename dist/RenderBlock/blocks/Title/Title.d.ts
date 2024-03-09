import React from 'react';
import { Identifier } from '../../Identifier.enum';
import { BaseBlock } from '../BaseBlock';
import { TextThemes, TextColors } from "../../../Text/Text";
interface Metadata {
    theme?: TextThemes;
    color?: TextColors;
}
export declare class Title extends BaseBlock<Metadata, string | number> {
    identifier: Identifier;
    Component: React.FC<Metadata>;
}
export {};
