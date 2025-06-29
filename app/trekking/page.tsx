import Footer from "@/components/Footer"
import TourCard from "@/components/TourCard"
import FilterSidebar from "@/components/FilterSidebar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Users, Thermometer, Backpack, Shield, Heart } from "lucide-react"

export default function TrekkingPage() {
  // GB-specific trekking tours
  const trekkingTours = [
    {
      slug: "k2-base-camp-trek",
      title: "K2 Base Camp Trek",
      duration: "18 Days",
      price: "$2,850",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Baltoro Glacier", "Concordia", "K2 Base Camp", "Broad Peak Views"],
      difficulty: "Extreme",
      groupSize: "6-10 people",
      rating: 4.9,
      location: "Karakoram, Gilgit-Baltistan",
      description: "The ultimate high-altitude adventure to the base camp of the world's second highest peak.",
    },
    {
      slug: "nanga-parbat-base-camp",
      title: "Nanga Parbat Base Camp Trek",
      duration: "14 Days",
      price: "$2,200",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Fairy Meadows", "Nanga Parbat Base Camp", "Raikot Glacier", "Diamir Face"],
      difficulty: "Challenging",
      groupSize: "6-10 people",
      rating: 4.8,
      location: "Diamer, Gilgit-Baltistan",
      description: "Trek through magical Fairy Meadows to the base camp of the 'Killer Mountain'.",
    },
    {
      slug: "rakaposhi-base-camp-trek",
      title: "Rakaposhi Base Camp Trek",
      duration: "12 Days",
      price: "$1,850",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Rakaposhi Base Camp", "Minapin Glacier", "Traditional Villages", "Apricot Orchards"],
      difficulty: "Moderate",
      groupSize: "8-12 people",
      rating: 4.6,
      location: "Nagar Valley, Gilgit-Baltistan",
      description: "Experience traditional Nagar culture while trekking to Rakaposhi's spectacular base camp.",
    },
    {
      slug: "snow-lake-trek",
      title: "Snow Lake & Hispar Pass Trek",
      duration: "16 Days",
      price: "$2,650",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Snow Lake", "Hispar Pass", "Biafo Glacier", "Remote Wilderness"],
      difficulty: "Extreme",
      groupSize: "6-8 people",
      rating: 4.9,
      location: "Karakoram, Gilgit-Baltistan",
      description: "Cross the longest glacial highway outside polar regions through pristine wilderness.",
    },
    {
      slug: "hunza-valley-trek",
      title: "Hunza Valley Cultural Trek",
      duration: "10 Days",
      price: "$1,450",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Ultar Sar Base Camp", "Traditional Villages", "Baltit Fort", "Passu Glacier"],
      difficulty: "Moderate",
      groupSize: "10-15 people",
      rating: 4.7,
      location: "Hunza Valley, Gilgit-Baltistan",
      description: "Combine cultural immersion with moderate trekking in the legendary Hunza Valley.",
    },
    {
      slug: "shimshal-pass-trek",
      title: "Shimshal Pass Trek",
      duration: "13 Days",
      price: "$2,100",
      thumbnail: "/placeholder.svg?height=300&width=400",
      highlights: ["Shimshal Village", "Shimshal Pass", "Pamir Views", "Wakhi Culture"],
      difficulty: "Challenging",
      groupSize: "6-10 people",
      rating: 4.8,
      location: "Upper Hunza, Gilgit-Baltistan",
      description: "Trek to the remote Shimshal Valley and experience authentic Wakhi culture.",
    },
  ]

  const trekkingTips = [
    {
      icon: Mountain,
      title: "High Altitude Preparation",
      description: "GB treks reach extreme altitudes - proper acclimatization is essential for safety",
    },
    {
      icon: Thermometer,
      title: "Weather Extremes",
      description: "Mountain weather in GB changes rapidly - be prepared for all conditions",
    },
    {
      icon: Backpack,
      title: "Specialized Gear",
      description: "High-altitude and glacier equipment is mandatory for most GB treks",
    },
    {
      icon: Users,
      title: "Local Guides",
      description: "Experienced Balti and Hunzakut guides are essential for navigation and safety",
    },
  ]

  const permits = [
    {
      icon: Shield,
      title: "NOC Requirements",
      description: "No Objection Certificate required for restricted areas and high-altitude treks",
    },
    {
      icon: Heart,
      title: "Environmental Fee",
      description: "Conservation fees support local communities and environmental protection",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Gilgit-Baltistan Trekking</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Karakoram
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Trekking Adventures
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embark on world-class trekking adventures through Pakistan's Gilgit-Baltistan region. From K2 Base Camp to
              the magical Fairy Meadows, discover the most spectacular mountain landscapes on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Trekkers in Karakoram mountains"
          className="w-full h-full object-cover"
          // Image comment: Trekkers with Pakistani/local guides walking on Baltoro Glacier with K2 and other Karakoram peaks in background
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Trek Through the Karakoram</h2>
              <p className="text-lg">Experience Pakistan's legendary mountain wilderness</p>
            </div>
          </div>
        </div>
      </section>

      {/* GB Trekking Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trekking in Gilgit-Baltistan</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Gilgit-Baltistan is home to five of the world's fourteen 8000-meter peaks, including K2, and contains
              three of the world's longest glaciers outside the polar regions. This region offers some of the most
              challenging and rewarding trekking experiences on the planet.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
                <div className="text-sm text-gray-600">8000m+ Peaks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Major Glaciers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Trekking Routes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trekking Tips */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential GB Trekking Knowledge</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trekking in Gilgit-Baltistan requires specialized preparation due to extreme altitudes, remote locations,
              and challenging terrain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trekkingTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 mb-4">
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Permits Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Permits & Documentation</h3>
            <p className="text-gray-600 mb-8">Special permits required for most GB trekking areas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {permits.map((permit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-4">
                    <permit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{permit.title}</h3>
                  <p className="text-gray-600 text-sm">{permit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GB Trekking Difficulty Levels</h2>
            <p className="text-gray-600">Choose the right challenge for your mountain experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1-2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moderate</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 8-12 days duration</li>
                  <li>• Up to 4,500m altitude</li>
                  <li>• Good fitness required</li>
                  <li>• Cultural village treks</li>
                  <li>• Examples: Hunza Valley, Rakaposhi BC</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3-4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Challenging</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 12-16 days duration</li>
                  <li>• Up to 5,200m altitude</li>
                  <li>• Excellent fitness essential</li>
                  <li>• High-altitude camping</li>
                  <li>• Examples: Nanga Parbat BC, Shimshal</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 16+ days duration</li>
                  <li>• Up to 5,800m altitude</li>
                  <li>• Mountaineering experience</li>
                  <li>• Technical glacier travel</li>
                  <li>• Examples: K2 BC, Snow Lake</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured GB Trekking Adventures</h2>
            <p className="text-gray-600">World-class trekking through Pakistan's most spectacular mountain regions</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar />
            </div>
            {/* Tours Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {trekkingTours.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Our GB Treks</h2>
              <p className="text-gray-600">Comprehensive support for your Gilgit-Baltistan trekking adventure</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Included</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      Experienced local Balti/Hunzakut guides
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      High-altitude camping equipment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      Porter services and logistics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      All meals during trek
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      NOC permits and park fees
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      Emergency evacuation insurance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      Domestic flights (Islamabad-Skardu/Gilgit)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Not Included</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      International flights to Pakistan
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Pakistan visa fees
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Personal trekking equipment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Comprehensive travel insurance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Personal expenses and shopping
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Tips for guides and porters
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Hotel accommodation in cities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Trek */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Time for GB Trekking</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Spring (April-May)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Moderate temperatures, blooming apricot orchards in Hunza, some high passes may still be closed.
                  </p>
                  <Badge className="bg-green-100 text-green-800">Good for lower altitude treks</Badge>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Summer (June-August)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Peak trekking season, all routes accessible, warmest weather, occasional monsoon influence.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">Best for high-altitude treks</Badge>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Autumn (September-October)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Clear skies, stable weather, golden autumn colors, cooler temperatures at altitude.
                  </p>
                  <Badge className="bg-orange-100 text-orange-800">Perfect weather conditions</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Karakoram Adventure?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable trekking experience through Pakistan's most spectacular mountain landscapes in
            Gilgit-Baltistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3"
            >
              Book Your GB Trek
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Download GB Trekking Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
