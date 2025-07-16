"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    href: "/",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web development solutions using modern frameworks including React.js, Next.js, and Node.js. Specialized in building responsive, scalable applications with optimized performance, SEO implementation, and cross-browser compatibility. Expert in JavaScript ES6+, TypeScript, and modern CSS frameworks like Tailwind CSS.",
    keywords: ["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "Responsive Design", "SEO Optimization"]
  },
  {
    num: "02",
    href: "/",
    title: "Backend Development & API Design",
    description: "Robust backend architecture development using Node.js, PHP, and Laravel. Expertise in RESTful API design, GraphQL implementation, microservices architecture, and database optimization (MySQL, MongoDB, PostgreSQL). Focus on scalable system design, security best practices, and performance optimization.",
    keywords: ["Node.js", "PHP", "Laravel", "RESTful APIs", "GraphQL", "Microservices", "Database Optimization"]
  },
  {
    num: "03",
    href: "/",
    title: "Cloud Infrastructure & DevOps",
    description: "Comprehensive cloud solutions using AWS and Google Cloud Platform. Specializing in containerization with Docker, orchestration with Kubernetes, CI/CD pipeline implementation, infrastructure as code, and automated deployment strategies. Expert in monitoring, logging, and ensuring high availability systems.",
    keywords: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "DevOps"]
  },
  {
    num: "04",
    href: "/",
    title: "Data Analytics & Business Intelligence",
    description: "Advanced data analysis and visualization using Power BI, Looker Studio, and BigQuery. Expertise in ETL processes, data warehousing, statistical analysis, and creating actionable business insights. Proficient in SQL optimization, data modeling, and automated reporting solutions.",
    keywords: ["Power BI", "Looker Studio", "BigQuery", "Data Analysis", "SQL", "ETL", "Business Intelligence"]
  },
  {
    num: "05",
    href: "/",
    title: "Process Automation & Integration",
    description: "Workflow automation and system integration using N8N, Zapier, and custom automation solutions. Specializing in API integrations, data synchronization, business process optimization, and reducing manual tasks through intelligent automation. Expert in webhook implementations and third-party service integrations.",
    keywords: ["N8N", "Automation", "API Integration", "Workflow Optimization", "Process Automation", "System Integration"]
  },
  {
    num: "06",
    href: "/",
    title: "Technical Leadership & Team Management",
    description: "Technical team leadership with 5+ years of experience managing cross-functional development teams. Expertise in agile methodologies (Scrum, Kanban), code review processes, mentoring junior developers, project planning, and implementing best practices for software development lifecycle.",
    keywords: ["Technical Leadership", "Team Management", "Agile Methodologies", "Scrum", "Mentoring", "Project Management"]
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                
                <p className="text-white/60 leading-relaxed">{service.description}</p>
                
                {/* Keywords for ATS optimization */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.keywords.map((keyword, keywordIndex) => (
                    <span 
                      key={keywordIndex}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;