"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface JarvisTypingProps {
  text: string
  className?: string
}

const JarvisTyping = ({ text, className = "" }: JarvisTypingProps) => {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [text])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-mono">{displayText}</span>
      <AnimatePresence>
        {isTyping && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-1 w-2 h-4 bg-purple-500"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default JarvisTyping 