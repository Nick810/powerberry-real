import type { Metadata, Viewport } from "next"
import '@fontsource/comic-relief/400.css';
import '@fontsource/comic-relief/700.css';
import localFont from 'next/font/local'
import './reset.css'
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ShopifyMetaobjectsResponse } from "@/lib/shopify/types";
import { getMetaObjects } from "@/lib/shopify/api";
// import CookieConsent from "@/components/cookie-consent";

const lazyDog = localFont({
  src: [
    {
      path: '../fonts/lazy_dog.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lazy-dog',
})

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: Use window.location
    return window.location.origin;
  }
  // Server-side: Use environment variable or fallback
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://powerberry-thailand.com';
};

const baseUrl = getBaseUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDF2E3"
};

export const metadata: Metadata = {
  title: {
    template: '%s | Powerberry',
    default: 'Powerberry - ล้างหลอดเลือด ดูแลสุขภาพหัวใจและคอเลสเตอรอล'
  },
  description: 'ค้นพบวิธีดูแลสุขภาพหัวใจและควบคุมระดับคอเลสเตอรอลด้วย Powerberry ผ่านบทความ ผลิตภัณฑ์ และคำแนะนำที่เชื่อถือได้',
  openGraph: {
    title: 'Powerberry - ล้างหลอดเลือด ดูแลสุขภาพหัวใจและคอเลสเตอรอล',
    description: 'ค้นพบวิธีดูแลสุขภาพหัวใจและควบคุมระดับคอเลสเตอรอลด้วย Powerberry ผ่านบทความ ผลิตภัณฑ์ และคำแนะนำที่เชื่อถือได้',
    url: baseUrl,
    siteName: 'Powerberry Thailand',
    images: [
      {
        url: `${baseUrl}/Powerberry-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Powerberry: ล้างหลอดเลือด ดูแลสุขภาพหัวใจและคอเลสเตอรอล',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },

  twitter: {
    card: 'summary_large_image',
    title: 'My Blog Post',
    description: 'An insightful blog post about modern web development.',
    images: [`${baseUrl}/Powerberry-og-image.jpg`],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { metaobjects }: ShopifyMetaobjectsResponse = await getMetaObjects('theme_color');
  const bgColor = metaobjects.edges[0].node.fields[0].value;
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/djh2llz.css" />
      </head>
      <body
        className={`${lazyDog.variable} antialiased`}
        style={{ backgroundColor: bgColor }}
      >
        <Header bgColor={bgColor} />
        {children}
        <Footer />
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}
