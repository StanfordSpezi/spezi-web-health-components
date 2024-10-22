import { UsePaginationProps } from '@nextui-org/use-pagination';
export interface ButtonPaginationProps extends UsePaginationProps {
    total: number;
    /**
     * Currently selected page, 1-based
     * */
    page: number;
    onPageChange: (page: number) => void;
}
/**
 * Complete state-controlled pagination
 * */
export declare const ButtonPagination: ({ total, page, onPageChange, siblings, showControls, ...props }: ButtonPaginationProps) => import("react").JSX.Element;
