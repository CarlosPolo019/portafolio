"use client";

import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaAws,
  FaReact,
  FaJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaCogs,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiLooker,
  SiGooglebigquery,
} from "react-icons/si";
import { FiCheckCircle, FiBookOpen, FiBriefcase, FiUser } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const about = {
  title: "About me",
  description:
    "Full-Stack Developer with 8+ years of experience delivering scalable web and mobile applications. Strong background in JavaScript, TypeScript, React, React Native, Node.js, Laravel, relational databases, GCP, AWS, CI/CD, API integrations, and automation. I focus technology on business outcomes, maintainable delivery, and reducing manual work through practical AI-powered workflows.",
  info: [
    { fieldName: "Name", fieldValue: "Carlos Escorcia Polo" },
    { fieldName: "Experience", fieldValue: "8+ Years" },
    { fieldName: "Location", fieldValue: "Barranquilla, Colombia" },
    { fieldName: "Email", fieldValue: "cmescorcia5@icloud.com" },
    { fieldName: "Availability", fieldValue: "Full-time / Remote / Freelance" },
    { fieldName: "Languages", fieldValue: "Spanish, English" },
    { fieldName: "Remote Work", fieldValue: "Available" },
    { fieldName: "Focus", fieldValue: "AI Integrations, Cloud, Automation" },
  ],
};

const experience = {
  title: "Professional Experience",
  description:
    "Hands-on software engineer with a track record across full-stack delivery, mobile products, API integrations, automation, cloud infrastructure, and production support for client platforms and transportation operations.",
  items: [
    {
      company: "SEVENLY - Florida, United States",
      position: "Full-Stack Developer",
      duration: "Nov 2025 - Present",
      highlights: [
        "Develop, maintain, and optimize web products for multiple clients across frontend, backend, integrations, automation, and deployment workflows.",
        "Implement responsive interfaces, landing pages, websites, and platform features with Laravel, HTML, CSS, and JavaScript.",
        "Build business logic, API integrations, database workflows, and AI-assisted automation that reduces manual work and accelerates delivery.",
      ],
    },
    {
      company: "LIVE DESIGN, INC - Florida, United States",
      position: "Frontend Developer",
      duration: "Oct 2023 - Oct 2025",
      highlights: [
        "Built and maintained landing pages and client-facing web interfaces using Laravel, HTML, CSS, JavaScript, and responsive design practices.",
        "Resolved frontend defects, layout issues, responsive behavior, content updates, and visual improvements across multiple client websites.",
        "Collaborated with internal teams and used AI-assisted development tools to speed up debugging, refactoring, code review, and frontend implementation.",
      ],
    },
    {
      company: "Customer Integrated Solutions - Mexico City, Mexico",
      position: "Lead Full-Stack Engineer",
      duration: "Jan 2021 - Dec 2023",
      highlights: [
        "Led development of BussRide, a corporate transportation platform with React Native mobile apps, administrative web panels, backend services, APIs, databases, and cloud infrastructure.",
        "Delivered features for drivers, passengers, and administrators, including real-time trip tracking, reservations, route scheduling, boarding validation, QR check-in, and operations monitoring.",
        "Participated in architecture, migrations, service monitoring, deployments, and CI/CD flows on Google Cloud Platform and AWS.",
      ],
    },
    {
      company: "Vanana - Barranquilla, Colombia",
      position: "Full-Stack Engineer",
      duration: "Jan 2019 - Dec 2020",
      highlights: [
        "Developed, maintained, and improved web platforms for transportation management and operations across frontend, backend, and support workflows.",
        "Implemented React.js interface improvements to optimize internal flows, usability, and user-facing functionality.",
        "Built and supported backend services, API integrations, and MySQL databases using PHP and Node.js.",
      ],
    },
    {
      company: "TechniSoftware S.A.S. - Barranquilla, Colombia",
      position: "Web Developer",
      duration: "Jun 2018 - Dec 2018",
      highlights: [
        "Developed custom web software with Laravel, PHP, MySQL, SQL, HTML, and CSS based on business and client requirements.",
        "Implemented, maintained, and improved software functionality to support stability, usability, and correct operation.",
        "Supported MySQL databases, requirements planning, technical documentation, user manuals, and support materials.",
      ],
    },
    {
      company: "Termobarranquilla S.A. E.S.P. - Barranquilla, Colombia",
      position: "Help Desk Support Specialist",
      duration: "Oct 2017 - Apr 2018",
      highlights: [
        "Provided technical support for internal systems, resolving incidents related to applications, user access, configuration, and daily platform usage.",
        "Managed corporate accounts, passwords, permissions, and access levels during employee onboarding, role changes, and offboarding.",
        "Maintained customer data, email records, and internal systems while supporting software projects and infrastructure incident reporting.",
      ],
    },
  ],
};

