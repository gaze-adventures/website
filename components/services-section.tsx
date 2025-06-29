"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mountain, Waves, Tent, Bike, Camera, MapPin, Clock, Users, Star } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Mountain,
      title: "Mountain Trekking",
      description:
        "Conquer majestic peaks with our expert guides. From beginner-friendly trails to challenging expeditions.",
      duration: "3-14 days",
      groupSize: "4-12 people",
      difficulty: "Moderate to Extreme",
      price: "From $299",
      image: "/IMG_4603.JPG",
      // Image comment: Stunning mountain trekking scene with hikers on a trail, snow-capped peaks in background
      features: ["Professional Guides", "Safety Equipment", "Camping Gear", "Meals Included"],
    },
    {
      icon: Waves,
      title: "Water Adventures",
      description: "Experience the thrill of white water rafting, kayaking, and river expeditions in pristine waters.",
      duration: "1-5 days",
      groupSize: "6-16 people",
      difficulty: "Beginner to Advanced",
      price: "From $149",
      image: "/IMG_4603.JPG",
      // Image comment: Action shot of white water rafting with excited participants navigating rapids
      features: ["Certified Instructors", "Safety Briefing", "All Equipment", "Photography Service"],
    },
    {
      icon: Tent,
      title: "Desert Camping",
      description:
        "Sleep under the stars in luxury desert camps. Experience traditional culture and breathtaking sunsets.",
      duration: "2-7 days",
      groupSize: "2-20 people",
      difficulty: "Easy to Moderate",
      price: "From $199",
      image: "/IMG_4603.JPG",
      // Image comment: Beautiful desert camp setup with traditional tents, campfire, and starry night sky
      features: ["Luxury Tents", "Traditional Meals", "Cultural Activities", "Stargazing Sessions"],
    },
    {
      icon: Bike,
      title: "Cycling Expeditions",
      description:
        "Explore scenic routes and challenging terrains on our guided cycling adventures through diverse landscapes.",
      duration: "1-10 days",
      groupSize: "4-15 people",
      difficulty: "Easy to Hard",
      price: "From $89",
      image: "/IMG_4603.JPG",
      // Image comment: Cyclists on mountain bikes traversing scenic mountain or forest trails
      features: ["Quality Bikes", "Helmet & Gear", "Support Vehicle", "Route Planning"],
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife with professional photographers as your guides.",
      duration: "2-8 days",
      groupSize: "3-10 people",
      difficulty: "Easy to Moderate",
      price: "From $249",
      image: "/IMG_4603.JPG",
      // Image comment: Photographer capturing wildlife or landscape, with beautiful natural scenery
      features: ["Pro Photography Tips", "Best Locations", "Equipment Advice", "Photo Editing Workshop"],
    },
    {
      icon: MapPin,
      title: "Custom Adventures",
      description:
        "Design your perfect adventure. We create personalized experiences tailored to your preferences and skill level.",
      duration: "Flexible",
      groupSize: "1-25 people",
      difficulty: "Customizable",
      price: "Quote on Request",
      image: "/IMG_4603.JPG",
      // Image comment: Collage of various adventure activities or a planning session with maps and equipment
      features: ["Personalized Itinerary", "Flexible Dates", "Custom Group Size", "Dedicated Coordinator"],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Our Adventures</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Next
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Epic Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From heart-pounding adventures to serene explorations, we offer experiences that cater to every adventurer's
            dream and skill level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-orange-600 text-white">{service.price}</Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    {service.groupSize}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Star className="h-3 w-3 mr-1" />
                    {service.difficulty}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                  Book Adventure
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We create custom adventures tailored to your dreams.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 font-semibold rounded-full transition-all duration-300 bg-transparent"
          >
            Plan Custom Adventure
          </Button>
        </div>
      </div>
    </section>
  )
}
