"use client"

import { useState, useEffect } from "react"

interface RotatingHeadlineProps {
  statements: string[]
  delay?: number
  className?: string
}

export function RotatingHeadline({ statements, delay = 10000, className = "" }: RotatingHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationState, setAnimationState] = useState<"visible" | "fading-out" | "changing" | "fading-in">("visible")

  useEffect(() => {
    const rotateText = () => {
      // Step 1: Start fading out with blur
      setAnimationState("fading-out")

      // Step 2: After fade out, change the text
      setTimeout(() => {
        setAnimationState("changing")
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length)

        // Step 3: Start fading in with blur
        setTimeout(() => {
          setAnimationState("fading-in")

          // Step 4: Complete fade in
          setTimeout(() => {
            setAnimationState("visible")
          }, 500)
        }, 50)
      }, 500)
    }

    const intervalId = setInterval(rotateText, delay)
    return () => clearInterval(intervalId)
  }, [statements, delay])

  // Define styles based on animation state
  let opacity = 1
  let blurAmount = "0px"
  let scale = 1

  switch (animationState) {
    case "fading-out":
      opacity = 0
      blurAmount = "12px"
      scale = 1.05
      break
    case "changing":
      opacity = 0
      blurAmount = "12px"
      scale = 1.05
      break
    case "fading-in":
      opacity = 1
      blurAmount = "0px"
      scale = 1
      break
    case "visible":
    default:
      opacity = 1
      blurAmount = "0px"
      scale = 1
      break
  }

  return (
    <div
      className={`${className} whitespace-pre-line`}
      style={{
        opacity,
        filter: `blur(${blurAmount})`,
        transform: `scale(${scale})`,
        transition: "opacity 500ms ease, filter 500ms ease, transform 500ms ease",
      }}
    >
      {statements[currentIndex]}
    </div>
  )
}
