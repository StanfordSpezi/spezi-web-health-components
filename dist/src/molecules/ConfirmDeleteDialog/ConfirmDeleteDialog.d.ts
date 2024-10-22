import { ComponentProps, MouseEventHandler, ReactNode } from 'react';
import { Dialog } from '../../components/Dialog';
interface ConfirmDeleteDialogProps extends ComponentProps<typeof Dialog> {
    /**
     * Name of distinctive item identifier
     * It allows user to see what they're deleting right before confirming
     * @example "example@example.com"
     * */
    itemName?: ReactNode;
    /**
     * Name of deleted entity model name
     * @example "user"
     * */
    entityName?: ReactNode;
    onDelete: MouseEventHandler;
}
export declare const ConfirmDeleteDialog: ({ entityName, itemName, onDelete, ...props }: ConfirmDeleteDialogProps) => import("react").JSX.Element;
export {};
