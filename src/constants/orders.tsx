import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function Orders() {
  return (
    <section id="#orders" className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="w-8" />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>12345</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-30</TableCell>
            <TableCell className="hidden md:table-cell">Shipped</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12346</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-30</TableCell>
            <TableCell className="hidden md:table-cell">Delivered</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12347</TableCell>
            <TableCell>Mike Johnson</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-30</TableCell>
            <TableCell className="hidden md:table-cell">Pending</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12348</TableCell>
            <TableCell>Emily Wilson</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-30</TableCell>
            <TableCell className="hidden md:table-cell">Shipped</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12349</TableCell>
            <TableCell>Chris Brown</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-30</TableCell>
            <TableCell className="hidden md:table-cell">Delivered</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}


function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}