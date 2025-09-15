import { BackBtn } from "@/components/shared";
import FlightImg from "./FlightImg";
import arrowRounded from "@/assets/icons/arrow-path.svg";
import arrowSquare from "@/assets/icons/arrow-path-rounded-square.svg";
import arrowRight from "@/assets/icons/arrow-long-right.svg";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  location: z.string().min(1),
  destination: z.string().min(1),
  departure: z.string().min(1),
  return: z.string().min(1),
  passenger: z.string(),
});

const FlightPage = () => {
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
    <div className="m-auto w-full max-w-[1272px] px-4 ">
      <BackBtn />
      <div className="mb-[72px] grid grid-cols-1  md:grid-cols-2 gap-6 ">
        <FlightImg />

        <div className="w-full max-w-[510px] mx-auto ">
          <div className="text-2xl font-medium flex flex-col lg:flex-row gap-8">
            <p className="rounded-full bg-blue-50 flex gap-2 items-center py-4 px-6 shrink-0">
              <img src={arrowRounded} alt="arrow icon" /> Round Trip
            </p>
            <p className="rounded-full bg-gray-100 flex gap-2 items-center py-4 px-6 shrink-0">
              <img src={arrowSquare} alt="arrow icon" /> Multi City
            </p>
            <p className="rounded-full bg-gray-100 flex gap-2 items-center py-4 px-6 shrink-0">
              <img src={arrowRight} alt="arrow icon" /> One Way
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium mb-2">
                      Location
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`p-4 mb-4 leading-6`}
                        placeholder="Montreal,Canada"
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
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium mb-2">
                      Destination
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`p-4 mb-4 leading-6`}
                        placeholder="Tokyo,Japan"
                        type="text"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="departure"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium mb-2">
                          Departure
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={`p-4 mb-4 leading-6`}
                            placeholder="Dec 16th, 2025"
                            type="date"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="return"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium mb-2">
                          Return
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={`p-4 mb-4 leading-6`}
                            placeholder="Jan 6th,2025"
                            type="date"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="passenger"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium mb-2">
                      Passenger
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="1 passenger" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 passenger</SelectItem>
                        <SelectItem value="2">2 passengers</SelectItem>
                        <SelectItem value="3">3 passengers</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button size="full" type="submit" className="mt-8">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
