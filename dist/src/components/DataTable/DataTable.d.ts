import { Table as TableType } from '@tanstack/table-core';
import { ReactNode } from 'react';
import { DataTableTableViewSpecificProps } from './DataTableTableView';
import { UseDataTableProps } from './DataTable.utils';
export type DataTableViewProps<Data> = {
    table: TableType<Data>;
} & Pick<DataTableProps<Data>, 'entityName'>;
type ViewRenderProp<Data> = (props: DataTableViewProps<Data>) => ReactNode;
export interface DataTableProps<Data> extends UseDataTableProps<Data> {
    className?: string;
    /**
     * Name of the presented data entity
     * Used inside empty states, placeholders
     * Provide pluralized and lowercased
     * @example "users"
     * */
    entityName?: string;
    header?: ReactNode | ViewRenderProp<Data>;
    /**
     * Render props pattern to define different type of views than standard DataTableView
     * */
    children?: ViewRenderProp<Data>;
    bordered?: boolean;
    /**
     * Hides DataTable features, like header or pagination if not required
     * */
    minimal?: boolean;
    tableView?: DataTableTableViewSpecificProps<Data>;
}
export declare const DataTable: <Data>({ className, columns, entityName, data, pageSize, header, children, bordered, minimal, tableView, ...props }: DataTableProps<Data>) => import("react").JSX.Element;
export {};
