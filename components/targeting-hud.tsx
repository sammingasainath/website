"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionDiv = motion.div

const TargetingHUD = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTargeting, setIsTargeting] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsTargeting(true)
      // Reset targeting after 2 seconds of no movement
      const timeout = setTimeout(() => setIsTargeting(false), 2000)
      return () => clearTimeout(timeout)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {isTargeting && (
          <>
            {/* Targeting Reticle */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute w-24 h-24"
              style={{
                left: mousePosition.x - 48,
                top: mousePosition.y - 48,
              }}
            >
              {/* Outer Circle */}
              <MotionDiv
                className="absolute inset-0 border border-red-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Circle */}
              <MotionDiv
                className="absolute inset-6 border border-red-500/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Crosshair Lines */}
              <div className="absolute inset-0">
                {[0, 90, 180, 270].map((rotation) => (
                  <MotionDiv
                    key={rotation}
                    className="absolute top-1/2 left-1/2 w-10 h-[1px] bg-red-500/20"
                    style={{ 
                      transformOrigin: 'left',
                      transform: `rotate(${rotation}deg) translateX(-50%)`
                    }}
                    animate={{
                      scaleX: [1, 0.8, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </MotionDiv>

            {/* Target Analysis Text */}
            <MotionDiv
              className="absolute text-[10px] font-mono text-red-500/30"
              style={{
                left: mousePosition.x + 40,
                top: mousePosition.y - 20,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.3, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div>TARGET ANALYSIS</div>
              <div>X: {Math.round(mousePosition.x)}</div>
              <div>Y: {Math.round(mousePosition.y)}</div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TargetingHUD 