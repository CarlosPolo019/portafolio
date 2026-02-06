"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiBarChart2,
  FiCpu,
  FiUsers,
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web development solutions using modern frameworks including React.js, Next.js, and Node.js. Specialized in building responsive, scalable applications with optimized performance, SEO implementation, and cross-browser compatibility. Expert in JavaScript ES6+, TypeScript, and modern CSS frameworks like Tailwind CSS.",
    keywords: ["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js"],
    icon: <FiCode />,
  },
  {
    num: "02",
    title: "Backend Development & API Design",
    description:
      "Robust backend architecture development using Node.js, PHP, and Laravel. Expertise in RESTful API design, GraphQL implementation, microservices architecture, and database optimization (MySQL, MongoDB, PostgreSQL). Focus on scalable system design, security best practices, and performance optimization.",
    keywords: ["Node.js", "PHP", "Laravel", "RESTful APIs", "GraphQL"],
    icon: <FiDatabase />,
  },
  {
    num: "03",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Comprehensive cloud solutions using AWS and Google Cloud Platform. Specializing in containerization with Docker, orchestration with Kubernetes, CI/CD pipeline implementation, infrastructure as code, and automated deployment strategies. Expert in monitoring, logging, and ensuring high availability systems.",
    keywords: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    icon: <FiCloud />,
  },
  {
    num: "04",
    title: "Data Analytics & BI",
    description:
      "Advanced data analysis and visualization using Power BI, Looker Studio, and BigQuery. Expertise in ETL processes, data warehousing, statistical analysis, and creating actionable business insights. Proficient in SQL optimization, data modeling, and automated reporting solutions.",
    keywords: ["Power BI", "BigQuery", "Data Analysis", "SQL", "ETL"],
    icon: <FiBarChart2 />,
  },
  {
    num: "05",
    title: "Process Automation & Integration",
    description:
      "Workflow automation and system integration using N8N, Zapier, and custom automation solutions. Specializing in API integrations, data synchronization, business process optimization, and reducing manual tasks through intelligent automation. Expert in webhook implementations and third-party service integrations.",
    keywords: ["N8N", "Automation", "API Integration", "Workflows"],
    icon: <FiCpu />,
  },
  {
    num: "06",
    title: "Technical Leadership & Management",
    description:
      "Technical team leadership with 5+ years of experience managing cross-functional development teams. Expertise in agile methodologies (Scrum, Kanban), code review processes, mentoring junior developers, project planning, and implementing best practices for software development lifecycle.",
    keywords: ["Technical Leadership", "Scrum", "Mentoring", "Agile"],
    icon: <FiUsers />,
  },
];

const Services = () => {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-[#0b0d14] py-10 xl:py-16">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-85" />
        <div className="pointer-events-none absolute -left-28 -bottom-24 h-[380px] w-[380px] rounded-full bg-amber-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="max-w-[800px] w-full mx-auto mb-14 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="h-12 w-px bg-gradient-to-b from-transparent to-amber-400" />
          </div>
          <h4 className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Core Capabilities</h4>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8">
            Specialized Software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Development.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Precision engineering tailored for high-impact digital products. Modern architecture, business-first execution,
            and premium user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.num}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.35 } }}
              className="glass-tech-card p-8 sm:p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-6xl font-black text-white">{service.num}</span>
              </div>

              <div className="text-violet-400 mb-6 glow-violet text-4xl">{service.icon}</div>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-base font-light leading-relaxed mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } }}
          className="mt-20 w-full max-w-[1200px] mx-auto"
        >
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 sm:p-12 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10">
              <div className="flex-1">
                <h3 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Let's work together.</h3>
                <p className="text-slate-400 text-base sm:text-lg font-light max-w-xl">
                  Have a project in mind or need a technical partner to scale your product? Let's connect and build
                  something exceptional.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-5">
                  <a
                    className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors"
                    href="mailto:carlosescorcia.dev@gmail.com"
                  >
                    <FiMail className="text-amber-400" />
                    <span className="font-medium">carlosescorcia.dev@gmail.com</span>
                  </a>
                  <a
                    className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors"
                    href="tel:+573004924361"
                  >
                    <FiPhone className="text-amber-400" />
                    <span className="font-medium">+57 (300) 492-4361</span>
                  </a>
                  <div className="flex items-center gap-3 text-white">
                    <FiMapPin className="text-amber-400" />
                    <span className="font-medium">Available Worldwide / Remote</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <Link
                  href="/contact"
                  className="bg-amber-400 hover:bg-white text-black px-10 py-4 font-bold uppercase tracking-widest transition-all w-full md:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>Initiate Contact</span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Services;
