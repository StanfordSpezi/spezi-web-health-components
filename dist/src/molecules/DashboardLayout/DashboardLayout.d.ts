import { ReactNode } from 'react';
export interface DashboardLayoutProps {
    title?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    aside?: ReactNode;
    mobile?: ReactNode;
}
export declare const DashboardLayout: ({ title, actions, children, aside, mobile, }: DashboardLayoutProps) => import("react").JSX.Element;
