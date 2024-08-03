import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.video
        className="absolute w-full h-full object-cover filter blur-md brightness-50"
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/918/918-1080.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div 
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
          <span className="block">Revolutionizing</span>
          <span className="block text-gradient bg-gradient-to-r from-purple-400 to-pink-600">Business Software</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-shadow-lg">
          Empowering businesses with cutting-edge chatbots, CRMs, and automation solutions. Experience the future of software, tailored for your success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact">
            <Button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-lg">
              Get started
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="px-8 py-3 border-2 border-white text-white bg-gray-800 hover:bg-gray-700 text-lg shadow-lg">
              Learn more
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="w-8 h-8 border-2 border-white rounded-full mx-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white mx-auto mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
