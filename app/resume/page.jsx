import JsonLd from "@/components/JsonLd";
import ResumeClient from "./ResumeClient";
import { createPageMetadata, personStructuredData, siteUrl } from "../seo";

export const metadata = createPageMetadata({
  title: "Resume | Carlos Escorcia Full-Stack Developer Experience",
  description:
    "Resume of Carlos Manuel Escorcia Polo: 8+ years in full-stack development, React, React Native, Node.js, Laravel, cloud infrastructure, APIs, BI, and automation.",
  path: "/resume",
});

const resumeStructuredData = {
  ...personStructuredData,
  "@type": "Person",
  mainEntityOfPage: `${siteUrl}/resume`,
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    skills:
      "React.js, React Native, Next.js, Node.js, Laravel, PHP, JavaScript, TypeScript, MySQL, PostgreSQL, BigQuery, Google Cloud Platform, AWS, REST APIs, AI automation, CI/CD",
  },
  workLocation: {
    "@type": "Place",
    name: "Remote / Worldwide",
  },
};

export default function ResumePage() {
  return (
    <>
      <JsonLd data={resumeStructuredData} />
      <ResumeClient />
    </>
  );
}
