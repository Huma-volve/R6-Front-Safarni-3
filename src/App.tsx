import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AuthLayout from "./pages/authentication/AuthLayout";
import GetStarted from "./pages/authentication/GetStarted";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import ForgetPassword from "./pages/authentication/ForgetPassword";
import Otp from "./pages/authentication/Otp";
import NewPassword from "./pages/authentication/NewPassword";
import Done from "./pages/authentication/Done";
import Home from "./pages/home/Home";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            { path: "/", element: <GetStarted /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/forget-password", element: <ForgetPassword /> },
            { path: "/otp", element: <Otp /> },
            { path: "/new-password", element: <NewPassword /> },
            { path: "/done", element: <Done /> },
        ],
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
