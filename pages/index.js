import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming businesses with innovative software
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At fhaida.com, we are not just creating software; we are crafting experiences that revolutionize how businesses operate.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Intelligent Chatbots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engage your customers 24/7 with AI-powered chatbots that understand and respond like humans.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dynamic CRM Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Streamline your customer relationships with our intuitive and powerful CRM platforms.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Seamless Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Boost productivity and efficiency with our cutting-edge automation solutions.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}