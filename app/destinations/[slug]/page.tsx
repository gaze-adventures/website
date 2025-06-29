import { notFound } from "next/navigation"
import Footer from "@/components/Footer"
import TourCard from "@/components/TourCard"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Thermometer, Mountain, Users, Clock } from "lucide-react"
import { tours } from "@/data/tours"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

const destinations = {
  hunza: {
    name: "Hunza Valley",
    subtitle: "Land of Fire and Ice",
    description:
      "Iceland offers a unique combination of volcanic landscapes and pristine glacial formations. Home to Europe's largest glacier, Vatnajökull, and countless ice caves, Iceland provides accessible glacial adventures for all experience levels.",
    fullDescription:
      "Iceland's glacial landscapes are among the most accessible and diverse in the world. The island's unique position on the Mid-Atlantic Ridge creates a dramatic contrast between fire and ice, with active volcanoes existing alongside massive ice caps. Vatnajökull, covering 8% of the country, offers everything from gentle glacier walks to challenging ice climbing. The country's compact size and excellent infrastructure make it possible to experience multiple glacial environments in a single trip.",
    image: "/placeholder.svg?height=500&width=1200",
    bestTime: "May - September",
    temperature: "-5°C to 15°C",
    difficulty: "Easy to Moderate",
    highlights: [
      "Vatnajökull Glacier",
      "Crystal Ice Caves",
      "Northern Lights",
      "Volcanic Landscapes",
      "Glacier Lagoons",
      "Ice Climbing",
    ],
    facts: [
      "11% of Iceland is covered by glaciers",
      "Home to Europe's largest glacier",
      "Over 130 volcanic mountains",
      "Best Northern Lights viewing in winter",
    ],
    activities: [
      { name: "Glacier Hiking", difficulty: "Easy", duration: "3-6 hours" },
      { name: "Ice Cave Tours", difficulty: "Easy", duration: "2-4 hours" },
      { name: "Ice Climbing", difficulty: "Challenging", duration: "Full day" },
      { name: "Glacier Photography", difficulty: "Easy", duration: "4-8 hours" },
    ],
  },
  alaska: {
    name: "Alaska",
    subtitle: "The Last Frontier",
    description:
      "Alaska's vast wilderness contains some of North America's most spectacular glacial landscapes. From the massive tidewater glaciers of Glacier Bay to the ice fields of Denali, Alaska offers unparalleled glacial adventures.",
    fullDescription:
      "Alaska's glacial environments are among the most pristine and dramatic on Earth. The state contains over 100,000 glaciers, including massive tidewater glaciers that calve directly into the ocean. Glacier Bay National Park alone contains 16 tidewater glaciers, while Denali National Park offers access to high-altitude ice fields. The combination of glacial landscapes and abundant wildlife makes Alaska a premier destination for glacial adventures.",
    image: "/placeholder.svg?height=500&width=1200",
    bestTime: "May - September",
    temperature: "0°C to 20°C",
    difficulty: "Easy to Challenging",
    highlights: [
      "Glacier Bay National Park",
      "Denali Ice Fields",
      "Tidewater Glaciers",
      "Wildlife Viewing",
      "Glacier Cruises",
      "Bush Flying",
    ],
    facts: [
      "Over 100,000 glaciers in Alaska",
      "16 tidewater glaciers in Glacier Bay",
      "Largest glacier: Malaspina (1,500 sq miles)",
      "Home to North America's highest peak",
    ],
    activities: [
      { name: "Glacier Cruises", difficulty: "Easy", duration: "Full day" },
      { name: "Helicopter Tours", difficulty: "Easy", duration: "2-4 hours" },
      { name: "Ice Trekking", difficulty: "Moderate", duration: "Multi-day" },
      { name: "Wildlife Photography", difficulty: "Easy", duration: "Variable" },
    ],
  },
  // Add more destinations as needed...
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinations[params.slug as keyof typeof destinations]

  if (!destination) {
    notFound()
  }

  // Filter tours for this destination
  const destinationTours = tours.filter((tour) => tour.location.toLowerCase().includes(destination.name.toLowerCase()))

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={destination.image || "/placeholder.svg?height=400&width=1200"}
          alt={destination.name}
          className="w-full h-full object-cover"
          // Image comment: Stunning landscape specific to this destination showing glacial features
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="text-white">
              <Badge className="mb-4 bg-blue-600 text-white">Destination</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
              <p className="text-xl text-gray-200">{destination.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Best Time</div>
                <div className="text-sm text-gray-600">{destination.bestTime}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Thermometer className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Temperature</div>
                <div className="text-sm text-gray-600">{destination.temperature}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mountain className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Difficulty</div>
                <div className="text-sm text-gray-600">{destination.difficulty}</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">Tours</div>
                <div className="text-sm text-gray-600">{destinationTours.length} Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{destination.description}</p>
              <p className="text-gray-600 leading-relaxed">{destination.fullDescription}</p>
            </div>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Key Facts</h3>
                  <ul className="space-y-2">
                    {destination.facts.map((fact, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Activities</h2>
            <p className="text-gray-600">Glacial adventures available in {destination.name}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Mountain className="h-4 w-4 mr-1" />
                      {activity.difficulty}
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {activity.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tours */}
      {destinationTours.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tours in {destination.name}</h2>
              <p className="text-gray-600">Explore our curated adventures in this destination</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore {destination.name}?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our destination specialists to plan your perfect glacial adventure in {destination.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
            >
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Download {destination.name} Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
