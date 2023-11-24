import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const revalidate = 3600



export const metadata: Metadata = {
  title: 'NextJS Image Gallery',
  description: 'Created By Dev Hamza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='max-w-6xl mx-auto'>
        {children}
        </main>
        </body>
    </html>
  )
}
