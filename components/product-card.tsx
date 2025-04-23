import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  icon: ReactNode
  title: string
  description: string
}

const ProductCard = ({ icon, title, description }: ProductCardProps) => {
  return (
    <Card className="bg-black/60 border-purple-500/20 p-6 group hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col transform hover:scale-105 hover:shadow-lg">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4 group-hover:animate-pulse">
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-white/70 mb-6 flex-grow">{description}</p>

      <div className="flex items-center text-sm font-medium text-purple-400 mt-auto group-hover:text-purple-300 transition-colors">
        <span>Explore product</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </Card>
  )
}

export default ProductCard
