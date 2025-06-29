import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Thermometer, Calendar, Mountain, Users, Camera } from "lucide-react"
import Link from "next/link"

export default function DestinationsPage() {
  const destinations = [
    {
      slug: "hunza-valley",
      name: "Hunza Valley",
      subtitle: "The Legendary Shangri-La",
      description:
        "Discover the enchanting Hunza Valley with its ancient forts, terraced apricot orchards, and stunning views of Rakaposhi and Ultar Sar peaks.",
      image: "/IMG_4678.JPG",
      // Image comment: Hunza Valley landscape with Baltit Fort, terraced fields, and Rakaposhi peak in background
      bestTime: "March - November",
      temperature: "5°C to 25°C",
      highlights: ["Baltit Fort", "Attabad Lake", "Passu Cones", "Eagle's Nest Viewpoint"],
      tourCount: 12,
      difficulty: "Easy to Moderate",
    },
    {
      slug: "skardu-region",
      name: "Skardu Region",
      subtitle: "Gateway to the Karakoram",
      description:
        "Explore Skardu, the gateway to K2 and the mighty Karakoram range, featuring pristine lakes, ancient forts, and dramatic desert landscapes.",
      image: "/IMG_4678.JPG",
      // Image comment: Skardu landscape with Satpara Lake, sand dunes, and Karakoram peaks
      bestTime: "April - October",
      temperature: "-5°C to 30°C",
      highlights: ["Satpara Lake", "Deosai Plains", "Shigar Fort", "K2 Base Camp Trek"],
      tourCount: 15,
      difficulty: "Easy to Extreme",
    },
    {
      slug: "gilgit-city",
      name: "Gilgit City",
      subtitle: "Cultural Crossroads",
      description:
        "Experience the cultural hub of northern Pakistan where ancient Silk Road traditions meet modern mountain tourism.",
      image: "/IMG_4678.JPG",
      // Image comment: Gilgit city with traditional bazaar, Buddhist rock carvings, and mountain backdrop
      bestTime: "March - November",
      temperature: "0°C to 35°C",
      highlights: ["Kargah Buddha", "Gilgit Bazaar", "Naltar Valley", "Fairy Meadows Access"],
      tourCount: 8,
      difficulty: "Easy to Moderate",
    },
    {
      slug: "nagar-valley",
      name: "Nagar Valley",
      subtitle: "Hidden Gem of Karakoram",
      description:
        "Discover the pristine Nagar Valley with its traditional villages, ancient glaciers, and spectacular views of Rakaposhi.",
      image: "/IMG_4678.JPG",
      // Image comment: Nagar Valley with traditional stone houses, apricot trees, and Rakaposhi mountain
      bestTime: "April - October",
      temperature: "0°C to 25°C",
      highlights: ["Rakaposhi Base Camp", "Hopar Glacier", "Traditional Villages", "Apricot Orchards"],
      tourCount: 6,
      difficulty: "Moderate to Challenging",
    },
    {
      slug: "chitral-region",
      name: "Chitral Region",
      subtitle: "Land of Diverse Cultures",
      description:
        "Explore Chitral's unique cultural heritage, from the ancient Kalash valleys to the historic Chitral Fort and Shandur Pass.",
      image: "/IMG_4678.JPG",
      // Image comment: Kalash valley with traditional wooden houses, people in colorful dress, and Hindu Kush mountains
      bestTime: "May - October",
      temperature: "5°C to 30°C",
      highlights: ["Kalash Valleys", "Shandur Pass", "Chitral Fort", "Tirich Mir Views"],
      tourCount: 10,
      difficulty: "Easy to Moderate",
    },
    {
      slug: "diamer-region",
      name: "Diamer Region",
      subtitle: "Home of Nanga Parbat",
      description:
        "Experience the dramatic landscapes around Nanga Parbat, including the magical Fairy Meadows and Rupal Valley.",
      image: "/IMG_4678.JPG",
      // Image comment: Fairy Meadows with camping area and Nanga Parbat's Diamir face in background
      bestTime: "May - September",
      temperature: "-5°C to 25°C",
      highlights: ["Fairy Meadows", "Nanga Parbat Base Camp", "Rupal Valley", "Raikot Glacier"],
      tourCount: 7,
      difficulty: "Moderate to Extreme",
    },
  ]

  const destinationStats = [
    { icon: MapPin, value: "8+", label: "Districts" },
    { icon: Mountain, value: "50+", label: "Mountain Routes" },
    { icon: Users, value: "2K+", label: "Happy Travelers" },
    { icon: Camera, value: "5K+", label: "Memories Created" },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Destinations</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gilgit-Baltistan
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the breathtaking regions of Gilgit-Baltistan, from the legendary Hunza Valley to the mighty
              Karakoram peaks. Each destination offers unique cultural experiences and stunning mountain landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {destinationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Regions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each region of Gilgit-Baltistan offers unique experiences, from cultural immersion to high-altitude
              adventures in the world's greatest mountain ranges.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">{destination.tourCount} Tours</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-blue-200">{destination.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>

                  {/* Destination Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Thermometer className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{destination.temperature}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mountain className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{destination.tourCount} Adventures</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/destinations/${destination.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                      Explore {destination.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning Your GB Adventure</h2>
              <p className="text-gray-600">Essential considerations for exploring Gilgit-Baltistan</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Best Seasons</h3>
                  <p className="text-gray-600 text-sm">
                    Spring (March-May) and autumn (September-November) offer the best weather. Summer is ideal for
                    high-altitude treks.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-4">
                    <Mountain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Altitude Awareness</h3>
                  <p className="text-gray-600 text-sm">
                    Many destinations are at high altitude. Proper acclimatization and fitness preparation are essential
                    for mountain adventures.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Respect</h3>
                  <p className="text-gray-600 text-sm">
                    GB is home to diverse cultures. Respect local customs, dress modestly, and engage with communities
                    respectfully.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Gilgit-Baltistan?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our local experts can help you choose the perfect adventure based on your interests, fitness level, and
            cultural preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3"
            >
              Get Personalized Recommendations
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Download GB Travel Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
