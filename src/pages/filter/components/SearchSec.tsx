import type z from "zod";
import type { UseFormReturn } from "react-hook-form";

import SearchInput from "@/components/shared/SearchInput";
import FilterSecContainer from "./FilterSecContainer";
import type { filterValidationSchema } from "@/lib/validation";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { X } from "lucide-react";

type LocationSecProps = {
    form: UseFormReturn<z.infer<typeof filterValidationSchema>>;
};

function SearchSec({ form }: LocationSecProps) {
    return (
        <FilterSecContainer title="Location">
            <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                    <FormItem>
                        <FormControl className="flex flext-wrap gap-2">
                            <SearchInput
                                searchKey={field.value}
                                onSetSearchKey={field.onChange}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            {form.getValues().search !== "" && (
                <div className="flex items-center gap-1 mt-4">
                    <button
                        className="cursor-pointer hover:scale-120 transition-all"
                        onClick={() => form.setValue("search", "")}
                    >
                        <X size={16} />
                    </button>
                    <p>{form.watch().search}</p>
                </div>
            )}
        </FilterSecContainer>
    );
}

export default SearchSec;
