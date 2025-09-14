import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

function GoBackButton() {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate(-1)}
            className="self-end bg-gray-100 rounded-full w-10 h-10 cursor-pointer hover:bg-gray-200"
        >
            <ChevronLeft className="text-gray-800" size={32} />
        </Button>
    );
}

export default GoBackButton;
