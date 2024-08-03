import { useState, useEffect, Link } from 'react'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: "AI-Powered Chatbots",
    description: "Our chatbots don't just respond; they understand, learn, and evolve. Experience customer service that's indistinguishable from human interaction.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-human-face-forming-81911-large.mp4"
  },
  {
    title: "Revolutionary CRM",
    description: "Forget everything you know about CRMs. Our solution doesn't just manage relationships; it builds, nurtures, and strengthens them autonomously.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-watch-with-health-metrics-32808-large.mp4"
  },
  {
    title: "Quantum Billing",
    description: "Billing at the speed of thought. Our system doesn't just process transactions; it predicts, optimizes, and revolutionizes your entire financial flow.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-city-of-london-and-the-river-thames-27998-large.mp4"
  },
  {
    title: "Hyperdrive Automation",
    description: "We don't just automate tasks; we reimagine entire workflows. Watch as your business achieves lightspeed efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technological-network-connections-2364-large.mp4"
  },
  {
    title: "Sentient Inventory",
    description: "Inventory that thinks for itself. Predict demand, optimize supply chains, and eliminate waste with uncanny precision.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/4705/4705-2160.mp4"
  },
  {
    title: "Mind-Meld Consulting",
    description: "We don't just consult; we integrate. Our experts become one with your team, catalyzing transformations you never thought possible.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://assets.mixkit.co/videos/4547/4547-2160.mp4"
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev === null || prev === services.length - 1) ? 0 : prev + 1)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <div className="bg-black text-white min-h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-8 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Services Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Imagination</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We don`&apos;`t just meet the future; we create it. Experience services that redefine possibility.
            </motion.p>

            <div className="relative h-[70vh] mb-20 overflow-hidden rounded-xl shadow-2xl" ref={ref}>
              <AnimatePresence>
                {activeService !== null && (
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <video 
                      src={services[activeService].video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">{services[activeService].title}</h2>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">{services[activeService].description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                >
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transcend Limitations?</h2>
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-pink-600 hover:to-purple-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              ><Link href="/contact">
                Initiate Transformation
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}