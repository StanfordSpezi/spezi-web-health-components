import { ReactNode } from 'react';
import { Notification as NotificationType } from './NotificationContext';
export interface NotificationProps {
    notification: NotificationType;
    children: ReactNode;
    className?: string;
    asChild?: boolean;
}
export declare const Notification: ({ notification, children, className, asChild, }: NotificationProps) => import("react").JSX.Element;
