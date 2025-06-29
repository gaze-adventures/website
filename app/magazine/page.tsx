import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function MagazinePage() {
  const articles = [
    {
      title: "The Science Behind Glacier Formation",
      excerpt: "Understanding how these magnificent ice formations come to life over thousands of years.",
      author: "Dr. Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Science",
      image: "/IMG_4701.JPG",
      // Image comment: Educational diagram or photo showing glacier formation process
    },
    {
      title: "Climate Change and Glacial Retreat",
      excerpt: "Documenting the rapid changes in glacial landscapes and what it means for our planet.",
      author: "Marcus Chen",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Environment",
      image: "/IMG_4701.JPG",
      // Image comment: Before/after photos showing glacial retreat or climate impact
    },
    {
      title: "Photography Tips for Glacial Landscapes",
      excerpt: "Master the art of capturing the ethereal beauty of ice formations and glacial environments.",
      author: "Elena Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Photography",
      image: "/IMG_4701.JPG",
      // Image comment: Photographer taking pictures of glacial landscape with camera equipment
    },
    {
      title: "Safety Protocols for Ice Climbing",
      excerpt: "Essential safety measures and equipment for navigating glacial terrain safely.",
      author: "James Wilson",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Safety",
      image: "/IMG_4701.JPG",
      // Image comment: Ice climbing safety equipment and techniques demonstration
    },
    {
      title: "The Hidden World of Ice Caves",
      excerpt: "Exploring the mysterious blue chambers carved by nature within glacial formations.",
      author: "Sarah Mitchell",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Exploration",
      image: "/IMG_4701.JPG",
      // Image comment: Beautiful blue ice cave interior with natural lighting
    },
    {
      title: "Wildlife in Glacial Environments",
      excerpt: "Discovering the remarkable animals that call glacial regions their home.",
      author: "Dr. Michael Torres",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Wildlife",
      image: "/IMG_4701.JPG",
      // Image comment: Arctic wildlife like seals, polar bears, or penguins in glacial setting
    },
  ]

  const categories = ["All", "Science", "Environment", "Photography", "Safety", "Exploration", "Wildlife"]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Magazine</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Glacier
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Magazine
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the world of glacial adventures with expert insights, safety tips, environmental updates,
              and inspiring stories from the ice.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full hover:bg-blue-50 hover:border-blue-300 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600 text-white">Featured Article</Badge>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <img
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{articles[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{articles[0].excerpt}</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest insights from the world of glacial adventures</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our magazine for the latest glacial adventure insights, safety tips, and expedition stories.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
