import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./ErrorBoundary";
import "./index.css";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/sonner";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Vendor from "./pages/Vendor";
import { RegisterVendor } from "./actions/Register";
import { Dashboard } from "./pages/Dashboard";



const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="vendor" element={<Vendor />} />
      <Route path="vendor/dashboard" element={<Dashboard />} />
      <Route path="vendor/register" element={<RegisterVendor />} />
      
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <Toaster />
          <RouterProvider router={router}/>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
