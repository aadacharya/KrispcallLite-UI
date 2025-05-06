"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const countries = [
  { countryName: "USA" },
  { countryName: "India" },
  { countryName: "Nepal" },
];

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  async function handleBuyClick(country: string) {
    // const res = await fetch(
    //   `/api/info?country=${encodeURIComponent(country)}`
    // );
    // const data = res.json();
    // console.log("data is", data);
    router.push(`/buy?country=${country}`);
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="absolute top-4 right-4 border p-1 rounded">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Available Numbers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Numbers</SelectLabel>
                <SelectItem value="123456789">
                  <div className="flex items-center justify-between w-full">
                    <span>123456789</span>
                    <Phone className="w-4 h-4 text-green-500 ml-2" />
                  </div>
                </SelectItem>
                <SelectItem value="789456123">
                  <div className="flex items-center justify-between w-full">
                    <span>789456123</span>
                    <Phone className="w-4 h-4 text-green-500 ml-2" />
                  </div>
                </SelectItem>
                <SelectItem value="963258741">
                  <div className="flex items-center justify-between w-full">
                    <span>963258741</span>
                    <Phone className="w-4 h-4 text-green-500 ml-2" />
                  </div>
                </SelectItem>
                <SelectItem value="2585258525">
                  <div className="flex items-center justify-between w-full">
                    <span>2585258525</span>
                    <Phone className="w-4 h-4 text-green-500 ml-2" />
                  </div>
                </SelectItem>
                <SelectItem value="9513574652">
                  <div className="flex items-center justify-between w-full">
                    <span>9513574652</span>
                    <Phone className="w-4 h-4 text-green-500 ml-2" />
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setShowPopup(true)}>Buy a Number</Button>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Available Country Numbers
              </h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {countries.map((country) => (
                    <TableRow key={country.countryName}>
                      <TableCell>{country.countryName}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => handleBuyClick(country.countryName)}
                        >
                          Buy Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="text-center mt-6">
                <Button
                  variant="destructive"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
