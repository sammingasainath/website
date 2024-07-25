import Layout from '../components/Layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Products() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Innovative Solutions for Modern Businesses
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover our range of cutting-edge products designed to transform your business operations.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaChat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our flagship AI-powered chatbot platform, capable of handling complex customer interactions.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaCRM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A comprehensive CRM solution that adapts to your business, not the other way around.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaBill</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Intelligent billing software that simplifies financial management and forecasting.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaAuto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our automation suite that transforms manual processes into efficient, error-free workflows.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaStock</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Next-gen inventory management system with predictive analytics and real-time tracking.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>fhaidaIntegrate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our integration platform that ensures all your business tools work seamlessly together.</p>
                </CardContent>
                <CardFooter>
                  <Button>Explore</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}