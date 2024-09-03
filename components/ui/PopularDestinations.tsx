import { Card, CardContent } from "@/components/ui/card";

const popularCities = ["New York", "Paris", "Tokyo", "London", "Rome", "Sydney"];

export function PopularDestinations() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-gray-900">
          Popular destinations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularCities.map((city) => (
            <Card key={city} className="overflow-hidden bg-white">
              <img
                alt={`${city} cityscape`}
                className="object-cover w-full h-48"
                height="200"
                src={`/placeholder.svg?height=200&width=300`}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{city}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}