"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const FloatingElement = ({ children, delay = 0, duration = 4, className = "" }: FloatingElementProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -15, 0],
        transition: {
          delay,
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement
