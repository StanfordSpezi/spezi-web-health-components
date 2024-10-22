import { CellContext } from '@tanstack/react-table';
import { Nil } from '../../utils/misc';
export declare const dateColumn: <T>(props: CellContext<T, Nil<string | Date>>) => string;
export declare const dateTimeColumn: <T>(props: CellContext<T, Nil<string | Date>>) => string;
