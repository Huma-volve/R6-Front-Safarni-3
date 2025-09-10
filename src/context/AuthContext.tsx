import { createContext, useContext, useState, type ReactNode } from "react";

import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import type { IContextType, IUserInfo } from "@/types";

const INITIAL_USER: IUserInfo = {
    name: "",
    email: "",
    phone: "",
    country: "",
    image: "",
};

const Authcontext = createContext<IContextType>({
    token: null,
    setToken: () => {},
    user: INITIAL_USER,
    setUser: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useLocalStorageState(null, "token");
    const [user, setUser] = useState(INITIAL_USER);

    const value = {
        token,
        setToken,
        user,
        setUser,
    };

    return (
        <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    const context = useContext(Authcontext);
    if (!context)
        throw new Error("useAuthContext was used outside AuthProvider");
    return context;
}

export default AuthProvider;
