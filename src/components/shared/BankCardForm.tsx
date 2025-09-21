import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import userIcon from "@/assets/icons/user.svg";
import emailIcon from "@/assets/icons/envelope.svg";
import windowIcon from "@/assets/icons/window.svg";
import { useNavigate } from "react-router";
import AppButton from "./AppButton";

const formSchema = z.object({
    fullname: z.string().min(1).min(2).max(20),
    email: z.string(),
    date: z.string(),
    cvv: z.union([
        z.number().int().min(0).max(999), // number up to 3 digits
        z.string().length(3), // string of exactly 3 chars
    ]),
});

const BankCardForm = ({
    paymentOptionsArr,
    cardType,
}: {
    paymentOptionsArr: {
        label: string;
        val: string;
        icon: string;
    }[];
    cardType: string;
}) => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            navigate("success");
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <>
            <ul className="flex mb-6 gap-3.5 flex-col lg:flex-row">
                {paymentOptionsArr.map((obj) => (
                    <li
                        key={obj.val}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full font-medium text-gray-600 text-2xl ${
                            cardType === obj.val ? "bg-blue-50" : "bg-gray-100"
                        }`}
                    >
                        <img src={obj.icon} alt={obj.val} />
                        {obj.label}
                    </li>
                ))}
            </ul>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-medium mb-2">
                                    Full name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className={`p-4 mb-4 leading-6`}
                                        placeholder="knee Due"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-medium mb-2">
                                    Your Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className={`p-4 mb-4 leading-6`}
                                        placeholder="kneeDue@untitledui.com"
                                        type="email"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-9">
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg font-medium mb-2">
                                            Valid Date
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className={`p-4 mb-4 leading-6`}
                                                placeholder="12-6-2024"
                                                type="date"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-3">
                            <FormField
                                control={form.control}
                                name="cvv"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg font-medium mb-2">
                                            CVV
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className={`p-4 mb-4 leading-6`}
                                                placeholder="522"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <AppButton type="submit">Submit</AppButton>
                </form>
            </Form>
        </>
    );
};

export default BankCardForm;
