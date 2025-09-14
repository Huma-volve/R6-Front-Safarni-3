import type z from "zod";
import type { UseFormReturn } from "react-hook-form";

import FilterSecContainer from "./FilterSecContainer";
import { Slider } from "@/components/ui/slider";
import graph from "@/assets/icons/graph.svg";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import type { filterValidationSchema } from "@/lib/validation";

type BudgetRangeSecProps = {
    form: UseFormReturn<z.infer<typeof filterValidationSchema>>;
};

function BudgetRangeSec({ form }: BudgetRangeSecProps) {
    return (
        <FilterSecContainer title="Budget Range">
            <img src={graph} alt="graph" className="mx-auto w-full" />
            <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                    <FormItem>
                        <FormControl className="flex flext-wrap gap-2">
                            <Slider
                                onValueChange={field.onChange}
                                value={field.value}
                                min={150}
                                max={450}
                                step={1}
                                className="[&_[role=slider]]:bg-blue-400 [&_[role=slider]]:border-blue-400 [&_[data-slot=slider-range]]:bg-blue-400"
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <div className="flex items-center justify-between mt-8">
                <div>
                    <p className="text-gray-500 font-medium text-sm sm:text-lg">
                        Min
                    </p>
                    <p className="text-sm sm:text-lg font-medium text-gray-600">
                        {form.watch().priceRange[0]}
                    </p>
                </div>
                <div>
                    <p className="text-gray-500 font-medium text-sm sm:text-lg">
                        Max
                    </p>
                    <p className="text-sm sm:text-lg font-medium text-gray-600">
                        {form.watch().priceRange[1]}
                    </p>
                </div>
            </div>
        </FilterSecContainer>
    );
}

export default BudgetRangeSec;
