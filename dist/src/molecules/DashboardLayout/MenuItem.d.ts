import { ReactNode } from 'react';
interface MenuItemProps {
    href: string;
    isActive?: boolean;
    isHighlighted?: boolean;
    icon?: ReactNode;
    label?: string;
}
export declare const MenuItem: ({ href, icon, isActive, label, isHighlighted, }: MenuItemProps) => import("react").JSX.Element;
export {};
