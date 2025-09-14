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
};

const items: ISortBy[] = [
    {
        id: "lowToHigh",
        label: "Price (Low to High)",
    },
    {
        id: "highToLow",
        label: "Price (High to Low)",
    },
    {
        id: "biggestDeals",
        label: "Biggest Deals (Highest Saving)",
    },
    {
        id: "mostReviewed",
        label: "Most Reviewed",
    },
    {
        id: "mostPopular",
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
                                                value={item.id}
                                                className="hidden"
                                            />
                                        </FormControl>
                                        <PillLabel
                                            isSelected={field.value === item.id}
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
