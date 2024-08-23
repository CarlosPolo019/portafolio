"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stasts from "@/components/Stasts";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="xl:text-left text-center  order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Carlos Escorcia</span>
            </h1>
            <p className="max-2-[500px] mb-9 text-white/80">
              Welcome to the intersection of innovation and impact. With over 5
              years of experience, I specialize in creating dynamic web
              applications with Node.js, PHP, and React JS. I build reliable
              backends with MySQL and Node JS, and optimize cloud
              infrastructures using AWS and Google Cloud Platform. I also
              transform data into actionable insights with Power BI. Ready to
              see what we can achieve together? Explore more and discover how I
              can help turn your ideas into extraordinary realities.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/pdf/01_CARLOS_ESCORCIA_CV.pdf"
                download="Carlos_Escorcia_CV.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stasts />
    </section>
  );
};

export default Home;
