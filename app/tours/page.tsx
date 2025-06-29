import { Badge } from "@/components/ui/badge"
import TourCard from "@/components/TourCard"
import FilterSidebar from "@/components/FilterSidebar"
import { tours } from "@/data/tours"
import Footer from "@/components/Footer"

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">All Tours</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Glacial
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Adventures
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete collection of glacier and ice adventures around the world. From beginner-friendly
              walks to challenging expeditions.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar />
            </div>

            {/* Tours Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {tours.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
