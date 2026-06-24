"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns"
import { HeroSlideshow } from "@/components/ui/hero-slideshow"
import { ResponsiveVideo } from "@/components/ui/responsive-video"

const testimonials = [
  {
    text: "Our day charter to the Isle of Wight was absolutely magical. Lunch at The Hut was incredible and the crew was professional and attentive. Perfect for our anniversary celebration!",
    image: "/images/avatars/sarah-james.png",
    name: "Sarah & James Mitchell",
    location: "Anniversary Charter",
  },
  {
    text: "Trevorah Charters made our corporate day out unforgettable. Cruising from Poole to the Isle of Wight impressed all our clients. Exceptional service throughout the day.",
    image: "/images/avatars/david.png",
    name: "David Thompson",
    location: "Corporate Charter",
  },
  {
    text: "The day charter exploring Old Harry Rocks was incredible! We enjoyed a delicious lunch onboard while taking in the stunning Jurassic Coast views. Highly recommend for special occasions.",
    image: "/images/avatars/michael.png",
    name: "Michael Roberts",
    location: "Jurassic Coast Charter",
  },
  {
    text: "Our day exploring from Poole to the Isle of Wight was perfect. The dramatic cliffs and hidden coves along the way were breathtaking. The crew's local knowledge was invaluable.",
    image: "/images/avatars/emma.png",
    name: "Emma & Tom Wilson",
    location: "Isle of Wight Charter",
  },
  {
    text: "The day charter from Poole along the Jurassic Coast exceeded expectations. Perfect for our family reunion with stunning views of Old Harry Rocks and the Purbeck coastline.",
    image: "/images/avatars/jennifer.png",
    name: "Jennifer Clarke",
    location: "Family Reunion Charter",
  },
  {
    text: "Our corporate team building day was fantastic. The professional crew and catering were perfect for impressing our international clients. The La Lupa dinner afterwards was the perfect end.",
    image: "/images/avatars/richard.png",
    name: "Richard Palmer",
    location: "Corporate Charter with La Lupa Dinner",
  },
  {
    text: "The wildlife watching cruise from Poole Harbour was extraordinary. We saw seals around Brownsea Island and dolphins along the Jurassic Coast. The crew's expertise made it educational and fun.",
    image: "/images/avatars/helen.png",
    name: "Helen & Mark Davis",
    location: "Poole Harbour Charter",
  },
  {
    text: "The champagne cruise to The Hut on the Isle of Wight was the highlight of our holiday. Exploring the coast in such luxury was unforgettable. Five-star service throughout!",
    image: "/images/avatars/caroline.png",
    name: "Caroline Foster",
    location: "Isle of Wight, The Hut",
  },
  {
    text: "Our special charter from Poole to the Isle of Wight followed by dinner at La Lupa was absolutely magical. The combination of sea and fine dining was worth every moment. Truly a once-in-a-lifetime experience.",
    image: "/images/avatars/andrew.png",
    name: "Andrew & Lucy Stevens",
    location: "Isle of Wight with La Lupa Dinner",
  },
  {
    text: "Eight of us booked Mojo for a friends weekend down from London. The crew looked after us brilliantly all day, the boat is stunning, and the Jurassic Coast views were genuinely jaw-dropping. Already planning our return.",
    image: "/images/avatars/friends-group.png",
    name: "The Hartley Group",
    location: "Friends Day Charter",
  },
  {
    text: "I treated myself to a solo charter for my 40th birthday and it was the best decision I have ever made. Having the whole boat to myself felt incredibly special. The skipper made sure every detail was perfect.",
    image: "/images/avatars/james-solo.png",
    name: "James Alderton",
    location: "Solo Birthday Charter",
  },
  {
    text: "We hired Mojo for my hen do and it was absolutely perfect. Champagne on the sun deck, beautiful scenery, and the crew could not have been more accommodating. Every single one of us had the best day.",
    image: "/images/avatars/hen-party.png",
    name: "Olivia & the Girls",
    location: "Hen Party Charter",
  },
  {
    text: "We use Trevorah Charters regularly for client hospitality events and they never let us down. The presentation of the yacht, the professionalism of the crew, and the overall experience is consistently outstanding.",
    image: "/images/avatars/events-company.png",
    name: "Sophie Marchetti",
    location: "Marchetti Events Ltd",
  },
  {
    text: "Dad's 70th birthday on board Mojo was something the whole family will remember forever. Three generations out on the water together, brilliant food, and a crew that genuinely went above and beyond.",
    image: "/images/avatars/birthday-party.png",
    name: "The Brennan Family",
    location: "Birthday Celebration Charter",
  },
  {
    text: "I booked a last-minute solo trip along the Jurassic Coast and was made to feel completely at ease from the first call. The boat is gorgeous, the crew are brilliant, and the scenery left me speechless.",
    image: "/images/avatars/rachel-solo.png",
    name: "Rachel Simmons",
    location: "Solo Coastal Charter",
  },
]

