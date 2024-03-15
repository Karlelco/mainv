import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { Outlet } from "react-router-dom";
import Header from "./constants/Header";
import Footer from "./constants/Footer";

export default function App() {
  return (
    <main className="w-full">
      <Authenticated>
        <Header />
        <Outlet />
        <Footer />
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col min-h-screen py-12 items-center justify-center space-y-4 md:space-y-8">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Get Started with Our Online Store
              </h1>
              <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Welcome to our online store. We're excited to provide you with
                the best shopping experience. Enjoy a wide range of products and
                the convenience of shopping from home.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 items-start gap-4 px-4 md:grid-cols-3 md:gap-8 lg:gap-10">
            <div className="flex flex-col items-center justify-center space-y-2">
              <ShoppingBagIcon className="h-8 w-8" />
              <h3 className="font-semibold">Fashion</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trendy clothing and accessories
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <SmartphoneIcon className="h-8 w-8" />
              <h3 className="font-semibold">Electronics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gadgets and tech devices
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <WineIcon className="h-8 w-8" />
              <h3 className="font-semibold">Food & Drinks</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Delicious treats and beverages
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <BookIcon className="h-8 w-8" />
              <h3 className="font-semibold">Books</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bestsellers and classic reads
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <ShoppingBasketIcon className="h-8 w-8" />
              <h3 className="font-semibold">Sports & Outdoors</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fitness gear and outdoor equipment
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <GiftIcon className="h-8 w-8" />
              <h3 className="font-semibold">Gifts</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Perfect presents for every occasion
              </p>
            </div>
          </div>
          <div className="flex flex-col min-[400px]:flex-row gap-2">
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </div>
        </div>
      </Unauthenticated>
    </main>
  );
}




function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function GiftIcon(props: any) {
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
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function ShoppingBagIcon(props: any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ShoppingBasketIcon(props: any) {
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
      <path d="m5 11 4-7" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
      <path d="m9 11 1 9" />
      <path d="M4.5 15.5h15" />
      <path d="m15 11-1 9" />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function WineIcon(props: any) {
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
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </svg>
  );
}
