// next-seo.config.js
const SEOConfig = {
  title: 'Carlos Escorcia - Senior Full-Stack Developer | React.js, Node.js, AWS Expert',
  description: 'Experienced Full-Stack Developer with 5+ years in React.js, Node.js, AWS, and cloud architecture. Available for remote work worldwide. Expert in JavaScript, TypeScript, Docker, and technical leadership.',
  canonical: 'https://cmescorcia.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cmescorcia.com',
    siteName: 'Carlos Escorcia Portfolio',
    title: 'Carlos Escorcia - Senior Full-Stack Developer',
    description: 'Experienced Full-Stack Developer specializing in modern web applications with React.js, Node.js, and AWS. 5+ years of experience in technical leadership and cloud architecture.',
    images: [
      {
        url: 'https://cmescorcia.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlos Escorcia - Senior Full-Stack Developer Portfolio',
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
      content: 'Carlos Escorcia, Full-Stack Developer, Senior Developer, React.js Developer, Node.js Developer, JavaScript Expert, AWS Developer, Software Engineer, Technical Lead, Remote Developer, Colombia Developer, Frontend Developer, Backend Developer, Web Developer, Cloud Architecture, Docker, Kubernetes, MySQL, MongoDB, TypeScript, DevOps, CI/CD, Agile, Scrum, API Development, Microservices, Enterprise Software, SaaS, Startup Experience, Fortune 500, iFood, Technical Consulting, Systems Engineering, Universidad de la Costa, English Fluent, Spanish Native, Barranquilla, South America, International Projects'
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
    "jobTitle": "Senior Full-Stack Developer",
    "description": "Experienced Software Engineer with 5+ years specializing in React.js, Node.js, AWS, and modern web development. Based in Colombia with remote work experience.",
    "url": "https://cmescorcia.com",
    "email": "cmescorcia5@icloud.com",
    "telephone": "+57-300-123-4567",
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
      "JavaScript", "TypeScript", "React.js", "Node.js", "AWS", "Google Cloud Platform",
      "Docker", "Kubernetes", "MySQL", "MongoDB", "REST APIs", "GraphQL",
      "Technical Leadership", "Agile Development", "DevOps", "CI/CD", "Full-Stack Development",
      "Cloud Architecture", "Microservices", "API Development", "Database Design",
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
      "description": "Full-Stack Web Development, Cloud Architecture, and Technical Leadership",
      "skills": "JavaScript, React.js, Node.js, AWS, Docker, MySQL, Technical Leadership, Agile Development",
      "occupationLocation": {
        "@type": "Country",
        "name": "Global Remote"
      }
    },
    "sameAs": [
      "https://linkedin.com/in/carlos-escorcia-polo-0109441a6",
      "https://github.com/carlos-escorcia",
      "https://cmescorcia.com"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer & Technical Consultant"
    },
    "award": [
      "5+ Years Experience in Full-Stack Development",
      "Technical Leadership in Enterprise Projects",
      "AWS and Google Cloud Platform Expertise",
      "Agile Methodologies Certification"
    ]
  }
};

export default SEOConfig;