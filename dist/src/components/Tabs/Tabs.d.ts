import { ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
export declare const Tabs: import('react').ForwardRefExoticComponent<TabsPrimitive.TabsProps & import('react').RefAttributes<HTMLDivElement>>;
interface TabsListContextProps {
    /**
     * Expand tabs control to occupy available width
     * */
    grow?: boolean;
}
interface TabsListProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.List>, TabsListContextProps {
}
export declare const TabsList: import('react').ForwardRefExoticComponent<TabsListProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabsTrigger: import('react').ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & import('react').RefAttributes<HTMLButtonElement>, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
export declare const TabsContent: import('react').ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
