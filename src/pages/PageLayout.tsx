import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
