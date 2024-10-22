import { Header } from '@tanstack/react-table';
import { ReactNode } from 'react';
interface ToggleSortButtonProps<Data> {
    children?: ReactNode;
    header: Header<Data, unknown>;
}
export declare const ToggleSortButton: <Data>({ children, header, }: ToggleSortButtonProps<Data>) => import("react").JSX.Element;
export {};
