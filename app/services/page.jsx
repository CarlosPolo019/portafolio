import JsonLd from "@/components/JsonLd";
import ServicesClient from "./ServicesClient";
import { createPageMetadata, siteUrl } from "../seo";

export const metadata = createPageMetadata({
  title: "Services | Full-Stack Development, APIs, AI Automation & Cloud",
  description:
    "Software development services by Carlos Escorcia: full-stack web apps, backend API design, cloud infrastructure, BI dashboards, AI automation, and technical consulting.",
  path: "/services",
});

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full-Stack Development, API Integration, AI Automation and Cloud Services",
  provider: {
    "@type": "Person",
    name: "Carlos Manuel Escorcia Polo",
    url: siteUrl,
  },
  areaServed: "Worldwide",
  serviceType: [
    "Full-Stack Web Development",
    "Backend Development and API Design",
    "Cloud Infrastructure and DevOps",
    "Data Analytics and Business Intelligence",
    "AI Automation and Integration",
    "Technical Consulting",
  ],
  url: `${siteUrl}/services`,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesStructuredData} />
      <ServicesClient />
    </>
  );
}
