import { Star } from "lucide-react";
import type z from "zod";
import type { UseFormReturn } from "react-hook-form";

import PillLabel from "@/components/shared/PillLabel";
import FilterSecContainer from "./FilterSecContainer";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { filterValidationSchema } from "@/lib/validation";

type RatingSecProps = {
    form: UseFormReturn<z.infer<typeof filterValidationSchema>>;
};

function RatingSec({ form }: RatingSecProps) {
    return (
        <FilterSecContainer title="Rating" addSeparator={false}>
            <FormField
                control={form.control}
                name="minRating"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue="0"
                                className="flex flex-wrap items-center gap-2 justify-evenly"
                            >
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FormItem
                                        className="flex items-center gap-3"
                                        key={i}
                                    >
                                        <FormControl>
                                            <RadioGroupItem
                                                value={`${i + 1}`}
                                                className="hidden"
                                            />
                                        </FormControl>
                                        <PillLabel
                                            isSelected={
                                                field.value === `${i + 1}`
                                            }
                                        >
                                            <Star size={16} />
                                            <span className="font-medium text-sm sm:text-xl">
                                                {i + 1}
                                            </span>
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

export default RatingSec;
