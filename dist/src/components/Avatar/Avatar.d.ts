import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { Nil } from '../../utils/misc';
type AvatarProps = {
    className?: string;
    src?: Nil<string>;
    fallback?: ReactNode;
    name?: Nil<string>;
} & VariantProps<typeof avatarVariance>;
export declare const getInitials: (value: string) => string;
export declare const avatarVariants: {
    size: {
        sm: string;
        default: string;
        lg: string;
    };
};
export declare const avatarVariance: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const Avatar: ({ className, src, fallback, size, name, }: AvatarProps) => import("react").JSX.Element;
export {};
