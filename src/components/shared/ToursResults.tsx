import type { IFilterTour } from "@/types";
import { useGetTours } from "@/lib/queries/queries";
import NoResults from "@/components/shared/NoResults";
import Loader from "@/components/shared/Loader";
import ErrorMsg from "@/components/shared/ErrorMsg";
import ToursList from "@/components/shared/ToursList";

type ToursResultsProps = {
    filter: IFilterTour;
};

function ToursResults({ filter }: ToursResultsProps) {
    const {
        isPending: isLoadingTours,
        data: tours,
        error,
    } = useGetTours(filter);

    return (
        <>
            {isLoadingTours ? (
                <Loader />
            ) : tours.meta.total === 0 ? (
                <NoResults />
            ) : error ? (
                <ErrorMsg msg={error.message} />
            ) : (
                <ToursList
                    tours={tours.data}
                    location={filter.search || "All tours"}
                    numPages={tours.meta.last_page}
                    currentPage={tours.meta.current_page}
                    links={tours.links}
                    numResults={tours.meta.total}
                />
            )}
        </>
    );
}

export default ToursResults;
