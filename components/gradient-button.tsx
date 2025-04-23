"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string
  gradientTo?: string
  hoverGradientFrom?: string
  hoverGradientTo?: string
  glowColor?: string
}

const GradientButton = ({
  children,
  className = "",
  gradientFrom = "from-purple-600",
  gradientTo = "to-pink-500",
  hoverGradientFrom = "from-purple-700",
  hoverGradientTo = "to-pink-600",
  glowColor = "rgba(147, 51, 234, 0.35)",
  ...props
}: GradientButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className={`
        relative overflow-hidden 
        bg-gradient-to-r ${gradientFrom} ${gradientTo}
        hover:bg-gradient-to-r hover:${hoverGradientFrom} hover:${hoverGradientTo}
        transition-all duration-500 ease-out
        transform hover:scale-[1.02] active:scale-[0.98]
        rounded-xl font-medium
        ${className}
      `}
      style={{
        boxShadow: isHovered 
          ? `0 0 25px ${glowColor}, 0 0 15px ${glowColor}`
          : `0 0 10px ${glowColor}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className={`
        absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 
        blur-lg transition-opacity duration-500
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
      <div className={`
        absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10
        transition-transform duration-700 ease-out
        ${isHovered ? 'scale-[1.5]' : 'scale-100'}
      `} />
    </Button>
  )
}

export default GradientButton
