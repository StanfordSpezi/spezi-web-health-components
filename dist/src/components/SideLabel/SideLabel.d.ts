import { HTMLProps, ReactNode } from 'react';
type SideLabelProps = Omit<HTMLProps<HTMLLabelElement>, 'label'> & {
    label?: ReactNode;
    reverse?: boolean;
};
/**
 * Component to use together with radio, checkbox or switch controls
 * */
export declare const SideLabel: ({ children, className, label, reverse, ...props }: SideLabelProps) => import("react").JSX.Element;
export {};
