import { useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hover, setHover] = useState(null)

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
  })

  const solutions = [
    { 
      title: 'Intelligent Chatbots', 
      description: 'Engage your customers 24/7 with AI-powered chatbots that understand and respond like humans.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/fhaidaChat'
    },
    { 
      title: 'Dynamic CRM Solutions', 
      description: 'Streamline your customer relationships with our intuitive and powerful CRM platforms.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/fhaidaCRM'
    },
    { 
      title: 'Seamless Automation', 
      description: 'Boost productivity and efficiency with our cutting-edge automation solutions.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/contact'
    },
  ]

  return (
    <Layout>
      <Hero />
      <motion.div className="py-20 bg-black text-white min-h-screen" style={{ scale }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <animated.div style={springProps} className="text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Our Solutions</h2>
            <p className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-6xl">
              Transforming businesses with innovative software
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
              At fhaida.com, we don’t just create software; we craft experiences that revolutionize how businesses operate.
            </p>
          </animated.div>
          
          <div className="mt-20" ref={ref}>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ delay: index * 0.2 }}
                  onHoverStart={() => setHover(index)}
                  onHoverEnd={() => setHover(null)}
                >
                  <Card className="h-full flex flex-col justify-between overflow-hidden group bg-gray-900 text-white shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: hover === index ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href={solution.link}>
                          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-pink-600 hover:to-purple-500">Explore</Button>
                        </Link>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)'}}></div>
    </Layout>
  )
}
