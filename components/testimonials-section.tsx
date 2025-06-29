"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      adventure: "Himalayan Trek",
      rating: 5,
      text: "The most incredible experience of my life! The guides were professional, the scenery was breathtaking, and every detail was perfectly planned. Rida Khadventures exceeded all my expectations.",
      image: "/IMG_4667.JPG",
      // Image comment: Professional headshot of a happy female client, outdoor/adventure setting preferred
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      adventure: "Desert Safari",
      rating: 5,
      text: "An unforgettable journey through the desert. The luxury camping was amazing, and watching the sunrise over the dunes was magical. The team's hospitality was outstanding.",
      image: "/IMG_4667.JPG",
      // Image comment: Professional headshot of a satisfied male client, preferably with outdoor/travel background
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      adventure: "White Water Rafting",
      rating: 5,
      text: "Pure adrenaline rush! The safety measures were top-notch, and the instructors made sure everyone felt confident. This adventure pushed my limits in the best way possible.",
      image: "/IMG_4667.JPG",
      // Image comment: Professional headshot of an adventurous female client, outdoor enthusiast look
    },
    {
      name: "David Thompson",
      location: "London, UK",
      adventure: "Photography Tour",
      rating: 5,
      text: "As a photography enthusiast, this tour was perfect. The guides knew all the best spots and timing for incredible shots. I came back with a portfolio I'm truly proud of.",
      image: "/IMG_4667.JPG",
      // Image comment: Professional headshot of a male photographer/creative type client
    },
    {
      name: "Lisa Park",
      location: "Seoul, South Korea",
      adventure: "Mountain Cycling",
      rating: 5,
      text: "The cycling routes were challenging yet rewarding. The support team was always there when needed, and the views were absolutely spectacular. Highly recommend!",
      image: "/IMG_4667.JPG",
      // Image comment: Professional headshot of an athletic female client, sporty/active appearance
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
    <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories from Our
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Adventurers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the thousands of adventurers who have created unforgettable
            memories with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-orange-500 mx-auto" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
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
              className="rounded-full p-2 hover:bg-orange-50 bg-transparent"
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
                    currentTestimonial === index ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 hover:bg-orange-50 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Adventures</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
