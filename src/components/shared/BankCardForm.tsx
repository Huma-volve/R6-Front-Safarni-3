import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";
import AppButton from "./AppButton";

const formSchema = z.object({
  fullname: z.string().min(1).min(2).max(20),
  email: z.string().email(),
});

const BankCardForm = ({
  paymentOptionsArr,
  cardType,
}: {
  paymentOptionsArr: { label: string; val: string; icon: string }[];
  cardType: string;
}) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!stripe || !elements) return;

    try {
      // استخدمي الـ CardElement من Stripe
      const cardElement = elements.getElement(CardElement);

      const result = await stripe.confirmCardPayment(
        "pi_3S0XIT00Xq5cUHDc0gTeU98Z_secret_53dqpgxrvDaBBxX2vEhjtxGmh", // 👈 client_secret هنا مؤقتًا
        {
          payment_method: {
            card: cardElement!,
            billing_details: {
              name: values.fullname,
              email: values.email,
            },
          },
        }
      );

      if (result.error) {
        toast.error(result.error.message || "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        toast.success("Payment successful!");
        navigate("/checkout/success");
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Something went wrong. Please try again.");
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
          {/* Full Name */}
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
                    className="p-4 mb-4 leading-6"
                    placeholder="John Doe"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
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
                    className="p-4 mb-4 leading-6"
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Card Input from Stripe */}
          <div className="mb-4">
            <FormLabel className="text-lg font-medium mb-2">
              Card Info
            </FormLabel>
            <div className="border p-3 rounded-md">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>

          <AppButton type="submit">Submit</AppButton>
        </form>
      </Form>
    </>
  );
};

export default BankCardForm;
