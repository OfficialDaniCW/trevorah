"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// All available hero images (only the ones that actually exist in the folder)
const allHeroImages = [
  {
    src: "/images/hero/image1.jpg",
    alt: "Mojo yacht in motion along the Jurassic Coast with dramatic coastal backdrop",
  },
  {
    src: "/images/hero/image2.jpg",
    alt: "Trevorah Charters yacht moored near luxury waterfront properties in Dorset",
  },
  {
    src: "/images/hero/image3.jpg",
    alt: "Close-up view of luxury yacht deck with premium fittings cruising in Poole Harbour",
  },
  {
    src: "/images/hero/image4.jpg",
    alt: "Mojo yacht hull detail showing luxury craftsmanship and design",
  },
  {
    src: "/images/hero/image5.jpg",
    alt: "Trevorah Charters yacht with jet ski platform showcasing luxury amenities",
  },
  {
    src: "/images/hero/image8.jpg",
    alt: "Aerial perspective of yacht creating beautiful wake patterns in clear waters",
  },
  {
    src: "/images/hero/image9.jpg",
    alt: "Luxury yacht passing historic Brownsea Castle in Poole Harbour",
  },
  {
    src: "/images/hero/image10.jpg",
    alt: "Trevorah Charters yacht showing professional branding and luxury finish",
  },
  {
    src: "/images/hero/image11.jpg",
    alt: "Aerial view of luxury yacht on sparkling waters of Poole Harbour",
  },
  {
    src: "/images/hero/image12.jpg",
    alt: "Dynamic shot of Mojo yacht cutting through Dorset waters with stunning coastline",
  },
]

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function HeroSlideshow() {
  const [heroImages, setHeroImages] = useState(allHeroImages)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  // Shuffle images on component mount
  useEffect(() => {
    setHeroImages(shuffleArray(allHeroImages))
  }, [])

  // Detect mobile and reduced motion preferences
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }

    checkMobile()
    checkReducedMotion()

    window.addEventListener("resize", checkMobile)
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", checkReducedMotion)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.matchMedia("(prefers-reduced-motion: reduce)").removeEventListener("change", checkReducedMotion)
    }
  }, [])

  // Intersection Observer to pause when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused || !isVisible || prefersReducedMotion) return

    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
      },
      isMobile ? 7000 : 6000,
    )

    return () => clearInterval(interval)
  }, [isPaused, isVisible, isMobile, prefersReducedMotion, heroImages.length])

  // Touch gesture handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.targetTouches && e.targetTouches[0]) {
      touchStartX.current = e.targetTouches[0].clientX
    }
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.targetTouches && e.targetTouches[0]) {
      touchEndX.current = e.targetTouches[0].clientX
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }, [heroImages.length])

  const handleMobileInteraction = useCallback(() => {
    if (isMobile) {
      setIsPaused((prev) => !prev)
    }
  }, [isMobile])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index)
      if (isMobile) {
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 3000)
      }
    },
    [isMobile],
  )

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsPaused(true)
    }
  }, [isMobile])

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsPaused(false)
    }
  }, [isMobile])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleMobileInteraction}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.3 : isMobile ? 1.0 : 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[currentIndex]?.src || "/placeholder.svg"}
            alt={heroImages[currentIndex]?.alt || "Luxury yacht charter"}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            className="object-cover"
            quality={isMobile ? 75 : 90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slideshow indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              transition-all duration-300 rounded-full
              ${
                index === currentIndex
                  ? "bg-gold w-6 md:w-8 h-3 md:h-2"
                  : "bg-white/50 hover:bg-white/70 w-3 md:w-2 h-3 md:h-2"
              }
            `}
            style={{
              minWidth: isMobile ? "12px" : "8px",
              minHeight: isMobile ? "12px" : "8px",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile pause indicator */}
      {isMobile && isPaused && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
            <div className="w-6 h-6 border-l-4 border-r-4 border-white"></div>
          </div>
        </motion.div>
      )}

      {/* Swipe hint for mobile */}
      {isMobile && currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
            Swipe to navigate • Tap to pause
          </div>
        </motion.div>
      )}
    </div>
  )
}
