"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ArcReactor from './arc-reactor'
import TargetingHUD from './targeting-hud'
import SystemDiagnostics from './system-diagnostics'
import NavCompass from './nav-compass'

const MotionDiv = motion.div

const IronManHUD = () => {
  const [time, setTime] = useState(new Date())
  const [bootSequence, setBootSequence] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    setTimeout(() => setBootSequence(false), 2000)
    return () => clearInterval(timer)
  }, [])

  if (bootSequence) {
    return (
      <div className="fixed top-[80px] inset-x-0 bottom-0 bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-500 font-mono text-lg space-y-4"
        >
          <div>INITIALIZING FHAIDA OS...</div>
          <div className="h-1 bg-gray-800 rounded">
            <motion.div
              className="h-full bg-red-500 rounded"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      {/* Background Elements Layer */}
      <div className="fixed top-[80px] inset-x-0 bottom-0 pointer-events-none">
        {/* Arc Reactor - Positioned below navbar */}
        <div className="absolute top-4 left-4 z-50 scale-75">
          <ArcReactor />
        </div>

        {/* Circular Interface Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[800px] h-[800px]">
            {/* Outer Circle */}
            <MotionDiv
              className="absolute inset-0 border border-red-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle Circle */}
            <MotionDiv
              className="absolute inset-[100px] border border-blue-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Circle */}
            <MotionDiv
              className="absolute inset-[200px] border border-purple-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_1px,_#00000000_1px)] bg-black/10 bg-[size:32px_32px]" />
      </div>

      {/* Main HUD Elements */}
      <div className="fixed top-[80px] inset-x-0 bottom-0 pointer-events-none">
        {/* Top Bar */}
        <MotionDiv
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-500/5 to-transparent"
        >
          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-8">
              <MotionDiv
                className="text-red-500/70 font-mono text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                FHAIDA OS v2.0
              </MotionDiv>
              <MotionDiv
                className="text-blue-400/70 font-mono text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                TECH SOLUTIONS
              </MotionDiv>
            </div>
            <div className="flex items-center space-x-8">
              <MotionDiv
                className="text-red-500/70 font-mono text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {time.toLocaleTimeString()} PM
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>

        {/* Side System Diagnostics */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <MotionDiv
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-red-500/70 font-mono text-xs space-y-2"
          >
            <div>SYSTEM STATUS: OPERATIONAL</div>
            <div>INNOVATION: 100%</div>
            <div>SOLUTIONS: ACTIVE</div>
          </MotionDiv>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <SystemDiagnostics />
        </div>

        {/* Targeting System */}
        <div className="absolute inset-0 opacity-50">
          <TargetingHUD />
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,_rgba(239,_68,_68,_0.01)_50%)] bg-[length:100%_4px]" />
      </div>
    </>
  )
}

export default IronManHUD 