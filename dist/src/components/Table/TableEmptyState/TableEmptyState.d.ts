import { EmptyStateProps } from '../../EmptyState';
interface TableEmptyStateProps extends EmptyStateProps {
    colSpan: number;
}
export declare const TableEmptyState: ({ colSpan, ...props }: TableEmptyStateProps) => import("react").JSX.Element;
export {};
