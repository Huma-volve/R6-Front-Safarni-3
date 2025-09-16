import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import api from './Services/api';
import type { Car } from './types/car';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {
    RoomDetails,
    RoomList,
    HotelList,
    CarList,
      BrandList,
      CarID,
      CarMap,
    PageLayout,
    ErrorPage,
    Home,
    Favorite,
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
    UserInfo,
    UserBooking,
    UserAccount,
    Profile,
} from "./pages";

import { FlightPage } from "./pages/flight-booking";
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
                element: <Favorite />,
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
                path: "flight",
                element: <FlightPage />,
            },
            { path: "profile", element: <Profile /> },
            { path: "userInfo", element: <UserInfo /> },
            { path: "userBooking", element: <UserBooking /> },
            { path: "userAccount", element: <UserAccount /> },
            { path: "favorite", element: <Favorite /> },
             { path:'/cars/:id' ,element : <CarID/>},
          {path:'/car-map' ,element: <CarMap/>},
            {path:'/hotels' ,element:<HotelList/>},
          {path:'/hotel/rooms/:hotelId', element:<RoomList/>},
          {path:'/room/:roomId', element:<RoomDetails/>},
          {path:'/cars'
            , element:
             <div className='w-4/5 m-auto'>

                 <BrandList/>
                 <CarList/>
             </div>
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
  const [car, setCar] = useState<Car | null>(null);
   useEffect(() => {
  api.get('/cars/1')
    .then(res => setCar(res.data))
    .catch(console.error);
}, []);
   
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster position="top-center" />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
   
export default App;
