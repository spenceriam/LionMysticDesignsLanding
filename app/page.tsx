"use client"

import { useEffect, useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { TypingHeadline } from "@/components/typing-headline"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to scroll to live demos section
  const scrollToDemos = () => {
    const demosSection = document.getElementById("demos-section")
    if (demosSection) {
      const headerHeight = 80 // Account for fixed header height
      const elementPosition = demosSection.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Provocative statements for the rotating headline
  const headlineStatements = [
    "DREAMS DON'T WORK\nUNLESS WE DO",
    "TURNING PIXELS\nINTO REALITY",
    "WHAT IF YOUR IDEAS\nCOULD COME ALIVE?",
    "BREAK THE MOLD\nBUILD THE FUTURE",
    "IMAGINE IT\nHOLD IT",
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Always Black */}
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black z-20 sticky top-0">
        <div className="flex items-center gap-2">
          {/* Header logo */}
          <Image src="/images/LionMystic_Logo2025_Head-Wht.png" alt="Lion Mystic Logo" width={36} height={36} />
          <span className="font-bold text-xl text-white">Lion Mystic</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:flex" asChild>
            <Link href="https://www.spencer.build" target="_blank" rel="noopener noreferrer">
              <Icons.User size={20} className="mr-2" />
              About Spencer
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden md:flex" onClick={scrollToDemos}>
            <Icons.Lightbulb size={20} className="mr-2" />
            Demos
          </Button>
          <Button
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 bg-transparent"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Main content with padding at bottom to account for fixed footer */}
      <main className="flex-1 flex flex-col pb-[72px]">
        <section className="py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Updated main landing page logo */}
          {/* Removed large logo section above the typing headline */}

          <div
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-fade-in text-gradient h-[120px] md:h-[160px] flex items-center justify-center"
            style={{ animationDelay: "0.2s" }}
          >
            <TypingHeadline
              statements={headlineStatements}
              typingSpeed={70}
              deletingSpeed={40}
              delayAfterTyping={5000}
            />
          </div>

          <p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            We transform creative concepts into tangible innovations
            <br />
            using cutting-edge technology and expert craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full flex items-center gap-2 bg-transparent"
              onClick={scrollToDemos}
            >
              <Icons.Lightbulb size={20} /> Live Demos
            </Button>
            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full flex items-center gap-2 bg-transparent"
              onClick={scrollToContact}
            >
              <Icons.Mail size={20} /> Get a Consultation
            </Button>
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex gap-4 mt-8 md:hidden animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 flex-1 bg-transparent"
              asChild
            >
              <Link href="https://www.spencer.build" target="_blank" rel="noopener noreferrer">
                <Icons.User size={20} className="mr-2" />
                About Spencer
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 flex-1 bg-transparent"
              onClick={scrollToDemos}
            >
              <Icons.Lightbulb size={20} className="mr-2" />
              Demos
            </Button>
          </div>
        </section>

        {/* Updated About Section */}
        <section className="py-8 px-6">
          <div
            className="max-w-4xl mx-auto animate-fade-in relative rainbow-border-container"
            style={{ animationDelay: "1s" }}
          >
            <div className="p-8 z-10 relative">
              {/* Centered "Coming Soon" message with updated text */}
              <div className="flex items-center justify-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Pardon the dust, we're working on great things coming soon
                </h2>
              </div>

              {/* About section with new heading */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">What is Lion Mystic?</h3>
                <p className="text-white text-lg leading-relaxed">
                  Lion Mystic is a technology-driven creative studio focused on bringing ideas to life. We combine
                  AI-powered design, advanced 3D modeling, and 3D printing technologies (FDM and SLA) using vendors such
                  as Bambu Lab, Creality, and Flashforge to transform concepts into reality. Whether you're looking to
                  prototype a new product, visualize a complex idea, or create custom designs for production, our
                  expertise in digital and physical creation helps bridge the gap between imagination and tangible
                  results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Updated We Specialize In Section */}
        <section className="py-8 px-6 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <div className="max-w-4xl mx-auto glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gradient">We specialize in:</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI-Powered Prototyping */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Icons.Cpu size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-white">AI-Powered Prototyping</h4>
                <p className="text-gray-300">
                  Using AI tools and coding agents to rapidly prototype concepts and visualize ideas before production.
                </p>
              </div>

              {/* 3D Design/CAD */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Icons.Lightbulb size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-white">3D Design & Modeling</h4>
                <p className="text-gray-300">
                  Creating detailed digital models with Shapr3D CAD and other professional tools to perfect your vision.
                </p>
              </div>

              {/* 3D Printing & Fabrication */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Icons.Printer size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-white">3D Printing & Fabrication</h4>
                <p className="text-gray-300">
                  Bringing digital designs to life with advanced 3D printing technologies and production techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demos Section */}
        <section id="demos-section" className="py-8 px-6 animate-fade-in" style={{ animationDelay: "1.15s" }}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Live Demos</h3>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore our latest projects and see our technology in action. These hackathon-inspired functional projects
              showcase our expertise in AI-powered development and our ability to rapidly build MVPs and innovative
              solutions using cutting-edge AI capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* OpenPRD */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all group">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DAhGyXKOCQ6XyuSUXD9fxZj0vUHr4y.png"
                    alt="OpenPRD Application Screenshot"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">OpenPRD</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  AI-powered Product Requirements Document generator that creates comprehensive PRDs using your provided
                  API keys and project specifications.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://staging-openprd-app-ee92.frontend.encr.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </Link>
                </Button>
              </div>

              {/* MockEm */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all group">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bexrPFIgw7MZKpyLUr3riFOcdFsVNc.png"
                    alt="MockEm Application Screenshot"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">MockEm</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Enterprise-friendly mock data generator that creates realistic test data for development and testing
                  environments with customizable schemas.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://staging-mockem-data-generator-qxb2.frontend.encr.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </Link>
                </Button>
              </div>

              {/* Validart */}
              <div className="bg-black/40 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all group">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d0GAtuwTo7uBRNSt0ZoCaLTjvifNat.png"
                    alt="Validart Application Screenshot"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">Validart</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Event card art validator that ensures your event graphics meet platform requirements and design
                  standards for optimal presentation.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://staging-validart-tool-gbmi.frontend.encr.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-section" className="py-12 px-6 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="max-w-md mx-auto glass-effect p-8">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Fixed Footer - Always visible at bottom */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 bg-black text-white z-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            {/* Footer logo */}
            <Image src="/images/LionMystic_Logo2025_Head-Wht.png" alt="Lion Mystic Logo" width={24} height={24} />
            <span className="text-xs md:text-sm">© {new Date().getFullYear()} Lion Mystic. All rights reserved.</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-white hover:bg-white/10 flex items-center gap-1"
              asChild
            >
              <Link href="https://x.com/spencer_i_am" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @spencer_i_am
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/privacy">Privacy</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
