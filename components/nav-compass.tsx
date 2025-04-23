"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NavCompass = () => {
  const [rotation, setRotation] = useState(0)
  const [coordinates, setCoordinates] = useState({ lat: 37.7749, lng: -122.4194 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
      setCoordinates(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.0001,
        lng: prev.lng + (Math.random() - 0.5) * 0.0001
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed left-1/2 top-24 -translate-x-1/2 w-48 h-48 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-red-500/30 rounded-full" />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute inset-4 border border-red-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Compass Rose */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotation }}
          transition={{ duration: 0.1 }}
        >
          {/* Cardinal Directions */}
          {['N', 'E', 'S', 'W'].map((direction, index) => (
            <div
              key={direction}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${index * 90}deg) translateY(-20px)` }}
            >
              <span className="text-red-500/70 text-sm font-mono">{direction}</span>
            </div>
          ))}

          {/* Compass Arrow */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-16 bg-red-500/50"
            style={{ transformOrigin: 'center bottom' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>

        {/* Coordinates Display */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
          <motion.div
            className="text-red-500/70 text-xs font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div>LAT: {coordinates.lat.toFixed(4)}°</div>
            <div>LNG: {coordinates.lng.toFixed(4)}°</div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500/30"
            style={{
              transform: `rotate(${angle}deg) translateY(-22px)`
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default NavCompass 