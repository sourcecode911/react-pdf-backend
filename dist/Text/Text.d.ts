import React from 'react';
import colors from './Text.colors.module.scss';
import themes from './Text.themes.module.scss';
export declare type TextThemes = keyof typeof themes;
export declare type TextColors = keyof typeof colors;
interface Props {
    className?: string;
    theme?: keyof typeof themes;
    color?: keyof typeof colors;
}
export declare const Text: React.FC<Props>;
export {};
