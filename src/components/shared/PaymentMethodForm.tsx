import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import AppButton from "./AppButton";

const formSchema = z.object({
    paymentmehtod: z.string(),
});

type PaymentOption = {
    label: string;
    val: string;
    icon: string;
};

export default function PaymentMethodForm({
    setFormType,
    paymentOptionsArr,
}: {
    setFormType: (value: string) => void;
    paymentOptionsArr: PaymentOption[];
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setFormType(values.paymentmehtod);
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
                <FormField
                    control={form.control}
                    name="paymentmehtod"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormControl className="flex-col lg:flex-row">
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    className="flex mb-6 "
                                >
                                    {paymentOptionsArr.map(
                                        ({ label, val, icon }) => (
                                            <FormItem
                                                key={val}
                                                className={`flex items-center py-2 px-4 rounded-full cursor-pointer text-gray-600 transition-colors ${
                                                    field.value === val
                                                        ? "bg-blue-50"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value={val}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-medium text-gray-600 text-2xl cursor-pointer peer-checked:bg-blue-500  transition-colors">
                                                    <img
                                                        src={icon}
                                                        alt="payment method"
                                                    />
                                                    {label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    )}
                                </RadioGroup>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AppButton type="submit">Continue</AppButton>
            </form>
        </Form>
    );
}
