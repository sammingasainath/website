import React, { useRef, useEffect, Link  } from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { Button } from "@/components/ui/button";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const RotatingCube = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg mx-auto"
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Layout>
      <div className="bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center">
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100%', '120%'],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{
              backgroundImage: 'url("/api/placeholder/1352/900")',
              backgroundSize: 'cover',
              filter: 'brightness(0.3)',
            }}
          />
          <div className="relative z-10 px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">fhaida</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Revolutionizing Business Software
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black transition duration-300"
              >
                Discover Our Vision
              </Button>
            </motion.div>
          </div>
          <RotatingCube />
        </div>

        {/* Vision Section */}
        <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
            >
              Our Vision
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
            >
              We envision a world where business software is as intuitive, beautiful, and game-changing as the best consumer products. At fhaida, we`&apos;`re not just another software company - we`&apos;`re revolutionaries, dreamers, and innovators.
            </motion.p>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {['Intelligent Chatbots', 'Dynamic CRM', 'Seamless Automation'].map((title, index) => (
                <motion.div
                  key={title}
                  className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-lg shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</h3>
                  <p className="text-gray-300">Our {title.toLowerCase()} don`&apos;`t just work, they revolutionize. Experience the future of business technology.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Parallax Section */}
        <div className="py-10 bg-black overflow-hidden">
          <ParallaxText baseVelocity={-5}>Innovate • Disrupt • Transform</ParallaxText>
          <ParallaxText baseVelocity={5}>AI-Powered • Cloud-Native • Future-Ready</ParallaxText>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
            >
              Join Our Revolution
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
            >
              We`&apos;`re not just building software. We`&apos;`re crafting the future of business, one line of code at a time.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition duration-300"
              >
                <Link href="/contact">
                Start Your Journey
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
