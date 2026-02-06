"use client";

import Head from "next/head";
import { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const stats = [
  { value: "5+", labelA: "Years of", labelB: "experience" },
  { value: "15+", labelA: "Projects", labelB: "completed" },
  { value: "10+", labelA: "Technologies", labelB: "mastered" },
  { value: "6000+", labelA: "Code", labelB: "commits" },
];

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        import("web-vitals")
          .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS((metric) => console.log("CLS:", metric));
            getFID((metric) => console.log("FID:", metric));
            getFCP((metric) => console.log("FCP:", metric));
            getLCP((metric) => console.log("LCP:", metric));
            getTTFB((metric) => console.log("TTFB:", metric));
          })
          .catch(() => {});
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Carlos Escorcia | Full-Stack Developer React & Node.js</title>
        <meta name="description" content="Welcome to Carlos Manuel Escorcia Polo portfolio. Experienced Full-Stack Developer with 5+ years in React.js, Node.js, AWS, and cloud architecture. Available for remote work worldwide." />
        <meta name="keywords" content="Carlos Manuel Escorcia Polo Portfolio, Senior Full-Stack Developer, React.js Expert, Node.js Developer, AWS Cloud Architect, Remote Developer Colombia, JavaScript Expert, Technical Leadership, Enterprise Software Development, SaaS Development, Startup Experience, Fortune 500 Projects" />
        <meta name="author" content="Carlos Manuel Escorcia Polo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cmescorcia.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmescorcia.com/" />
        <meta property="og:title" content="Carlos Manuel Escorcia Polo - Senior Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Explore innovative web applications and cloud solutions by Carlos Manuel Escorcia Polo. Expert in React.js, Node.js, AWS with 5+ years experience." />
        <meta property="og:image" content="https://cmescorcia.com/og-home.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cmescorcia.com/" />
        <meta name="twitter:title" content="Carlos Manuel Escorcia Polo - Senior Full-Stack Developer" />
        <meta name="twitter:description" content="Explore innovative web applications and cloud solutions by Carlos Manuel Escorcia Polo. Expert in React.js, Node.js, AWS with 5+ years experience." />
        <meta name="twitter:image" content="https://cmescorcia.com/og-home.jpg" />
        <meta name="twitter:creator" content="@cmescorcia" />
        
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla, Colombia" />
        <meta name="geo.position" content="10.9639;-74.7964" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carlos Manuel Escorcia Polo",
              "jobTitle": "Senior Full-Stack Developer",
              "url": "https://cmescorcia.com",
              "email": "cmescorcia5@icloud.com",
              "telephone": "+57-300-123-4567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barranquilla",
                "addressRegion": "Atlántico",
                "addressCountry": "CO"
              },
              "sameAs": [
                "https://linkedin.com/in/cmescorcia",
                "https://github.com/cmescorcia",
                "https://twitter.com/cmescorcia",
                "https://instagram.com/cmescorcia"
              ],
              "knowsAbout": [
                "JavaScript", "TypeScript", "React.js", "Node.js", "AWS", "Google Cloud Platform",
                "Docker", "Kubernetes", "MySQL", "MongoDB", "REST APIs", "GraphQL",
                "Technical Leadership", "Agile Development", "DevOps", "CI/CD"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "description": "Full-Stack Web Development, Cloud Architecture, Technical Leadership"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Universidad de la Costa"
              },
              "knowsLanguage": [
                { "@type": "Language", "name": "Spanish", "fluency": "Native" },
                { "@type": "Language", "name": "English", "fluency": "Fluent" }
              ]
            })
          }}
        />
      </Head>

      <section className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-[#0b0d14]">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-85" />
        <div className="pointer-events-none absolute -left-28 -bottom-24 h-[380px] w-[380px] rounded-full bg-amber-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="container mx-auto relative z-10 py-10 md:py-14 xl:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10 xl:gap-12">
            <article className="w-full md:w-1/2 text-center md:text-left">
              <span className="font-primary text-sm tracking-[0.3em] uppercase text-violet-300/90 block mb-4">
                Software Developer
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-display font-extrabold leading-[1.02] mb-6">
                Hello I&apos;m
                <br />
                <span className="text-violet-400 italic violet-text-glow">Carlos Escorcia</span>
              </h1>

              <p className="text-slate-300/90 max-w-xl leading-relaxed font-light text-lg mb-8 mx-auto md:mx-0">
                Welcome to the intersection of innovation and impact. With 5+ years of experience, I specialize in
                dynamic web applications, reliable backend systems, and scalable cloud infrastructure on AWS and Google
                Cloud Platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
                <a
                  href="/pdf/01_CARLOS_ESCORCIA_CV.pdf"
                  download="Carlos_Escorcia_CV.pdf"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-violet-400 text-violet-300 px-8 py-3 rounded-full font-medium hover:bg-violet-500 hover:text-white transition-all"
                >
                  <span>DOWNLOAD CV</span>
                  <FiDownload className="text-sm" />
                </a>

                <Social
                  containerStyles="flex items-center gap-3"
                  iconStyles="w-12 h-12 flex items-center justify-center border border-slate-700 rounded-full text-slate-400 hover:text-violet-300 hover:border-violet-400 transition-all"
                />
              </div>
            </article>

            <div className="w-full md:w-1/2 h-[360px] md:h-[520px] relative mt-6 md:mt-0 flex items-center justify-center">
              <div className="relative w-full h-full float-slow">
                <svg className="w-full h-full opacity-35" viewBox="0 0 500 500" aria-hidden="true">
                  <defs>
                    <linearGradient id="homeVioletGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  <circle cx="250" cy="250" r="180" fill="none" stroke="url(#homeVioletGradient)" strokeDasharray="10 20" strokeWidth="1" />
                  <circle cx="250" cy="250" r="120" fill="none" stroke="url(#homeVioletGradient)" strokeDasharray="5 15" strokeWidth="1" />
                  <path d="M250 70 L430 250 L250 430 L70 250 Z" fill="none" stroke="url(#homeVioletGradient)" strokeWidth="1" />
                  <path d="M100 100 L400 400" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
                  <path d="M400 100 L100 400" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />

                  <circle cx="250" cy="70" r="4" fill="#8b5cf6" className="hero-node" />
                  <circle cx="430" cy="250" r="4" fill="#8b5cf6" className="hero-node" style={{ animationDelay: "1s" }} />
                  <circle cx="250" cy="430" r="4" fill="#8b5cf6" className="hero-node" style={{ animationDelay: "2s" }} />
                  <circle cx="70" cy="250" r="4" fill="#8b5cf6" className="hero-node" style={{ animationDelay: "1.5s" }} />
                </svg>

                <div className="absolute top-[18%] left-[14%] hidden md:block p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md font-primary text-xs text-violet-300/80 select-none pointer-events-none code-fade">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                  </div>
                  <p className="text-white/80">class CoreEngine {`{`}</p>
                  <p className="ml-4">constructor() {`{`}</p>
                  <p className="ml-8 text-violet-400">this.status = &quot;active&quot;;</p>
                  <p className="ml-4">{`}`}</p>
                  <p className="ml-4">deploy() {`{`}</p>
                  <p className="ml-8">return process.env.NODE_ENV;</p>
                  <p className="ml-4">{`}`}</p>
                  <p>{`}`}</p>
                </div>

                <div className="absolute bottom-[18%] right-[16%] hidden md:block p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md font-primary text-xs text-violet-300/80 select-none pointer-events-none code-fade">
                  <p className="text-white/80">interface Developer {`{`}</p>
                  <p className="ml-4">skills: string[];</p>
                  <p className="ml-4">passion: boolean;</p>
                  <p className="ml-4 text-violet-400">vision: &quot;unlimited&quot;;</p>
                  <p>{`}`}</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 md:pt-20">
            {stats.map((item) => (
              <div key={item.labelA} className="flex items-start gap-4 group">
                <span className="text-5xl md:text-7xl font-extrabold text-white group-hover:text-violet-400 transition-colors">
                  {item.value}
                </span>
                <div className="pt-2">
                  <p className="text-xs font-primary uppercase tracking-widest text-slate-400">{item.labelA}</p>
                  <p className="text-xs font-primary uppercase tracking-widest text-slate-400">{item.labelB}</p>
                </div>
              </div>
            ))}
          </footer>
        </div>
      </section>
    </>
  );
};

export default Home;
