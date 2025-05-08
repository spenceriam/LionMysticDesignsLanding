import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, FolderOpen } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="/portfolio">
              <FolderOpen className="h-5 w-5 mr-2" />
              Portfolio
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col py-12 px-6 pb-[72px]">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="glass-effect p-8">
            <h1 className="text-3xl font-bold mb-6 text-gradient">About Lion Mystic</h1>

            <div className="prose prose-invert max-w-none">
              {/* Placeholder content */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Our Story</h2>
                <div className="bg-white/5 border border-white/10 rounded-md p-6 text-gray-400 italic">
                  <p>
                    [Placeholder for your story - how Lion Mystic began, your journey, and what drives your passion for
                    creating and innovation]
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Our Approach</h2>
                <div className="bg-white/5 border border-white/10 rounded-md p-6 text-gray-400 italic">
                  <p>
                    [Placeholder for your approach - your design philosophy, how you work with clients, and your process
                    from concept to creation]
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Our Technologies</h2>
                <div className="bg-white/5 border border-white/10 rounded-md p-6 text-gray-400 italic">
                  <p>
                    [Placeholder for details about the technologies you use - your 3D printers (Bambu Lab, Creality,
                    Flashforge), software (Shapr3D, etc.), and other tools that help you bring ideas to life]
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Meet the Team</h2>
                <div className="bg-white/5 border border-white/10 rounded-md p-6 text-gray-400 italic">
                  <p>[Placeholder for team information - who's behind Lion Mystic and what they bring to the table]</p>
                </div>
              </div>
            </div>
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
              className="h-8 text-xs border-white/30 text-white hover:bg-white/10"
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
