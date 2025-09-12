"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-VLHC2XZ6PC", {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

// Specific tracking functions for your site
export const trackContactFormSubmit = () => {
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  })
}

export const trackDemoClick = (demoName: string) => {
  trackEvent("demo_click", {
    event_category: "engagement",
    event_label: demoName,
    demo_name: demoName,
  })
}

export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", {
    event_category: "engagement",
    event_label: platform,
    social_platform: platform,
  })
}

export const trackScrollToSection = (section: string) => {
  trackEvent("scroll_to_section", {
    event_category: "navigation",
    event_label: section,
    section_name: section,
  })
}
