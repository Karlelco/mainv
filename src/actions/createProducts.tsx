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
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { useState } from "react";
import Spinner from "@/constants/spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";







const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.string().min(0, {
    message: "Price must be at least 0.",
  }),
  quantity: z.string().min(0, {
    message: "Quantity must be at least 0.",
  }),
  onSale: z.boolean().default(false).optional(),
  id: z.string().min(2, {
    message: "Id must be at least 2 characters.",
  }),
  imagefile: z.custom<File>((file) => {
    if (file) {
      return true;
    }
    return "Image file is required.";
  }),
});

export function ProductForm() {
  const user = useUser();
  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      onSale: false,
      imagefile: undefined,
      id: user.user?.id
    },
  });

  const createProduct = useMutation(api.myFunctions.createProduct);
  const generateUploadUrl = useMutation(api.myFunctions.generateUploadUrl);
  const [loading, setLoading] = useState(false);
 

  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': data.imagefile!.type },
      body: data.imagefile!,
    });
    console.log(result);

    const { storageId } = await result.json();
    await createProduct({
      title: data.title,
      description: data.description,
      price: Number(data.price),
      quantity: Number(data.quantity),
      onSale: data.onSale || false,
      id: data.id,
      storageId,
    });
    setLoading(false);
    form.reset();
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }


  return (
    <Dialog>
      <DialogTrigger asChild className="justify-center m-auto">
        <Button variant="outline" className="w-fit">Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A New  Product</DialogTitle>
          <DialogDescription>
            mange new products here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 px-4 rounded-md border">
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Product title" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the product name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Product description" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the product description.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Price" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the product price.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input placeholder="Quantity" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the product quantity.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="imagefile"
                  render={({ field: { onChange } }) => (
                    <FormItem>
                      <FormLabel>Image File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          onChange={(e) => {
                            if (!e.target.files) {
                              return;
                            }
                            onChange(e.target.files[0] as File);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="onSale"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Tell us if this product is on sale
                        </FormLabel>
                        <FormDescription>
                          You can manage your sales notifications in the{" "}
                          <Link to="/examples/forms">onSale settings</Link>{" "}
                          page.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit" onClick={() => setLoading(true)}>
                    {loading ? <Spinner /> : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}



