import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Mountain,
  Award,
  Shield,
  Heart,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    adventures: [
      { name: "K2 Base Camp Trek", href: "/tours/k2-base-camp" },
      { name: "Hunza Valley Tours", href: "/tours/hunza-valley" },
      { name: "Nanga Parbat Expedition", href: "/tours/nanga-parbat" },
      { name: "Skardu Adventures", href: "/tours/skardu" },
      { name: "Cultural Tours", href: "/tours/cultural" },
      { name: "Photography Tours", href: "/tours/photography" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Guides", href: "/guides" },
      { name: "Safety Standards", href: "/safety" },
      { name: "Sustainable Tourism", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Media Coverage", href: "/media" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Booking Policy", href: "/booking-policy" },
      { name: "Permits & Visas", href: "/permits" },
      { name: "Travel Insurance", href: "/insurance" },
      { name: "Emergency Support", href: "/emergency" },
    ],
    destinations: [
      { name: "Hunza Valley", href: "/destinations/hunza-valley" },
      { name: "Skardu Region", href: "/destinations/skardu" },
      { name: "Gilgit City", href: "/destinations/gilgit" },
      { name: "Nagar Valley", href: "/destinations/nagar" },
      { name: "Chitral Region", href: "/destinations/chitral" },
      { name: "Diamer Region", href: "/destinations/diamer" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/glaciergazepakistan", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/glaciergazepk", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/glaciergazepk", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/glaciergazepakistan", label: "YouTube" },
  ]

  const certifications = [
    { icon: Award, text: "PTDC Registered" },
    { icon: Shield, text: "Tourism Police Certified" },
    { icon: Mountain, text: "Alpine Club of Pakistan" },
    { icon: Heart, text: "Responsible Tourism" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                    GLACIER GAZE
                  </h3>
                  <p className="text-xs text-gray-400 -mt-1">ADVENTURES</p>
                </div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Specialized in Gilgit-Baltistan adventures for over 15 years. Your trusted partner for authentic mountain
              experiences in Pakistan's northern areas.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">Jamal Road, Gilgit, Pakistan</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">+92 5811 55555</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-emerald-400" />
                <span className="text-sm">info@glaciergazeadventures.pk</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Adventures Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Adventures</h4>
            <ul className="space-y-3">
              {footerLinks.adventures.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-teal-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-indigo-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center text-blue-400">Certifications & Memberships</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-gray-300">
                <cert.icon className="h-5 w-5 text-blue-400" />
                <span className="text-sm">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest from Gilgit-Baltistan adventures and exclusive Pakistan tour offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© {currentYear} Glacier Gaze Adventures. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
