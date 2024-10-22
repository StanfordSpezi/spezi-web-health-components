import { Nil } from './misc';
type DateInput = Date | string | number;
export declare const formatDate: (value: DateInput) => string;
export declare const formatNilDate: (value: Nil<DateInput>) => string | null;
export declare const formatDateTime: (value: DateInput) => string;
export declare const formatNilDateTime: (value: Nil<DateInput>) => string | null;
export {};
