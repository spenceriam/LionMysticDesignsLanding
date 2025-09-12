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
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

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

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }

      setIsSubmitted(true)
      // Reset form
      e.currentTarget.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Icons.CheckCircle size={64} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
        <p className="text-gray-300">
          Thank you for reaching out! We've received your message and will get back to you soon at the email address you
          provided.
        </p>
        <div className="text-sm text-gray-400 bg-black/30 p-4 rounded-lg">
          <p className="mb-2">For immediate assistance, you can also reach out directly:</p>
          <p>Email: hello@lionmystic.com</p>
          <p>Or connect with Spencer on social media</p>
        </div>
        <Button
          variant="outline"
          className="border-white/50 text-white hover:bg-white/10 bg-transparent"
          onClick={() => {
            setIsSubmitted(false)
            setError(null)
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

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

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

      <div className="text-xs text-gray-400 text-center">
        <p>We'll respond to you as soon as possible!</p>
      </div>
    </div>
  )
}
