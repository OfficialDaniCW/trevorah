import ClientPage from "./ClientPage"
import type { Metadata } from "next"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristInformationCenter"],
  "@id": "https://trevorahcharters.co.uk/#business",
  name: "Trevorah Charters",
  legalName: "Trevorah Charters",
  description:
    "Luxury day yacht charters departing from Poole Quay Boat Haven, Dorset. Explore the Isle of Wight, Jurassic Coast, Bournemouth, Swanage and Old Harry Rocks aboard Mojo, a 62-foot Sunseeker Predator yacht. Up to 10 guests. Professional skipper and crew provided.",
  url: "https://trevorahcharters.co.uk",
  logo: "https://trevorahcharters.co.uk/images/trevorah-logo.png",
  image: [
    "https://trevorahcharters.co.uk/images/hero/image1.jpg",
    "https://trevorahcharters.co.uk/images/hero/image2.jpg",
    "https://trevorahcharters.co.uk/images/hero/image9.jpg",
  ],
  telephone: ["+441202287004", "+447813346993"],
  email: "info@trevorahcharters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Poole Quay Boat Haven",
    addressLocality: "Poole",
    addressRegion: "Dorset",
    postalCode: "BH15 1HJ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7116005,
    longitude: -1.9833254,
  },
  hasMap: "https://www.google.com/maps/@50.7116005,-1.9833254,138m",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
  priceRange: "£££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "City", name: "Poole" },
    { "@type": "City", name: "Bournemouth" },
    { "@type": "AdministrativeArea", name: "Dorset" },
    { "@type": "AdministrativeArea", name: "Isle of Wight" },
    { "@type": "Place", name: "Jurassic Coast" },
    { "@type": "City", name: "Swanage" },
    { "@type": "City", name: "Weymouth" },
  ],
  serviceType: "Luxury Yacht Charter",
  knowsAbout: [
    "Luxury yacht charters",
    "Sunseeker Predator",
    "Jurassic Coast boat trips",
    "Isle of Wight day trips by boat",
    "Poole Harbour cruises",
    "Corporate boat hire Dorset",
    "Bespoke sea charters",
  ],
  sameAs: [
    "https://www.facebook.com/trevorahcharters",
    "https://www.instagram.com/trevorahcharters",
  ],
}

const boatTripSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Luxury Yacht Day Charter - Mojo",
  description:
    "Full day yacht charter aboard Mojo, a 62-foot Sunseeker Predator. Departs Poole Quay Boat Haven at 10:00, returns at 18:00. Up to 10 guests. Destinations include Isle of Wight, Jurassic Coast, Bournemouth, Swanage and Old Harry Rocks.",
  brand: {
    "@type": "Brand",
    name: "Trevorah Charters",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: "Bespoke pricing. Contact for a personalised quote",
    },
    seller: {
      "@type": "Organization",
      name: "Trevorah Charters",
    },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Vessel", value: "Mojo - 62ft Sunseeker Predator" },
    { "@type": "PropertyValue", name: "Maximum Guests", value: "10" },
    { "@type": "PropertyValue", name: "Crew", value: "Professional skipper and deckhand/stewardess" },
    { "@type": "PropertyValue", name: "Departure Point", value: "Poole Quay Boat Haven, Dorset BH15 1HJ" },
    { "@type": "PropertyValue", name: "Charter Type", value: "Day charter only, 10:00 to 18:00" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do Trevorah Charters depart from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All charters depart from Poole Quay Boat Haven, Poole, Dorset, BH15 1HJ. We leave at 10:00 and return at 18:00.",
      },
    },
    {
      "@type": "Question",
      name: "How many guests can the yacht Mojo accommodate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mojo is a 62-foot Sunseeker Predator that can accommodate up to 10 guests. A professional skipper and deckhand or stewardess are provided.",
      },
    },
    {
      "@type": "Question",
      name: "What charter destinations are available from Poole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our most popular charter is the Isle of Wight lunch experience at The Hut restaurant. We also offer cruises along the Jurassic Coast, Bournemouth, Old Harry Rocks, and Swanage. Bespoke charters can be arranged on request.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer luxury yacht charters along the Jurassic Coast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer bespoke day charters along the UNESCO World Heritage Jurassic Coast, including views of Old Harry Rocks, Durdle Door, and the Purbeck coastline from the water.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire a yacht for a corporate event in Dorset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Trevorah Charters offers bespoke corporate charter packages from Poole. Our 62-foot Sunseeker Predator yacht provides an exceptional setting for team events, client entertainment, and corporate hospitality.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a yacht charter with Trevorah Charters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us by phone on +44 1202 287004 or mobile +44 7813 346993, or email info@trevorahcharters.com. Alternatively, complete the enquiry form on our website and we will get back to you promptly.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Luxury Yacht Charter Poole & Dorset | Trevorah Charters | Mojo Sunseeker",
  description:
    "Luxury day yacht charters from Poole, Dorset. Explore the Isle of Wight, Jurassic Coast & Bournemouth aboard Mojo, a 62ft Sunseeker Predator. Up to 10 guests. Skipper & crew provided. Book with Trevorah Charters today.",
  keywords:
    "luxury yacht charter Poole, boat hire Dorset, yacht charter Jurassic Coast, Isle of Wight boat trip Poole, Sunseeker charter Dorset, Trevorah Charters, Mojo yacht Poole, bespoke day charter Dorset, corporate yacht hire Poole, luxury sea charter Bournemouth, Swanage boat charter, Old Harry Rocks boat trip, Poole Harbour yacht, Poole Quay charter",
  authors: [{ name: "Trevorah Charters" }],
  creator: "Trevorah Charters",
  publisher: "Trevorah Charters",
  category: "Travel & Tourism",
    openGraph: {
    title: "Luxury Yacht Charter Poole & Dorset | Trevorah Charters",
    description:
      "Luxury day yacht charters from Poole Quay Boat Haven. Explore the Isle of Wight, Jurassic Coast & Bournemouth aboard Mojo, a 62ft Sunseeker Predator. Up to 10 guests.",
    url: "https://trevorahcharters.co.uk",
    siteName: "Trevorah Charters",
    images: [
      {
        url: "https://trevorahcharters.co.uk/images/hero/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury yacht Mojo, a 62ft Sunseeker Predator, cruising from Poole towards the Isle of Wight",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Yacht Charter Poole & Dorset | Trevorah Charters",
    description:
      "Luxury day yacht charters from Poole. Jurassic Coast, Isle of Wight & Bournemouth. 62ft Sunseeker Predator. Up to 10 guests.",
    images: ["https://trevorahcharters.co.uk/images/hero/image1.jpg"],
  },
  alternates: {
    canonical: "https://trevorahcharters.co.uk",
    languages: {
      "en-GB": "https://trevorahcharters.co.uk",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return <ClientPage />
}
