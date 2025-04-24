"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    quote:
      "Fhaida transformed how we work. Their software doesn't just solve problems—it makes them disappear. It's like they read our minds.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
  },
  {
    id: 2,
    quote:
      "I've worked with dozens of software companies. Fhaida is different. They don't sell technology—they deliver outcomes. And that makes all the difference.",
    author: "Michael Chen",
    position: "CEO, Innovate Solutions",
  },
  {
    id: 3,
    quote:
      "Their approach is refreshing. No jargon, no complexity, just elegant solutions that work. Our team adopted their tools instantly. That never happens.",
    author: "Emily Rodriguez",
    position: "Operations Director, Global Enterprises",
  },
]

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setSlideDirection('right')
    setActiveIndex((prev) => (prev + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const prevTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setSlideDirection('left')
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-lg blur-xl"></div>

      <Card className="bg-black/60 border-purple-500/30 p-8 md:p-12 relative overflow-hidden card-3d">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-purple-500/20" />

        <div className="relative min-h-[200px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ 
                opacity: 0,
                transform: `perspective(1000px) rotateY(${slideDirection === 'right' ? '-30deg' : '30deg'}) translateX(${slideDirection === 'right' ? '100px' : '-100px'})` 
              }}
              animate={{ 
                opacity: 1,
                transform: 'perspective(1000px) rotateY(0) translateX(0)' 
              }}
              exit={{ 
                opacity: 0,
                transform: `perspective(1000px) rotateY(${slideDirection === 'right' ? '30deg' : '-30deg'}) translateX(${slideDirection === 'right' ? '-100px' : '100px'})` 
              }}
              transition={{ 
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="w-full transform-style-preserve-3d backface-hidden"
            >
              <div className="transform-style-preserve-3d">
                <blockquote className="text-xl md:text-2xl text-white/90 text-center mb-6 max-w-3xl mx-auto">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <p className="text-white font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-purple-400 text-sm">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-all transform hover:scale-110 hover:border-purple-500/50"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-purple-500 w-6" : "bg-white/30"
                } hover:bg-purple-400`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setSlideDirection(index > activeIndex ? 'right' : 'left')
                    setActiveIndex(index)
                    setTimeout(() => setIsAnimating(false), 600)
                  }
                }}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-all transform hover:scale-110 hover:border-purple-500/50"
            disabled={isAnimating}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  )
}

export default TestimonialSlider
