"use client";

import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPhp,
  FaAws,
  FaReact,
  FaJs,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPowerbi,
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
  description: "A passionate full-stack developer with over 5 years of experience, committed to delivering innovative solutions and exceptional results. Fluent in both English and Spanish, and available for freelance opportunities. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Carlos Escorcia",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 304",
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "(+57) 3015492197",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Colombia",
    },
    ,
    {
      fieldName: "email",
      fieldValue: "cmescorcia5@icloud.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Spanish",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Driven by innovation and excellence, I've led full-stack development at Dash Develop, crafted seamless web solutions at LiveDesign, and contributed to projects for brands like iFood. Each role has sharpened my skills and fueled my passion for delivering scalable, impactful solutions.",
  items: [
    {
      company: "Dash Develop",
      position: "Technical Lead",
      duration: "2021 - Present",
    },
    {
      company: "Livedesing",
      position: "Full-Stack Developer Intern",
      duration: "2022 - Present",
    },
    {
      company: "Vanana - Dash Develop",
      position: "Full-Stack Developer",
      duration: "2019 - 2021",
    },
    {
      company: "Ifood",
      position: "Freelance Back-End Developer",
      duration: "Summer 2021",
    },
    {
      company: "Technisoftware S.A.S",
      position: "Back-End Developer",
      duration: "2018-2019",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "My background in systems engineering, combined with specialized training in agile methodologies, has given me a strong technical foundation. Graduating in Ingeniería de Sistemas from Universidad de la Costa, I've enhanced my skills with certifications in Scrum, Design Thinking, and Kanban, enabling me to tackle complex challenges with innovative solutions.",
  items: [
    {
      instituto: "Universidad de la Costa",
      degree: "Scrum Desing Thinking Kanban",
      duration: "2024",
    },
    {
      instituto: "Universidad de la Costa",
      degree: "Ingenieria de sistemas",
      duration: "2016-2024",
    },

    {
      instituto: "Sena",
      degree: "Analista y desarrollador de sistemas de informacion",
      duration: "2016-2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Equipped with a powerful toolkit, I create dynamic, scalable web applications. I specialize in both front-end and back-end technologies, ensuring seamless user experiences and robust functionality. My expertise extends to managing cloud infrastructures and turning data into actionable insights.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },

    {
      icon: <SiGooglecloud />,
      name: "google cloud",
    },
    {
      icon: <FaAws />,
      name: "aws console",
    },
    {
      icon: <SiPowerbi />,
      name: "powerbi",
    },
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
          defaultValue="experencie"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experencie">Experencie</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experencie" className="w-full">
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
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
                          className="bg-[#232329] h-[204px] py-0  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituto}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[80vw] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
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
                <ul className="grid gird-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
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
