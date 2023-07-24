import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Axe from './axe';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hitchie Digital',
  description: 'Hitchie Digital is a full service software engineering agency offering full-stack and infrastructure hands-on-coding and team coaching.',
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
