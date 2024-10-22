import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
interface EmailPasswordFormProps {
    auth: Auth;
    signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
}
export declare const EmailPasswordForm: ({ auth, signInWithEmailAndPassword, }: EmailPasswordFormProps) => import("react").JSX.Element;
export {};
