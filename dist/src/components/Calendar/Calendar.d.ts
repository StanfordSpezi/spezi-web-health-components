import { DayPickerSingleProps } from 'react-day-picker';
export type CalendarProps = Omit<DayPickerSingleProps, 'onSelect'> & {
    showTimePicker?: boolean;
    onSelect?: (date: Date | undefined) => void;
};
export declare const Calendar: ({ className, classNames, showOutsideDays, selected, showTimePicker, onSelect, ...props }: CalendarProps) => import("react").JSX.Element;
