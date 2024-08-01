import Layout from '../components/Layout'

export default function FhaidaCRM() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">fhaidaCRM</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive CRM Solution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore fhaidaCRM, a solution that adapts to your business needs with flexibility and ease.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/o9TSi1aqADM?si=PiLBl2OhqVOP8NTW"
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