const education = {
  title: "Education & Certifications",
  description:
    "Systems Engineering education supported by applied research, mobile development training, IT communications coursework, and early recognition in software innovation programs.",
  items: [
    {
      instituto: "Universidad de la Costa CUC",
      degree: "Systems Engineering",
      duration: "Present",
      type: "Degree",
      details:
        "Leader of SIASOFT, a university research seedbed focused on technology, software development, and applied research.",
    },
    {
      instituto: "Armenia, Colombia",
      degree: "New Information and Communication Technologies (ICT) Course",
      duration: "Present",
      type: "Course",
      details:
        "Ongoing training focused on the use and application of modern information and communication technologies.",
    },
    {
      instituto: "Mobile Development",
      degree: "Advanced Android Studio Course",
      duration: "Present",
      type: "Course",
      details:
        "Advanced coursework oriented to mobile application development.",
    },
    {
      instituto: "SENAsoft - Armenia, Colombia",
      degree: "SENA Representative for the Atlántico Department",
      duration: "2016 - Present",
      type: "Achievement",
      details:
        "Selected as SENA representative for the Atlántico department in the SENAsoft innovation competition.",
    },
  ],
};

const skills = {
  title: "Technical Skills",
  description:
    "Technical stack spanning frontend, backend, mobile development, API integrations, relational databases, cloud infrastructure, CI/CD, analytics, and AI-assisted automation.",
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaPhp />, name: "PHP" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaReact />, name: "React Native" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaNodeJs />, name: "Express" },
        { icon: <FaLaravel />, name: "Laravel" },
      ],
    },
    {
      title: "Automation & Integration",
      skills: [
        { icon: <FaCogs />, name: "REST APIs" },
        { icon: <FaCogs />, name: "AI Integrations" },
        { icon: <FaCogs />, name: "AI-assisted Development" },
        { icon: <FaCogs />, name: "Technical Decision-making" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiGooglebigquery />, name: "BigQuery" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git" },
      ],
    },
    {
      title: "Analytics & Business Intelligence",
      skills: [{ icon: <SiLooker />, name: "Looker Studio" }],
    },
  ],
};

