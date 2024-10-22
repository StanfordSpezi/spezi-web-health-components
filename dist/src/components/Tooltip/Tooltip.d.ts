import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
export declare const TooltipProvider: import('react').FC<RadixTooltip.TooltipProviderProps>;
export declare const TooltipRoot: import('react').FC<RadixTooltip.TooltipProps>;
export declare const TooltipTrigger: import('react').ForwardRefExoticComponent<RadixTooltip.TooltipTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const TooltipContent: import('react').ForwardRefExoticComponent<Omit<RadixTooltip.TooltipContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
interface TooltipProps extends Omit<ComponentPropsWithoutRef<typeof RadixTooltip.Root>, 'children'>, Pick<ComponentPropsWithoutRef<typeof RadixTooltip.Content>, 'sideOffset' | 'className' | 'side'> {
    children?: ReactNode;
    tooltip?: ReactNode;
}
export declare const Tooltip: ({ children, tooltip, className, sideOffset, side, delayDuration, ...rootProps }: TooltipProps) => import("react").JSX.Element;
export {};
