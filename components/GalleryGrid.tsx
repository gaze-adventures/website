"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { src: "/IMG_5132.jpg", title: "Mountain Majesty", description: "Majestic peak photography" },
    { src: "/IMG_4679.jpg", title: "Mountain Expedition", description: "Adventure photography" },
    { src: "/IMG_5184.jpg", title: "Natural Vista", description: "Panoramic mountain views" },
    { src: "/IMG_4700.jpg", title: "Adventure Journey", description: "Mountain exploration" },
    { src: "/IMG_5099.jpg", title: "Peak Adventure", description: "High altitude photography" },
    { src: "/IMG_4661.jpg", title: "Adventure Trail", description: "Exploring mountain trails" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Glacial
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Moments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the breathtaking beauty of glacial landscapes through our collection of stunning photography from
            adventures around the world.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-4 w-4 text-gray-700" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-200">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to create your own glacial memories?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Your Adventure
          </Button>
        </div>
      </div>
    </section>
  )
}
