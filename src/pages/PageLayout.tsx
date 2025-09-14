import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="p-3 lg:p-0 container mx-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
