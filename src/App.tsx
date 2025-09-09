import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PageLayout from "./pages/PageLayout";
import InteractiveMap from "./pages/interactive-map/InteractiveMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "map",
        element: <InteractiveMap />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
