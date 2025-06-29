import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Users, Award, Globe } from "lucide-react"

export default function AboutIntro() {
  const stats = [
    { icon: Mountain, value: "50+", label: "Mountain Routes", color: "text-emerald-600" },
    { icon: Users, value: "2,000+", label: "Happy Travelers", color: "text-blue-600" },
    { icon: Award, value: "15+", label: "Years Experience", color: "text-purple-600" },
    { icon: Globe, value: "8+", label: "Districts Covered", color: "text-indigo-600" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">About Us</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Gateway to
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Northern Pakistan
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                For over 15 years, Glacier Gaze Adventures has been crafting unforgettable experiences in the
                breathtaking landscapes of Gilgit-Baltistan. From the mighty Karakoram peaks to the serene Hunza Valley,
                we specialize in creating memories that last a lifetime.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our passion for the northern areas of Pakistan and commitment to sustainable tourism has made us the
                trusted choice for thousands of adventurers seeking authentic experiences in the world's most
                spectacular mountain region.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/IMG_4561.jpg"
                alt="Glacier Gaze Adventures team in Gilgit-Baltistan"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                // Image comment: Professional photo of local guides and team members in traditional Gilgit-Baltistan dress with Karakoram mountains in background
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <Card className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 bg-white shadow-2xl border-0">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600 mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years in GB Tourism</div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
