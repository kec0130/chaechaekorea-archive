import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { defaultMetadata } from '@/components/Layout/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chaechaekorea.com'),
  title: {
    default: defaultMetadata.title,
    template: `%s | ${defaultMetadata.title}`,
    absolute: `${defaultMetadata.title} - Discover the Authentic Korea`,
  },
  description: defaultMetadata.description,
  openGraph: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    url: '/',
    siteName: defaultMetadata.title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: defaultMetadata.title,
      },
    ],
  },
  twitter: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx('text-gray-900', inter.className)}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
