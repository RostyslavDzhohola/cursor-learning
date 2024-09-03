import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Search } from "lucide-react";

export function SearchSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Find your next stay
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-700 text-xl md:text-2xl">
            Search deals on hotels, homes, and much more...
          </p>
          <div className="w-full max-w-3xl mt-8">
            <div className="flex flex-col md:flex-row bg-white rounded-full overflow-hidden shadow-lg">
              <Input
                className="flex-1 border-none text-lg p-4 focus:ring-0 text-gray-900"
                placeholder="Where are you going?"
                type="text"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="justify-start text-left font-normal text-lg p-4 border-l border-gray-200 text-gray-800 hover:bg-gray-100"
                  >
                    Pick dates
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    numberOfMonths={2}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
              <Button className="bg-[#FF5A5F] text-white text-lg rounded-full px-8 py-4 hover:bg-[#FF385E]">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}