import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Axe from './axe';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hitchie Digital',
  description: 'Digital agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NODE_ENV !== 'production' && <Axe />}
        {children}
      </body>
    </html>
  );
}
