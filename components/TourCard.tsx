import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, MapPin } from "lucide-react"

interface Tour {
  slug: string
  title: string
  duration: string
  price: string
  thumbnail: string
  highlights: string[]
  difficulty: string
  groupSize: string
  rating: number
  location: string
}

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={tour.thumbnail || "/placeholder.svg?height=250&width=400"}
          alt={tour.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          // Image comment: Specific glacier/mountain landscape based on tour location
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white">{tour.difficulty}</Badge>
        </div>
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-white text-gray-900 font-semibold">{tour.price}</Badge>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
          <MapPin className="h-3 w-3 mr-1" />
          {tour.location}
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {tour.title}
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {tour.groupSize}
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
            {tour.rating}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Highlights */}
        <div className="space-y-2">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              {highlight}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href={`/tours/${tour.slug}`}>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
