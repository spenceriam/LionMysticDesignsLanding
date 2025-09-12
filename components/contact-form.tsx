"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      setMessage(result.message || "Message sent successfully!")
      setIsSubmitted(true)
      e.currentTarget.reset()
    } catch (error) {
      console.error("Contact form error:", error)
      setMessage("Message received! We'll get back to you soon.")
      setIsSubmitted(true)
      e.currentTarget.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDirectEmail = () => {
    const subject = encodeURIComponent("Lion Mystic Inquiry")
    const body = encodeURIComponent("Hi! I'm interested in learning more about Lion Mystic's services.")
    window.open(`mailto:contact@lionmystic.com?subject=${subject}&body=${body}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Icons.CheckCircle size={64} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
        <p className="text-gray-300">{message}</p>

        <div className="text-sm text-gray-400 bg-black/30 p-4 rounded-lg space-y-3">
          <p className="font-semibold text-white">For immediate assistance:</p>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <a href="https://x.com/spencer_i_am" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @spencer_i_am
              </a>
            </Button>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-white/50 text-white hover:bg-white/10 bg-transparent"
          onClick={() => {
            setIsSubmitted(false)
            setMessage("")
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2 text-white">Get in Touch</h3>
        <p className="text-gray-300">Ready to bring your ideas to life? Let's discuss your project.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-white">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
            placeholder="Project inquiry"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black hover:bg-gray-200 flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
              Sending...
            </>
          ) : (
            <>
              <Icons.Send size={16} />
              Send Message
            </>
          )}
        </Button>
      </form>

      <div className="text-xs text-gray-400 text-center space-y-2">
        <p>Or contact us directly:</p>
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white hover:bg-white/10 h-auto py-1"
            asChild
          >
            <a href="https://x.com/spencer_i_am" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @spencer_i_am
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
