"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export default function Privacy() {
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

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Privacy Policy</h1>

          <div className="glass-effect p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p className="text-gray-200 leading-relaxed">
                When you contact us through our website, we collect the information you provide, including your name,
                email address, and any messages you send. This information is used solely to respond to your inquiries
                and provide the services you request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <p className="text-gray-200 leading-relaxed">We use the information you provide to:</p>
              <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Information Sharing</h2>
              <p className="text-gray-200 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with trusted service
                providers who assist us in operating our website and conducting our business, provided they agree to
                keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
              <p className="text-gray-200 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Cookies</h2>
              <p className="text-gray-200 leading-relaxed">
                Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or
                its service provider transfers to your computer's hard drive through your web browser. You can choose to
                disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <p className="text-gray-200 leading-relaxed">
                You have the right to access, update, or delete your personal information. If you would like to exercise
                these rights or have any questions about our privacy practices, please contact us using the information
                provided on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
              <p className="text-gray-200 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-200 leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us through our
                website's contact form or reach out to us directly.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
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
