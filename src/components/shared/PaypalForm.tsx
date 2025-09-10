import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  fullname: z.string().min(1).min(2).max(20),
  email: z.string(),
});

const PaypalForm = ({
  paymentOptionsArr,
}: {
  paymentOptionsArr: {
    label: string;
    val: string;
    icon: string;
  }[];
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
      <ul className="flex mb-6 gap-3.5">
        {paymentOptionsArr.map((obj) => (
          <li
            key={obj.val}
            className={`flex items-center gap-2 py-2 px-4 rounded-full font-medium text-gray-600 text-2xl ${
              "paypal" === obj.val ? "bg-blue-50" : "bg-gray-100"
            }`}
          >
            <img src={obj.icon} alt={obj.val} />
            {obj.label}
          </li>
        ))}
      </ul>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
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
                    className="p-4 mb-4"
                    placeholder="kneeDue@untitledui.com"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PaypalForm;
