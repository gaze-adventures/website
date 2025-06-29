import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Star, MapPin, Check, X } from "lucide-react"
import { tours } from "@/data/tours"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import GalleryGrid from "@/components/GalleryGrid"

interface TourDetailPageProps {
  params: {
    slug: string
  }
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = tours.find((t) => t.slug === params.slug)

  if (!tour) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={tour.thumbnail || "/placeholder.svg?height=400&width=1200"}
          alt={tour.title}
          className="w-full h-full object-cover"
          // Image comment: High-resolution hero image specific to this tour location
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="text-white">
              <Badge className="mb-4 bg-blue-600 text-white">{tour.difficulty}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {tour.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {tour.groupSize}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                  {tour.rating}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {tour.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tour Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{tour.fullDescription}</p>
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Itinerary</h3>
                <div className="space-y-4">
                  {tour.itinerary?.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <p className="text-gray-700">{day}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card className="border-2 border-blue-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-blue-600">{tour.price}</CardTitle>
                    <p className="text-gray-600">per person</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3">
                      Book This Tour
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Request Information
                    </Button>
                  </CardContent>
                </Card>

                {/* What's Included */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tour.included?.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* What's Not Included */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Not Included</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tour.notIncluded?.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GalleryGrid />

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  )
}
