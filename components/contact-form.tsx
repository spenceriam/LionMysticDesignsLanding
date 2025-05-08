"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, ThumbsUp } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Update character count for message field
    if (name === "message") {
      setCharCount(value.length)
    }

    // Reset submitted state if user starts typing again
    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Submitting form data:", formData)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      const data = await response.json()
      console.log("Response data:", data)

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Set submitted state to true
      setIsSubmitted(true)

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setCharCount(0)
    } catch (error) {
      console.error("Form submission error:", error)

      toast({
        title: "Something went wrong.",
        description: (error as Error).message || "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-3 text-gradient">Get a Consultation</h2>
      <p className="text-gray-300 mb-6">
        Have a project or idea you'd like to bring to life? Need expert guidance on technology solutions? Tell us about
        your vision, and we'll help you transform it into reality.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/40 border-white/20 focus:border-white/50 h-12"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black/40 border-white/20 focus:border-white/50 h-12"
          />
        </div>
        <div>
          <Textarea
            placeholder="Describe your project or idea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px] bg-black/40 border-white/20 focus:border-white/50"
          />
          <div className="text-right text-xs text-gray-400 mt-1">{charCount} characters</div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-12 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 ${
            isSubmitted
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
          }`}
        >
          {isSubmitting ? (
            "Sending..."
          ) : isSubmitted ? (
            <>
              Sent <ThumbsUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Send Message <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
