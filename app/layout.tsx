import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { defaultMetadata } from '@/components/Layout/constants';

const inter = Inter({ subsets: ['latin'] });

const { title, description } = defaultMetadata;

export const metadata: Metadata = {
  metadataBase: new URL('https://chaechaekorea.com'),
  title: {
    default: title,
    template: `%s | ${title}`,
    absolute: `${title} - Discover the Authentic Korea`,
  },
  description,
  openGraph: {
    title,
    description,
    url: '/',
    siteName: title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: `${title} | Feed`,
          url: 'https://chaechaekorea.com/api/rss',
        },
      ],
    },
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
