"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiCpu,
  FiShield,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";

const projects = [
  {
    num: "01",
    category: "Enterprise Transportation Platform",
    title: "BussRide - Corporate Transport Management System",
    description:
      "Corporate transportation platform for enterprise mobility operations. Includes real-time trip tracking, reservations, route scheduling, driver and passenger workflows, QR check-in, and operations monitoring.",
    longDescription:
      "Led development across React Native mobile apps, administrative web panels, backend services, APIs, databases, and cloud infrastructure. The platform improved visibility and continuity for corporate transport operations.",
    stack: ["React Native", "Node.js", "MySQL", "Google Cloud", "REST APIs", "QR Check-in"],
    image: "/assets/bussride.png",
    live: "https://www.bussride.com/home",
    type: "Real-time",
    achievements: [
      "Real-time trip tracking and operations monitoring",
      "Passenger, driver, and administrator workflows",
      "Route reservations, scheduling, and boarding validation",
      "QR-based check-in for controlled boarding",
    ],
    technologies: ["Real-time Tracking", "Mobile Development", "Fleet Management", "Route Optimization"],
  },
  {
    num: "02",
    category: "Cloud Infrastructure & Resource Optimization",
    title: "Cloud Deployments, Migrations & Resource Optimization",
    description:
      "Cloud infrastructure work across Google Cloud Platform and AWS, including deployment workflows, environment configuration, migrations, monitoring, CI/CD, and resource optimization.",
    longDescription:
      "Supported production systems through architecture decisions, migration planning, service monitoring, deployment flows, CI/CD practices, and infrastructure adjustments focused on reliability and maintainability.",
    stack: ["Google Cloud", "AWS", "CI/CD", "Cloud SQL", "Compute Engine", "Monitoring"],
    image: "/assets/cost.png",
    live: "",
    type: "Cloud",
    achievements: [
      "Production deployment workflow improvements",
      "Cloud migration and environment configuration support",
      "Service monitoring and resource optimization",
      "Cross-platform infrastructure decisions",
    ],
    technologies: ["Cloud Migration", "Resource Optimization", "CI/CD", "Database Management"],
  },
  {
    num: "03",
    category: "AI Automation & Developer Productivity",
    title: "AI-Assisted Automation for Delivery Workflows",
    description:
      "AI-assisted development and automation workflows used to reduce manual effort in debugging, refactoring, documentation, content flow execution, and delivery processes.",
    longDescription:
      "Implemented practical AI workflows around real delivery needs: accelerating code review, debugging, refactoring, documentation, data preparation, and repetitive operational tasks without losing maintainability.",
    stack: ["AI Tools", "Automation", "REST APIs", "JavaScript", "Documentation", "Debugging"],
    image: "",
    live: "",
    type: "Automation",
    achievements: [
      "Reduced repetitive manual tasks in client workflows",
      "Faster debugging and refactoring cycles",
      "Automated documentation and content support",
      "Integrated AI assistance into practical delivery processes",
    ],
    technologies: ["AI Integrations", "Workflow Automation", "Developer Productivity", "API Integration"],
  },
  {
    num: "04",
    category: "Business Intelligence & Reporting",
    title: "BigQuery and Looker Studio Reporting Workflows",
    description:
      "Reporting and dashboard workflows using BigQuery, Looker Studio, SQL, and operational data sources to support visibility into platform activity and business performance.",
    longDescription:
      "Built and maintained data processes, dashboards, and reporting tools that helped operational teams monitor KPIs, platform behavior, and resource usage with less manual spreadsheet work.",
    stack: ["BigQuery", "Looker Studio", "SQL", "Data Workflows", "Dashboards", "Reports"],
    image: "",
    live: "",
    type: "Analytics",
    achievements: [
      "Operational dashboards and KPI visibility",
      "SQL-based reporting and data preparation",
      "Cross-platform data workflow support",
      "Reduced manual reporting overhead",
    ],
    technologies: ["Business Intelligence", "Data Visualization", "ETL Processes", "Executive Reporting"],
  },
  {
    num: "05",
    category: "Client Web Platforms",
    title: "Responsive Websites, Landing Pages & Client Features",
    description:
      "Responsive web interfaces, landing pages, content updates, visual improvements, and platform features delivered for multiple clients using Laravel, HTML, CSS, JavaScript, and React.",
    longDescription:
      "Delivered day-to-day product improvements across client sites and web platforms, including frontend implementation, layout fixes, responsive behavior, backend logic, API integration, and database updates.",
    stack: ["Laravel", "JavaScript", "HTML", "CSS", "React.js", "MySQL"],
    image: "",
    live: "",
    type: "Web",
    achievements: [
      "Responsive landing pages and client interfaces",
      "Frontend fixes, content updates, and visual improvements",
      "Business logic, APIs, and database workflows",
      "Reusable delivery practices across multiple platforms",
    ],
    technologies: ["Responsive Development", "Laravel", "Frontend Support", "Client Platforms"],
  },
];

