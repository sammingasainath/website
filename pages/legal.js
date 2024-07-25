import Layout from '../components/Layout'

export default function Innovation() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Innovation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shaping the Future of Business Software
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At fhaida.com, innovation isn`t just a buzzword—it`s our core philosophy.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg text-gray-500">
              We believe that true innovation comes from understanding the challenges businesses face and creating solutions that not only address these challenges but anticipate future needs. Our approach to innovation is threefold:
            </p>
            
            <h3 className="mt-8 text-xl font-semibold text-gray-900">1. Continuous Research and Development</h3>
            <p className="mt-2 text-lg text-gray-500">
              Our dedicated R&D team is constantly exploring emerging technologies and methodologies. From advanced machine learning algorithms to novel user interface designs, we`re always pushing the boundaries of what`s possible in business software.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">2. Customer-Centric Design</h3>
            <p className="mt-2 text-lg text-gray-500">
              We believe that the best innovations come from a deep understanding of our customers` needs. That`s why we work closely with businesses of all sizes, across industries, to ensure our solutions are not just technologically advanced, but truly useful and user-friendly.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">3. Agile Development and Iteration</h3>
            <p className="mt-2 text-lg text-gray-500">
              In the fast-paced world of technology, standing still means falling behind. We employ agile development methodologies that allow us to rapidly prototype, test, and refine our solutions. This ensures that our products are always at the cutting edge of innovation.
            </p>

            <p className="mt-8 text-lg text-gray-500">
              From AI-powered predictive analytics to blockchain-based security solutions, we`re working on the technologies that will define the future of business. At fhaida.com, we`re not just keeping up with the future—we`re creating it.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}