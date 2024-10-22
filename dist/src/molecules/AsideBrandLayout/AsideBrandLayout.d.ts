import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface AsideBrandLayoutProps extends ButtonHTMLAttributes<HTMLDivElement> {
    aside?: ReactNode;
}
export declare const AsideBrandLayout: import('react').ForwardRefExoticComponent<AsideBrandLayoutProps & import('react').RefAttributes<HTMLDivElement>>;
