"use client"

import { useState, useEffect } from "react"

interface TypingHeadlineProps {
  statements: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterTyping?: number
}

export function TypingHeadline({
  statements,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterTyping = 3000,
}: TypingHeadlineProps) {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!statements || statements.length === 0) return

    const currentStatement = statements[currentStatementIndex] || ""

    if (isTyping) {
      if (currentText.length < currentStatement.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentStatement.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayAfterTyping)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, wait then move to next statement
        const timeout = setTimeout(() => {
          setCurrentStatementIndex((prev) => (prev + 1) % statements.length)
          setIsTyping(true)
        }, 2000) // 2 second delay before retyping
        return () => clearTimeout(timeout)
      }
    }
  }, [currentText, isTyping, currentStatementIndex, statements, typingSpeed, deletingSpeed, delayAfterTyping])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="font-mono text-center whitespace-pre-line">
      {currentText}
      <span className={showCursor ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.1s" }}>
        |
      </span>
    </div>
  )
}
