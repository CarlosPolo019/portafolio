import JsonLd from "@/components/JsonLd";
import ContactClient from "./ContactClient";
import { createPageMetadata, siteUrl } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact Carlos Escorcia | Full-Stack Developer for Remote Projects",
  description:
    "Contact Carlos Escorcia for full-stack product development, backend APIs, cloud workflows, AI automation, BI dashboards, and technical consulting.",
  path: "/contact",
});

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Carlos Escorcia",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Carlos Manuel Escorcia Polo",
    email: "mailto:cmescorcia5@icloud.com",
    telephone: "+57-300-492-4361",
    url: siteUrl,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactStructuredData} />
      <ContactClient />
    </>
  );
}
