import { User } from '@firebase/auth-types';
import { Auth } from 'firebase/auth';
/**
 * Returns currently authenticated user
 * null = no user is authenticated
 * undefined = initial state
 * */
export declare const useAuthUser: (auth: Auth) => User | null | undefined;
