import JsonLd from "@/components/JsonLd";
import WorkClient from "./WorkClient";
import { createPageMetadata, siteUrl } from "../seo";

export const metadata = createPageMetadata({
  title: "Selected Work | Transport Platforms, Cloud, AI Automation & BI",
  description:
    "Selected software projects by Carlos Escorcia, including BussRide, cloud infrastructure, AI-assisted workflows, data reporting, and responsive client web platforms.",
  path: "/work",
});

const workStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Selected software development work by Carlos Escorcia",
  description:
    "Portfolio work covering transportation platforms, cloud workflows, AI automation, analytics, and client web platforms.",
  url: `${siteUrl}/work`,
  creator: {
    "@type": "Person",
    name: "Carlos Manuel Escorcia Polo",
    url: siteUrl,
  },
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "BussRide - Corporate Transport Management System",
      url: "https://www.bussride.com/home",
      description:
        "Corporate transport management platform with real-time tracking, reservations, route scheduling, QR check-in, and operations monitoring.",
    },
    {
      "@type": "CreativeWork",
      name: "Cloud Deployments, Migrations and Resource Optimization",
      description:
        "Production infrastructure work across Google Cloud Platform and AWS, including monitoring, CI/CD, migrations, and optimization.",
    },
    {
      "@type": "CreativeWork",
      name: "AI-Assisted Automation for Delivery Workflows",
      description:
        "AI-assisted workflows for debugging, refactoring, documentation, content execution, and repetitive operational tasks.",
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workStructuredData} />
      <WorkClient />
    </>
  );
}
