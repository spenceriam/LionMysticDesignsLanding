"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  useEffect(() => {
    // Redirect to spencer.build after a short delay
    const timer = setTimeout(() => {
      window.location.href = "https://www.spencer.build"
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

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
            <Link href="/about">
              <Icons.User size={20} className="mr-2" />
              About
            </Link>
          </Button>
        </div>
      </header>

      {/* Main content with padding at bottom to account for fixed footer */}
      <main className="flex-1 flex flex-col pb-[72px] items-center justify-center">
        {/* Back button */}
        <div className="absolute top-20 left-6">
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="/">
              <Icons.ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Redirect Message */}
        <div className="text-center space-y-6 max-w-md mx-auto px-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto"></div>
          <h1 className="text-3xl font-bold text-white">Redirecting to Portfolio</h1>
          <p className="text-gray-300 text-lg">
            You're being redirected to Spencer's portfolio at{" "}
            <a href="https://www.spencer.build" className="text-blue-400 hover:text-blue-300 underline">
              spencer.build
            </a>
          </p>
          <div className="space-y-4">
            <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://www.spencer.build" target="_blank" rel="noopener noreferrer">
                <Icons.User size={20} className="mr-2" />
                Visit Portfolio Now
              </a>
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/">Cancel & Go Home</Link>
            </Button>
          </div>
        </div>
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
