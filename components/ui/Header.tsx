import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, User } from "lucide-react";
import { AirbnbLogo } from "./AirbnbLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-20 items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <AirbnbLogo />
          <span className="text-xl font-bold text-[#FF5A5F]">airbnb</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-base hover:bg-gray-100 text-gray-800 font-semibold">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-gray-800 hover:bg-gray-100">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Change language</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-gray-800 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
            <User className="h-5 w-5" />
            <span className="sr-only">Open user menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}