import { HTMLProps } from 'react';
interface NotificationTimeProps extends HTMLProps<HTMLTimeElement> {
    time: Date;
}
export declare const NotificationTime: ({ time, ...props }: NotificationTimeProps) => import("react").JSX.Element;
export {};
