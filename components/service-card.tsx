import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  highlighted?: boolean
}

const ServiceCard = ({ icon, title, description, highlighted = false }: ServiceCardProps) => {
  return (
    <Card
      className={`
        relative overflow-hidden group transition-all duration-500 
        bg-black/60 hover:bg-black/80 border-white/10
        p-6 h-full transform hover:scale-105 hover:shadow-lg
      `}
    >
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3 bg-purple-900/30 text-purple-400"
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>

      <div className="flex items-center text-sm font-medium mt-auto">
        <span className="text-purple-400">Learn more</span>
        <ArrowRight
          className="ml-2 h-4 w-4 transition-transform duration-300 text-purple-400 group-hover:translate-x-2"
        />
      </div>
    </Card>
  )
}

export default ServiceCard
