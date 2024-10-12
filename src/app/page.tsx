// File: src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import SalesCopySection from '@/components/SalesCopySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CreatorSection from '@/components/CreatorSection'
import WhatYoullGainSection from '@/components/WhatYoullGainSection'
import ImpactStorySection from '@/components/ImpactStorySection'
import CourseModulesSection from '@/components/CourseModulesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#1e1e1e] font-sans">
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <SalesCopySection />
          <TestimonialsSection />
          <CreatorSection />
        </div>
        <WhatYoullGainSection />
        <ImpactStorySection />
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <CourseModulesSection />
        </div>
      </main>
      <footer className="mt-20 py-8 bg-[#f2efe9]">
        <div className="container mx-auto px-4 text-center">
          © 2024 SharePoint Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
