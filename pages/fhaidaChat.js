import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function FhaidaChat() {
  return (
    <Layout>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2 
              className="text-base text-purple-400 font-semibold tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              fhaidaChat
            </motion.h2>
            <motion.p 
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Flagship AI-Powered Chatbot Platform
            </motion.p>
            <motion.p 
              className="mt-4 max-w-2xl text-lg lg:mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Learn more about how fhaidaChat can handle complex customer interactions and enhance your customer service.
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg" style={{ maxWidth: '640px', margin: '0 auto' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full filter brightness-75"
                src="https://www.youtube.com/embed/TQAkn4Z_B5k?si=oQC7U1_XLT5uPYCK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
