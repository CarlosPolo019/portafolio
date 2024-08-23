"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {WorkSliderBtns} from "../../components/WorkSliderBtns";

import Link from "next/link";
import Image from "next/image";

const proyects = [
  {
    num: "01",
    category: "frontend",
    title: "Proyect 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, doloremque aliquid. Ab, obcaecati ipsa.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascripts" }],
    image: "/assets/photo.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Proyect 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, doloremque aliquid. Ab, obcaecati ipsa.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/photo.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Backend",
    title: "Proyect 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, doloremque aliquid. Ab, obcaecati ipsa.",
    stack: [{ name: "PHP" }, { name: "Dreamfactory" }, { name: "Node.js" }],
    image: "/assets/photo.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "DevOps",
    title: "Proyect 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, doloremque aliquid. Ab, obcaecati ipsa.",
    stack: [{ name: "Gcloud" }, { name: "AWS" }, { name: "Linux" }],
    image: "/assets/photo.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [proyect, setProyect] = useState(proyects[0]);
  const handleSliderChange = (swipper) => {
    console.log(swipper.activeIndex);
    const currentIndex = swipper.activeIndex;

    setProyect(proyects[currentIndex]);
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {proyect.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {proyect.category} project
              </h2>
              <p className="text-white/60">{proyect.description}</p>
              <ul className="flex gap-4">
                {proyect.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== proyect.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={proyect.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent">
                          {" "}
                        </BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live proyect</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={proyect.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {proyects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[460px]  relative group flex justify-center items-center bg-pink-50/20 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" ></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns>

              </WorkSliderBtns>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
