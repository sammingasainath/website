import type { Metadata } from 'next'
import './globals.css'
import IronManHUD from '@/components/iron-man-hud'
import CustomCursor from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: 'Fhaida.com',
  description: 'Fhaida.com',
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
        <div className="scan-lines" />
        <CustomCursor />
        <IronManHUD />
        {children}
      </body>
    </html>
  )
}
