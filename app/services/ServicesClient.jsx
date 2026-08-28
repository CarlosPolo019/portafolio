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
      "End-to-end web product development across frontend, backend, business logic, databases, and deployment workflows. Specialized in responsive interfaces, maintainable Laravel and JavaScript implementations, and production-ready features for client platforms.",
    keywords: ["React.js", "Next.js", "JavaScript", "TypeScript", "Laravel"],
    icon: <FiCode />,
  },
  {
    num: "02",
    title: "Backend Development & API Design",
    description:
      "Business logic, REST API integrations, backend services, and database workflows using Node.js, PHP, Laravel, MySQL, PostgreSQL, and BigQuery. Focused on stability, operational continuity, and clear integration contracts.",
    keywords: ["Node.js", "PHP", "Laravel", "REST APIs", "Databases"],
    icon: <FiDatabase />,
  },
  {
    num: "03",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Cloud infrastructure support, deployment workflows, CI/CD, environment configuration, service monitoring, migrations, and resource optimization across Google Cloud Platform and AWS.",
    keywords: ["GCP", "AWS", "CI/CD", "Deployments", "Monitoring"],
    icon: <FiCloud />,
  },
  {
    num: "04",
    title: "Data Analytics & BI",
    description:
      "Operational dashboards, reporting workflows, SQL-based analysis, BigQuery datasets, and Looker Studio visualizations that make platform performance and business activity easier to monitor.",
    keywords: ["BigQuery", "Looker Studio", "SQL", "Dashboards", "Reporting"],
    icon: <FiBarChart2 />,
  },
  {
    num: "05",
    title: "AI Automation & Integration",
    description:
      "Practical AI-assisted workflows and API-based automation to reduce repetitive work, speed up content flows, improve debugging, support refactoring, generate documentation, and streamline delivery.",
    keywords: ["AI Integrations", "Automation", "APIs", "Workflows"],
    icon: <FiCpu />,
  },
  {
    num: "06",
    title: "Technical Decision-Making",
    description:
      "Architecture input, debugging strategy, resource optimization, environment decisions, deployment planning, and maintainability guidance for teams shipping client-facing software.",
    keywords: ["Architecture", "Debugging", "CI/CD", "Optimization"],
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
            Practical engineering for scalable products, API integrations, automation, cloud workflows, and maintainable
            releases across client-facing platforms.
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
                  Have a product, integration, cloud workflow, or automation process that needs reliable execution?
                  Let's connect and define the right technical path.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-5">
                  <a
                    className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors"
                    href="mailto:cmescorcia5@icloud.com"
                  >
                    <FiMail className="text-amber-400" />
                    <span className="font-medium">cmescorcia5@icloud.com</span>
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
