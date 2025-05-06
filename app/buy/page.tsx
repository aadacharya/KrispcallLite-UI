// app/buy/page.tsx
"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const selectedCountry = [
  {
    countryNumber: "11111111",
    countryCode: "USA",
  },
  {
    countryNumber: "22222222",
    countryCode: "NP",
  },
  {
    countryNumber: "333333333",
    countryCode: "IN",
  },
  {
    countryNumber: "4444444444",
    countryCode: "PAK",
  },
];

export default function BuyPage() {
  const router = useRouter();
  async function showMessage(number: string) {
    //   const res = await fetch(`/api?number=${encodeURIComponent(number)}`);
    //   const data = res.json()
    //   console.log("data is",data)
    router.push(`/messages?number=${number}`);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="flex justify-center items-center text-2xl font-bold">
          A list of your numbers
        </h2>
        <Table className="w-full text-sm text-left text-gray-700">
          {/* <TableCaption className="mb-4 text-lg font-semibold text-center text-gray-800">
            
          </TableCaption> */}
          <TableHeader>
            <TableRow className="bg-gray-200 text-gray-700">
              <TableHead>Country Number</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedCountry.map((select) => (
              <TableRow
                key={select.countryNumber}
                className="hover:bg-gray-100"
              >
                <TableCell className="font-medium">
                  {select.countryNumber}
                </TableCell>
                {/* <TableCell className="font-medium">
                  {select.countryCode}
                </TableCell> */}
                <TableCell className="text-right">
                  <Button
                    className="px-4 py-2 text-white  rounded-md"
                    onClick={() => showMessage(select.countryNumber)}
                  >
                    Show
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
