import TourCard from "./TourCard"
import { Badge } from "@/components/ui/badge"
import { tours } from "@/data/tours"

export default function TourList() {
  const featuredTours = tours.slice(0, 6)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Featured Tours</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Glacial Adventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pristine glacial valleys to towering ice formations, explore the world's most spectacular frozen
            landscapes with our expert guides.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
