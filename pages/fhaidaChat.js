import Layout from '../components/Layout'

export default function FhaidaChat() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">fhaidaChat</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Flagship AI-Powered Chatbot Platform
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Learn more about how fhaidaChat can handle complex customer interactions and enhance your customer service.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
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
