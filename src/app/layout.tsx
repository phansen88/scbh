import './globals.css'
import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google';
import { Handlee } from 'next/font/google';
const handleeSans = Handlee({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Skincare by Hammer',
  description: 'Ekslusive skøndhedsbehandlinger i Hedehusene',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Tilføj flere klasser ved at kombinere dem som en streng med mellemrum
  const bodyClasses = `${handleeSans.className} bg-white`;
  return (
    <html lang="en">
      <body className={bodyClasses}>{children}</body>
    </html>
  )
}
