// File: src/components/HeroSection.tsx
'use client'
import EmailForm from './EmailForm'

export default function HeroSection() {
  return (
    <section className="bg-[#1e1e1e] text-white w-full mb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 max-w-5xl mx-auto leading-tight">
          Master the Foundation of SharePoint Modern Collaboration
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-6xl mx-auto">
          Nothing works without SharePoint. In today's Copilot landscape, it's more important than ever to have a foundation in SharePoint. This course is designed to transform your skills, your career, and your workplace.
        </p>
        <div className="max-w-4xl mx-auto">
          <EmailForm />
        </div>
      </div>
    </section>
  )
}
