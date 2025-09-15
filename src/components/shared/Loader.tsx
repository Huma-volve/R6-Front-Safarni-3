import { LoaderCircle } from "lucide-react";

function Loader() {
    return (
        <div className="w-full flex items-center justify-center mt-40">
            <LoaderCircle className="animate-spin text-blue-700" size={40} />
        </div>
    );
}

export default Loader;
