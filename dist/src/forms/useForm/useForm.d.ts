import { ErrorOption, UseFormProps } from 'react-hook-form';
import { z } from 'zod';
export declare const FORM_ERROR_KEY = "FORM_ERROR";
/**
 * Wrapper over react-hook-form's useForm
 * Provides default types and custom functionalities
 * */
export declare const useForm: <Schema extends z.ZodTypeAny>({ formSchema, ...props }: UseFormProps<z.infer<Schema>> & {
    formSchema: Schema;
}) => {
    submitAsync: () => Promise<z.TypeOf<Schema>>;
    formError: ErrorOption | undefined;
    setFormError: (error: unknown, options?: Parameters<import('react-hook-form').UseFormSetError<z.TypeOf<Schema>>>[2]) => void;
    isSubmitDisabled: boolean;
    watch: import('react-hook-form').UseFormWatch<z.TypeOf<Schema>>;
    getValues: import('react-hook-form').UseFormGetValues<z.TypeOf<Schema>>;
    getFieldState: import('react-hook-form').UseFormGetFieldState<z.TypeOf<Schema>>;
    setError: import('react-hook-form').UseFormSetError<z.TypeOf<Schema>>;
    clearErrors: import('react-hook-form').UseFormClearErrors<z.TypeOf<Schema>>;
    setValue: import('react-hook-form').UseFormSetValue<z.TypeOf<Schema>>;
    trigger: import('react-hook-form').UseFormTrigger<z.TypeOf<Schema>>;
    formState: import('react-hook-form').FormState<z.TypeOf<Schema>>;
    resetField: import('react-hook-form').UseFormResetField<z.TypeOf<Schema>>;
    reset: import('react-hook-form').UseFormReset<z.TypeOf<Schema>>;
    handleSubmit: import('react-hook-form').UseFormHandleSubmit<z.TypeOf<Schema>, undefined>;
    unregister: import('react-hook-form').UseFormUnregister<z.TypeOf<Schema>>;
    control: import('react-hook-form').Control<z.TypeOf<Schema>, any>;
    register: import('react-hook-form').UseFormRegister<z.TypeOf<Schema>>;
    setFocus: import('react-hook-form').UseFormSetFocus<z.TypeOf<Schema>>;
};
