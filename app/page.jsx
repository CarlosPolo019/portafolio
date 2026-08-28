import JsonLd from "@/components/JsonLd";
import HomeClient from "./HomeClient";
import { createPageMetadata, personStructuredData, profilePageStructuredData } from "./seo";

export const metadata = createPageMetadata({
  title: "Carlos Escorcia | Full-Stack Developer, AI Integrations & Cloud Automation",
  description:
    "Portfolio of Carlos Manuel Escorcia Polo, Full-Stack Developer with 8+ years building scalable web and mobile apps, APIs, AI automation, cloud infrastructure, and data solutions.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personStructuredData, profilePageStructuredData]} />
      <HomeClient />
    </>
  );
}
