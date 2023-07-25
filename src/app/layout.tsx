import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import technologies from './(public)/technologies';
import Axe from './axe';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hitchie Digital | Software Engineering Agency',
  description: 'Hitchie Digital is a full service software engineering agency offering full-stack and infrastructure hands-on-coding and team coaching.',
  applicationName: 'Hitchie Digital',
  creator: 'Hitchie Digital',
  keywords: ['Software', 'Engineering', 'Agency'].concat(technologies),
  themeColor: '#ffe4e6',
  colorScheme: 'only light',
  robots: 'index, follow',
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
