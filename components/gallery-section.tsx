"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const galleryImages = [
    { src: "/IMG_4561.JPG", category: "mountains", title: "IMG_4561", description: "" },
    { src: "/IMG_4603.JPG", category: "mountains", title: "IMG_4603", description: "" },
    { src: "/IMG_4661.JPG", category: "mountains", title: "IMG_4661", description: "" },
    { src: "/IMG_4667.JPG", category: "mountains", title: "IMG_4667", description: "" },
    { src: "/IMG_4678.JPG", category: "mountains", title: "IMG_4678", description: "" },
    { src: "/IMG_4679.JPG", category: "mountains", title: "IMG_4679", description: "" },
    { src: "/IMG_4680.JPG", category: "mountains", title: "IMG_4680", description: "" },
    { src: "/IMG_4700.JPG", category: "mountains", title: "IMG_4700", description: "" },
    { src: "/IMG_4701.JPG", category: "mountains", title: "IMG_4701", description: "" },
    { src: "/IMG_5093.JPG", category: "mountains", title: "IMG_5093", description: "" },
    { src: "/IMG_5099.JPG", category: "mountains", title: "IMG_5099", description: "" },
    { src: "/IMG_5102.JPG", category: "mountains", title: "IMG_5102", description: "" },
    { src: "/IMG_5104.JPG", category: "mountains", title: "IMG_5104", description: "" },
    { src: "/IMG_5114.JPG", category: "mountains", title: "IMG_5114", description: "" },
    { src: "/IMG_5132.JPG", category: "mountains", title: "IMG_5132", description: "" },
    { src: "/IMG_5159.JPG", category: "mountains", title: "IMG_5159", description: "" },
    { src: "/IMG_5160.JPG", category: "mountains", title: "IMG_5160", description: "" },
    { src: "/IMG_5184.JPG", category: "mountains", title: "IMG_5184", description: "" },
    { src: "/IMG_5185.JPG", category: "mountains", title: "IMG_5185", description: "" },
    { src: "/IMG_5210.JPG", category: "mountains", title: "IMG_5210", description: "" },
    { src: "/IMG_5288.JPG", category: "mountains", title: "IMG_5288", description: "" },
    { src: "/IMG_5299.JPG", category: "mountains", title: "IMG_5299", description: "" },
  ]

  const categories = [
    { id: "all", label: "All Adventures" },
    { id: "mountains", label: "Mountains" },
    { id: "water", label: "Water Sports" },
    { id: "desert", label: "Desert" },
    { id: "cycling", label: "Cycling" },
  ]

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Moments That Take Your
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Breath Away
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every adventure tells a story. Browse through our collection of unforgettable moments captured during our
            expeditions around the world.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "hover:bg-orange-50 hover:border-orange-300"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].title}
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
                <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-gray-200">{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to create your own unforgettable memories?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
          >
            Start Your Adventure
          </Button>
        </div>
      </div>
    </section>
  )
}
