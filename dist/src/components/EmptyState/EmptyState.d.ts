import { HTMLProps, ReactNode } from 'react';
export interface EmptyStateProps extends HTMLProps<HTMLDivElement> {
    /**
     * Name of the presented missing data entity
     * Provide pluralized and lowercased
     * @example "users"
     * */
    entityName?: ReactNode;
    /**
     * Provide text filter that data is filtered by
     * */
    textFilter?: string;
    /**
     * Provide whether data is filtered by other filters, excluding global text filter
     * */
    hasFilters?: boolean;
}
export declare const EmptyState: ({ entityName, textFilter, hasFilters, className, children, ...props }: EmptyStateProps) => import("react").JSX.Element;
