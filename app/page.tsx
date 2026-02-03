import { Metadata } from "next";

import AboutMe from "@/components/AboutMe/AboutMe";
import Achievments from "@/components/Achievments/Achievments";
import Experience from "@/components/Experience/Experience";
import GitHub from "@/components/GitHub/GitHub";
import Hero from "@/components/HeroSection/Hero";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Arman Thakur | Full Stack Developer",
  description:
    "Arman Thakur is a full stack developer specializing in modern web technologies. Experienced in building scalable, high-performance applications with clean architecture, responsive UI, and production-ready backend systems.",
};

const page = () => {
  return (
    <div className="mx-4 md:mx-auto md:max-w-[720px]">
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
      <GitHub />
      <Achievments />
    </div>
  );
};

export default page;
