import { UrlObject } from 'url';
/**
 * Negates value
 * Useful for functional patterns and state callbacks
 * */
export declare const not: (value: unknown) => boolean;
export type InitialState<T> = T | (() => T);
export type Nil<T> = T | null | undefined;
export type Url = string | UrlObject;
/**
 * Make some fields in the object partial
 *
 * @example
 * PartialSome<{ a: string, b: string, c: string }, 'a'> => { a?: string, b: string, c: string }
 * */
export type PartialSome<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/**
 * Handles copying to clipboard and show confirmation toast
 * */
export declare const copyToClipboard: (value: string) => Promise<void>;
/**
 * Makes first letter uppercased
 * @example upperFirst("lorem ipsum") => "Lorem ipsum"
 * */
export declare const upperFirst: (value: string) => string;
/**
 * Generates array with specified length
 * */
export declare const times: <T>(length: number, callback: (index: number) => T) => T[];
/**
 * Utility to dynamically resolve strategy pattern
 */
export declare const strategy: <T extends string | number | symbol, F>(record: Record<T, F>, enumValue: T) => Record<T, F>[T];
export declare const ensureString: (value: unknown) => string | undefined;
