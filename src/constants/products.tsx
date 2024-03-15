import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { ProductForm } from "@/actions/createProducts";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { useUser } from "@clerk/clerk-react";



export  function ProductsTable() {
  const vendor = useQuery(api.myFunctions.getVendorByEmail, {});
  const products = useQuery(api.myFunctions.getProducts, {});
  const userId = useUser().user?.id;
  const Products = products?.filter((product) => product.id === userId);


    
  return (
    <div className="flex flex-col w-full min-h-52 ">
      <header className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Products</h1>
      </header>

      <ProductForm />

      <div className="border rounded-lg w-full px-4">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor && (
              <>
                {Products?.map((product) => (
                  <TableRow
                    key={product._id}
                    className="hover:shadow-lg dark:hover:shadow-lg"
                  >
                    <TableCell className="font-semibold">
                      {product.title}
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>${product.quantity}</TableCell>
                    <TableCell className="text-sm">
                      {product.description}
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <FileEditIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {Products && Products.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center h-full items-center justify-center"
                >
                  <FolderPlusIcon className="w-24 h-24" />
                  You have not added any products.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}



function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
