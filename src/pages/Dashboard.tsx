
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Orders } from "@/constants/orders";
import OverView from "@/constants/overview";
import { ProductsTable } from "@/constants/products";

export function Dashboard() {
  return (
    <div className="px-2 space-y-6">
      <div>
        <OverView />
      </div>
      <div className="justify-center">
        <Tabs defaultValue="account" >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <div className="px-4 py-8">
            <ProductsTable />
          </div>
        </TabsContent>
        <TabsContent value="orders">
          <div className="px-4 py-8 min-h-30">
            <Orders />
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
}
