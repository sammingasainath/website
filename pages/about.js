import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Redefining the Future of Business Software
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At fhaida.com, we are not just another software company. We are revolutionaries, dreamers, and innovators.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg text-gray-500">
              Founded in India, fhaida.com was born from a simple yet powerful idea: what if business software could be as intuitive, beautiful, and game-changing as the best consumer products?
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We believe that technology should empower businesses, not complicate them. That`s why we`ve dedicated ourselves to creating software solutions that are not just functional, but revolutionary. Our chatbots don`t just respond; they understand. Our CRMs don`t just store data; they provide insights. Our automation solutions don`t just save time; they transform operations.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              But what truly sets us apart is our commitment to customization. We don`t believe in one-size-fits-all solutions. Each business is unique, and we ensure our software adapts to your needs, not the other way around.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              At fhaida.com, we are not just building software. We are crafting the future of business, one line of code at a time. Join us on this exciting journey, and lets revolutionize your business together.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}