import { ComponentProps } from 'react';
import { ButtonProps } from '../Button';
/**
 * Primitives to build your Pagination
 * If you're looking for batteries-included components, see ButtonPagination
 * */
export declare const Pagination: ({ className, ...props }: ComponentProps<"nav">) => import("react").JSX.Element;
export declare const PaginationContent: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & import('react').RefAttributes<HTMLUListElement>>;
export declare const PaginationItemContainer: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & import('react').RefAttributes<HTMLLIElement>>;
interface PaginationLinkProps extends ButtonProps {
    isActive?: boolean;
}
export declare const PaginationItem: ({ isActive, size, ...props }: PaginationLinkProps) => import("react").JSX.Element;
export declare const PaginationPreviousIcon: () => import("react").JSX.Element;
export declare const PaginationPrevious: ({ children, ...props }: ComponentProps<typeof PaginationItem>) => import("react").JSX.Element;
export declare const PaginationNextIcon: () => import("react").JSX.Element;
export declare const PaginationNext: ({ children, ...props }: ComponentProps<typeof PaginationItem>) => import("react").JSX.Element;
export declare const PaginationEllipsis: ({ className, ...props }: ComponentProps<"span">) => import("react").JSX.Element;
export {};
