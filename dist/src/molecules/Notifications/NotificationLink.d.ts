import { NotificationProps } from './Notification';
interface NotificationLinkProps extends Omit<NotificationProps, 'asChild'> {
    href: string;
}
export declare const NotificationLink: ({ notification, children, href, }: NotificationLinkProps) => import("react").JSX.Element;
export {};
