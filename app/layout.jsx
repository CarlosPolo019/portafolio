import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, websiteStructuredData } from "./seo";

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
  ...createPageMetadata({
    title: "Carlos Escorcia | Full-Stack Developer, AI Integrations & Cloud Automation",
    description:
      "Explore the portfolio of Carlos Manuel Escorcia Polo, a Full-Stack Developer with 8+ years building web and mobile applications, API integrations, AI automation, cloud workflows, and data solutions.",
    path: "/",
  }),
  title: "Carlos Escorcia | Full-Stack Developer, AI Integrations & Cloud Automation",
  verification: {
    google: "GdJ2NZSw9QAeJ6jiZXfycUwnSCS8qXvUvyxj1IyN2tI",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0b0d14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="author" content="Carlos Escorcia" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla" />
      </head>

      <body className={jetbrainsmono.variable}>
        <JsonLd data={websiteStructuredData} />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
