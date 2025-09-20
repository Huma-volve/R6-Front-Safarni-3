import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

import type { ITour } from "@/types";
import ComparePlan from "./ComparePlan";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

type ComparePlansProps = {
    tours: ITour[];
};

const FormSchema = z.object({
    booking_id: z.number(),
});

function ComparePlans({ tours }: ComparePlansProps) {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            booking_id: undefined,
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const bookingData = {
            booking_id: data.booking_id,
            booking_type: "tour",
        };

        navigate("/checkout", { state: bookingData });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col"
            >
                <FormField
                    control={form.control}
                    name="booking_id"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel className="mb-4 font-medium">
                                Compare
                            </FormLabel>
                            <FormControl>
                                <RadioGroup
                                    className="flex gap-4 flex-wrap justify-center items-stretch"
                                    onValueChange={field.onChange}
                                >
                                    {tours.map((tour: ITour) => (
                                        <ComparePlan
                                            tour={tour}
                                            key={tour.id}
                                            isSelected={field.value === tour.id}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    className={` text-sm mt-8 mb-12 mx-auto w-lg max-w-full disabled:bg-gray-500 disabled:hover:bg-gray-600 disabled:focus:bg-gray-600 disabled:cursor-not-allowed cursor-pointer bg-blue-700 hover:bg-blue-800 focus-bg-blue-800`}
                    disabled={form.watch("booking_id") === undefined}
                >
                    Check Out
                </Button>
            </form>
        </Form>
    );
}

export default ComparePlans;
