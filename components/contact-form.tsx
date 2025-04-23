"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="bg-black/60 border-purple-500/30 p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/70 text-center">Thank you for reaching out. We'll get back to you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white/80 text-sm">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-black/60 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 transition-all focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-white/80 text-sm">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-black/60 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 transition-all focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="company" className="text-white/80 text-sm block mb-2">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="bg-black/60 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 transition-all focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white/80 text-sm block mb-2">
              How can we help?
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your project or requirements..."
              required
              rows={5}
              className="bg-black/60 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 transition-all focus:ring-1 focus:ring-purple-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-6 hover:opacity-90 transition-all transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Let's Talk
              </>
            )}
          </Button>
        </form>
      )}
    </Card>
  )
}

export default ContactForm
