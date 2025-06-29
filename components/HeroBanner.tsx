"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, MapPin, Mountain } from "lucide-react"

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Karakoram Adventures",
      subtitle: "Explore the mighty peaks of Gilgit-Baltistan",
      // Image comment: Stunning Karakoram mountain range with K2, Broad Peak, and Gasherbrum peaks
    },
    {
      title: "Hunza Valley Magic",
      subtitle: "Discover the legendary Shangri-La of Pakistan",
      // Image comment: Hunza Valley with terraced fields, Baltit Fort, and Rakaposhi peak in background
    },
    {
      title: "Cultural Heritage",
      subtitle: "Experience ancient Silk Road traditions",
      // Image comment: Traditional Balti/Hunzakut people in cultural dress with mountain backdrop
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden mt-16">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/home-3.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: "cover" }}
      />
      {/* Overlay gradient - increased opacity for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50 pointer-events-none" />

      {/* Static particles effect - fixed positions to avoid hydration issues */}
      <div className="absolute inset-0">
        <Mountain className="absolute text-white/10 animate-pulse" style={{ left: "10%", top: "20%", animationDelay: "0s", animationDuration: "3s" }} />
        <Mountain className="absolute text-white/10 animate-pulse" style={{ left: "80%", top: "30%", animationDelay: "1s", animationDuration: "4s" }} />
        <Mountain className="absolute text-white/10 animate-pulse" style={{ left: "30%", top: "60%", animationDelay: "2s", animationDuration: "3.5s" }} />
        <Mountain className="absolute text-white/10 animate-pulse" style={{ left: "70%", top: "80%", animationDelay: "0.5s", animationDuration: "4.5s" }} />
        <Mountain className="absolute text-white/10 animate-pulse" style={{ left: "50%", top: "10%", animationDelay: "1.5s", animationDuration: "3.2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-2xl">
              GLACIER GAZE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mt-2 drop-shadow-lg">ADVENTURES</p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mt-2 drop-shadow-md">Gilgit-Baltistan Specialists</p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Dynamic content */}
          <div className="mb-8 animate-slide-up bg-black/20 backdrop-blur-sm rounded-lg p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 animate-fade-in text-white drop-shadow-xl">{slides[currentSlide].title}</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 animate-fade-in-delay drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-12 max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6">
            <div className="text-center animate-bounce-in">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">50+</div>
              <div className="text-xs sm:text-sm text-white/90 drop-shadow-md">Mountain Routes</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">2K+</div>
              <div className="text-xs sm:text-sm text-white/90 drop-shadow-md">Happy Travelers</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">15+</div>
              <div className="text-xs sm:text-sm text-white/90 drop-shadow-md">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            >
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Explore Gilgit-Baltistan</span>
              <span className="sm:hidden">Explore</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Watch Stories</span>
              <span className="sm:hidden">Watch</span>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
          </div>
        </div>
      </div>
    </section>
  )
}
