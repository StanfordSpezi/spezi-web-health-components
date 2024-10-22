import { ReactNode } from 'react';
type CopyTextProps = ({
    children: string;
    value?: string;
} | {
    children: ReactNode;
    value: string;
}) & {
    className?: string;
};
/**
 * Displays copiable text
 * Useful for displaying truncated ids in tables
 * */
export declare const CopyText: ({ children, className, value }: CopyTextProps) => import("react").JSX.Element;
export {};
