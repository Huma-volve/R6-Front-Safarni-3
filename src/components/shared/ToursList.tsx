import type { ITour } from "@/types";
import TourCard from "./TourCard";
import PagePagination from "./PagePagination";

type ToursResultsProps = {
    tours: ITour[];
    location: string;
    numPages: number;
    currentPage: number;
    links: {
        first: string;
        last: string;
        prev: string;
        next: string;
    };
    numResults: number;
};

function ToursList({
    tours,
    location,
    numPages,
    currentPage,
    links,
    numResults,
}: ToursResultsProps) {
    return (
        <div className="my-6 max-w-7xl mx-auto">
            <header className="flex items-center gap-2">
                <h1 className="font-semibold text-lg">{location}</h1>
                <p className="text-gray-600 text-sm">
                    {numResults} Result{numResults > 1 ? "s" : ""}
                </p>
            </header>
            <ul className="flex flex-wrap gap-4 p-4">
                {tours.map((tour: ITour) => (
                    <TourCard tour={tour} key={tour.id} />
                ))}
            </ul>
            {numPages > 1 && (
                <PagePagination
                    numPages={numPages}
                    currentPage={currentPage}
                    links={links}
                />
            )}
        </div>
    );
}

export default ToursList;
