"use client"

import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ArcReactor = () => {
  return (
    <div className="relative w-32 h-32">
      {/* Core */}
      <MotionDiv
        className="absolute inset-[25%] bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.7)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Inner Ring */}
      <MotionDiv
        className="absolute inset-[15%] border-4 border-blue-400/50 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Middle Ring */}
      <MotionDiv
        className="absolute inset-[5%] border-2 border-blue-300/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Outer Ring */}
      <div className="absolute inset-0 border-2 border-blue-200/30 rounded-full" />

      {/* Energy Particles - Centered in the core */}
      <MotionDiv
        className="absolute inset-[30%] flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(6)].map((_, i) => (
          <MotionDiv
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            style={{
              transform: `rotate(${i * 60}deg) translateY(-8px)`
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </MotionDiv>
    </div>
  )
}

export default ArcReactor 