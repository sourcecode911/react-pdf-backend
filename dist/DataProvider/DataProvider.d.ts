import React from 'react';
export interface Data {
    readonly firstName?: string;
    readonly firstNameTitle?: string;
    readonly lastName?: string;
    readonly lastNameTitle?: string;
    readonly age?: number;
    readonly ageTitle?: string;
}
export declare const useDataValue: <T extends keyof Data>(accessor?: T) => Data[T];
export declare const DataProvider: React.FC<{
    data: Data;
}>;
