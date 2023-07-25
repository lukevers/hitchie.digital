import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import technologies from './(public)/technologies';
import Axe from './axe';

const inter = Inter({ subsets: ['latin'] });

const description = 'Hitchie Digital is a full service software engineering agency offering full-stack and infrastructure hands-on-coding and team coaching.';
export const metadata: Metadata = {
  title: 'Hitchie Digital | Software Engineering Agency',
  description: description,
  applicationName: 'Hitchie Digital',
  creator: 'Hitchie Digital',
  keywords: ['Software', 'Engineering', 'Agency'].concat(technologies),
  themeColor: '#ffe4e6',
  colorScheme: 'only light',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Hitchie Digital',
    description: description,
    locale: 'en_US',
    emails: ['hello@hitchie.digital'],
    images: {
      url: 'https://hitchie.digital/og.png',
      type: 'image/png',
      width: '1024',
      height: '1024',
      alt: 'Logo of Hitchie Digital',
    },
  },
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
