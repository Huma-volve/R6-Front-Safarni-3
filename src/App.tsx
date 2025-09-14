import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {
  PageLayout,
  ErrorPage,
  HomePage,
  FavoritePage,
  ComparePage,
  MapsPage,
  SearchPage,
  FilterPage,
  WelcomePage,
  CheckoutPage,
  SuccessPage,
  CheckoutLayout,
  DestinationPage,
} from "./pages";
import { FlightPage } from "./pages/flight-booking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import PageLayout from "./pages/PageLayout";
import Search from "./pages/search/Search";
import Filter from "./pages/filter/Filter";
import FilterResults from "./pages/filter/FilterResults";

const router = createBrowserRouter([
  { path: "welcome", element: <WelcomePage /> },
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "favorite",
        element: <FavoritePage />,
      },
      {
        path: "compare",
        element: <ComparePage />,
      },
      {
        path: "maps",
        element: <MapsPage />,
      },
      {
        path: "filter",
        element: <FilterPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "flight",
        element: <FlightPage />,
      },
      {
        path: "checkout",
        element: <CheckoutLayout />,
        children: [
          {
            path: "",
            element: <CheckoutPage />,
          },
          {
            path: "success",
            element: <SuccessPage />,
          },
        ],
      },
      {
        path: "tours/:id",
        element: <DestinationPage />,
      },
      {
        path: "not-found",
        element: <ErrorPage />,
      },
    ],
  },
    {
        element: (
            <ProtectedRoute>
                <PageLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/filter",
                element: <Filter />,
            },
            {
                path: "/filter-results",
                element: <FilterResults />,
            },
        ],
    },
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
]);

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
