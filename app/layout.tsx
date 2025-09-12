import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lion Mystic | AI-Powered 3D Design & Prototyping Studio",
  description:
    "Transform your ideas into reality with Lion Mystic's AI-powered design, 3D modeling, and advanced manufacturing. Expert 3D printing services using Bambu Lab, Creality, and Flashforge technologies.",
  keywords: [
    "3D printing",
    "AI-powered design",
    "3D modeling",
    "CAD design",
    "prototyping",
    "Bambu Lab",
    "Creality",
    "Flashforge",
    "product development",
    "manufacturing",
    "Shapr3D",
    "custom design",
    "rapid prototyping",
  ],
  authors: [{ name: "Spencer", url: "https://www.spencer.build" }],
  creator: "Lion Mystic",
  publisher: "Lion Mystic",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lionmystic.com",
    siteName: "Lion Mystic",
    title: "Lion Mystic | AI-Powered 3D Design & Prototyping Studio",
    description:
      "Transform your ideas into reality with Lion Mystic's AI-powered design, 3D modeling, and advanced manufacturing services.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lion Mystic - AI-Powered 3D Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spencer_i_am",
    creator: "@spencer_i_am",
    title: "Lion Mystic | AI-Powered 3D Design & Prototyping Studio",
    description: "Transform your ideas into reality with AI-powered design and advanced 3D printing technologies.",
    images: ["/images/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://www.lionmystic.com",
  },
  category: "Technology",
  classification: "Business",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "Next.js",
  applicationName: "Lion Mystic",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Enhanced gradient background with inline style */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
  body {
    background: #000000 !important; /* Black base */
    background-image: radial-gradient(circle at 50% 50%, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.05) 25%, 
      rgba(128, 128, 128, 0.05) 50%, 
      rgba(0, 0, 0, 0.9) 100%) !important;
    background-attachment: fixed !important;
  }
  
  /* Remove the dark overlay to let gradient show more */
  body::before {
    display: none !important;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }
`,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lion Mystic",
              description:
                "AI-powered 3D design and prototyping studio specializing in advanced manufacturing and custom product development.",
              url: "https://www.lionmystic.com",
              logo: "https://www.lionmystic.com/images/LMLogo2025-Wht.png",
              founder: {
                "@type": "Person",
                name: "Spencer",
                url: "https://www.spencer.build",
              },
              sameAs: ["https://x.com/spencer_i_am"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@lionmystic.com",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              service: [
                {
                  "@type": "Service",
                  name: "AI-Powered Prototyping",
                  description:
                    "Using AI tools and coding agents to rapidly prototype concepts and visualize ideas before production.",
                },
                {
                  "@type": "Service",
                  name: "3D Design & Modeling",
                  description: "Creating detailed digital models with Shapr3D CAD and other professional tools.",
                },
                {
                  "@type": "Service",
                  name: "3D Printing & Fabrication",
                  description:
                    "Advanced 3D printing using FDM and SLA technologies with Bambu Lab, Creality, and Flashforge equipment.",
                },
              ],
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