const firstColumn = testimonials.slice(0, 4)
const secondColumn = testimonials.slice(4, 8)
const thirdColumn = testimonials.slice(8, 12)
const fourthColumn = testimonials.slice(12, 15)

export default function ClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const sectionPosition = section.getBoundingClientRect().top
      const offsetPosition = sectionPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  function submitToWhatsApp() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const date = document.getElementById("date").value
    const selectedPackage = document.getElementById("package").value
    const requests = document.getElementById("requests").value

    const message = `*New Yacht Charter Enquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Preferred Date:* ${date}%0A*Package:* ${selectedPackage}%0A*Additional Requests:* ${requests}`
    const whatsappURL = `https://api.whatsapp.com/send?phone=441202287004&text=${message}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col font-montserrat">
      <header
        className={`sticky top-0 z-50 w-full border-b border-gold/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${isScrolled ? "h-16 md:h-16" : "h-16 md:h-20"}`}
      >
        <div className="container flex h-full items-center justify-between px-4">
          {/* Logo - left side */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Trevorah Charters - Luxury Yacht Charters in Poole"
          >
            <div className="relative h-8 w-16 md:h-10 md:w-20">
              <Image
                src="/images/trevorah-logo.png"
                alt="Trevorah Charters Logo"
                fill
                priority
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-playfair font-medium tracking-wider hidden sm:inline">Trevorah Charters</span>
          </Link>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex flex-1 justify-center gap-8" aria-label="Main Navigation">
            <Link
              href="#about"
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "about")}
            >
              About
            </Link>
            <Link
              href="#packages"
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "packages")}
            >
              Packages
            </Link>
            <Link
              href="#testimonials"
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "testimonials")}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Call Now button and mobile menu toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              className="luxury-button text-gold border-gold hover:text-gold-light text-sm px-4 md:px-6 hidden md:flex"
              variant="outline"
              asChild
            >
              <a href="tel:+441202287004">Call Now</a>
            </Button>
            <button
              className="lg:hidden text-gold p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Navigation - full width dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-gold/30 py-6 z-50 shadow-xl">
            <nav className="container flex flex-col gap-1 px-4" aria-label="Mobile Navigation">
              <Link
                href="#about"
                className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-3 px-4 rounded-sm hover:bg-white/5"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "about")
                  setIsMenuOpen(false)
                }}
              >
                About
              </Link>
              <Link
                href="#packages"
                className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-3 px-4 rounded-sm hover:bg-white/5"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "packages")
                  setIsMenuOpen(false)
                }}
              >
                Packages
              </Link>
              <Link
                href="#testimonials"
                className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-3 px-4 rounded-sm hover:bg-white/5"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "testimonials")
                  setIsMenuOpen(false)
                }}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-3 px-4 rounded-sm hover:bg-white/5"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  scrollToSection(e, "contact")
                  setIsMenuOpen(false)
                }}
              >
                Contact
              </Link>
              <Button
                className="luxury-button text-gold border-gold hover:text-gold-light text-sm w-full mt-4"
                variant="outline"
                asChild
              >
                <a href="tel:+441202287004">Call Now</a>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[90vh] w-full" aria-labelledby="hero-heading">
          <HeroSlideshow />
          <div className="absolute inset-0 hero-overlay" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-start pt-16 md:pt-24 lg:pt-28 text-center text-white px-4">
            <h1
              id="hero-heading"
              className="max-w-4xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-light tracking-wider"
            >
              Experience Unmatched Luxury Aboard <span className="italic font-normal text-gold">Mojo</span> in Poole
            </h1>
            <div className="mt-4 md:mt-6 h-px w-16 md:w-24 bg-gold"></div>
            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg lg:text-xl font-light tracking-wide px-4">
              Discover the beauty of Poole Harbour and the Isle of Wight with our exclusive bespoke yacht charters in
              Dorset.
            </p>
            <div className="mt-8 md:mt-12 flex flex-col gap-4 sm:flex-row">
              <Button
                className="luxury-button text-gold border-gold hover:text-gold-light px-6 md:px-8"
                variant="outline"
                size="lg"
                asChild
              >
                <Link
                  href="#packages"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "packages")}
                >
                  View Packages
                </Link>
              </Button>
              <Button className="bg-gold hover:bg-gold-light text-navy px-6 md:px-8" size="lg" asChild>
                <a href="tel:+441202287004">Call Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 pt-20 md:pt-28" aria-labelledby="about-heading">
          <div className="container px-4">
            <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row">
              <div className="flex-1 space-y-6 md:space-y-8">
                <div>
                  <span className="text-gold uppercase tracking-widest text-sm">About Mojo Yacht</span>
                  <h2
                    id="about-heading"
                    className="mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent gold-accent-left"
                  >
                    Luxury Redefined on the Waters of Poole and Dorset
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Mojo is a beautifully maintained Sunseeker Predator 62, one of Britain's finest performance yachts, built by the renowned Sunseeker shipyard in Poole. Her sleek lines and powerful twin MAN 1100 CRM engines deliver speeds of up to 68 km/h, getting you to the Isle of Wight or along the Jurassic Coast quickly and in effortless style.
                </p>
                <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">62-foot Sunseeker Predator</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Up to 10 guests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Twin MAN 1100 CRM engines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Top speed up to 68 km/h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Day charters (10am to 6pm)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Professional skipper & crew</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Departing Poole Quay Marina</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-light text-sm md:text-base">Refreshments included</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg md:text-xl font-playfair">Explore Dorset's Stunning Coastline</h3>
                  <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    From the bustling Poole Harbour to the serene beauty of the Isle of Wight and the majestic Jurassic
                    Coast, our luxury yacht charters offer the perfect way to experience the natural splendor of the
                    South Coast.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <ResponsiveVideo
                  src="https://www.dropbox.com/scl/fi/vxtngoljgqdpap6uwzy33/WhatsApp-Video-2025-04-05-at-12.12.02.mp4?rlkey=toqb0wazdvomlzfx7x7xlmnm8&st=x1upeqpw&dl=1"
                  poster="/images/hero/image4.jpg"
                  className="border border-gold/20 shadow-lg"
                />
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative h-24 md:h-28 overflow-hidden rounded-sm border border-gold/20">
                    <Image
                      src="/images/mojo/mojo-1.jpg"
                      alt="Mojo Sunseeker Predator 62 exterior"
                      fill
                      loading="lazy"
                      sizes="33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-24 md:h-28 overflow-hidden rounded-sm border border-gold/20">
                    <Image
                      src="/images/mojo/mojo-2.jpg"
                      alt="Mojo yacht deck and interior"
                      fill
                      loading="lazy"
                      sizes="33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-24 md:h-28 overflow-hidden rounded-sm border border-gold/20">
                    <Image
                      src="/images/mojo/mojo-3.jpg"
                      alt="Mojo yacht on the water"
                      fill
                      loading="lazy"
                      sizes="33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section
          id="packages"
          className="luxury-gradient py-16 md:py-24 pt-20 md:pt-28 text-white"
          aria-labelledby="packages-heading"
        >
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-gold uppercase tracking-widest text-sm">Bespoke Charter Packages</span>
              <h2
                id="packages-heading"
                className="mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent"
              >
                Tailored Experiences for Every Occasion
              </h2>
              <p className="mt-8 md:mt-12 text-white/80 leading-relaxed text-sm md:text-base font-light">
                Choose from our curated selection of day yacht charter packages or contact us for a bespoke experience
                tailored to your specific requirements. All charters depart from Poole Quay at 10am and return by 6pm.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <Tabs defaultValue="iow" className="w-full">
                <TabsList className="mx-auto grid w-full max-w-lg md:max-w-xl lg:max-w-2xl grid-cols-2 md:grid-cols-3 bg-transparent border border-gold/30 h-auto gap-2 md:gap-3 p-2">
                  <TabsTrigger
                    value="iow"
                    className="data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300"
                  >
                    Isle of Wight
                  </TabsTrigger>
                  <TabsTrigger
                    value="local"
                    className="data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300"
                  >
                    Local Waters
                  </TabsTrigger>
                  <TabsTrigger
                    value="lalupa"
                    className="data-[state=active]:bg-gold data-[state=active]:text-navy text-white text-xs md:text-sm lg:text-base py-3 px-2 md:px-4 rounded-sm transition-all duration-300"
                  >
                    La Lupa Experience
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="iow" className="mt-8 md:mt-12">
                  <div className="grid gap-8 md:gap-12 md:grid-cols-2">
                    <div className="relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunset-XXXUGZQvEbSh72EWxveQR8aInPcqYz.png"
                        alt="Mojo yacht cruising to the Isle of Wight for lunch at The Hut restaurant"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-xl md:text-2xl font-playfair font-light tracking-wide">
                        Isle of Wight Lunch Experience
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        Our most popular charter! Cruise from Poole to the Isle of Wight for lunch at the renowned
                        restaurant, The Hut. Enjoy soft drinks and nibbles onboard as you sail across, then be dropped
                        off for your pre-booked lunch. After dining, we'll collect you and return to Poole by 6pm.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Full day charter (10am-6pm)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Soft drinks and nibbles included</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Restaurant booking assistance</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Professional skipper and crew</span>
                        </li>
                      </ul>
                      <div className="pt-4">
                        <p className="text-2xl md:text-3xl font-playfair font-light text-gold">£4,500 <span className="text-base font-montserrat font-light text-white/70">/ day</span></p>
                        <p className="text-xs md:text-sm text-white/60 mt-1">Full day charter · up to 10 guests · departs Poole Quay Marina</p>
                      </div>
                      <Button
                        className="luxury-button text-gold border-gold hover:text-gold-light mt-4 w-full md:w-auto"
                        variant="outline"
                        size="lg"
                        asChild
                      >
                        <Link
                          href="#contact"
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "contact")}
                        >
                          Book This Package
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="local" className="mt-8 md:mt-12">
                  <div className="grid gap-8 md:gap-12 md:grid-cols-2">
                    <div className="relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/weekend-WYpv2wLySUP70WysIMCAPdf3ds9ZVH.png"
                        alt="Mojo yacht cruising along the dramatic white cliffs of Old Harry Rocks and the Jurassic Coast"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-xl md:text-2xl font-playfair font-light tracking-wide">
                        Local Waters Exploration
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        Explore the stunning local waters around Poole, Bournemouth, Old Harry Rocks and as far as
                        Swanage. Enjoy a light lunch or afternoon tea onboard as you take in the breathtaking views of
                        the Jurassic Coast and discover hidden coves and beaches.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Full day charter (10am-6pm)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Light lunch/afternoon tea included</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Soft drinks and nibbles</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Professional skipper and crew</span>
                        </li>
                      </ul>
                      <div className="pt-4">
                        <p className="text-2xl md:text-3xl font-playfair font-light text-gold">£4,500 <span className="text-base font-montserrat font-light text-white/70">/ day</span></p>
                        <p className="text-xs md:text-sm text-white/60 mt-1">Full day charter · up to 10 guests · departs Poole Quay Marina</p>
                      </div>
                      <Button
                        className="luxury-button text-gold border-gold hover:text-gold-light mt-4 w-full md:w-auto"
                        variant="outline"
                        size="lg"
                        asChild
                      >
                        <Link
                          href="#contact"
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "contact")}
                        >
                          Book This Package
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="lalupa" className="mt-8 md:mt-12">
                  <div className="grid gap-8 md:gap-12 md:grid-cols-2">
                    <div className="relative h-[250px] md:h-[300px] lg:h-auto overflow-hidden rounded-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate-WYVxJBTWoactLVRqbTdraOrKtuTuRn.png"
                        alt="Luxury dining experience at La Lupa restaurant on Poole Quay following a day on Mojo yacht"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-xl md:text-2xl font-playfair font-light tracking-wide">
                        La Lupa Dining Experience
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        Complete your perfect day on the water with an exquisite dining experience at La Lupa, a
                        delightful restaurant located on Poole Quay. After your charter, step directly from the yacht to
                        enjoy fine cuisine at this renowned establishment.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Day charter plus evening dining</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Restaurant booking assistance</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">
                            Seamless yacht-to-restaurant transition
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-light text-sm md:text-base">Additional cost for restaurant</span>
                        </li>
                      </ul>
                      <div className="pt-4">
                        <p className="text-2xl md:text-3xl font-playfair font-light text-gold">£4,500 <span className="text-base font-montserrat font-light text-white/70">/ day</span></p>
                        <p className="text-xs md:text-sm text-white/60 mt-1">Charter + La Lupa dining · restaurant cost additional · contact us to arrange</p>
                      </div>
                      <Button
                        className="luxury-button text-gold border-gold hover:text-gold-light mt-4 w-full md:w-auto"
                        variant="outline"
                        size="lg"
                        asChild
                      >
                        <Link
                          href="#contact"
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "contact")}
                        >
                          Book This Package
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Destinations Section - NEW */}
        <section className="py-16 md:py-24 pt-20 md:pt-28" aria-labelledby="destinations-heading">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-gold uppercase tracking-widest text-sm">Explore the South Coast</span>
              <h2
                id="destinations-heading"
                className="mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent"
              >
                Discover Breathtaking Destinations
              </h2>
              <p className="mt-8 md:mt-12 text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                Our luxury yacht charters allow you to experience the most stunning locations along the South Coast,
                from Poole Harbour to the Isle of Wight and the majestic Jurassic Coast.
              </p>
            </div>
            <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/images/poole-harbour.jpg"
                    alt="Stunning view of Poole Harbour from Mojo yacht with boats and natural scenery"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-playfair text-white">Poole Harbour</h3>
                  <p className="mt-2 text-white/80 text-sm md:text-base">
                    Europe's largest natural harbour, offering protected waters and stunning island views.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/images/bournemouth-beaches.jpg"
                    alt="Bournemouth beaches viewed from Mojo yacht with golden sands and clear waters"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-playfair text-white">Bournemouth Beaches</h3>
                  <p className="mt-2 text-white/80 text-sm md:text-base">
                    Experience the award-winning beaches of Bournemouth from a unique perspective.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/images/jurassic-coast.jpg"
                    alt="Dramatic cliffs of the Jurassic Coast viewed from Mojo yacht showcasing Dorset's natural beauty"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-playfair text-white">Jurassic Coast</h3>
                  <p className="mt-2 text-white/80 text-sm md:text-base">
                    Cruise along this UNESCO World Heritage site with its dramatic cliffs and hidden coves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 md:py-24 pt-20 md:pt-28 relative"
          aria-labelledby="testimonials-heading"
        >
          <div className="container px-4 z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
            >
              <div className="flex justify-center">
                <div className="border border-gold/30 py-1 px-4 rounded-lg">
                  <span className="text-gold uppercase tracking-widest text-sm">Testimonials</span>
                </div>
              </div>

              <h2
                id="testimonials-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide mt-5"
              >
                Experiences Along the South Coast
              </h2>
              <p className="text-center mt-5 text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                Discover how Trevorah Charters has created unforgettable memories for guests exploring the stunning
                coastline and beyond.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={15} />
                <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                <TestimonialsColumn testimonials={fourthColumn} className="hidden xl:block" duration={21} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="luxury-gradient py-16 md:py-24 pt-20 md:pt-28 text-white"
          aria-labelledby="contact-heading"
        >
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-gold uppercase tracking-widest text-sm">Contact Us</span>
              <h2
                id="contact-heading"
                className="mt-3 text-2xl md:text-3xl lg:text-4xl font-playfair font-light tracking-wide gold-accent"
              >
                Enquire About Your Luxury Yacht Charter
              </h2>
              <p className="mt-8 md:mt-12 text-white/80 leading-relaxed text-sm md:text-base font-light">
                Contact us today to discuss your bespoke yacht charter requirements and let us create an unforgettable
                experience for you on the waters of Poole and beyond.
              </p>
            </div>

            <div className="mt-12 md:mt-16 grid gap-8 lg:gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-playfair mb-6">Get in Touch</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <a
                          href="tel:+441202287004"
                          className="text-white/80 hover:text-gold transition-colors duration-300"
                        >
                          +44 1202 287004
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Mobile</h4>
                        <a
                          href="tel:+447813346993"
                          className="text-white/80 hover:text-gold transition-colors duration-300"
                        >
                          +44 7813 346993
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <a
                          href="mailto:info@trevorahcharters.com"
                          className="text-white/80 hover:text-gold transition-colors duration-300"
                        >
                          info@trevorahcharters.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gold"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Location</h4>
                        <p className="text-white/80">
                          Poole Quay Boat Haven
                          <br />
                          Poole, Dorset BH15 1HJ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Operating Hours</h4>
                        <p className="text-white/80">
                          Day Charters: 10:00 AM - 6:00 PM
                          <br />
                          Office: 9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-playfair mb-4">Find Us</h3>
                  <div className="relative h-[300px] rounded-sm overflow-hidden border border-gold/30">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-1.9853%2C50.7096%2C-1.9813%2C50.7136&layer=mapnik&marker=50.7116%2C-1.9833"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        filter: "sepia(20%) hue-rotate(180deg) saturate(80%) contrast(90%)",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Poole Quay Boat Haven Location"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/20 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 bg-navy/90 backdrop-blur-sm px-3 py-2 rounded text-white text-sm">
                      📍 Poole Quay Boat Haven Marina
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-gold/30 bg-navy/95 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-playfair text-white mb-6">Enquire About Your Yacht Charter</h3>
                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        submitToWhatsApp()
                      }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="luxury-input w-full bg-transparent text-white text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="luxury-input w-full bg-transparent text-white text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="luxury-input w-full bg-transparent text-white text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-white mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="luxury-input w-full bg-transparent text-white text-sm md:text-base"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>
                      <div>
                        <label htmlFor="package" className="block text-sm font-medium text-white mb-2">
                          Package of Interest
                        </label>
                        <select
                          id="package"
                          className="luxury-select w-full bg-transparent text-white text-sm md:text-base [&>option]:text-navy [&>option]:bg-white"
                        >
                          <option>Isle of Wight Lunch</option>
                          <option>Local Waters Exploration</option>
                          <option>La Lupa Experience</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="requests" className="block text-sm font-medium text-white mb-2">
                          Additional Requests
                        </label>
                        <textarea
                          id="requests"
                          className="luxury-textarea min-h-[100px] md:min-h-[120px] w-full bg-transparent text-white text-sm md:text-base"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gold hover:bg-gold-light text-navy" size="lg">
                        Submit Enquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 md:py-16 border-t border-gold/30 bg-cream">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="relative h-12 w-24 md:h-16 md:w-32 mb-3">
                <Image
                  src="/images/trevorah-logo.png"
                  alt="Trevorah Charters Logo"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-playfair font-medium tracking-wider">Trevorah Charters</span>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="#contact"
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-2"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, "contact")}
            >
                  Office: 01202 287004
                </a>
                <a
                  href="tel:+447813346993"
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                >
                  Mobile: 07813 346993
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Trevorah Charters. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">Luxury Yacht Charters in Poole, Dorset</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
