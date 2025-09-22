import type { ITour } from "@/types";
import PagePagination from "./PagePagination";
import TourCardHighlight from "./TourCardHighlight";
import TourCardPreview from "@/pages/compare/components/TourCardPreview";

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
    tourCardType?: "highlight" | "preview";
};

function ToursList({
    tours,
    location,
    numPages,
    currentPage,
    links,
    numResults,
    tourCardType = "highlight",
}: ToursResultsProps) {
    return (
        <div className="my-6 max-w-7xl">
            <header className="flex items-center gap-2">
                <h1 className="font-semibold text-lg">{location}</h1>
                <p className="text-gray-600 text-sm">
                    {numResults} Result{numResults > 1 ? "s" : ""}
                </p>
            </header>
            <ul className="flex flex-wrap gap-4 py-4">
                {tours.map((tour: ITour) =>
                    tourCardType === "highlight" ? (
                        <TourCardHighlight tour={tour} key={tour.id} />
                    ) : (
                        <TourCardPreview tour={tour} key={tour.id} />
                    )
                )}
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
