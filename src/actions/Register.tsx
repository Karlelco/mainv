import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";



const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2,{
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  storeName: z.string().min(2, {
    message: "Store name must be at least 2 characters.",
  }),
  storeDescription: z.string().min(10, {
    message: "Store description must be at least 10 characters.",
  }),
  storeAddress: z.string().min(6, {
    message: "Store address must be at least 10 characters.",
  }),
});

export function RegisterVendor() {
   const user = useUser().user?.emailAddresses[0].emailAddress;
   const vendor = useQuery(api.myFunctions.getVendor, {})?.map(
     (vendor) => vendor.email
   );
  const registerVendor = useMutation(api.myFunctions.registerVendor);
  const navigate = useNavigate();
 
 
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: useUser().user?.emailAddresses[0].emailAddress,
      phone: "",
      storeName: "",
      storeDescription: "",
      storeAddress: "",

    },
  });

  

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await registerVendor({
      name: data.name,
      email: data.email,
      phone: data.phone,
      storeName: data.storeName,
      storeDescription: data.storeDescription,
      storeAddress: data.storeAddress,
    
    })
    navigate("/vendor/dashboard");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className=" w-full">
      {vendor !== user ? (
        <div className="px-6 py-12 md:px-20 lg:px32">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your name will be used to identify you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="venity@support.com"
                        disabled
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your email will be used to contact you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+25400000000" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your phone number will be used to contact you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store Name</FormLabel>
                    <FormControl>
                      <Input placeholder="My Store" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public store name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store Description</FormLabel>
                    <FormControl>
                      <Input placeholder="About Store" {...field} />
                    </FormControl>
                    <FormDescription>Tell us about your store.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storeAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>STore Location</FormLabel>
                    <FormControl>
                      <Input type="address" placeholder="Address" {...field} />
                    </FormControl>
                    <FormDescription>
                      Where is your store located?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      ) : (
          <div>
            <Button
              onClick={() => {
                navigate("/vendor/dashboard");
              }}
            >
              Go
            </Button>
        </div>
      )}
    </div>
  );
}
