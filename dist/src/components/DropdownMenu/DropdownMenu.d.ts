import { HTMLAttributes } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
export declare const DropdownMenu: import('react').FC<RadixDropdownMenu.DropdownMenuProps>;
export declare const DropdownMenuTrigger: import('react').ForwardRefExoticComponent<RadixDropdownMenu.DropdownMenuTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const DropdownMenuGroup: import('react').ForwardRefExoticComponent<RadixDropdownMenu.DropdownMenuGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuPortal: import('react').FC<RadixDropdownMenu.DropdownMenuPortalProps>;
export declare const DropdownMenuSub: import('react').FC<RadixDropdownMenu.DropdownMenuSubProps>;
export declare const DropdownMenuRadioGroup: import('react').ForwardRefExoticComponent<RadixDropdownMenu.DropdownMenuRadioGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuSubTrigger: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuSubTriggerProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuSubContent: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuSubContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuContent: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuItem: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuItemProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuCheckboxItem: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuCheckboxItemProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuRadioItem: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuRadioItemProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuLabel: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuLabelProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuSeparator: import('react').ForwardRefExoticComponent<Omit<RadixDropdownMenu.DropdownMenuSeparatorProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const DropdownMenuShortcut: {
    ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): import("react").JSX.Element;
    displayName: string;
};
