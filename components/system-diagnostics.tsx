"use client"

import { motion } from 'framer-motion'

const MotionDiv = motion.div

const SystemDiagnostics = () => {
  return (
    <div className="text-xs font-mono space-y-6">
      <div>
        <div className="text-blue-500 mb-2">DEVELOPMENT METRICS</div>
        <div className="space-y-2">
          <div>
            <div className="text-red-500">CODE QUALITY</div>
            <div className="h-1 bg-gray-800 rounded">
              <MotionDiv
                className="h-full bg-red-500 rounded"
                initial={{ width: "0%" }}
                animate={{ width: "95%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </div>
          <div>
            <div className="text-green-500">AGILE VELOCITY</div>
            <div className="h-1 bg-gray-800 rounded">
              <MotionDiv
                className="h-full bg-green-500 rounded"
                initial={{ width: "0%" }}
                animate={{ width: "88%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </div>
          <div>
            <div className="text-yellow-500">DEPLOYMENT RATE</div>
            <div className="h-1 bg-gray-800 rounded">
              <MotionDiv
                className="h-full bg-yellow-500 rounded"
                initial={{ width: "0%" }}
                animate={{ width: "92%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-blue-500 mb-2">PROJECT STATUS</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-red-500">SPRINTS</div>
            <div className="text-red-500/70">OPTIMAL</div>
          </div>
          <div>
            <div className="text-green-500">CI/CD</div>
            <div className="text-green-500/70">ACTIVE</div>
          </div>
          <div>
            <div className="text-yellow-500">TESTING</div>
            <div className="text-yellow-500/70">ENABLED</div>
          </div>
          <div>
            <div className="text-blue-500">AI ASSIST</div>
            <div className="text-blue-500/70">ONLINE</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-blue-500 mb-2">TEAM PERFORMANCE</div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-red-500">PRODUCTIVITY</span>
            <span className="text-red-500">98%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-500">COLLABORATION</span>
            <span className="text-green-500">95%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-yellow-500">INNOVATION</span>
            <span className="text-yellow-500">97%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemDiagnostics 