import { BackBtn } from "@/components/shared";
import FlightImg from "./FlightImg";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router";

const data = {
  id: 1,
  category_id: 1,
  airline: "Orn, Brakus and Dare",
  from: "South Tanyaville",
  to: "Nienowborough",
  departure_time: "2025-11-26 06:12:17",
  arrival_time: "2027-05-11 05:27:48",
  price: 2153,
  created_at: "2025-08-20T17:19:10.000000Z",
  updated_at: "2025-08-20T17:19:10.000000Z",
  flight_seats: [
    {
      id: 1,
      flight_id: 1,
      seat_number: 1,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 2,
      flight_id: 1,
      seat_number: 2,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 3,
      flight_id: 1,
      seat_number: 3,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 4,
      flight_id: 1,
      seat_number: 4,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 5,
      flight_id: 1,
      seat_number: 5,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 6,
      flight_id: 1,
      seat_number: 6,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 7,
      flight_id: 1,
      seat_number: 7,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 8,
      flight_id: 1,
      seat_number: 8,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 9,
      flight_id: 1,
      seat_number: 9,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 10,
      flight_id: 1,
      seat_number: 10,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 11,
      flight_id: 1,
      seat_number: 11,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 12,
      flight_id: 1,
      seat_number: 12,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 13,
      flight_id: 1,
      seat_number: 13,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 14,
      flight_id: 1,
      seat_number: 14,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 15,
      flight_id: 1,
      seat_number: 15,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 16,
      flight_id: 1,
      seat_number: 16,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 17,
      flight_id: 1,
      seat_number: 17,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 18,
      flight_id: 1,
      seat_number: 18,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 19,
      flight_id: 1,
      seat_number: 19,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 20,
      flight_id: 1,
      seat_number: 20,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 21,
      flight_id: 1,
      seat_number: 21,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 22,
      flight_id: 1,
      seat_number: 22,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 23,
      flight_id: 1,
      seat_number: 23,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 24,
      flight_id: 1,
      seat_number: 24,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 25,
      flight_id: 1,
      seat_number: 25,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 26,
      flight_id: 1,
      seat_number: 26,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 27,
      flight_id: 1,
      seat_number: 27,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 28,
      flight_id: 1,
      seat_number: 28,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 29,
      flight_id: 1,
      seat_number: 29,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
    {
      id: 30,
      flight_id: 1,
      seat_number: 30,
      status: "available",
      created_at: "2025-08-21T13:02:38.000000Z",
      updated_at: "2025-08-21T13:02:38.000000Z",
    },
  ],
};

const formSchema = z.object({
  seat: z.string(),
});

const AvailableSeatsPage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      navigate("/flight/confirm");
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
    <div className="m-auto w-full max-w-[1272px] px-4">
      <BackBtn />
      <div className="mb-[72px] grid grid-cols-1  md:grid-cols-2 gap-6 ">
        <FlightImg />

        <div className="mb-6">
          <h2 className="text-2xl font-medium text-center mb-4">Choose seat</h2>
          <ul className="flex justify-between md:flex-row flex-col text-xl text-gray-900">
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-blue-700">
              Availavle
            </li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-green-500">
              Selected
            </li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-gray-300">
              Unavailable
            </li>
          </ul>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10 flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="seat"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="grid grid-cols-5 gap-x-8 gap-y-6"
                      >
                        {data.flight_seats.map((obj) => {
                          const isSelected =
                            field.value === obj.seat_number.toString();

                          return (
                            <FormItem
                              key={obj.seat_number}
                              className={`flex items-center w-fit justify-center py-2 px-4 rounded-lg cursor-pointer text-white font-medium transition-colors ${
                                isSelected
                                  ? "bg-[#03D947]"
                                  : obj.status === "available"
                                  ? "bg-blue-700"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={obj.seat_number.toString()}
                                  className="hidden"
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer py-2 px-3">
                                {obj.seat_number}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2">
                <p className="text-lg w-full flex justify-between text-gray-900">
                  Ticket price
                  <span className="text-xl font-semibold text-blue-700">
                    ${data.price}
                  </span>
                </p>
                <p className="text-lg w-full flex justify-between text-gray-900">
                  Total price
                  <span className="text-xl font-semibold text-blue-700">
                    ${data.price}
                  </span>
                </p>
                <p className="text-lg w-full flex justify-between text-gray-900">
                  Your Seat
                  <span className="text-xl font-semibold text-blue-700">
                    {form.watch("seat") || "—"}
                  </span>
                </p>
              </div>
              <Button size="full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AvailableSeatsPage;
