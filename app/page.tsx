import ClientPage from "./ClientPage"
import type { Metadata } from "next"
import Script from "next/script"

const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Trevorah Charters - Luxury Yacht Charters",
  description:
    "Experience bespoke luxury day yacht charters with Trevorah Charters. Explore the Isle of Wight, dine at The Hut, or cruise along Dorset's stunning coastline aboard Mojo, our premium 62-foot Sunseeker Predator yacht.",
  url: "https://trevorahcharters.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poole",
    addressRegion: "Dorset",
    postalCode: "BH15 1HJ",
    addressCountry: "GB",
    streetAddress: "Poole Quay Boat Haven",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.7155",
    longitude: "-1.9820",
  },
  telephone: "01202 287004",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
  image: "https://trevorahcharters.com/images/mojo-yacht.jpg",
  priceRange: "£££",
  amenityFeature: [
    "62-foot Sunseeker Predator yacht",
    "Accommodates up to 10 guests",
    "Day charters to Isle of Wight",
    "Spacious sun deck",
    "Professional skipper and crew",
  ],
  availableLanguage: "English",
}

export const metadata: Metadata = {
  title: "Luxury Yacht Charters in Poole & Isle of Wight | Trevorah Charters | Mojo Yacht",
  description:
    "Experience bespoke luxury day yacht charters from Poole with Trevorah Charters. Explore the Isle of Wight, dine at The Hut, or cruise along Dorset's stunning coastline aboard Mojo, our premium 62-foot Sunseeker Predator yacht.",
  keywords:
    "luxury yacht charter Poole, Isle of Wight boat hire, The Hut restaurant yacht, Dorset yacht rental, Trevorah Charters, Mojo yacht, bespoke day charters, Poole Harbour boat tours, luxury sea excursions, corporate yacht events Dorset",
  openGraph: {
    title: "Luxury Yacht Charters in Poole & Isle of Wight | Trevorah Charters",
    description:
      "Experience bespoke luxury day yacht charters with Trevorah Charters. Explore the Isle of Wight, dine at The Hut, or cruise along Dorset's stunning coastline aboard Mojo.",
    url: "https://trevorahcharters.com",
    siteName: "Trevorah Charters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury yacht Mojo cruising from Poole to the Isle of Wight with stunning coastal views",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Yacht Charters in Poole & Isle of Wight | Trevorah Charters",
    description: "Experience bespoke luxury day yacht charters with Trevorah Charters.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://trevorahcharters.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      <ClientPage />
    </>
  )
}
