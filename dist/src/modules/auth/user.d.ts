import { UserInfo as AuthUserInfo } from '@firebase/auth-types';
import { Nil } from '../../utils/misc';
export declare const getUserInfo: (user: AuthUserInfo) => {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
};
export type UserInfo = ReturnType<typeof getUserInfo>;
export declare const getUserName: (user: {
    displayName?: Nil<string>;
    email?: Nil<string>;
    uid?: Nil<string>;
}) => Nil<string>;
