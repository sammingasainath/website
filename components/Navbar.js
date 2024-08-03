import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  // { name: 'Innovation', href: '/innovation' },
  // { name: 'Support', href: '/support' },
  // { name: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Fhaida Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">
                Fhaida.Com
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition duration-300 text-gray-200 hover:text-white hover:bg-white/10"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-gray-800 transition duration-300"
              >
                <Link className='text-gray-800' href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}