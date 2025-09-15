import type { ReactNode } from "react";
import { Navigate } from "react-router";

import { useAuthContext } from "@/context/AuthContext";

type ProtectedRouteProps = {
    children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { token } = useAuthContext();

    return !token ? <Navigate to="/" replace /> : children;
}

export default ProtectedRoute;
