import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Poppins({ weight: ["400"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Kingkor Roy Tirtho',
  description: 'Hi, I\'m a full-stack and Flutter developer from Bangladesh with knowledge in multiple languages and frameworks.',
  creator: 'Kingkor Roy Tirtho',
  applicationName: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-6xl px-5 bg-background dark:bg-background-dark text-gray-900 dark:text-gray-100`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
