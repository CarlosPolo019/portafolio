"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    href: "/",
    title: "Web Developmet",
    description:
      " I offer complete web development services, from concept to implementation, using modern technologies like React JS. I specialize in creating optimized user interfaces that enhance user experience and increase client retention.",
  },
  {
    num: "02",
    href: "/",
    title: "Backend Developmet",
    description: "I provide robust backend development solutions with Node.js and PHP. My approach includes planning, designing, and executing scalable and efficient systems, optimizing databases like MySQL to ensure optimal performance.",
  },
  {
    num: "03",
    href: "/",
    title: "Devops",
    description: "I deliver comprehensive DevOps services, including cloud infrastructure management using AWS and Google Cloud Platform. I ensure high availability, security, and efficiency in system management, enabling continuous delivery and resource optimization. ",
  },
  {
    num: "04",
    href: "/",
    title: "Data Analyst",
    description: " I offer data analysis and database optimization services, utilizing MySQL and Power BI. My focus is on solving complex problems with attention to detail, improving decision-making, and operational efficiency. ",
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
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>

                <p className="text-white/60">{service.description}</p>

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
