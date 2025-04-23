"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const JarvisInterface = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform values based on scroll position - start fading earlier and finish sooner
  const containerOpacity = useTransform(scrollY, [0, 150], [1, 0])
  const containerScale = useTransform(scrollY, [0, 150], [1, 0.95])
  const topTranslateY = useTransform(scrollY, [0, 150], [0, -20])
  const bottomTranslateY = useTransform(scrollY, [0, 150], [0, 20])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnalyzing(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        opacity: containerOpacity,
        scale: containerScale
      }}
    >
      {/* Top-right corner HUD */}
      <motion.div 
        className="absolute top-24 right-4 w-80 h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{ 
          y: topTranslateY
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-lg backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-end px-6">
            <div className="text-right">
              <div className="text-lg text-purple-300 font-mono tracking-wider">FHAIDA.COM</div>
              <div className="text-base text-purple-400/80 font-mono mt-1">
                {isAnalyzing ? "ANALYZING PROBLEMS..." : "PROBLEMS SOLVED"}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom-left status */}
      <motion.div 
        className="absolute bottom-8 left-4 text-base font-mono text-purple-400/60 tracking-wider"
        style={{ 
          y: bottomTranslateY
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        QUANTUM PROCESSING ACTIVE
      </motion.div>
    </motion.div>
  )
}

export default JarvisInterface 