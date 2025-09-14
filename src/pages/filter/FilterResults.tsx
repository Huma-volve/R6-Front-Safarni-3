import { useSearchParams } from "react-router";

import FilterLayout from "./FilterLayout";
import type { IFilterTour } from "@/types";
import ToursResults from "@/components/shared/ToursResults";

function FilterResults() {
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());

    const filter: IFilterTour = {
        ...params,
        min_price: +params.min_price,
        max_price: +params.max_price,
        // adventure_style: JSON.parse(params.adventure_style),
        min_rating: +params.min_rating,
    };

    return (
        <FilterLayout>
            <ToursResults filter={filter} />
        </FilterLayout>
    );
}

export default FilterResults;
