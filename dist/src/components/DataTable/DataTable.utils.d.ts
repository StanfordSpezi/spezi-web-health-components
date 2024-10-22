import { RankingInfo } from '@tanstack/match-sorter-utils';
import { FilterFn } from '@tanstack/react-table';
import { TableOptions } from '@tanstack/table-core';
import { PartialSome } from '../../utils/misc';
declare module '@tanstack/react-table' {
    interface FilterFns {
        fuzzy: FilterFn<unknown>;
    }
    interface FilterMeta {
        itemRank: RankingInfo;
    }
}
export declare const fuzzyFilter: FilterFn<unknown>;
export interface UseDataTableProps<Data> extends PartialSome<TableOptions<Data>, 'getCoreRowModel' | 'filterFns'> {
    pageSize?: number;
}
export declare const useDataTable: <Data>({ columns, data, pageSize, state, initialState, ...props }: UseDataTableProps<Data>) => {
    globalFilter: string;
    setGlobalFilter: import('react').Dispatch<import('react').SetStateAction<string>>;
    setGlobalFilterDebounced: import('use-debounce').DebouncedState<(value: string) => void>;
    table: import('@tanstack/react-table').Table<Data>;
};
