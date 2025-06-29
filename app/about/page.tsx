import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield, Heart, Snowflake } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Lead Guide",
      experience: "15+ years",
      specialization: "Himalayan Glaciers",
      image: "/IMG_4680.JPG",
      // Image comment: Professional photo of female expedition leader in glacier gear
    },
    {
      name: "Marcus Chen",
      role: "Head of Safety",
      experience: "12+ years",
      specialization: "Ice Rescue & Training",
      image: "/IMG_4680.JPG",
      // Image comment: Professional photo of male safety expert with rescue equipment
    },
    {
      name: "Elena Rodriguez",
      role: "Photography Guide",
      experience: "8+ years",
      specialization: "Glacial Photography",
      image: "/IMG_4680.JPG",
      // Image comment: Professional photo of female photographer with camera in glacial setting
    },
    {
      name: "James Wilson",
      role: "Expedition Leader",
      experience: "10+ years",
      specialization: "Patagonian Ice Fields",
      image: "/IMG_4680.JPG",
      // Image comment: Professional photo of male expedition leader in cold weather gear
    },
  ]

  const values = [
    {
      icon: Snowflake,
      title: "Passion for Ice",
      description: "Our deep love for glacial environments drives everything we do",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to participant safety and risk management",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Environmental Care",
      description: "Protecting and preserving glacial ecosystems for future generations",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a global community of glacial adventure enthusiasts",
      color: "from-purple-500 to-violet-600",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a passion for glacial landscapes and a commitment to sharing their beauty with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Founded on Ice and Dreams</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Glacier Gaze Adventures was born in 2012 when our founder, Sarah Mitchell, completed her first solo
                  expedition across the Patagonian Ice Fields. Overwhelmed by the pristine beauty and raw power of
                  glacial environments, she knew she had to share this experience with others.
                </p>
                <p>
                  What started as small group expeditions with friends has grown into one of the world's most respected
                  glacial adventure companies. We've guided over 5,000 adventurers across 15 countries, always
                  maintaining our core values of safety, environmental stewardship, and authentic experiences.
                </p>
                <p>
                  Today, our team of certified guides and safety experts continues to push the boundaries of glacial
                  exploration while ensuring every participant returns home with memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Company founder on glacier"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                // Image comment: Inspiring photo of company founder or team on a glacier with dramatic ice formations
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold text-blue-600">2012</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every expedition and shape our approach to glacial adventure tourism.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced guides and safety experts are passionate about sharing the wonder of glacial environments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{member.experience} experience</p>
                      <p>{member.specialization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Adventurers Guided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">200+</div>
              <div className="text-gray-600">Glacial Routes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">0</div>
              <div className="text-gray-600">Major Incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Adventure?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the magic of glacial landscapes with our expert team. Your next great adventure awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
            >
              View Our Tours
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
