import HeroBanner from "@/components/HeroBanner"
import TourList from "@/components/TourList"
import ServiceCard from "@/components/ServiceCard"
import AboutIntro from "@/components/AboutIntro"
import WhyChooseUs from "@/components/WhyChooseUs"
import MissionVision from "@/components/MissionVision"
import GalleryGrid from "@/components/GalleryGrid"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import FAQAccordion from "@/components/FAQAccordion"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <TourList />
      <ServiceCard />
      <AboutIntro />
      <WhyChooseUs />
      <MissionVision />
      <GalleryGrid />
      <TestimonialCarousel />
      <FAQAccordion />
      <ContactForm />
      <Footer />
    </main>
  )
}
