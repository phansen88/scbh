import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { Assistant } from 'next/font/google';

const playfairSans = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair',
});
const assistantSans = Assistant({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-assistant',
});

export const metadata: Metadata = {
  title: 'Skincare by Hammer',
  description: 'Ekslusive skøndhedsbehandlinger i Hedehusene',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = `${playfairSans.variable} ${assistantSans.variable} bg-white`;
  return (
    <html lang="en">
      <body className={bodyClasses}>{children}</body>
    </html>
  );
}
