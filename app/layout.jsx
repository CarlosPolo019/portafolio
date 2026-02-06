import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbraintsMono",
  display: 'swap',
});

export const metadata = {
  title: "Carlos Escorcia | Full-Stack Developer React & Node.js",
  description: "Explore the portfolio of Carlos Manuel Escorcia Polo, a Full Stack Developer specializing in React and Node.js. Discover projects, experience, and services",
  metadataBase: new URL('https://cmescorcia.com'),
  alternates: {
    canonical: '/',
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
  verification: {
    google: 'GdJ2NZSw9QAeJ6jiZXfycUwnSCS8qXvUvyxj1IyN2tI',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cmescorcia.com',
    siteName: 'Carlos Escorcia Portfolio',
    title: 'Carlos Escorcia - Senior Full-Stack Developer',
    description: 'Experienced Full-Stack Developer specializing in modern web applications with React.js, Node.js, and AWS.',
    images: [
      {
        url: 'https://cmescorcia.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlos Escorcia Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cmescorcia',
    creator: '@cmescorcia',
  },
  keywords: [
    'Carlos Escorcia',
    'Full-Stack Developer', 
    'React.js Developer',
    'Node.js Developer',
    'JavaScript Expert',
    'AWS Developer',
    'Software Engineer',
    'Technical Lead',
    'Remote Developer',
    'Colombia Developer'
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GdJ2NZSw9QAeJ6jiZXfycUwnSCS8qXvUvyxj1IyN2tI"
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="author" content="Carlos Escorcia" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla" />
        <meta name="theme-color" content="#00ff99" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Carlos Escorcia Portfolio",
              "description": "Professional portfolio of Carlos Manuel Escorcia Polo, Senior Full-Stack Developer",
              "url": "https://cmescorcia.com",
              "author": {
                "@type": "Person",
                "name": "Carlos Manuel Escorcia Polo",
                "jobTitle": "Senior Full-Stack Developer",
                "email": "cmescorcia5@icloud.com",
                "url": "https://cmescorcia.com",
                "sameAs": [
                  "https://linkedin.com/in/cmescorcia",
                  "https://github.com/cmescorcia",
                  "https://twitter.com/cmescorcia",
                  "https://instagram.com/cmescorcia"
                ]
              }
            }),
          }}
        />
      </head>

      <body className={jetbrainsmono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
