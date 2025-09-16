import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {
  PageLayout,
  ErrorPage,
  Home,
  FavoritePage,
  ComparePage,
  MapsPage,
  Search,
  Filter,
  GetStarted,
  CheckoutPage,
  SuccessPage,
  CheckoutLayout,
  DestinationPage,
  FilterResults,
  Login,
  Signup,
  ForgetPassword,
  Otp,
  NewPassword,
  Done,
  FlightBookingPage,
  AvailableFlightsPage,
  AvailableSeatsPage,
  ConfirmFlightPage,
} from "./pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthLayout from "./pages/authentication/AuthLayout";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
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
        path: "flight-booking",
        element: <FlightBookingPage />,
      },
      {
        path: "available-flights",
        element: <AvailableFlightsPage />,
      },
      {
        path: "available-seats",
        element: <AvailableSeatsPage />,
      },
      {
        path: "/flight/confirm",
        element: <ConfirmFlightPage />,
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
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
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
