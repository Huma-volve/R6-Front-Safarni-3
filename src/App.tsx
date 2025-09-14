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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
