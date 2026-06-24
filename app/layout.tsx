import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Playfair_Display, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F2942",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://trevorahcharters.co.uk"),
  verification: {
    google: "YWS5x_kx2QxjN2m88j_Zx2DqAGVO4r8UdBz_jbCS6i4",
  },
  generator: "v0.app"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${montserrat.variable} bg-background`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="GB-DOR" />
        <meta name="geo.placename" content="Poole, Dorset" />
        <meta name="geo.position" content="50.7155;-1.9820" />
        <meta name="ICBM" content="50.7155, -1.9820" />
        <meta name="DC.title" content="Trevorah Charters - Luxury Yacht Charters Poole Dorset" />
        <meta name="DC.subject" content="luxury yacht charter, boat hire Poole, Dorset sea charters, Isle of Wight boat trips" />
        <meta name="DC.description" content="Luxury day yacht charters from Poole Quay Boat Haven, Dorset. Explore the Jurassic Coast, Isle of Wight and Bournemouth aboard Mojo, a 62-foot Sunseeker Predator." />
        <meta name="DC.language" content="en-GB" />
        <meta name="DC.coverage" content="Poole, Bournemouth, Dorset, Isle of Wight, Jurassic Coast, United Kingdom" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
