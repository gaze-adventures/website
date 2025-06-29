"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Compass, Shield, Award } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Mountain,
      title: "Expert Guides",
      description: "Certified professionals with years of experience in adventure tourism",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Top-tier safety equipment and protocols for all our adventures",
    },
    {
      icon: Compass,
      title: "Unique Routes",
      description: "Discover hidden gems and off-the-beaten-path destinations",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the leading adventure company in the region",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Gateway to
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  Epic Adventures
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For over 15 years, Rida Khadventures has been crafting unforgettable experiences for adventure seekers.
                From towering mountain peaks to rushing rivers, we specialize in creating memories that last a lifetime.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our passion for exploration and commitment to safety has made us the trusted choice for thousands of
                adventurers seeking authentic, thrilling experiences in nature's most spectacular settings.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Adventure team"
                className="w-full h-[600px] object-cover"
                // Image comment: Professional photo of the adventure team/guides in action, possibly on a mountain or during an expedition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
