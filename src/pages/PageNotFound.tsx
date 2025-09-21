import { useNavigate } from "react-router";

import AppButton from "@/components/shared/AppButton";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-96 flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold text-red-500">404</h1>
            <p className="text-lg font-medium">page not found</p>
            <div>
                <AppButton onClick={() => navigate("/home")} variant="outline">
                    Go to Home page
                </AppButton>
            </div>
        </div>
    );
};

export default PageNotFound;
