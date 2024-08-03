import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Innovation() {
  return (
    <Layout>
      <div className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2
              className="text-base text-indigo-400 font-semibold tracking-wide uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Innovation
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Shaping the Future of Business Software
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At fhaida.com, innovation isn`t just a buzzword—it`s our core philosophy.
            </motion.p>
          </div>

          <div className="mt-10">
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              We believe that true innovation comes from understanding the challenges businesses face and creating solutions that not only address these challenges but anticipate future needs. Our approach to innovation is threefold:
            </motion.p>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {/* <img
                src="/path/to/your/image1.jpg"
                alt="Continuous Research and Development"
                className="w-full rounded-lg shadow-lg mb-6"
              /> */}
              <h3 className="text-xl font-semibold text-white">1. Continuous Research and Development</h3>
              <p className="mt-2 text-lg text-gray-300">
                Our dedicated R&D team is constantly exploring emerging technologies and methodologies. From advanced machine learning algorithms to novel user interface designs, we`re always pushing the boundaries of what`s possible in business software.
              </p>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {/* <img
                src="/path/to/your/image2.jpg"
                alt="Customer-Centric Design"
                className="w-full rounded-lg shadow-lg mb-6"
              /> */}
              <h3 className="text-xl font-semibold text-white">2. Customer-Centric Design</h3>
              <p className="mt-2 text-lg text-gray-300">
                We believe that the best innovations come from a deep understanding of our customers` needs. That`s why we work closely with businesses of all sizes, across industries, to ensure our solutions are not just technologically advanced, but truly useful and user-friendly.
              </p>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              {/* <img
                src="/path/to/your/image3.jpg"
                alt="Agile Development and Iteration"
                className="w-full rounded-lg shadow-lg mb-6"
              /> */}
              <h3 className="text-xl font-semibold text-white">3. Agile Development and Iteration</h3>
              <p className="mt-2 text-lg text-gray-300">
                In the fast-paced world of technology, standing still means falling behind. We employ agile development methodologies that allow us to rapidly prototype, test, and refine our solutions. This ensures that our products are always at the cutting edge of innovation.
              </p>
            </motion.div>

            <motion.p
              className="mt-8 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              From AI-powered predictive analytics to blockchain-based security solutions, we`re working on the technologies that will define the future of business. At fhaida.com, we`re not just keeping up with the future—we`re creating it.
            </motion.p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
