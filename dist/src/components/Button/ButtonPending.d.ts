import { HTMLAttributes } from 'react';
import { ButtonProps } from '../Button';
interface ButtonPendingProps extends HTMLAttributes<HTMLSpanElement>, Pick<ButtonProps, 'size'> {
    isPending?: boolean;
}
/**
 * Utility to compose button with pending state
 * It's separated from Button to prevent redundant markup when unnecessary
 * */
export declare const ButtonPending: import('react').ForwardRefExoticComponent<ButtonPendingProps & import('react').RefAttributes<HTMLSpanElement>>;
export {};
