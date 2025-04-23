"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MotionDiv = motion.div
const MotionSpan = motion.span

const HeroText = () => {
  const [scanning, setScanning] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => setScanning(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative z-20 text-center">
      {/* Main title container */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative inline-block mb-8"
      >
        {/* Scanning effect */}
        {scanning && (
          <MotionDiv
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Background blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-2xl -m-6" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-purple-600/20 rounded-2xl -m-6 animate-pulse" />

        {/* Title text with effects */}
        <div className="relative px-12 py-8">
          <h1 className="text-7xl font-bold text-white font-mono relative inline-block">
            {/* Glitch layers */}
            <MotionDiv
              className="absolute top-0 left-0 w-full"
              animate={{
                x: [-2, 2, -2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="text-red-500/40">Think Beyond Code</span>
            </MotionDiv>
            <MotionDiv
              className="absolute top-0 left-0 w-full"
              animate={{
                x: [2, -2, 2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0.2
              }}
            >
              <span className="text-blue-500/40">Think Beyond Code</span>
            </MotionDiv>
            {/* Main text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">Think Beyond Code</span>
          </h1>

          {/* Decorative elements */}
          <MotionDiv
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <MotionDiv
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </MotionDiv>

      {/* Subtitle */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative inline-block mb-12"
      >
        <div className="relative px-12 py-6">
          {/* Enhanced background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-purple-400/30 to-purple-600/30 rounded-lg backdrop-blur-lg" />
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-lg animate-glow" 
            style={{
              background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))',
              filter: 'blur(20px)',
              transform: 'translateZ(0)'
            }}
          />
          
          {/* Scan lines with increased opacity */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,_rgba(255,255,255,0.15)_2px)] bg-[length:100%_4px] rounded-lg" />
          
          {/* Main subtitle text with enhanced contrast */}
          <h2 className="text-4xl font-bold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
            Where Vision Meets Reality
          </h2>

          {/* Enhanced animated corners */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
            <MotionDiv
              key={pos}
              className={`absolute ${pos.includes('top') ? 'top-0' : 'bottom-0'} ${pos.includes('left') ? 'left-0' : 'right-0'}
                        w-8 h-8 border-2 ${pos.includes('left') ? 'border-r-0' : 'border-l-0'} 
                        ${pos.includes('top') ? 'border-b-0' : 'border-t-0'} border-purple-400/70`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </MotionDiv>

      {/* Status indicators */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center space-x-6 font-mono text-sm"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500/70 animate-pulse" />
          <span className="text-green-500/70">AI CORE ACTIVE</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-blue-400/70 animate-pulse" />
          <span className="text-blue-400/70">QUANTUM SYSTEMS ONLINE</span>
        </div>
      </MotionDiv>
    </div>
  )
}

export default HeroText 