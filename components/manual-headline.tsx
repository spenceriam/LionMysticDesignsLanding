"use client"

import { useState, useEffect } from "react"

interface ManualHeadlineProps {
  statements: string[]
  delay?: number
  className?: string
}

export function ManualHeadline({ statements, delay = 10000, className = "" }: ManualHeadlineProps) {
  const [currentText, setCurrentText] = useState(statements[0])
  const [nextText, setNextText] = useState(statements[1])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % statements.length
      setNextText(statements[nextIndex])
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentText(statements[nextIndex])
        setCurrentIndex(nextIndex)
        setIsAnimating(false)
      }, 500)
    }, delay)

    return () => clearInterval(interval)
  }, [currentIndex, delay, statements])

  return (
    <div className={`relative ${className}`}>
      {/* Current text that fades out */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 whitespace-pre-line"
        style={{ opacity: isAnimating ? 0 : 1 }}
      >
        {currentText}
      </div>

      {/* Next text that fades in */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 whitespace-pre-line"
        style={{ opacity: isAnimating ? 1 : 0 }}
      >
        {nextText}
      </div>
    </div>
  )
}
