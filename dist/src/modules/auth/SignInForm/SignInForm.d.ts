import { Auth, AuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
export interface SignInFormProps {
    auth: Auth;
    providers: Array<{
        provider: AuthProvider;
        name: string;
    }>;
    enableEmailPassword: boolean;
    signInWithPopup: typeof signInWithPopup;
    signInWithEmailAndPassword: typeof signInWithEmailAndPassword;
    className?: string;
}
export declare const SignInForm: ({ auth, providers, enableEmailPassword, className, signInWithPopup, signInWithEmailAndPassword, }: SignInFormProps) => import("react").JSX.Element;
