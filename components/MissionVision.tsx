import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Leaf } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Purpose</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mission &
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by passion for glacial environments and commitment to sustainable adventure tourism.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide safe, educational, and transformative glacial adventures that connect people with the world's
                most spectacular ice environments while promoting conservation and respect for these fragile ecosystems.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's leading glacial adventure company, inspiring a global community of ice enthusiasts
                while contributing to the preservation of glacial environments for future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Passion for Ice</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our deep love for glacial environments drives everything we do, from route planning to guide
                    training.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Stewardship</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're committed to sustainable tourism practices that protect and preserve glacial ecosystems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
