"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Enterprise Transportation Platform",
    title: "BussRide - Corporate Transport Management System",
    description:
      "Enterprise-level transportation management platform for corporate employee transport. Features real-time GPS tracking, mobile app for employees with route booking, driver management system, automated scheduling, and centralized dashboard management. Includes real-time notifications, driver-passenger communication, and comprehensive analytics for route optimization and cost reduction.",
    stack: [
      { name: "React Native" }, 
      { name: "Node.js" }, 
      { name: "MySQL" }, 
      { name: "Google Maps API" },
      { name: "Real-time WebSockets" },
      { name: "Push Notifications" }
    ],
    image: "/assets/bussride.png",
    live: "https://www.bussride.com/home",
    github: "",
    achievements: [
      "Real-time GPS tracking for fleet management",
      "Mobile app with route booking system", 
      "Driver-passenger communication system",
      "Automated scheduling and route optimization"
    ],
    technologies: ["Real-time Tracking", "Mobile Development", "Fleet Management", "Route Optimization"]
  },
  {
    num: "02",
    category: "Google Cloud Infrastructure & Cost Optimization",
    title: "Enterprise Cloud Migration & Resource Optimization",
    description:
      "Comprehensive Google Cloud Platform migration and cost optimization project involving database migrations, server consolidation into managed instance groups, load balancer configuration, automated backup strategies, and Cloud SQL optimization. Achieved 60% cost reduction through resource optimization and unified billing management.",
    stack: [
      { name: "Google Cloud Platform" }, 
      { name: "Cloud SQL" }, 
      { name: "Compute Engine" },
      { name: "Load Balancer" },
      { name: "Cloud Storage" },
      { name: "Terraform" }
    ],
    image: "/assets/gcp-migration-screenshot.png",
    live: "",
    github: "",
    achievements: [
      "60% reduction in cloud infrastructure costs",
      "Zero-downtime database migration",
      "Automated backup and disaster recovery",
      "Unified billing and resource management"
    ],
    technologies: ["Cloud Migration", "Cost Optimization", "Infrastructure as Code", "Database Management"]
  },
  {
    num: "03",
    category: "Microservices Architecture & DevOps",
    title: "Scalable Microservices with Google Cloud Deployment",
    description:
      "Enterprise microservices architecture deployed on Google Cloud using Docker containerization, Kubernetes Engine orchestration, CI/CD pipelines with Cloud Build, and monitoring with Cloud Operations. Implemented auto-scaling, load balancing, and disaster recovery protocols for high-availability applications.",
    stack: [
      { name: "Google Kubernetes Engine" }, 
      { name: "Docker" }, 
      { name: "Cloud Build" },
      { name: "Node.js" },
      { name: "Cloud SQL" },
      { name: "Cloud Operations" }
    ],
    image: "/assets/microservices-gcp-screenshot.png",
    live: "",
    github: "",
    achievements: [
      "99.9% uptime with auto-scaling",
      "Automated CI/CD pipeline deployment",
      "Multi-region disaster recovery",
      "Container orchestration optimization"
    ],
    technologies: ["Microservices", "Google Kubernetes Engine", "Cloud Architecture", "DevOps Automation"]
  },
  {
    num: "04",
    category: "Business Intelligence with Power BI",
    title: "Executive Dashboard & Automated Reporting System",
    description:
      "Comprehensive business intelligence solution featuring Power BI dashboards, automated ETL processes, KPI tracking, and real-time analytics. Integrated multiple data sources including CRM, ERP, and external APIs to provide executive-level insights and automated reporting workflows.",
    stack: [
      { name: "Power BI" }, 
      { name: "SQL Server" }, 
      { name: "Python" },
      { name: "Azure Data Factory" },
      { name: "DAX" },
      { name: "Power Query" }
    ],
    image: "/assets/powerbi-dashboard-screenshot.png",
    live: "",
    github: "",
    achievements: [
      "Automated daily executive reports",
      "Real-time KPI monitoring dashboard",
      "Cross-platform data integration",
      "50% reduction in manual reporting time"
    ],
    technologies: ["Business Intelligence", "Data Visualization", "ETL Processes", "Executive Reporting"]
  },
  {
    num: "05",
    category: "Data Analytics with Google Cloud",
    title: "BigQuery & Looker Studio Resource Optimization Platform",
    description:
      "Advanced data analytics platform using BigQuery for large-scale data processing and Looker Studio for real-time visualization. Implemented data pipeline optimization, query performance tuning, and automated data consumption workflows to deliver faster insights and optimize resource utilization across the organization.",
    stack: [
      { name: "BigQuery" }, 
      { name: "Looker Studio" }, 
      { name: "Cloud Dataflow" },
      { name: "Cloud Functions" },
      { name: "Python" },
      { name: "SQL" }
    ],
    image: "/assets/bigquery-looker-screenshot.png",
    live: "",
    github: "",
    achievements: [
      "80% faster query performance optimization",
      "Real-time data processing pipelines",
      "Automated resource consumption analytics",
      "Cost-optimized data warehouse architecture"
    ],
    technologies: ["BigQuery Analytics", "Data Pipeline Optimization", "Real-time Visualization", "Resource Optimization"]
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);
  
  const handleSliderChange = (swiperInstance) => {
    const currentIndex = swiperInstance.activeIndex;
    setProject(projects[currentIndex]);
  };

  const goToNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goToPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side - Project Details */}
          <div className="w-full xl:w-[50%] flex flex-col justify-center order-2 xl:order-1">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-lg">{project.description}</p>
              
              {/* Technology Stack */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-white">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <span 
                      className="bg-accent/10 text-accent px-4 py-2 rounded-md text-sm font-medium border border-accent/20" 
                      key={index}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements - Mostrar en mobile después del tech stack */}
              <div className="space-y-4 xl:hidden">
                <h4 className="text-2xl font-bold text-white">Key Achievements:</h4>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="text-white/80 text-base flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Image and Achievements */}
          <div className="w-full xl:w-[50%] order-1 xl:order-2">
            {/* Project Image Slider */}
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[400px] mb-8"
                onSlideChange={handleSliderChange}
                onSwiper={setSwiper}
              >
                {projects.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[400px] relative group flex justify-center items-center">
                        <div className="relative w-full h-full">
                          {/* Only show image for BussRide project */}
                          {item.num === "01" ? (
                            <Image
                              src={item.image}
                              fill
                              className="object-contain"
                              alt={item.title}
                            />
                          ) : (
                            <div className="bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center h-full rounded-xl">
                              <div className="text-center p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {item.technologies.map((tech, techIndex) => (
                                    <span 
                                      key={techIndex}
                                      className="bg-white/10 text-white px-3 py-1 rounded-md text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={goToPrev}
                  className="w-[44px] h-[44px] rounded-full bg-white/5 hover:bg-accent transition-all duration-300 flex justify-center items-center group"
                >
                  <SlArrowLeft className="text-white group-hover:text-primary text-xl" />
                </button>
                
                {/* Project Counter */}
                <div className="flex items-center gap-2">
                  {projects.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === projects.findIndex(p => p.num === project.num)
                          ? 'bg-accent w-8'
                          : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNext}
                  className="w-[44px] h-[44px] rounded-full bg-white/5 hover:bg-accent transition-all duration-300 flex justify-center items-center group"
                >
                  <SlArrowRight className="text-white group-hover:text-primary text-xl" />
                </button>
              </div>
            </div>
            
            {/* Key Achievements - Solo visible en desktop */}
            <div className="space-y-4 hidden xl:block">
              <h4 className="text-2xl font-bold text-white">Key Achievements:</h4>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-white/80 text-base flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;