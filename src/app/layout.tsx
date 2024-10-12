// File: src/app/layout.tsx
import type { Metadata } from 'next'
import { Outfit, Roboto } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'SharePoint Essentials Course',
  description: 'Master the Foundation of SharePoint Modern Collaboration',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${roboto.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  )
}
