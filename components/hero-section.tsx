"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Epic Mountain Adventures",
      subtitle: "Conquer the highest peaks with expert guides",
      // Image comment: High-resolution mountain climbing/trekking image with dramatic peaks
    },
    {
      title: "Thrilling Water Sports",
      subtitle: "Experience the rush of white water rafting",
      // Image comment: Action shot of white water rafting or kayaking
    },
    {
      title: "Desert Expeditions",
      subtitle: "Explore vast landscapes and starlit nights",
      // Image comment: Desert landscape with camels or 4x4 vehicles, sunset/sunrise
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-500/20 to-purple-600/20 animate-gradient-x" />

      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          // Image comment: Replace with stunning adventure landscape - mountains, rivers, or desert based on current slide
        }}
      />

      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              RIDA KHADVENTURES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Dynamic content */}
          <div className="mb-8 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slides[currentSlide].title}</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center animate-bounce-in">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-300">Adventures</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-red-400">10K+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Adventures
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Stories
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
            )}
          />
        ))}
      </div>
    </section>
  )
}
