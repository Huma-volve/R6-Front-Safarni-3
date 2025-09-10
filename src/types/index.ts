import type { Dispatch, SetStateAction } from "react";

export type INewUser = {
    name: string;
    email: string;
    password: string;
};

export type IUserCredentials = {
    email: string;
    password: string;
};

export type IUserInfo = {
    name: string;
    email: string;
    phone: string;
    country: string;
    image: string;
};

export type IContextType = {
    token: string | null;
    setToken: Dispatch<SetStateAction<null>>;
    user: IUserInfo;
    setUser: Dispatch<SetStateAction<IUserInfo>>;
};
