// File: src/components/EmailForm.tsx
'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-green-400 font-medium flex items-center justify-center text-xl bg-green-900 p-4 rounded-md">
        <CheckCircle2 className="mr-2 h-6 w-6" />
        Thank you! We'll keep you updated.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto">
      <Input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow text-lg py-6 bg-white text-black"
      />
      <Button type="submit" className="bg-[#44b1ff] hover:bg-[#3a9fe6] text-white text-lg py-6 px-8 whitespace-nowrap">
        Get Early Access
      </Button>
    </form>
  )
}
