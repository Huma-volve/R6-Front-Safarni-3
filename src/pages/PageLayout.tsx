import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PageLayout;
