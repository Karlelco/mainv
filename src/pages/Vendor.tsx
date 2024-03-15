import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import vendorImage from "@/assets/vendor.jpeg";
import { useEffect } from "react";

function Vendor() {
  const vendor = useQuery(api.myFunctions.getVendorByEmail, {})?.map((vendor) => vendor.email);
  const user = useQuery(api.myFunctions.getUser)?.email;
  console.log("vendor", vendor);
  console.log("user", user);
  const navigate = useNavigate();

  useEffect(() => {
    try {
        if (vendor === null || vendor === undefined) {
          navigate("vendor/");
          console.log("vendor", vendor);
        }
        else {
          navigate("/vendor/dashboard");
        }
      
    } catch (error) {
      
    }
  }, [])
  


  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome To Vendors
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access your account or register for a new one to start selling
                your products on our platform.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2"></div>
              <Link
                className="inline-flex w-fit h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to="/vendor/register"
              >
                Register
              </Link>
              {/* <Link
                className="inline-flex w-fit h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to="/vendor/login"
              >
                Login
              </Link> */}
            </div>
          </div>
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="400"
            src={vendorImage}
            width="720"
          />
        </div>
    </div>
  );
}

export default Vendor;
