import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
export declare const buttonVariants: {
    variant: {
        default: string;
        outline: string;
        outlineBg: string;
        secondary: string;
        ghost: string;
        ghostPrimary: string;
        destructive: string;
        link: string;
    };
    size: {
        xs: string;
        default: string;
        sm: string;
        lg: string;
        round: string;
    };
};
export declare const buttonVariance: (props?: ({
    variant?: "secondary" | "destructive" | "link" | "default" | "outline" | "outlineBg" | "ghost" | "ghostPrimary" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "round" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariance> {
    asChild?: boolean;
    isPending?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
