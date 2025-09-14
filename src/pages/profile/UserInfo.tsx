import { Input } from "@/components/ui/input";
import { UserContext } from "@/context/UserContextProvider";
import { UserRound, Mail, MapPin,ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Location is required"),
  phone: z.string().min(1, "Phone number is required").regex(/^[0-9]{11}$/, "Please enter a valid 11-digit phone number"),
  
});

export default function UserInfo() {
  const { UpdateUserInfo, userInfo } = useContext(UserContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userInfo?.user.name || "",
      email: userInfo?.user.email || "",
      country: userInfo?.user.country ||"",
      phone: userInfo?.user.phone || "",
    },
  });

  const onSubmit = async (value) => {
    console.log("Form data:", value); 
    await UpdateUserInfo(value)
    
  };

  return (
    <div className="container mx-auto w-[70%]">
      <Link to='/profile'>
        <div className="w-14 h-14 bg-gray-100 rounded-full my-10 flex justify-center items-center"><ChevronLeft/></div>
      </Link>
      <div className="border-gradient p-[1px] rounded-md">
        <div className="bg-white p-8 rounded-md">
          <h2 className="font-medium text-2xl text-center pb-12">Personal Information</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="pb-2 text-lg font-medium font-inter text-gray-800">Name</FormLabel>
                    <div className="relative border border-gray-300 shadow-xs">
                      <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5" />
                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          {...field}
                          className="pl-10 pr-4 py-2 w-full rounded-xs border-none bg-transparent focus:ring-0"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="pb-2 text-lg font-medium font-inter text-gray-800">Email</FormLabel>
                    <div className="relative border border-gray-300 shadow-xs">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5" />
                      <FormControl>
                        <Input
                          id="email"
                          type="text"
                          {...field}
                          className="pl-10 pr-4 py-2 w-full rounded-xs border-none bg-transparent focus:ring-0"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="pb-2 text-lg font-medium font-inter text-gray-800">Location</FormLabel>
                    <div className="relative border border-gray-300 shadow-xs">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5" />
                      <FormControl>
                        <Input
                          id="location"
                          placeholder="add your location"
                          type="text"
                          {...field}
                          className="pl-10 pr-4 py-2 w-full rounded-xs border-none bg-transparent focus:ring-0"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="pb-2 text-lg font-medium font-inter text-gray-800">Phone Number</FormLabel>
                    <div className="relative border border-gray-300 shadow-xs">
                      <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5" />
                      <FormControl>
                        <Input
                          id="phone"
                          type="text"
                          placeholder="add your phone"
                          {...field}
                          className="pl-10 pr-4 py-2 w-full rounded-xs border-none bg-transparent focus:ring-0"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-end">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}