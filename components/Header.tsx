"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Trekking", href: "/trekking" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Magazine", href: "/magazine" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                GLACIER GAZE
              </h1>
              <p className="text-xs text-gray-600 -mt-1 hidden sm:block">ADVENTURES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="hidden lg:flex items-center text-gray-600 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>+92 5811 123456</span>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm px-4 py-2">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 touch-manipulation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+92 5811 123456</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
