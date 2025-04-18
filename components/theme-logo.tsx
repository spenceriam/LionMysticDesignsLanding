"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ThemeLogoProps {
  type: "center" | "header"
  width?: number
  height?: number
  className?: string
  applyEffect?: "none" | "glow" | "background" | "border"
}

export function ThemeLogo({ type, width, height, className = "", applyEffect = "none" }: ThemeLogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR
    return (
      <div
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
        className={className}
      />
    )
  }

  // Always use the light logo (for dark mode)
  const logoSrc = type === "center" ? "/images/light-logo-center.png" : "/images/light-logo-header.png"
  const altText = "Lion Mystic Designs Logo"

  // Apply different effects based on the applyEffect prop
  let effectClass = ""
  if (applyEffect === "glow") {
    effectClass = "logo-glow"
  } else if (applyEffect === "background") {
    effectClass = "logo-background"
  } else if (applyEffect === "border") {
    effectClass = "logo-border"
  }

  if (applyEffect !== "none") {
    return (
      <div
        className={`relative ${className} ${effectClass}-container`}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%",
        }}
      >
        <Image src={logoSrc || "/placeholder.svg"} alt={altText} fill className="object-contain z-10" />
      </div>
    )
  }

  if (width && height) {
    return (
      <Image src={logoSrc || "/placeholder.svg"} alt={altText} width={width} height={height} className={className} />
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Image src={logoSrc || "/placeholder.svg"} alt={altText} fill className="object-contain" />
    </div>
  )
}
