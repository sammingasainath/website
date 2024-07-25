import Layout from '../components/Layout'
import { Button } from "@/components/ui/button"

export default function Support() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Support</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We`re Here to Help
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our dedicated support team is committed to ensuring your success with fhaida.com products.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Knowledge Base</h3>
                <p className="mt-2 text-base text-gray-500">Access our comprehensive documentation and tutorials.</p>
                <Button className="mt-4">Explore KB</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Live Chat Support</h3>
                <p className="mt-2 text-base text-gray-500">Get real-time assistance from our expert support team.</p>
                <Button className="mt-4">Start Chat</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                <p className="mt-2 text-base text-gray-500">Send us your questions and we`ll respond promptly.</p>
                <Button className="mt-4">Email Us</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Video Tutorials</h3>
                <p className="mt-2 text-base text-gray-500">Learn how to make the most of our products with video guides.</p>
                <Button className="mt-4">Watch Videos</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Community Forum</h3>
                <p className="mt-2 text-base text-gray-500">Connect with other users and share your experiences.</p>
                <Button className="mt-4">Join Forum</Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Dedicated Account Manager</h3>
                <p className="mt-2 text-base text-gray-500">For enterprise clients: get personalized support and guidance.</p>
                <Button className="mt-4">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}