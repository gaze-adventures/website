import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Snowflake, Shield, Users, Calendar, MapPin, Camera, Headphones, Award } from "lucide-react"

export default function ServiceCard() {
  const services = [
    {
      icon: Snowflake,
      title: "Expert Glacier Guides",
      description: "Certified professionals with extensive glacial terrain experience",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Top-tier safety equipment and comprehensive risk management",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate group sizes for personalized attention and flexibility",
      color: "text-purple-600",
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy booking process with flexible cancellation policies",
      color: "text-orange-600",
    },
    {
      icon: MapPin,
      title: "Unique Routes",
      description: "Access to exclusive glacial locations and hidden ice formations",
      color: "text-cyan-600",
    },
    {
      icon: Camera,
      title: "Photography Support",
      description: "Professional photography guidance for capturing perfect moments",
      color: "text-pink-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance during your glacial adventures",
      color: "text-red-600",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in glacial adventure tourism",
      color: "text-yellow-600",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Glacier Gaze
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to ensure your glacial adventure is safe, memorable, and perfectly
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gray-50 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
