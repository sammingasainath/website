"use client"

import { ArrowRight, Brain, Building, Code, MessageSquare, PieChart, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import AnimatedText from "@/components/animated-text"
import ProductCard from "@/components/product-card"
import ApproachSection from "@/components/approach-section"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"
import FloatingElement from "@/components/floating-element"
import RevealOnScroll from "@/components/reveal-on-scroll"
import GradientButton from "@/components/gradient-button"
import JarvisInterface from "@/components/jarvis-interface"
import HeroText from "@/components/hero-text"
import { motion } from "framer-motion"
import ScrollSectionWrapper from "@/components/scroll-section-wrapper"

const MotionP = motion.p
const MotionDiv = motion.div

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed elements layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <AnimatedBackground />
      </div>

      {/* Jarvis Interface - Fixed on top */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <JarvisInterface />
      </div>

      {/* Navigation - Fixed on top */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4">
        {/* Navbar backdrop with enhanced blur and gradient */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5" />
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,_rgba(255,255,255,0.02)_2px)] bg-[length:100%_4px]" />
          {/* Bottom border gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        {/* Logo section with more transparency */}
        <div className="relative flex items-center gap-3">
          <div className="relative w-10 h-10 animate-glow">
            <div className="absolute inset-0 bg-purple-600/40 rounded-lg rotate-45"></div>
            <div className="absolute inset-1 bg-black/50 rounded-sm flex items-center justify-center backdrop-blur-sm">
              <Code className="w-5 h-5 text-purple-300" />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70">Fhaida.Com</span>
        </div>

        {/* Navigation links with adjusted opacity */}
        <div className="relative hidden md:flex items-center gap-8">
          <Link href="#about" className="text-white/60 hover:text-white/90 transition-all hover:scale-105 transform hover:text-shadow-glow">
            About Us
          </Link>
          <Link href="#services" className="text-white/60 hover:text-white/90 transition-all hover:scale-105 transform hover:text-shadow-glow">
            Services
          </Link>
          <Link href="#products" className="text-white/60 hover:text-white/90 transition-all hover:scale-105 transform hover:text-shadow-glow">
            Products
          </Link>
          <Link href="#approach" className="text-white/60 hover:text-white/90 transition-all hover:scale-105 transform hover:text-shadow-glow">
            Our Approach
          </Link>
        </div>

        {/* Contact button with more transparency */}
        <Button className="relative bg-white/5 text-white/90 hover:bg-purple-500/10 transition-all transform hover:scale-105 backdrop-blur-sm border border-white/5 hover:border-purple-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity rounded-md" />
          <span className="relative">Contact Us</span>
        </Button>
      </nav>

      {/* Scrollable content */}
      <div className="relative z-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center z-10">
            <HeroText />
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 mt-8"
            >
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl -m-4" />
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-xl -m-4" 
                style={{
                  background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))',
                  filter: 'blur(10px)',
                  transform: 'translateZ(0)'
                }}
              />
              
              {/* Text content with padding */}
              <p className="relative block px-6 py-4">
                In a world of endless code, we build solutions that matter. Our tools cut through complexity, 
                save thousands of work hours, and help teams achieve what they once thought impossible.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientButton className="px-8 py-6 text-lg relative overflow-hidden">
                <span className="relative z-10">Initialize System</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20"
                  style={{
                    animation: 'pulse 2s infinite'
                  }}
                />
              </GradientButton>
              <Button
                variant="outline"
                className="border-2 border-white/20 text-white bg-black/40 hover:bg-purple-900/40 hover:border-purple-500/50 hover:text-white px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-500 backdrop-blur-sm"
              >
                Access Archives
              </Button>
            </MotionDiv>
          </div>
        </section>

        {/* Content sections with 3D transitions */}
        <div className="relative perspective-container" style={{ perspective: '2000px', perspectiveOrigin: '50% 50%' }}>
          {/* About Section */}
          <ScrollSectionWrapper direction="right" className="w-full">
            <section id="about" className="relative py-20 px-6 bg-gradient-to-b from-black via-black/90 to-purple-950/80">
              <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    We Make <span className="gradient-text">Technology Human</span>
                  </h2>
                </RevealOnScroll>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <RevealOnScroll direction="right" delay={0.2}>
                    <div>
                      <p className="text-white/80 text-lg mb-6">
                        Every day, brilliant teams waste time fighting with tools that should help them. We're changing that. 
                        Our solutions bridge the gap between human creativity and technological power.
                      </p>
                      <p className="text-white/80 text-lg mb-6">
                        We obsess over the details others ignore. Every feature we build saves hours of work, 
                        eliminates frustration, and helps teams achieve their true potential.
                      </p>
                      <GradientButton>See Our Process</GradientButton>
                    </div>
                  </RevealOnScroll>
                  <RevealOnScroll direction="left" delay={0.4}>
                    <FloatingElement>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-lg blur-xl"></div>
                        <Card className="bg-black/60 border-purple-500/50 p-6 relative">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-4 bg-black/60 rounded-lg transform transition-transform hover:scale-105">
                              <Building className="h-10 w-10 text-purple-500 mb-2" />
                              <span className="text-white font-medium">Enterprise Solutions</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-black/60 rounded-lg transform transition-transform hover:scale-105">
                              <MessageSquare className="h-10 w-10 text-pink-500 mb-2" />
                              <span className="text-white font-medium">Strategic Consulting</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-black/60 rounded-lg transform transition-transform hover:scale-105">
                              <Brain className="h-10 w-10 text-purple-500 mb-2" />
                              <span className="text-white font-medium">AI Integration</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-black/60 rounded-lg transform transition-transform hover:scale-105">
                              <Settings className="h-10 w-10 text-pink-500 mb-2" />
                              <span className="text-white font-medium">Custom Development</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </FloatingElement>
                  </RevealOnScroll>
                </div>
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Services Section */}
          <ScrollSectionWrapper direction="left" className="w-full">
            <section id="services" className="py-20 px-6 bg-gradient-to-b from-purple-950/80 via-black/90 to-purple-950">
              <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Services</h2>
                  <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
                    We transform business challenges into elegant solutions. Our tools don't just solve problems - 
                    they give your team superpowers, turning complex workflows into seamless experiences.
                  </p>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                  <RevealOnScroll direction="up" delay={0.1}>
                    <ServiceCard
                      icon={<Building className="h-10 w-10" />}
                      title="Enterprise Software"
                      description="Software that runs your business shouldn't get in the way. We build tools that empower your team, not slow them down."
                    />
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.3}>
                    <ServiceCard
                      icon={<MessageSquare className="h-10 w-10" />}
                      title="Strategic Consulting"
                      description="Technology should serve your vision, not dictate it. We help you chart the course to digital transformation that makes sense."
                      highlighted={true}
                    />
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.5}>
                    <ServiceCard
                      icon={<Brain className="h-10 w-10" />}
                      title="AI Integration"
                      description="AI isn't magic—it's a tool. We help you implement AI that delivers real value, not empty promises."
                    />
                  </RevealOnScroll>
                </div>
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Approach Section */}
          <ScrollSectionWrapper direction="right" className="w-full">
            <section id="approach" className="py-20 px-6 bg-gradient-to-b from-purple-950 via-black/90 to-black/80">
              <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Approach</h2>
                  <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
                    We believe in simplicity. Understanding before building. Quality over quantity. And software that just
                    works.
                  </p>
                </RevealOnScroll>

                <ApproachSection />
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Products Section */}
          <ScrollSectionWrapper direction="left" className="w-full">
            <section id="products" className="py-20 px-6 bg-gradient-to-b from-black/80 via-purple-950/90 to-black">
              <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Products</h2>
                  <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
                    We've seen teams waste countless hours on tasks machines should handle. Our products free your 
                    people to focus on what humans do best: create, innovate, and solve real problems.
                  </p>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-8">
                  <RevealOnScroll direction="up" delay={0.1}>
                    <ProductCard
                      title="Neural Office"
                      description="Transform how your team thinks and works. Our AI-powered workspace learns from every interaction, 
                      connects scattered knowledge, and puts answers at your fingertips before you even ask."
                      icon={<MessageSquare className="h-8 w-8" />}
                    />
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.3}>
                    <ProductCard
                      title="Project Catalyst"
                      description="Stop firefighting and start innovating. Our predictive engine spots risks weeks in advance, 
                      automates routine decisions, and keeps your projects flowing smoothly - every single time."
                      icon={<PieChart className="h-8 w-8" />}
                    />
                  </RevealOnScroll>
                  <RevealOnScroll direction="up" delay={0.5}>
                    <ProductCard
                      title="Customer Oracle"
                      description="Turn data into customer delight. Our AI analyzes millions of interactions to predict customer needs, 
                      automate personalized experiences, and help you serve customers like you can read their minds."
                      icon={<Brain className="h-8 w-8" />}
                    />
                  </RevealOnScroll>
                </div>
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Testimonials */}
          <ScrollSectionWrapper direction="right" className="w-full">
            <section className="py-20 px-6 bg-gradient-to-b from-black via-black/90 to-purple-950/80">
              <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">People Love Our Work</h2>
                </RevealOnScroll>

                <TestimonialSlider />
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Contact Section */}
          <ScrollSectionWrapper direction="left" className="w-full">
            <section id="contact" className="py-20 px-6 bg-gradient-to-b from-purple-950/80 via-black/90 to-black">
              <div className="max-w-4xl mx-auto">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    Let's Build Your Future
                  </h2>
                  <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
                    The best solutions start with a conversation. Tell us your challenges, and let's create something extraordinary together.
                  </p>
                </RevealOnScroll>

                <ContactForm />
              </div>
            </section>
          </ScrollSectionWrapper>

          {/* Footer */}
          <footer className="relative z-10 py-12 px-6 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-2 mb-6 md:mb-0">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-purple-600 rounded-md rotate-45 animate-pulse"></div>
                    <div className="absolute inset-1 bg-black rounded-sm flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">Fhaida.Com</span>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                    Products
                  </Link>
                  <Link href="#approach" className="text-white/80 hover:text-white transition-colors">
                    Our Approach
                  </Link>
                  <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} Fhaida.com. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}

const pulseKeyframes = `
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}
`

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = pulseKeyframes
  document.head.appendChild(style)
}
