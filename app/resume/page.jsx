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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "Senior Full-Stack Developer with 5+ years of experience in web development, cloud architecture, and software engineering. Proven track record of leading technical teams, delivering scalable solutions, and implementing agile methodologies. Expertise in JavaScript, React, Node.js, AWS, and modern development practices. Bilingual professional (English/Spanish) with strong problem-solving skills and a passion for innovation.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Carlos Escorcia",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Location",
      fieldValue: "Colombia",
    },
    {
      fieldName: "Email",
      fieldValue: "cmescorcia5@icloud.com",
    },
    {
      fieldName: "Availability",
      fieldValue: "Full-time/Freelance",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (Fluent), Spanish (Native)",
    },
    {
      fieldName: "Remote Work",
      fieldValue: "Available",
    },
    {
      fieldName: "Team Leadership",
      fieldValue: "Technical Lead Experience",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "Results-driven software engineer with extensive experience in full-stack development, technical leadership, and agile project management. Successfully delivered enterprise-level solutions for companies like iFood, led cross-functional teams, and implemented scalable architectures using modern technologies and cloud platforms.",
  items: [
    {
      company: "Dash Develop",
      position: "Technical Lead & Senior Full-Stack Developer",
      duration: "2021 - Present",
    },
    {
      company: "LiveDesign",
      position: "Full-Stack Developer & Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "Vanana - Dash Develop",
      position: "Full-Stack Developer",
      duration: "2019 - 2021",
    },
    {
      company: "iFood",
      position: "Freelance Backend Developer",
      duration: "Summer 2021",
    },
    {
      company: "Technisoftware S.A.S",
      position: "Backend Developer",
      duration: "2018 - 2019",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education & Certifications",
  description: "Strong educational foundation in Systems Engineering complemented by specialized certifications in agile methodologies and modern software development practices. Continuous learner with focus on emerging technologies and industry best practices.",
  items: [
    {
      instituto: "Universidad de la Costa",
      degree: "Agile Methodologies Certification (Scrum, Design Thinking, Kanban)",
      duration: "2024",
      type: "Certification"
    },
    {
      instituto: "Universidad de la Costa",
      degree: "Bachelor's Degree in Systems Engineering",
      duration: "2016 - 2024",
      type: "Degree"
    },
    {
      instituto: "SENA",
      degree: "Information Systems Analyst and Developer",
      duration: "2016 - 2017",
      type: "Technical Certification"
    },
  ],
};

const skills = {
  title: "Technical Skills",
  description: "Comprehensive skill set spanning frontend and backend development, cloud infrastructure, database management, and modern DevOps practices. Proficient in multiple programming languages and frameworks with expertise in scalable architecture design.",
  categories: [
    {
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaPhp />, name: "PHP" },
      ]
    },
    {
      title: "Frontend Development",
      color: "text-green-400",
      skills: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ]
    },
    {
      title: "Backend Development",
      color: "text-orange-400",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaLaravel />, name: "Laravel" },
      ]
    },
    {
      title: "Automation & Integration",
      color: "text-amber-400",
      skills: [
        { icon: <FaCogs />, name: "N8N" },
      ]
    },
    {
      title: "Databases",
      color: "text-purple-400",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiGooglebigquery />, name: "BigQuery" },
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "text-cyan-400",
      skills: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git" },
      ]
    },
    {
      title: "Analytics & Business Intelligence",
      color: "text-pink-400",
      skills: [
        { icon: <SiLooker />, name: "Looker Studio" },
      ]
    }
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[80vw] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent font-semibold text-sm">{item.duration}</span>
                          <h3 className="text-xl font-bold max-w-[260px] min-h-[60px] text-center lg:text-left leading-tight">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80 font-medium text-lg">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[80vw] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[204px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-semibold">{item.duration}</span>
                          <span className="text-sm text-white/40 uppercase tracking-wider mb-2">{item.type}</span>
                          <h3 className="text-lg font-bold max-w-[260px] min-h-[60px] text-center lg:text-left leading-tight">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 font-medium">{item.instituto}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[80vw] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  <div className="space-y-8">
                    {skills.categories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-4">
                        <h4 className={`text-xl font-semibold ${category.color} text-center xl:text-left`}>
                          {category.title}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                          {category.skills.map((skill, skillIndex) => (
                            <TooltipProvider key={skillIndex} delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group p-3 hover:bg-[#2a2a30] transition-all duration-300">
                                  <div className={`text-3xl group-hover:${category.color} transition-all duration-500 mb-2`}>
                                    {skill.icon}
                                  </div>
                                  <span className="text-xs text-white/70 text-center font-medium leading-tight">
                                    {skill.name}
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="font-medium">{skill.name}</p>
                                  <p className="text-xs text-white/60">{category.title}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[80vw] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 font-medium min-w-[120px]">{item.fieldName}:</span>
                        <span className="text-lg text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;