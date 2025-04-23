"use client"

import { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class with more subtle properties
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      pulseSpeed: number
      pulseDirection: number
      maxSize: number
      minSize: number
      originalSize: number
      // Properties for continuous wrapping
      renderX: number
      renderY: number
      renderXMultiple: number[] 
      renderYMultiple: number[]

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalSize = Math.random() * 1.5 + 0.3 // Slightly smaller particles
        this.size = this.originalSize
        this.minSize = this.originalSize
        this.maxSize = this.originalSize * 1.3 // Less pulsing
        this.speedX = (Math.random() - 0.5) * 0.25 // Reduced speed by half
        this.speedY = (Math.random() - 0.5) * 0.25 // Reduced speed by half
        this.pulseSpeed = Math.random() * 0.01 // Slower pulse
        this.pulseDirection = 1

        // Enhanced color palette with more opacity control
        const colors = ["#9333ea88", "#a855f788", "#c026d388", "#db277788", "#8b5cf688", "#ec489988"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        
        // Initialize rendering positions
        this.renderX = this.x
        this.renderY = this.y
        this.renderXMultiple = []
        this.renderYMultiple = []
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Update actual position
        this.renderX = this.x
        this.renderY = this.y
        this.renderXMultiple = []
        this.renderYMultiple = []

        // Handle continuous border wrapping - calculate if particle needs to be drawn at multiple positions
        // This creates a continuous feel instead of discrete teleporting
        const edgeBuffer = this.size * 2
        
        // For horizontal continuity
        if (this.x < edgeBuffer) {
          this.renderXMultiple.push(this.x + canvas.width)
        } else if (this.x > canvas.width - edgeBuffer) {
          this.renderXMultiple.push(this.x - canvas.width)
        }
        
        // For vertical continuity
        if (this.y < edgeBuffer) {
          this.renderYMultiple.push(this.y + canvas.height)
        } else if (this.y > canvas.height - edgeBuffer) {
          this.renderYMultiple.push(this.y - canvas.height)
        }

        // Standard wrapping for base position (after rendering duplicates)
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size

        // Pulse size effect - more subtle
        this.size += this.pulseDirection * this.pulseSpeed
        if (this.size > this.maxSize || this.size < this.minSize) {
          this.pulseDirection *= -1
        }
      }

      draw() {
        // Draw main particle
        this.drawAt(this.renderX, this.renderY)
        
        // Draw duplicates at screen edges for continuity
        for (const altX of this.renderXMultiple) {
          this.drawAt(altX, this.renderY)
        }
        
        for (const altY of this.renderYMultiple) {
          this.drawAt(this.renderX, altY)
        }
        
        // Draw corner duplicates if needed
        for (const altX of this.renderXMultiple) {
          for (const altY of this.renderYMultiple) {
            this.drawAt(altX, altY)
          }
        }
      }
      
      drawAt(x: number, y: number) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles - fewer particles
    const particles: Particle[] = []
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000)) // Reduced count

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Mouse interaction
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Slightly smaller influence radius
    }

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    canvas.addEventListener("mouseout", () => {
      mouse.x = null
      mouse.y = null
    })

    // Helper function to get wrapped particle positions for connections
    const getWrappedPositions = (particle: Particle) => {
      const positions = [{x: particle.renderX, y: particle.renderY}]
      
      // Add edge duplicates
      for (const altX of particle.renderXMultiple) {
        positions.push({x: altX, y: particle.renderY})
      }
      
      for (const altY of particle.renderYMultiple) {
        positions.push({x: particle.renderX, y: altY})
      }
      
      // Add corner duplicates
      for (const altX of particle.renderXMultiple) {
        for (const altY of particle.renderYMultiple) {
          positions.push({x: altX, y: altY})
        }
      }
      
      return positions
    }
    
    // Draw connection between two points
    const drawConnection = (x1: number, y1: number, x2: number, y2: number, colorA: string, colorB: string, distance: number) => {
      const opacity = 0.08 * (1 - distance / 80) // Lower opacity
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, colorA.replace(")", `, ${opacity})`).replace("rgb", "rgba"))
      gradient.addColorStop(1, colorB.replace(")", `, ${opacity})`).replace("rgb", "rgba"))

      ctx.beginPath()
      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.4 // Thinner lines
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      // More transparent background for longer trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // More fade for subtlety
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()

        // Mouse interaction - gentler effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.renderX - mouse.x
          const dy = particle.renderY - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius

            particle.x += forceDirectionX * force * 1.2 // Gentler push
            particle.y += forceDirectionY * force * 1.2 // Gentler push
          }
        }
      })

      // Draw connections between particles - more selective connections and continuous across borders
      particles.forEach((a, indexA) => {
        // Only connect to nearby particles to reduce visual noise
        for (let indexB = indexA + 1; indexB < particles.length; indexB++) {
          const b = particles[indexB]
          
          // Get all possible positions (including edge duplicates)
          const positionsA = getWrappedPositions(a)
          const positionsB = getWrappedPositions(b)
          
          // Try all combinations to find the closest one
          let minDistance = Infinity
          let closestPair = null
          
          for (const posA of positionsA) {
            for (const posB of positionsB) {
              const dx = posA.x - posB.x
              const dy = posA.y - posB.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              if (distance < minDistance) {
                minDistance = distance
                closestPair = {posA, posB}
              }
            }
          }
          
          // If we found a close enough pair, draw the connection
          if (closestPair && minDistance < 80) {
            drawConnection(
              closestPair.posA.x, 
              closestPair.posA.y, 
              closestPair.posB.x, 
              closestPair.posB.y, 
              a.color, 
              b.color, 
              minDistance
            )
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", () => {})
      canvas.removeEventListener("mouseout", () => {})
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />
}

export default AnimatedBackground
