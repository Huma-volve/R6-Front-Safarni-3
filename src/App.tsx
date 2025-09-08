import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PageLayout from "./pages/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
