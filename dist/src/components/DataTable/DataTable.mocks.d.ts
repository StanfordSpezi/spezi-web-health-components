export declare const peopleData: ({
    name: string;
    age: number;
    updatedAt: Date;
} | {
    name: string;
    age: number;
    updatedAt: null;
})[];
export type Person = (typeof peopleData)[number];
export declare const columnHelper: import('@tanstack/react-table').ColumnHelper<{
    name: string;
    age: number;
    updatedAt: Date;
} | {
    name: string;
    age: number;
    updatedAt: null;
}>;
export declare const peopleColumn: {
    name: import('@tanstack/react-table').AccessorKeyColumnDef<{
        name: string;
        age: number;
        updatedAt: Date;
    } | {
        name: string;
        age: number;
        updatedAt: null;
    }, string>;
    age: import('@tanstack/react-table').AccessorKeyColumnDef<{
        name: string;
        age: number;
        updatedAt: Date;
    } | {
        name: string;
        age: number;
        updatedAt: null;
    }, number>;
};
export declare const peopleColumns: (import('@tanstack/react-table').AccessorKeyColumnDefBase<{
    name: string;
    age: number;
    updatedAt: Date;
} | {
    name: string;
    age: number;
    updatedAt: null;
}, string> & Partial<import('@tanstack/react-table').IdIdentifier<{
    name: string;
    age: number;
    updatedAt: Date;
} | {
    name: string;
    age: number;
    updatedAt: null;
}, string>>)[];
