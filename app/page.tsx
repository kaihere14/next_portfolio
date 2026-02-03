import { Metadata } from "next";
import Image from "next/image";

import Hero from "@/components/HeroSection/Hero";

export const metadata: Metadata = {
  title: "Arman Thakur | Full Stack Developer",
  description:
    "Arman Thakur is a full stack developer specializing in modern web technologies. Experienced in building scalable, high-performance applications with clean architecture, responsive UI, and production-ready backend systems.",
};

const page = () => {
  return (
    <div className="mx-4 overflow-hidden md:mx-auto md:max-w-[720px]">
      <Hero />
    </div>
  );
};

export default page;