const Resume = () => {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-[#0b0d14] py-10 xl:py-16">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-85" />
        <div className="pointer-events-none absolute -left-28 -bottom-24 h-[380px] w-[380px] rounded-full bg-amber-400/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="container mx-auto relative z-10"
        >
          <div className="max-w-[1000px] w-full mx-auto mb-10">
            <h4 className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">Professional Path</h4>
            <h1 className="text-white tracking-tight text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8">
              Resume.
            </h1>

            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="flex flex-wrap gap-3 border-b border-white/10 bg-transparent p-0 rounded-none">
                <TabsTrigger value="experience" className="w-auto !bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-violet-500 data-[state=active]:!bg-transparent data-[state=active]:text-white px-0 pb-4 mr-8 uppercase tracking-widest text-xs">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="w-auto !bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-violet-500 data-[state=active]:!bg-transparent data-[state=active]:text-white px-0 pb-4 mr-8 uppercase tracking-widest text-xs">
                  Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="w-auto !bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-violet-500 data-[state=active]:!bg-transparent data-[state=active]:text-white px-0 pb-4 mr-8 uppercase tracking-widest text-xs">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="about" className="w-auto !bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-violet-500 data-[state=active]:!bg-transparent data-[state=active]:text-white px-0 pb-4 uppercase tracking-widest text-xs">
                  About me
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="pt-10">
                <motion.div {...panelMotion} className="mb-12">
                  <h2 className="text-white text-3xl font-bold mb-4">{experience.title}</h2>
                  <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2" />
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px timeline-line" />

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-14 md:space-y-20"
                  >
                    {experience.items.map((item, index) => {
                      const isReverse = index % 2 === 1;
                      return (
                        <motion.div
                          key={`${item.company}-${item.position}`}
                          variants={staggerItem}
                          className={`relative flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between`}
                        >
                          <div className={`hidden md:block w-[45%] ${isReverse ? "text-left pl-12" : "text-right pr-12"}`}>
                            <span className="text-violet-400 font-bold text-sm tracking-widest uppercase glow-violet">{item.duration}</span>
                          </div>

                          <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 size-4 rounded-full bg-violet-500 border-4 border-[#050505] z-10 glow-violet" />

                          <article className="glass-tech-card p-6 sm:p-8 md:w-[45%] w-full">
                            <span className="md:hidden text-violet-400 font-bold text-xs tracking-widest uppercase block mb-2">{item.duration}</span>
                            <h3 className="text-white text-xl font-bold mb-1">{item.position}</h3>
                            <p className="text-amber-400 text-sm font-medium mb-3">{item.company}</p>
                            <ul className="space-y-2">
                              {item.highlights.map((highlight) => (
                                <li key={highlight} className="text-slate-400 text-sm font-light leading-relaxed flex items-start gap-2">
                                  <FiCheckCircle className="text-violet-400 mt-0.5 shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </article>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="pt-10">
                <motion.div {...panelMotion} className="mb-12">
                  <h2 className="text-white text-3xl font-bold mb-4">{education.title}</h2>
                  <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                    {education.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col gap-6"
                >
                  {education.items.map((item) => (
                    <motion.article
                      variants={staggerItem}
                      key={`${item.instituto}-${item.degree}`}
                      className="glass-tech-card p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start"
                    >
                      <div className="flex flex-col items-center min-w-[96px]">
                        <span className="text-amber-400 font-bold text-lg">{item.duration}</span>
                        <div className="h-full w-px bg-white/10 my-3" />
                        <FiBookOpen className="text-violet-400 text-xl glow-violet" />
                      </div>

                      <div className="flex-1">
                        <span className="text-[10px] text-violet-300 border border-violet-400/30 px-2 py-0.5 uppercase tracking-widest rounded-full bg-violet-500/5 inline-block mb-3">
                          {item.type}
                        </span>
                        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{item.degree}</h3>
                        <p className="text-slate-300 font-medium mb-3">{item.instituto}</p>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="skills" className="pt-10">
                <motion.div {...panelMotion} className="mb-12">
                  <h2 className="text-white text-3xl font-bold mb-4">{skills.title}</h2>
                  <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                    {skills.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {skills.categories.map((category) => (
                    <motion.article variants={staggerItem} key={category.title} className="glass-tech-card p-6">
                      <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                        <FiBriefcase className="text-violet-400" />
                        {category.title}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="text-xs border border-white/10 bg-white/5 px-3 py-2 rounded-full text-slate-200 flex items-center gap-2"
                          >
                            <span className="text-violet-300 text-sm">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="about" className="pt-10">
                <motion.div {...panelMotion} className="mb-12">
                  <h2 className="text-white text-3xl font-bold mb-4 flex items-center gap-2">
                    <FiUser className="text-violet-400" />
                    {about.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-4xl">
                    {about.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {about.info.map((item) => (
                    <motion.article variants={staggerItem} key={item.fieldName} className="glass-tech-card p-5">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">{item.fieldName}</p>
                      <p className="text-white font-medium">{item.fieldValue}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Resume;
