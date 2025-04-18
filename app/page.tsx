"use client"

import { useEffect, useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { ThemeLogo } from "@/components/theme-logo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, PrinterIcon as Printer3d, Layers, Code } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Always Black */}
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black z-20 sticky top-0">
        <div className="flex items-center gap-2">
          {/* Use dark mode logo in header */}
          <Image src="/images/dark-logo-header.png" alt="Lion Mystic Designs Logo" width={40} height={40} />
          <span className="font-bold text-xl text-white">Lion Mystic Designs</span>
        </div>
        <div className="flex items-center">
          {/* Contact Us button */}
          <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Main content with padding at bottom to account for fixed footer */}
      <main className="flex-1 flex flex-col pb-[72px]">
        <section className="py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <div className="mb-8 relative w-48 h-48 md:w-64 md:h-64 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ThemeLogo type="center" className="w-full h-full" applyEffect="glow" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in text-gradient"
            style={{ animationDelay: "0.4s" }}
          >
            MID-CENTURY DESIGN
            <br />
            REIMAGINED
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Beautiful and unique lighting fixtures and home decor,
            <br />
            brought to life with 3D printing technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 animate-glow">
              Get Notified <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-full flex items-center gap-2"
            >
              <Mail className="h-5 w-5" /> Contact Us
            </Button>
          </div>
        </section>

        {/* Updated About Section */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto glass-effect p-8 animate-fade-in" style={{ animationDelay: "1s" }}>
            {/* Centered "Coming Soon" message with updated text and gradient animation */}
            <div className="flex items-center justify-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold animated-text-gradient">
                Pardon the dust, we're working on great things coming soon
              </h2>
            </div>

            {/* About section with new heading */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What is Lion Mystic Designs?</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                We specialize in designing and producing mid-century inspired home decor, including beautiful and unique
                lighting fixtures. Our passion for this aesthetic is matched only by our love of technology and
                innovation, and we use 3D printing to bring our designs to life. If you're looking for one-of-a-kind
                decor pieces, you've come to the right place.
              </p>
            </div>
          </div>
        </section>

        {/* We Specialize In Section */}
        <section className="py-8 px-6 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <div className="max-w-4xl mx-auto glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gradient">We specialize in:</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 3D Printing */}
              <div className="bg-black/20 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                  <Printer3d className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-300">3D Printing</h4>
                <p className="text-gray-300">
                  Creating physical objects from digital designs with precision and quality materials.
                </p>
              </div>

              {/* 3D Design/CAD */}
              <div className="bg-black/20 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                  <Layers className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-300">3D Design/CAD</h4>
                <p className="text-gray-300">
                  Crafting detailed digital models and technical designs for manufacturing and visualization.
                </p>
              </div>

              {/* Vibe Coding */}
              <div className="bg-black/20 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-blue-300">Vibe Coding</h4>
                <p className="text-gray-300">
                  Developing websites and applications with aesthetic focus and immersive user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 px-6 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="max-w-md mx-auto glass-effect p-8">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Fixed Footer - Always visible at bottom */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 bg-black text-white z-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <Image src="/images/dark-logo-header.png" alt="Lion Mystic Designs Logo" width={24} height={24} />
            <span className="text-xs md:text-sm">
              © {new Date().getFullYear()} Lion Mystic Designs. All rights reserved.
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
            >
              Privacy
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
            >
              Terms
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
