import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, User } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
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
            <Link href="/about">
              <User className="h-5 w-5 mr-2" />
              About
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col py-12 px-6 pb-[72px]">
        <div className="max-w-5xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="glass-effect p-8">
            <h1 className="text-3xl font-bold mb-6 text-gradient">Our Portfolio</h1>

            <p className="text-gray-200 mb-8">
              Below are examples of our work, showcasing how we transform ideas into reality using AI-powered design, 3D
              modeling, and 3D printing technologies.
            </p>

            {/* Placeholder for portfolio grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <p className="text-gray-400 italic text-sm p-4 text-center">[Placeholder for project image]</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Project Title</h3>
                  <p className="text-gray-400 text-sm italic">[Project description placeholder]</p>
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
