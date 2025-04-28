import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lion Mystic | Coming Soon",
  description: "Mid-century inspired home decor and lighting fixtures, brought to life with 3D printing technology.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
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
`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
