import { UsePaginationProps } from '@nextui-org/use-pagination';
export interface LinkPaginationProps extends UsePaginationProps {
    total: number;
    /**
     * Currently selected page, 1-based
     * */
    page: number;
    getHref: (page: number) => string;
}
/**
 * Complete link-based pagination
 * */
export declare const LinkPagination: ({ total, page, getHref, showControls, ...props }: LinkPaginationProps) => import("react").JSX.Element;
