import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <main className="p-3 container mx-auto overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default PageLayout;
