import "leaflet/dist/leaflet.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {
    RoomDetails,
    RoomList,
    HotelList,
    CarID,
    CarMap,
    PageLayout,
    PageNotFound,
    Home,
    Favorite,
    ComparePage,
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
    UserInfo,
    UserBooking,
    UserAccount,
    Profile,
    FlightBookingPage,
    AvailableFlightsPage,
    AvailableSeatsPage,
    ConfirmFlightPage,
    FlightPage,
    Cars,
    InteractiveMap,
    InternalTour,
} from "./pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthLayout from "./pages/authentication/AuthLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Toaster } from "sonner";

const router = createBrowserRouter([
    {
        element: (
            <ProtectedRoute>
                <PageLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "*", element: <PageNotFound /> },
            { path: "/home", element: <Home /> },
            { path: "/search", element: <Search /> },
            { path: "/filter", element: <Filter /> },
            { path: "/filter-results", element: <FilterResults /> },
            { path: "/compare", element: <ComparePage /> },
            { path: "/favorite", element: <Favorite /> },
            { path: "/flight", element: <FlightPage /> },
            { path: "/flight-booking", element: <FlightBookingPage /> },
            { path: "/available-flights", element: <AvailableFlightsPage /> },
            { path: "/flight/confirm", element: <ConfirmFlightPage /> },
            { path: "/profile", element: <Profile /> },
            { path: "/userInfo", element: <UserInfo /> },
            { path: "/userBooking", element: <UserBooking /> },
            { path: "/userAccount", element: <UserAccount /> },
            { path: "/cars/:id", element: <CarID /> },
            { path: "/car-map", element: <CarMap /> },
            { path: "/hotels", element: <HotelList /> },
            { path: "/hotel/rooms/:hotelId", element: <RoomList /> },
            { path: "/room/:roomId", element: <RoomDetails /> },
            { path: "/cars", element: <Cars /> },
            { path: "/tours/:id", element: <DestinationPage /> },
            { path: "/available-seats", element: <AvailableSeatsPage /> },
            { path: "/map", element: <InteractiveMap /> },
            { path: "/internal-tour", element: <InternalTour /> },
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
                element: <AuthLayout />,
                errorElement: <PageNotFound />,
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
        ],
    },
]);

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster position="top-center" />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
