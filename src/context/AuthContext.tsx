import { createContext, useContext, type ReactNode } from "react";

import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { TOKEN } from "@/constants";
import type { IContextType } from "@/types";

const Authcontext = createContext<IContextType>({
    token: null,
    setToken: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useLocalStorageState(null, TOKEN);

    const value = {
        token,
        setToken,
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
