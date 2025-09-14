import { Navigate, Outlet, useLocation } from "react-router";

import Logo from "./components/Logo";
import GoBackButton from "../../components/shared/GoBackButton";
import { useAuthContext } from "@/context/AuthContext";

function AuthLayout() {
    const { token } = useAuthContext();
    const { pathname } = useLocation();
    const IsGoBackButtonShown = pathname !== "/" && pathname !== "/done";

    if (token) return <Navigate to="/home" replace />;

    return (
        <div className="h-screen px-4 sm:py-4 sm:px-12 md:px-20 flex flex-col max-w-7xl mx-auto">
            <header
                className={`hidden sm:flex ${
                    IsGoBackButtonShown ? "justify-between" : "justify-end"
                }`}
            >
                {IsGoBackButtonShown && <GoBackButton />}
                <Logo />
            </header>
            <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-center">
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;
