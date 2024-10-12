// File: src/components/ImpactStorySection.tsx
import { Quote } from "lucide-react"
import { impactStory } from '@/lib/courseData'

export default function ImpactStorySection() {
  return (
    <section className="w-full bg-[#1e1e1e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{impactStory.title}</h2>
            <p className="mb-4">{impactStory.subtitle}</p>
          </div>
          <div className="bg-[#2a2a2a] p-8 rounded-lg">
            <Quote className="w-12 h-12 text-[#44b1ff] mb-4" />
            <p className="text-lg italic mb-4">"{impactStory.quote}"</p>
            <p className="font-semibold">- {impactStory.author}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
