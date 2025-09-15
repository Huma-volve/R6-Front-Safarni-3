import type { UseFormReturn } from "react-hook-form";
import { Building2, CarFront, Kayak, ShipWheel } from "lucide-react";
import type z from "zod";

import PillLabel from "@/components/shared/PillLabel";
import FilterSecContainer from "./FilterSecContainer";
import type { filterValidationSchema } from "@/lib/validation";
import type { ReactNode } from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type IAdventureStyle = {
    id: "adventureTravel" | "cityBreaks" | "waterActivity" | "roadTrips";
    icon: ReactNode;
    label: string;
};

const items: IAdventureStyle[] = [
    {
        id: "adventureTravel",
        icon: <ShipWheel />,
        label: "Adventure Travel",
    },
    {
        id: "cityBreaks",
        icon: <Building2 />,
        label: "City Breaks",
    },
    {
        id: "waterActivity",
        icon: <Kayak />,
        label: "Water Activity",
    },
    {
        id: "roadTrips",
        icon: <CarFront />,
        label: "Road Trips",
    },
] as const;

type AdventureStyleSecProps = {
    form: UseFormReturn<z.infer<typeof filterValidationSchema>>;
};

function AdventureStyleSec({ form }: AdventureStyleSecProps) {
    return (
        <FilterSecContainer title="Adventure Style" isMultiSelect={true}>
            <FormField
                control={form.control}
                name="adventureStyle"
                render={({ field }) => (
                    <FormItem className="flex flex-wrap items-center gap-2 justify-evenly">
                        {items.map((item: IAdventureStyle) => (
                            <FormItem key={item.id}>
                                <FormControl>
                                    <Checkbox
                                        value={item.id}
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([
                                                      ...field.value,
                                                      item.id,
                                                  ])
                                                : field.onChange(
                                                      field.value?.filter(
                                                          (value: string) =>
                                                              value !== item.id
                                                      )
                                                  );
                                        }}
                                        className="hidden"
                                    />
                                </FormControl>
                                <PillLabel
                                    isSelected={field.value?.includes(item.id)}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </PillLabel>
                            </FormItem>
                        ))}
                    </FormItem>
                )}
            />
        </FilterSecContainer>
    );
}

export default AdventureStyleSec;
