export const siteUrl = "https://www.cmescorcia.com";

export const siteName = "Carlos Escorcia Portfolio";

export const defaultDescription =
  "Carlos Manuel Escorcia Polo is a Full-Stack Developer focused on web and mobile applications, API integrations, AI automation, cloud workflows, and data solutions.";

export const keywords = [
  "Carlos Escorcia",
  "Carlos Manuel Escorcia Polo",
  "Full-Stack Developer",
  "Software Engineer",
  "React.js Developer",
  "React Native Developer",
  "Node.js Developer",
  "Laravel Developer",
  "API Integrations",
  "AI Automation",
  "Google Cloud Platform",
  "AWS",
  "BigQuery",
  "Looker Studio",
  "Remote Developer Colombia",
  "Barranquilla Developer",
];

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Carlos Escorcia - Full-Stack Developer Portfolio",
};

export function createPageMetadata({ title, description = defaultDescription, path = "/" }) {
  const canonicalPath = path === "/" ? "/" : path;
  const url = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Carlos Manuel Escorcia Polo", url: siteUrl }],
    creator: "Carlos Manuel Escorcia Polo",
    publisher: "Carlos Manuel Escorcia Polo",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@cmescorcia",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Manuel Escorcia Polo",
  alternateName: "Carlos Escorcia",
  jobTitle: "Full-Stack Developer",
  description: defaultDescription,
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  email: "mailto:cmescorcia5@icloud.com",
  telephone: "+57-300-492-4361",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressRegion: "Atlantico",
    addressCountry: "CO",
  },
  sameAs: [
    "https://www.linkedin.com/in/carlos-escorcia-polo-0109441a6/",
    "https://github.com/cmescorcia",
    "https://twitter.com/cmescorcia",
    "https://instagram.com/cmescorcia",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "React Native",
    "Node.js",
    "Laravel",
    "Google Cloud Platform",
    "AWS",
    "MySQL",
    "PostgreSQL",
    "BigQuery",
    "REST APIs",
    "AI Integrations",
    "Automation",
    "CI/CD",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de la Costa",
  },
  knowsLanguage: [
    { "@type": "Language", name: "Spanish" },
    { "@type": "Language", name: "English" },
  ],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  author: {
    "@type": "Person",
    name: "Carlos Manuel Escorcia Polo",
    url: siteUrl,
  },
};

export const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Carlos Escorcia - Full-Stack Developer Portfolio",
  url: siteUrl,
  mainEntity: personStructuredData,
};
