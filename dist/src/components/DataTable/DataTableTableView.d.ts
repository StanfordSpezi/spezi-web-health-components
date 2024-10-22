import { MouseEvent } from 'react';
import { DataTableViewProps } from './DataTable';
export interface DataTableTableViewSpecificProps<Data> {
    onRowClick?: (data: Data, event: MouseEvent) => void;
    /**
     * Determines whether event is valid row click. Some table rows include interactive elements
     * isRowClicked allows excluding clicks that were bubbled up
     * */
    isRowClicked?: (event: MouseEvent) => boolean;
}
interface DataTableTableViewProps<Data> extends DataTableViewProps<Data>, DataTableTableViewSpecificProps<Data> {
}
export declare const DataTableTableView: <Data>({ table, entityName, onRowClick, isRowClicked, }: DataTableTableViewProps<Data>) => import("react").JSX.Element;
export {};
