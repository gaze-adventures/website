import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react"

export default function ContactPage() {
  const officeLocations = [
    {
      city: "Headquarters - Gilgit",
      address: "Main Bazaar Road, Gilgit, Gilgit-Baltistan",
      phone: "+92 5811 123456",
      email: "gilgit@glaciergazeadventures.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    },
    {
      city: "Branch Office - Hunza",
      address: "Karimabad Bazaar, Hunza Valley, Gilgit-Baltistan",
      phone: "+92 5813 234567",
      email: "hunza@glaciergazeadventures.com",
      hours: "Mon-Fri: 9AM-5PM (PKT)",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to embark on your glacial adventure? Our team of experts is here to help you plan the perfect ice
              expedition.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-gray-600">Visit us at our locations around the world</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {officeLocations.map((office, index) => (
              <Card key={index} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{office.city}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div>
              <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">5K+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <Clock className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div>
              <MapPin className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Routes</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
