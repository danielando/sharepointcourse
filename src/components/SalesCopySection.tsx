// File: src/components/SalesCopySection.tsx
import { Card, CardContent } from "@/components/ui/card"
import EmailForm from './EmailForm'
import { whySharePointMatters } from '@/lib/courseData'
import React from 'react'
import OptInComponent from './OptInComponent'

export default function SalesCopySection() {
  return (
    <section className="mb-16 p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">SharePoint Essentials: Powering Your Copilot-Driven Workplace</h2>
      <h3 className="text-2xl font-semibold mb-8 text-center">Master the Foundation of Modern Collaboration and Copilot Integration</h3>
      
      <div className="mb-12">
        <p className="text-lg mb-6">
          In an era where artificial intelligence is reshaping how we work, SharePoint stands as the cornerstone of the intelligent workplace. Our comprehensive course, "SharePoint Essentials: Powering Your Copilot-Driven Workplace," equips you with the crucial knowledge and skills to excel in this new frontier of productivity.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Why SharePoint Matters in the Age of Copilot</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {whySharePointMatters.map((item, index) => (
            <Card key={index} className="h-full bg-[#f9f8f6] shadow-none border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-2 text-[#44b1ff]">{React.isValidElement(item.icon) ? item.icon : <item.icon />}</div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <OptInComponent />
      {/* ... rest of the component ... */}
    </section>
  )
}
