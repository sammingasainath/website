"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  animation?: "fade-in-up" | "fade-in" | "slide-in" | "typewriter"
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  animation = "fade-in-up",
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const letters = container.querySelectorAll("span")

    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${delay + index * staggerDelay}s`
    })
  }, [text, delay, staggerDelay])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-in":
        return "animate-slide-in"
      case "typewriter":
        return "animate-typewriter"
      default:
        return "animate-fade-in-up"
    }
  }

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${getAnimationClass()} opacity-0`}
          style={{
            animationFillMode: "forwards",
            animationDuration: "0.5s",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText
