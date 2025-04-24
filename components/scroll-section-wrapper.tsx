"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollSectionWrapperProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}

export default function ScrollSectionWrapper({
  children,
  className = "",
  direction = "right",
  delay = 0,
}: ScrollSectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.8", "0.5 0.5"]
  })

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [8, 0]
  )

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [30, 0]
  )

  const translateZ = useTransform(
    scrollYProgress,
    [0, 1],
    [-50, 0]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, 1]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={`perspective-container transform-smooth preserve-3d z-layer-content ${className}`}
      style={{
        perspective: "2500px",
        opacity,
        transform: "translateZ(0)",
      }}
    >
      <motion.div
        className="preserve-3d"
        style={{
          rotateX: rotate,
          translateX,
          translateZ,
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
} 