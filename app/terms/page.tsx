import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Always Black */}
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black z-20 sticky top-0">
        <div className="flex items-center gap-2">
          {/* Updated header logo */}
          <Image src="/images/LionMystic_Logo2025_Head-Wht.png" alt="Lion Mystic Logo" width={36} height={36} />
          <span className="font-bold text-xl text-white">Lion Mystic</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col py-12 px-6 pb-[72px]">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="glass-effect p-8">
            <h1 className="text-3xl font-bold mb-6 text-gradient">Terms of Service</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-gray-200">
                By accessing our website, you are agreeing to be bound by these Terms of Service and agree that you are
                responsible for compliance with any applicable local laws.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">2. Use License</h2>
              <p className="text-gray-200">
                Permission is granted to temporarily download one copy of the materials on Lion Mystic's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Modify or copy the materials;</li>
                <li>
                  Use the materials for any commercial purpose, or for any public display (commercial or
                  non-commercial);
                </li>
                <li>Attempt to decompile or reverse engineer any software contained on Lion Mystic's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">3. Disclaimer</h2>
              <p className="text-gray-200">
                The materials on Lion Mystic's website are provided on an 'as is' basis. Lion Mystic makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">4. Limitations</h2>
              <p className="text-gray-200">
                In no event shall Lion Mystic or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Lion Mystic's website, even if Lion Mystic or a Lion Mystic authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">5. Contact Us</h2>
              <p className="text-gray-200">If you have any questions about these Terms, please contact us at:</p>
              <p className="text-gray-200 mt-2">
                Lion Mystic
                <br />
                Email: legal@lionmystic.com
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer - Always visible at bottom */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 bg-black text-white z-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            {/* Updated footer logo */}
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
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/terms">Terms</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
