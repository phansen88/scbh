import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

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
  const bodyClasses = `${sourceSans.className} bg-white`;
  return (
    <html lang="en">
      <body className={bodyClasses}>{children}</body>
    </html>
  )
}
