import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Componets
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsmono = JetBrains_Mono({subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbraintsMono'
 })

 export const metadata = {
  title: "Carlos Escorcia - Full Stack Developer",
  description: "Explore the portfolio of Carlos Escorcia, a Full Stack Developer specializing in Node.js, PHP, React JS, and cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.variable}>
      <Header />
      <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
       
        
        
        
        </body>
    </html>
  );
}
