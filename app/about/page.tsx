"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export default function About() {
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
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="/">
              <Icons.Home size={20} className="mr-2" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="https://www.spencer.build" target="_blank" rel="noopener noreferrer">
              <Icons.User size={20} className="mr-2" />
              About Spencer
            </Link>
          </Button>
        </div>
      </header>

      {/* Main content with padding at bottom to account for fixed footer */}
      <main className="flex-1 flex flex-col pb-[72px]">
        {/* Back button */}
        <div className="py-4 px-6">
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="/">
              <Icons.ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* About Hero Section */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">About Lion Mystic</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Where technology meets creativity to bring your wildest ideas to life.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto glass-effect p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Our Mission</h2>
            <p className="text-lg text-gray-200 leading-relaxed text-center">
              At Lion Mystic, we believe that every great idea deserves to become reality. We bridge the gap between
              imagination and creation through cutting-edge technology, innovative design, and expert craftsmanship. Our
              mission is to empower creators, entrepreneurs, and visionaries by transforming their concepts into
              tangible, functional, and beautiful products.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-Powered Design */}
              <div className="bg-black/40 p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all">
                <div className="bg-white/10 p-4 rounded-full w-fit mb-6">
                  <Icons.Cpu size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leverage artificial intelligence and machine learning to rapidly prototype, iterate, and optimize
                  designs. Our AI tools help visualize concepts before they're built, saving time and resources while
                  ensuring the best possible outcomes.
                </p>
              </div>

              {/* 3D Modeling & CAD */}
              <div className="bg-black/40 p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all">
                <div className="bg-white/10 p-4 rounded-full w-fit mb-6">
                  <Icons.Lightbulb size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">3D Modeling & CAD</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional 3D modeling and Computer-Aided Design services using industry-leading software like
                  Shapr3D, Fusion 360, and SolidWorks. From concept sketches to production-ready models, we handle every
                  step of the design process.
                </p>
              </div>

              {/* Advanced Manufacturing */}
              <div className="bg-black/40 p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all">
                <div className="bg-white/10 p-4 rounded-full w-fit mb-6">
                  <Icons.Printer size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Advanced Manufacturing</h3>
                <p className="text-gray-300 leading-relaxed">
                  State-of-the-art 3D printing capabilities including FDM, SLA, and SLS technologies. We work with
                  premium materials and partner with leading vendors like Bambu Lab, Creality, and Flashforge to deliver
                  exceptional quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto glass-effect p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Our Approach</h2>
            <div className="space-y-6 text-gray-200">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">1. Discovery & Consultation</h3>
                <p>
                  We start by understanding your vision, requirements, and constraints. Through detailed consultations,
                  we identify the best approach to bring your ideas to life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">2. Design & Prototyping</h3>
                <p>
                  Using cutting-edge design tools and AI-powered optimization, we create detailed models and prototypes
                  that allow you to visualize and test your concepts before full production.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">3. Production & Delivery</h3>
                <p>
                  With our advanced manufacturing capabilities and quality control processes, we produce your final
                  products to the highest standards and deliver them ready for use.
                </p>
              </div>
            </div>
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
