import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

//Componets
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbraintsMono",
});

export const metadata = {
  title:
    "Carlos Escorcia - Full Stack Developer | React, Node.js, Web Developer Portfolio",
  description:
    "Explore the portfolio of Carlos Escorcia, a Full Stack Developer specializing in React and Node.js. Discover projects, experience, and services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GdJ2NZSw9QAeJ6jiZXfycUwnSCS8qXvUvyxj1IyN2tI"
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
