import { Row } from '@tanstack/react-table';
import { ReactNode } from 'react';
import { DataTableViewProps } from './DataTable';
interface DataTableBasicViewProps<Data> extends DataTableViewProps<Data> {
    children: (rows: Array<Row<Data>>) => ReactNode;
}
/**
 * Handles basic states for custom DataTable views
 *
 * @example See `DataTable.stories#CustomView`
 * */
export declare const DataTableBasicView: <Data>({ table, entityName, children, }: DataTableBasicViewProps<Data>) => import("react").JSX.Element;
export {};
