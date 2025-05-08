"use client"

import { useState, useEffect, useRef } from "react"

interface TypingHeadlineProps {
  statements: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterTyping?: number
  delayBeforeTyping?: number // New prop for delay before typing next statement
  className?: string
}

export function TypingHeadline({
  statements,
  typingSpeed = 70, // ms per character when typing
  deletingSpeed = 40, // ms per character when deleting
  delayAfterTyping = 3000, // ms to wait after typing completes
  delayBeforeTyping = 2000, // ms to wait after deleting before typing next statement
  className = "",
}: TypingHeadlineProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false) // New state to track waiting period
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Current statement being typed/deleted
  const currentStatement = statements[currentIndex]

  // Ref to track if component is mounted
  const isMounted = useRef(true)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (isMounted.current) {
        setCursorVisible((prev) => !prev)
      }
    }, 500)

    return () => {
      clearInterval(cursorInterval)
      isMounted.current = false
    }
  }, [])

  // Typing/deleting effect
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleNextStep = () => {
      // If we're waiting, transition to typing the next statement
      if (isWaiting) {
        setIsWaiting(false)
        setIsTyping(true)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length)
        return
      }

      // If we've finished typing, wait before deleting
      if (isTyping && displayedText === currentStatement) {
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setIsTyping(false)
            setIsDeleting(true)
          }
        }, delayAfterTyping)
        return
      }

      // If we're typing, add the next character
      if (isTyping && displayedText.length < currentStatement.length) {
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setDisplayedText(currentStatement.substring(0, displayedText.length + 1))
          }
        }, typingSpeed)
        return
      }

      // If we're deleting and there's text left, remove a character
      if (isDeleting && displayedText.length > 0) {
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setDisplayedText(displayedText.substring(0, displayedText.length - 1))
          }
        }, deletingSpeed)
        return
      }

      // If we've finished deleting, wait before typing the next statement
      if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false)
        setIsWaiting(true)

        timeout = setTimeout(() => {
          if (isMounted.current) {
            handleNextStep() // This will trigger typing the next statement
          }
        }, delayBeforeTyping)
        return
      }
    }

    handleNextStep()

    return () => {
      clearTimeout(timeout)
    }
  }, [
    currentStatement,
    delayAfterTyping,
    delayBeforeTyping,
    deletingSpeed,
    displayedText,
    isDeleting,
    isTyping,
    isWaiting,
    statements,
    typingSpeed,
    currentIndex,
  ])

  // Handle line breaks for display
  const formattedText = displayedText.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))

  return (
    <div className={`${className} inline-block whitespace-pre-line`}>
      {formattedText}
      <span
        className="inline-block w-[0.1em] h-[1.2em] ml-1 align-middle"
        style={{
          backgroundColor: cursorVisible ? "white" : "transparent",
          transition: "background-color 0.1s ease",
        }}
      />
    </div>
  )
}
