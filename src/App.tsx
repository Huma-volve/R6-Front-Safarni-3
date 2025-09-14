import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PageLayout from "./pages/PageLayout";
import Profile from "./pages/profile/Profile";
import UserInfo from "./pages/profile/UserInfo";
import UserBooking from "./pages/profile/UserBooking";
import UserAccount from "./pages/profile/UserAccount";
import UserContextProvider from "./context/UserContextProvider";
import { Toaster } from "sonner";
import FavoriteContextProvider from "./context/FavoriteContextProvider";
import Favorite from "./pages/favorite/Favorite";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {path:"profile",element:<Profile/>},
      {path:"userInfo",element:<UserInfo/>},
      {path:"userBooking",element:<UserBooking/>},
      {path:"userAccount",element:<UserAccount/>},
       {path:"favorite",element:<Favorite/>},

    ],
  },
]);

function App() {  
  return (

    <UserContextProvider>
      <FavoriteContextProvider>
         <RouterProvider router={router} />
          <Toaster position="top-center"/>
      </FavoriteContextProvider>    
    </UserContextProvider>
    );
}

export default App;
