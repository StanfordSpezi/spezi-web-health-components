import { Table as TableType } from '@tanstack/table-core';
interface DataTablePaginationProps<Data> {
    table: TableType<Data>;
}
export declare const DataTablePagination: <Data>({ table, }: DataTablePaginationProps<Data>) => import("react").JSX.Element;
export {};
