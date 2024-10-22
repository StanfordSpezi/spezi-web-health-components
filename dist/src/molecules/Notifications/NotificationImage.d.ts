import { HTMLProps } from 'react';
import { Nil } from '../../utils/misc';
type NotificationImageProps = Omit<HTMLProps<HTMLImageElement>, 'src'> & {
    src: Nil<string>;
};
export declare const NotificationImage: ({ alt, src, className, ...props }: NotificationImageProps) => import("react").JSX.Element;
export {};
