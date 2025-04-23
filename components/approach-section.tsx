"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, CheckCircle, Code, FileSearch, MessageSquare, Users } from "lucide-react"

const steps = [
  {
    id: 1,
    icon: <FileSearch className="h-5 w-5" />,
    title: "Discover",
    description:
      "We dive deep into your workflow, uncovering hidden inefficiencies and opportunities that others miss. Your challenges become our mission.",
  },
  {
    id: 2,
    icon: <Users className="h-5 w-5" />,
    title: "Design",
    description:
      "We map every click, every decision, every workflow. Then we strip away everything that stands between your team and their best work.",
  },
  {
    id: 3,
    icon: <Brain className="h-5 w-5" />,
    title: "Transform",
    description:
      "This is where AI meets human insight. We build intelligence into every corner of your workflow, automating the routine and enhancing the creative.",
  },
  {
    id: 4,
    icon: <Code className="h-5 w-5" />,
    title: "Build",
    description:
      "Our engineers don't just write code - they craft experiences. Every feature is built with precision, tested in real scenarios, and refined until perfect.",
  },
  {
    id: 5,
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Elevate",
    description: 
      "We train your team, optimize your processes, and fine-tune every detail until using our software feels as natural as thinking.",
  },
  {
    id: 6,
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Evolve",
    description:
      "Technology never stands still, and neither do we. We continuously enhance, adapt, and evolve your solution to keep you ahead of the curve.",
  },
]

const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`
              p-3 rounded-lg cursor-pointer transition-all duration-300
              ${
                activeStep === step.id
                  ? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-l-4 border-purple-500"
                  : "bg-black/40 hover:bg-black/60 border-l-4 border-transparent"
              }
            `}
            onClick={() => setActiveStep(step.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start">
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0
                ${activeStep === step.id ? "bg-purple-500 text-white" : "bg-purple-900/30 text-purple-400"}
              `}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-base font-medium text-white mb-1">{step.title}</h3>
                <p className="text-white/70 text-sm leading-snug">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative h-[300px] md:h-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg"></div>

        <div className="relative h-full flex items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-white w-8 h-8">{steps.find((step) => step.id === activeStep)?.icon}</div>
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">
                {steps.find((step) => step.id === activeStep)?.title}
              </h3>

              <p className="text-white/80 text-sm">
                {steps.find((step) => step.id === activeStep)?.description}
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    className={`w-2 h-2 rounded-full ${activeStep === step.id ? "bg-purple-500" : "bg-white/30"}`}
                    onClick={() => setActiveStep(step.id)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ApproachSection
