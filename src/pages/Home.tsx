import { api } from "@/../convex/_generated/api";
import { useQuery } from "convex/react";
// import { useUser } from "@clerk/clerk-react";
import { Id } from "convex/_generated/dataModel";

function Home() {
  // const userId = useUser()?.user?.id as string;
  const product = useQuery(api.myFunctions.getProducts, {});
  const vendor = useQuery(api.myFunctions.getVendorByEmail, {});
  const storeName = vendor?.map((vendor) => vendor.storeName); // Access the 'storeName' property of 'vendor' and handle the possibility of 'vendor' being undefined

  function getfileUrl(fileId: Id<"_storage">) {
    return `https://decisive-peccary-330.convex.cloud/api/storage/${fileId}`;
  }

  return (
    <section className="min-h-screen">
      <div>
        <div></div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product?.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={getfileUrl(product.imageFile)}
                    alt={product.title}
                    className="h-full max-h-48 w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {" "}
                      {product.quantity} pcs
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {" "}
                    Ksh{product.price}
                  </p>
                  <div>{storeName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
