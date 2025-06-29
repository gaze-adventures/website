import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake, Shield, Users, Award, MapPin, Camera } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Snowflake,
      title: "Glacier Specialists",
      description: "Expert knowledge of glacial environments and ice formations worldwide",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Safety Excellence",
      description: "Comprehensive safety protocols and top-tier equipment for ice environments",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate group sizes ensuring personalized attention and flexibility",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the leading glacial adventure company globally",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: MapPin,
      title: "Unique Access",
      description: "Exclusive routes to pristine glacial locations off the beaten path",
      color: "from-cyan-500 to-teal-600",
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Perfect positioning for capturing stunning glacial landscapes",
      color: "from-pink-500 to-rose-600",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence, safety, and unforgettable experiences sets us apart in the world of glacial
            adventure tourism.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
