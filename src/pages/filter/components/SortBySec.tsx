import type { UseFormReturn } from "react-hook-form";
import type z from "zod";

import PillLabel from "@/components/shared/PillLabel";
import FilterSecContainer from "./FilterSecContainer";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { filterValidationSchema } from "@/lib/validation";

type ISortBy = {
    id:
        | "lowToHigh"
        | "highToLow"
        | "biggestDeals"
        | "mostReviewed"
        | "mostPopular";
    label: string;
    value: string;
};

const items: ISortBy[] = [
    {
        id: "lowToHigh",
        value: "price&sort_order=asc",
        label: "Price (Low to High)",
    },
    {
        id: "highToLow",
        value: "price&sort_order=desc",
        label: "Price (High to Low)",
    },
    {
        id: "biggestDeals",
        value: "price",
        label: "Biggest Deals (Highest Saving)",
    },
    {
        id: "mostReviewed",
        value: "rating&sort_order=desc",
        label: "Most Reviewed",
    },
    {
        id: "mostPopular",
        value: "views&sort_order=desc",
        label: "Most Popular",
    },
] as const;

type SortBySecProps = {
    form: UseFormReturn<z.infer<typeof filterValidationSchema>>;
};

function SortBySec({ form }: SortBySecProps) {
    return (
        <FilterSecContainer title="Sort By">
            <FormField
                control={form.control}
                name="sortBy"
                render={({ field }) => (
                    <FormItem>
                        <FormControl className="flex flext-wrap gap-2">
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                                className="flex flex-wrap"
                            >
                                {items.map((item: ISortBy) => (
                                    <FormItem
                                        className="flex items-center gap-3"
                                        key={item.id}
                                    >
                                        <FormControl>
                                            <RadioGroupItem
                                                value={item.value}
                                                className="hidden"
                                            />
                                        </FormControl>
                                        <PillLabel
                                            isSelected={
                                                field.value === item.value
                                            }
                                        >
                                            {item.label}
                                        </PillLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />
        </FilterSecContainer>
    );
}

export default SortBySec;
