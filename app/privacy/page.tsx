import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Always Black */}
      <header className="w-full py-4 px-6 flex items-center justify-between bg-black z-20 sticky top-0">
        <div className="flex items-center gap-2">
          <Image src="/images/dark-logo-header.png" alt="Lion Mystic Designs Logo" width={36} height={36} />
          <span className="font-bold text-xl text-white">Lion Mystic Designs</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col py-12 px-6 pb-[72px]">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="glass-effect p-8">
            <h1 className="text-3xl font-bold mb-6 text-gradient">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">1. Introduction</h2>
              <p className="text-gray-200">
                Lion Mystic Designs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information when you use our contact form.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">2. Contact Form Information</h2>
              <p className="text-gray-200">
                When you use our "Get in Touch" contact form, we collect the following information:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message content</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">3. How We Use Your Information</h2>
              <p className="text-gray-200">
                We use the information you provide in our contact form solely for the purpose of:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Responding to your inquiries</li>
                <li>Providing you with information about our products and services</li>
                <li>Communicating with you about your interest in our company</li>
              </ul>
              <p className="text-gray-200 mt-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside
                parties.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">4. Data Storage and Security</h2>
              <p className="text-gray-200">
                Your contact information is securely stored and protected. We implement appropriate data collection,
                storage, and processing practices, as well as security measures to protect against unauthorized access,
                alteration, disclosure, or destruction of your personal information.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">5. Data Retention</h2>
              <p className="text-gray-200">
                We retain your contact information only for as long as necessary to fulfill the purposes for which we
                collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">6. Your Rights</h2>
              <p className="text-gray-200">
                You have the right to request access to, correction of, or deletion of your personal information. To
                exercise these rights, please contact us using the information below.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-blue-400">7. Contact Us</h2>
              <p className="text-gray-200">
                If you have questions or comments about this Privacy Policy or the data we hold about you, please
                contact us at:
              </p>
              <p className="text-gray-200 mt-2">
                Lion Mystic Designs
                <br />
                Email: contact@lionmystic.com
              </p>
            </div>
          </div>
        </div>
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
              asChild
            >
              <Link href="/privacy">Privacy</Link>
            </Button>
            {/* Terms button hidden for now
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
              asChild
            >
              <Link href="/terms">Terms</Link>
            </Button>
            */}
          </div>
        </div>
      </footer>
    </div>
  )
}