const filterOptions = ["All Projects", "Real-time", "Cloud", "Automation", "Analytics", "Web"];

const Work = () => {
  const [filter, setFilter] = useState("All Projects");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].num);

  const filteredProjects = useMemo(() => {
    if (filter === "All Projects") return projects;
    return projects.filter((project) => project.type === filter);
  }, [filter]);

  const activeProject = useMemo(() => {
    return projects.find((project) => project.num === activeProjectId) || projects[0];
  }, [activeProjectId]);

  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-[#0b0d14] pb-20 pt-10 xl:pt-14">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-85" />
        <div className="pointer-events-none absolute -left-28 -bottom-24 h-[380px] w-[380px] rounded-full bg-amber-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="container mx-auto relative z-10 max-w-[1280px]">
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
            className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-amber-400" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">Engineering Excellence</span>
              </div>
              <h1 className="mb-5 text-4xl font-black leading-[1.05] text-white md:text-6xl">
                Selected Works <span className="text-white/20">2018-26</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/50">
                A curated collection of transport platforms, client web products, cloud workflows, data tools, and AI-assisted automation.
              </p>
            </div>

            <Link
              href="https://github.com/cmescorcia"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-amber-400/50"
            >
              <FiGithub className="transition-colors group-hover:text-amber-400" />
              <span>VIEW GITHUB</span>
            </Link>
          </motion.section>

          <div className="mb-10 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((option) => {
              const isActive = filter === option;
              return (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`shrink-0 rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "border-amber-400 bg-amber-400 text-black"
                      : "border-white/5 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="grid min-h-[860px] grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
            {filteredProjects[0] && (
              <button
                onClick={() => setActiveProjectId(filteredProjects[0].num)}
                className="project-card relative overflow-hidden rounded-xl border border-white/5 bg-white/5 text-left md:col-span-2 md:row-span-2"
              >
                <div className="absolute inset-0">
                  {filteredProjects[0].image ? (
                    <Image src={filteredProjects[0].image} fill alt={filteredProjects[0].title} className="project-image object-cover transition-transform duration-700 ease-out" />
                  ) : (
                    <div className="project-image h-full w-full bg-gradient-to-br from-violet-500/25 to-black transition-transform duration-700 ease-out" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="overlay pointer-events-none absolute inset-0 bg-violet-500/75 opacity-0 mix-blend-multiply transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{filteredProjects[0].category}</span>
                  <h3 className="mb-4 text-3xl font-black leading-none text-white md:text-5xl">{filteredProjects[0].title}</h3>
                  <p className="max-w-md text-white/70">{filteredProjects[0].description}</p>
                </div>
              </button>
            )}

            {filteredProjects[1] && (
              <button
                onClick={() => setActiveProjectId(filteredProjects[1].num)}
                className="project-card relative overflow-hidden rounded-xl border border-white/5 bg-white/5 text-left md:col-span-1 md:row-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/25 to-black project-image transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                <div className="overlay pointer-events-none absolute inset-0 bg-violet-500/75 opacity-0 mix-blend-multiply transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{filteredProjects[1].category}</span>
                  <h3 className="text-2xl font-black leading-tight text-white">{filteredProjects[1].title}</h3>
                </div>
              </button>
            )}

            {filteredProjects[2] && (
              <button
                onClick={() => setActiveProjectId(filteredProjects[2].num)}
                className="project-card relative overflow-hidden rounded-xl border border-white/5 bg-white/5 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-black project-image transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="overlay pointer-events-none absolute inset-0 bg-violet-500/75 opacity-0 mix-blend-multiply transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{filteredProjects[2].title}</h3>
                  <p className="text-xs text-white/60">{filteredProjects[2].type}</p>
                </div>
              </button>
            )}

            {filteredProjects[3] && (
              <button
                onClick={() => setActiveProjectId(filteredProjects[3].num)}
                className="project-card relative overflow-hidden rounded-xl border border-white/5 bg-white/5 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-black project-image transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="overlay pointer-events-none absolute inset-0 bg-violet-500/75 opacity-0 mix-blend-multiply transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{filteredProjects[3].title}</h3>
                  <p className="text-xs text-white/60">{filteredProjects[3].type}</p>
                </div>
              </button>
            )}
          </div>

          <section className="mt-20">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-1 md:p-2">
              <div className="flex flex-col md:flex-row">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl md:w-1/2 md:aspect-auto">
                  {activeProject.image ? (
                    <Image src={activeProject.image} fill alt={activeProject.title} className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-violet-500/20 to-black" />
                  )}
                </div>

                <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-14">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-amber-400">Deep Dive</div>
                  <h3 className="mb-5 text-3xl font-black tracking-tight text-white md:text-4xl">{activeProject.title}</h3>
                  <p className="mb-7 text-base leading-relaxed text-white/55">{activeProject.longDescription}</p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {activeProject.stack.slice(0, 4).map((item) => (
                      <span key={item} className="rounded border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="mb-8 space-y-2">
                    {activeProject.achievements.slice(0, 3).map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {activeProject.live ? (
                    <Link
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-black transition-all hover:bg-amber-400"
                    >
                      <span>VIEW PROJECT</span>
                      <FiArrowRight />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex w-fit items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-black transition-all hover:bg-amber-400"
                    >
                      <span>REQUEST CASE DETAILS</span>
                      <FiArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's work together.</h3>
                  <p className="text-lg font-light text-slate-400">
                    Have a product, integration, cloud workflow, or automation process that needs reliable execution? Let's connect.
                  </p>
                  <div className="mt-7 flex flex-col gap-4">
                    <a className="flex items-center gap-3 text-white transition-colors hover:text-amber-400" href="mailto:cmescorcia5@icloud.com">
                      <FiMail className="text-amber-400" />
                      <span className="font-medium">cmescorcia5@icloud.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-white">
                      <FiMapPin className="text-amber-400" />
                      <span className="font-medium">Available Worldwide / Remote</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-none bg-amber-400 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-white md:w-auto"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </section>

          <footer className="mt-16 border-t border-white/10 py-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Established 2024 © Carlos | Software Architect</p>

              <div className="flex items-center gap-4">
                <Link href="https://github.com/cmescorcia" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/50 transition-all hover:border-white hover:text-white">
                  <FiGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/carlos-escorcia-polo-0109441a6/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/50 transition-all hover:border-white hover:text-white">
                  <FiLinkedin />
                </Link>
                <Link href="https://cmescorcia.com" className="rounded-full border border-white/10 p-2 text-white/50 transition-all hover:border-white hover:text-white">
                  <FiGlobe />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_8px_#8b5cf6]" />
                <span className="text-xs font-bold text-white">AVAILABLE FOR PROJECTS</span>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Work;
