import noResultsImg from "@/assets/images/no-results.png";
import { Link } from "react-router";
import AppButton from "./AppButton";

function NoResults() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 mt-10">
            <img
                src={noResultsImg}
                alt="No results found"
                className="w-40 mb-2"
            />
            <p className="text-blue-800 font-medium">No results found</p>
            <Link to="/home">
                <AppButton>Go back to home page</AppButton>
            </Link>
        </div>
    );
}

export default NoResults;
