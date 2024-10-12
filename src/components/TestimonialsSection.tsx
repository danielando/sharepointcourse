// File: src/components/TestimonialsSection.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Testimonial } from '@/types'
import { testimonials } from '@/lib/courseData'
import { renderStarRating } from '@/utils/renderStarRating'

export default function TestimonialsSection() {
  return (
    <section className="mb-20 bg-[#f9f8f6] p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full bg-[#f2efe9] shadow-none border-none">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
