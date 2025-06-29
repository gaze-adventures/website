"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Emma Thompson",
      location: "London, UK",
      adventure: "K2 Base Camp Trek",
      rating: 5,
      text: "The most incredible glacial experience of my life! Walking on ancient ice formations was surreal. The guides were knowledgeable and made us feel completely safe throughout the adventure.",
      image: "/placeholder.svg?height=80&width=80",
      // Image comment: Professional headshot of a happy female client with outdoor/adventure background
    },
    {
      name: "Marcus Chen",
      location: "Vancouver, Canada",
      adventure: "Patagonia Ice Field",
      rating: 5,
      text: "Absolutely breathtaking expedition! The Patagonian ice fields exceeded all expectations. The team's expertise in glacial environments was evident every step of the way.",
      image: "/placeholder.svg?height=80&width=80",
      // Image comment: Professional headshot of a satisfied male client, preferably with mountain/ice background
    },
    {
      name: "Sofia Rodriguez",
      location: "Madrid, Spain",
      adventure: "Hunza Valley Trek",
      rating: 5,
      text: "Witnessing glaciers calving into the sea was a life-changing moment. The wildlife viewing was incredible, and the entire experience was perfectly organized from start to finish.",
      image: "/placeholder.svg?height=80&width=80",
      // Image comment: Professional headshot of an adventurous female client with natural/outdoor setting
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      adventure: "Everest Base Camp Glacier",
      rating: 5,
      text: "The ultimate glacial adventure! The Khumbu Icefall was both terrifying and beautiful. Our Sherpa guides were exceptional, and the entire trek was flawlessly executed.",
      image: "/placeholder.svg?height=80&width=80",
      // Image comment: Professional headshot of a male adventurer/mountaineer type client
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories from Our
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Adventurers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the thousands of adventurers who have experienced the magic of glacial landscapes with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-blue-500 mx-auto" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-blue-200"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm sm:text-base text-gray-600">{testimonials[currentTestimonial].location}</div>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {testimonials[currentTestimonial].adventure}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2 hover:bg-blue-50 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 hover:bg-blue-50 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">5,000+</div>
            <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 mb-2">4.8/5</div>
            <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 mb-2">200+</div>
            <div className="text-sm sm:text-base text-gray-600">Glacial Routes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-2">12+</div>
            <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
