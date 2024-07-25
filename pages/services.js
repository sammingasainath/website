import Layout from '../components/Layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tailored Solutions for Your Business Needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At fhaida.com, we offer a suite of customizable services designed to propel your business into the future.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Chatbots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engage customers 24/7 with intelligent chatbots that learn and adapt to your business needs.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom CRM Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tailor-made CRM solutions that align perfectly with your unique business processes.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Billing Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Streamline your financial operations with our intuitive and powerful billing software.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automation Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Boost productivity with intelligent automation tailored to your specific workflows.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Take control of your inventory with our advanced, real-time management solutions.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Consulting Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expert guidance to help you leverage our solutions for maximum business impact.</p>
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