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
  SiMongodb,
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
    "Senior Full-Stack Developer with 5+ years of experience in web development, cloud architecture, and software engineering. Proven track record of leading technical teams, delivering scalable solutions, and implementing agile methodologies. Expertise in JavaScript, React, Node.js, AWS, and modern development practices. Bilingual professional (English/Spanish) with strong problem-solving skills and a passion for innovation.",
  info: [
    { fieldName: "Name", fieldValue: "Carlos Escorcia" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Location", fieldValue: "Colombia" },
    { fieldName: "Email", fieldValue: "cmescorcia5@icloud.com" },
    { fieldName: "Availability", fieldValue: "Full-time/Freelance" },
    { fieldName: "Languages", fieldValue: "English (Fluent), Spanish (Native)" },
    { fieldName: "Remote Work", fieldValue: "Available" },
    { fieldName: "Team Leadership", fieldValue: "Technical Lead Experience" },
  ],
};

const experience = {
  title: "Professional Experience",
  description:
    "Results-driven software engineer with extensive experience in full-stack development, technical leadership, and agile project management. Successfully delivered enterprise-level solutions for companies like iFood, led cross-functional teams, and implemented scalable architectures using modern technologies and cloud platforms.",
  items: [
    {
      company: "Dash Develop",
      position: "Technical Lead & Senior Full-Stack Developer",
      duration: "2021 - Present",
      highlights: [
        "Led technical direction for enterprise web products and coordinated multi-team delivery.",
        "Architected scalable full-stack solutions with React, Node.js, and cloud-native services.",
        "Established code review, quality standards, and agile execution practices.",
      ],
    },
    {
      company: "LiveDesign",
      position: "Full-Stack Developer & Software Engineer",
      duration: "2022 - Present",
      highlights: [
        "Developed end-to-end features for collaborative digital products with modern React tooling.",
        "Optimized API and data flows to improve responsiveness and platform reliability.",
        "Worked cross-functionally with product and design to ship high-impact iterations.",
      ],
    },
    {
      company: "Vanana - Dash Develop",
      position: "Full-Stack Developer",
      duration: "2019 - 2021",
      highlights: [
        "Built backend services and business modules for production web platforms.",
        "Implemented robust integrations and improved database performance in core workflows.",
        "Supported continuous releases with improved development and deployment practices.",
      ],
    },
    {
      company: "iFood",
      position: "Freelance Backend Developer",
      duration: "Summer 2021",
      highlights: [
        "Contributed backend components for order and logistics-related services.",
        "Improved service stability and response behavior in high-demand operations.",
        "Collaborated with distributed teams under tight release timelines.",
      ],
    },
    {
      company: "Technisoftware S.A.S",
      position: "Backend Developer",
      duration: "2018 - 2019",
      highlights: [
        "Maintained and evolved backend modules for business process software.",
        "Implemented API enhancements and database improvements for reliability.",
        "Participated in requirements analysis and technical solution definition.",
      ],
    },
  ],
};

const education = {
  title: "Education & Certifications",
  description:
    "Strong educational foundation in Systems Engineering complemented by specialized certifications in agile methodologies and modern software development practices. Continuous learner with focus on emerging technologies and industry best practices.",
  items: [
    {
      instituto: "Universidad de la Costa",
      degree: "Agile Methodologies Certification (Scrum, Design Thinking, Kanban)",
      duration: "2024",
      type: "Certification",
      details:
        "Specialized training in agile frameworks focused on Scrum ceremonies, Kanban flow optimization, iterative delivery, and team productivity.",
    },
    {
      instituto: "Universidad de la Costa",
      degree: "Bachelor's Degree in Systems Engineering",
      duration: "2016 - 2024",
      type: "Degree",
      details:
        "Comprehensive foundation in software architecture, algorithms, databases, networking, and secure systems design for enterprise-grade applications.",
    },
    {
      instituto: "SENA",
      degree: "Information Systems Analyst and Developer",
      duration: "2016 - 2017",
      type: "Technical Certification",
      details:
        "Technical training in systems analysis, requirements modeling, SQL-based data design, and practical implementation of business software solutions.",
    },
  ],
};

const skills = {
  title: "Technical Skills",
  description:
    "Comprehensive skill set spanning frontend and backend development, cloud infrastructure, database management, and modern DevOps practices. Proficient in multiple programming languages and frameworks with expertise in scalable architecture design.",
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
        { icon: <FaLaravel />, name: "Laravel" },
      ],
    },
    {
      title: "Automation & Integration",
      skills: [{ icon: <FaCogs />, name: "N8N" }],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
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
