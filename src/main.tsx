import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import UserContextProvider from "./context/UserContextProvider.tsx";
import FavoriteContextProvider from "./context/FavoriteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <UserContextProvider>
                <FavoriteContextProvider>
                    <App />
                </FavoriteContextProvider>
            </UserContextProvider>
        </AuthProvider>
    </StrictMode>
);
