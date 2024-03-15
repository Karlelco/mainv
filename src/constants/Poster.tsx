
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Poster() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Simple no-tricks pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Lifetime membership</CardTitle>
              <CardDescription>
                              Join us today and get access to all the  customers we have
                              here at the market.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckIcon className="text-green-500" />
                  <span className="ml-2">All latest products</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-green-500" />
                  <span className="ml-2">Entry to Vendors</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-green-500" />
                  <span className="ml-2">Member resources</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-green-500" />
                  <span className="ml-2">Official member t-shirt</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Pay once, own it forever</CardTitle>
              <CardDescription className="text-4xl font-bold mt-4">
                $3.00 <span className="text-lg">USD</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white">
                Get access
              </Button>
              <p className="mt-4 text-sm text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
