import { ReactElement, ReactNode } from 'react';
import { ControllerFieldState, ControllerProps, ControllerRenderProps, ErrorOption, FieldPath, FieldValues, UseFormStateReturn } from 'react-hook-form';
export type FieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
    render: ({ field, fieldState, formState, }: {
        field: ControllerRenderProps<TFieldValues, TName> & {
            id: string;
            'aria-invalid': boolean;
            'aria-errormessage': string;
        };
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    }) => ReactElement;
    label?: ReactNode;
    className?: string;
    checkEmptyError?: boolean;
    error?: ErrorOption;
};
/**
 * Registers form field with correct error and label handler built-in
 * */
export declare const Field: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ label, name, className, checkEmptyError, render, error: errorProp, ...props }: FieldProps<TFieldValues, TName>) => import("react").JSX.Element;
