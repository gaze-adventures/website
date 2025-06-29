"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
      question: "What experience level is required for glacial adventures?",
      answer:
        "We offer adventures for all experience levels, from beginner-friendly glacier walks to challenging ice climbing expeditions. Each tour clearly indicates the required fitness level and experience. Our expert guides provide comprehensive safety briefings and training for all participants.",
    },
    {
      question: "What equipment is provided vs. what should I bring?",
      answer:
        "We provide all specialized glacial equipment including crampons, ice axes, helmets, and safety gear. You'll need to bring appropriate clothing layers, waterproof boots, and personal items. We provide a detailed packing list upon booking with recommendations for each specific adventure.",
    },
    {
      question: "How do you ensure safety on glacial terrain?",
      answer:
        "Safety is our top priority. All guides are certified in glacial rescue techniques and carry emergency communication devices. We conduct thorough route assessments, provide comprehensive safety briefings, and maintain strict group protocols. Weather conditions are constantly monitored, and we have contingency plans for all scenarios.",
    },
    {
      question: "What's the best time of year for glacier adventures?",
      answer:
        "The optimal season varies by location. Generally, late spring through early fall offers the best conditions for most glacial regions. However, destinations like Hunza and Skardu offer unique winter experiences. We provide seasonal recommendations for each destination to help you choose the perfect time for your adventure.",
    },
    {
      question: "Are your tours suitable for families with children?",
      answer:
        "Yes! We offer family-friendly glacier experiences designed for children 12 and older. These tours focus on education and gentle exploration rather than technical climbing. Younger participants must be accompanied by adults and meet minimum fitness requirements for safety.",
    },
    {
      question: "What happens if weather conditions are poor?",
      answer:
        "Weather is unpredictable in glacial environments. We monitor conditions closely and may modify itineraries for safety. If tours must be cancelled due to extreme weather, we offer full refunds or rescheduling options. We also provide alternative indoor activities and cultural experiences when possible.",
    },
    {
      question: "Do you offer photography guidance during tours?",
      answer:
        "Many of our guides are skilled photographers who can help you capture stunning glacial landscapes. We also offer specialized photography tours with professional instruction, optimal timing for lighting, and access to the most photogenic locations.",
    },
    {
      question: "What's included in the tour price?",
      answer:
        "Tour prices typically include professional guiding, all specialized equipment, safety gear, and transportation during the adventure. Accommodation, meals, and flights are usually separate unless specified. Each tour page provides a detailed breakdown of inclusions and exclusions.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our glacial adventures, safety protocols, and booking process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
