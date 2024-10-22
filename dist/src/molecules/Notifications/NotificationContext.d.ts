export interface Notification {
    isRead: boolean;
}
export declare const NotificationContext: import('react').Context<Notification | null>;
export declare const useNotificationContext: () => Notification;
