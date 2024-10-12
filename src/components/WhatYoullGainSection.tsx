// File: src/components/WhatYoullGainSection.tsx
import { Card, CardContent } from "@/components/ui/card"
import { WhatYoullGain } from '@/types'
import { whatYoullGain } from '@/lib/courseData'

export default function WhatYoullGainSection() {
  return (
    <section className="w-full bg-[#ffe8d6] py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center">What You'll Gain</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatYoullGain.map((item, index) => (
            <Card key={index} className="h-full bg-white shadow-none border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 mr-2 text-[#44b1ff]" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
