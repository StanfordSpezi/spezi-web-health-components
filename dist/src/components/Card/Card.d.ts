import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
export declare const cardVariants: {};
export declare const cardVariance: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariance> {
    asChild?: boolean;
}
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
type CardTitleProps = HTMLAttributes<HTMLParagraphElement> & {
    asChild?: boolean;
};
export declare const CardTitle: ({ className, asChild, ...props }: CardTitleProps) => import("react").JSX.Element;
type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
export declare const CardHeader: ({ className, ...props }: CardHeaderProps) => import("react").JSX.Element;
export {};
