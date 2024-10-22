import { HTMLProps } from 'react';
export interface RangeCounterProps extends Omit<HTMLProps<HTMLParagraphElement>, 'start'> {
    all: number;
    end: number;
    start: number;
}
/**
 * Shows range of displayed items
 * Useful for showing pagination or filter results
 * */
export declare const RangeCounter: ({ all, end, start, className, ...props }: RangeCounterProps) => import("react").JSX.Element;
