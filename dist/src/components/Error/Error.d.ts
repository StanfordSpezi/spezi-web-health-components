import { HTMLProps, ReactNode } from 'react';
interface ErrorProps extends HTMLProps<HTMLParagraphElement> {
    checkEmpty?: boolean;
    children?: ReactNode;
    className?: string;
    id?: string;
}
export declare const Error: import('react').ForwardRefExoticComponent<Omit<ErrorProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
export {};
