import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router";

import AppButton from "@/components/shared/AppButton";
import { Form } from "@/components/ui/form";
import { filterValidationSchema } from "@/lib/validation";
import SortBySec from "./components/SortBySec";
import BudgetRangeSec from "./components/BudgetRangeSec";
import AdventureStyleSec from "./components/AdventureStyleSec";
import RatingSec from "./components/RatingSec";
import SearchSec from "./components/SearchSec";
import FilterLayout from "./FilterLayout";
import { RESULTS_PER_PAGE } from "@/constants";

function Filter() {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof filterValidationSchema>>({
        resolver: zodResolver(filterValidationSchema),
        defaultValues: {
            sortBy: "",
            priceRange: [150, 450],
            adventureStyle: [],
            search: "",
            minRating: "0",
        },
    });

    function onSubmit(values: z.infer<typeof filterValidationSchema>) {
        const { sortBy, priceRange, adventureStyle, search, minRating } =
            values;

        navigate(
            `/filter-results?sort_by=${sortBy}&min_price=${
                priceRange[0]
            }&max_price=${priceRange[1]}&adventure_style=${JSON.stringify(
                adventureStyle
            )}&search=${search}&min_rating=${minRating}&per_page=${RESULTS_PER_PAGE}&page=1`
        );
    }

    function handleResetFilterForm() {
        form.reset();
    }

    return (
        <FilterLayout>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <SortBySec form={form} />
                    <BudgetRangeSec form={form} />
                    <AdventureStyleSec form={form} />
                    <SearchSec form={form} />
                    <RatingSec form={form} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 my-10">
                        <AppButton
                            type="reset"
                            variant="outline"
                            onClick={handleResetFilterForm}
                        >
                            Clear All
                        </AppButton>
                        <AppButton type="submit">Find Tours</AppButton>
                    </div>
                </form>
            </Form>
        </FilterLayout>
    );
}

export default Filter;
