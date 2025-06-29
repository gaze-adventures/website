import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Glacial
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of breathtaking glacial photography from expeditions around the world. Each image
              tells a story of adventure, beauty, and the raw power of ice.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <GalleryGrid />

      <Footer />
    </div>
  )
}
