import './globals.css'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../lib/config'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL || 'https://birlatrimayaphase4.co.in'),
  title: 'Birla Trimaya Phase 4 | 3 & 4 BHK Apartments Bangalore',
  description: 'Birla Trimaya Phase 4 in Shettigere, Airport Road, Bangalore offers premium 3 & 4 BHK apartments across a 52-acre integrated township. Starting from ₹1.88 Cr*.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Birla Trimaya Phase 4 | 3 & 4 BHK Apartments Bangalore',
    description: 'Birla Trimaya Phase 4 in Shettigere, Airport Road, Bangalore offers premium 3 & 4 BHK apartments across a 52-acre integrated township. Starting from ₹1.88 Cr*.',
    url: SITE_URL || 'https://birlatrimayaphase4.co.in',
    siteName: 'Birla Trimaya Phase 4',
    images: [
      {
        url: '/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Birla Trimaya Phase 4',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birla Trimaya Phase 4 | 3 & 4 BHK Apartments Bangalore',
    description: 'Birla Trimaya Phase 4 in Shettigere, Airport Road, Bangalore offers premium 3 & 4 BHK apartments across a 52-acre integrated township. Starting from ₹1.88 Cr*.',
    images: ['/images/hero/banner1.webp'],
  },
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateListing',
              name: 'Birla Trimaya Phase 4',
              url: SITE_URL || 'https://birlatrimayaphase4.co.in',
              description: 'Spacious 3 & 4 BHK Apartments in Shettigere, Airport Road, Bangalore starting ₹1.88 Cr*',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Shettigere, Airport Road',
                addressRegion: 'Bangalore',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
