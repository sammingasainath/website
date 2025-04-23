import type { Metadata } from 'next'
import './globals.css'
import IronManHUD from '@/components/iron-man-hud'

export const metadata: Metadata = {
  title: 'Fhaida - Iron Man Interface',
  description: 'Created with Iron Man-inspired UI',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <IronManHUD />
        {children}
      </body>
    </html>
  )
}
