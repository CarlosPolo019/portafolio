// next-seo.config.js
const SEOConfig = {
  title: 'Carlos Escorcia - Full-Stack Developer | AI Integrations, Cloud & Automation',
  description: 'Full-Stack Developer with 8+ years building scalable web and mobile applications, API integrations, AI automation, cloud workflows, and data solutions with React, React Native, Node.js, Laravel, GCP, and AWS.',
  canonical: 'https://cmescorcia.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cmescorcia.com',
    siteName: 'Carlos Escorcia Portfolio',
    title: 'Carlos Escorcia - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in web and mobile applications, API integrations, AI-assisted automation, cloud workflows, and data solutions.',
    images: [
      {
        url: 'https://cmescorcia.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlos Escorcia - Full-Stack Developer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: 'https://cmescorcia.com/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Carlos Escorcia Profile',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@carlosescorcia',
    creator: '@carlosescorcia',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Carlos Escorcia, Carlos Escorcia Polo, Full-Stack Developer, React.js Developer, React Native Developer, Node.js Developer, Laravel Developer, JavaScript Expert, TypeScript Developer, API Integrations, AI Integrations, AI-assisted Development, Automation Developer, Google Cloud Platform, GCP Developer, AWS Developer, Software Engineer, Frontend Developer, Backend Developer, Web Developer, Cloud Infrastructure, MySQL, PostgreSQL, BigQuery, Looker Studio, REST APIs, CI/CD, Transportation Technology, Client Web Platforms, Technical Consulting, Systems Engineering, Universidad de la Costa, English, Spanish, Barranquilla, Colombia, Remote Developer'
    },
    {
      name: 'author',
      content: 'Carlos Manuel Escorcia Polo',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      name: 'bingbot',
      content: 'index, follow'
    },
    {
      name: 'language',
      content: 'English'
    },
    {
      name: 'distribution',
      content: 'global'
    },
    {
      name: 'rating',
      content: 'general'
    },
    {
      name: 'revisit-after',
      content: '7 days'
    },
    {
      name: 'geo.region',
      content: 'CO-ATL'
    },
    {
      name: 'geo.placename',
      content: 'Barranquilla'
    },
    {
      name: 'geo.position',
      content: '10.9639;-74.7964'
    },
    {
      name: 'ICBM',
      content: '10.9639, -74.7964'
    },
    {
      name: 'theme-color',
      content: '#00ff99'
    },
    {
      name: 'msapplication-TileColor',
      content: '#00ff99'
    },
    {
      property: 'article:author',
      content: 'Carlos Escorcia'
    },
    {
      property: 'article:publisher',
      content: 'https://cmescorcia.com'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png', 
      href: '/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'canonical',
      href: 'https://cmescorcia.com'
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/feed.xml',
      title: 'Carlos Manuel Escorcia Polo Blog RSS Feed'
    }
  ],
  // JSON-LD structured data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Carlos Manuel Escorcia Polo",
    "jobTitle": "Full-Stack Developer",
    "description": "Software engineer with 8+ years specializing in web and mobile applications, API integrations, AI automation, cloud workflows, and data solutions. Based in Colombia with remote work experience.",
    "url": "https://cmescorcia.com",
    "email": "cmescorcia5@icloud.com",
    "telephone": "+57-300-492-4361",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barranquilla",
      "addressRegion": "Atlántico",
      "postalCode": "080001",
      "addressCountry": "CO"
    },
    "nationality": "Colombian",
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Spanish",
        "fluency": "Native"
      },
      {
        "@type": "Language", 
        "name": "English",
        "fluency": "Fluent"
      }
    ],
    "knowsAbout": [
      "JavaScript", "TypeScript", "React.js", "React Native", "Node.js", "Express",
      "PHP", "Laravel", "AWS", "Google Cloud Platform", "MySQL", "PostgreSQL",
      "BigQuery", "Looker Studio", "REST APIs", "AI Integrations", "AI-assisted Development",
      "Automation", "CI/CD", "Full-Stack Development", "API Development", "Database Workflows",
      "Software Engineering", "Web Development", "Mobile Development"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universidad de la Costa",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barranquilla",
        "addressCountry": "CO"
      }
    },
    "workLocation": [
      {
        "@type": "Place",
        "name": "Remote Work Available"
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Barranquilla",
          "addressCountry": "CO"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "description": "Full-Stack Web Development, API Integrations, AI Automation, Cloud Infrastructure, and Technical Decision-Making",
      "skills": "JavaScript, TypeScript, React.js, React Native, Node.js, Express, PHP, Laravel, MySQL, PostgreSQL, BigQuery, Looker Studio, Google Cloud Platform, AWS, REST APIs, CI/CD, AI Integrations, Automation",
      "occupationLocation": {
        "@type": "Country",
        "name": "Global Remote"
      }
    },
    "sameAs": [
      "https://www.linkedin.com/in/carlos-escorcia-polo-0109441a6/",
      "https://github.com/cmescorcia",
      "https://cmescorcia.com"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer & Technical Consultant"
    },
    "award": [
      "8+ Years Experience in Full-Stack Development",
      "Lead Full-Stack Engineering for Corporate Transportation Platforms",
      "Google Cloud Platform and AWS Experience",
      "AI Integrations and AI-assisted Development Workflows"
    ]
  }
};

export default SEOConfig;
