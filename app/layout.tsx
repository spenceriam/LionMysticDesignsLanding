import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lion Mystic Designs | Coming Soon",
  description: "Mid-century inspired home decor and lighting fixtures, brought to life with 3D printing technology.",
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
        {/* Force dark background with inline style to override any CSS issues */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            background: #111827 !important; /* Dark background */
            background-image: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), rgba(30, 64, 175, 0.25), rgba(17, 24, 39, 0.95)) !important;
            background-attachment: fixed !important;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
