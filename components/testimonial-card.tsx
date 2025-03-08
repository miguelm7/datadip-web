import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
        <p className="text-gray-700 mb-4">{quote}</p>
        <div className="flex flex-col">
          <span className="font-semibold">{author}</span>
          <span className="text-sm text-gray-500">{company}</span>
        </div>
      </CardContent>
    </Card>
  )
}

