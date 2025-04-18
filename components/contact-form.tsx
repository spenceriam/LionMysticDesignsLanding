"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
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
      <h2 className="text-2xl font-semibold mb-3 text-gradient">Get in Touch</h2>
      <p className="text-gray-300 mb-6">
        Have questions about our services or products? Need a custom design? Reach out to us using the form below, and
        we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/20 border-blue-700/20 focus:border-blue-500/50 h-12"
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
            className="bg-black/20 border-blue-700/20 focus:border-blue-500/50 h-12"
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px] bg-black/20 border-blue-700/20 focus:border-blue-500/50"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
