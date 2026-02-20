import { Metadata } from "next";

import AboutMe from "@/components/AboutMe/AboutMe";
import Achievments from "@/components/Achievments/Achievments";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import FooterBlur from "@/components/Footer/FooterBlur";
import GitHub from "@/components/GitHub/GitHub";
import Hero from "@/components/HeroSection/Hero";
import Projects from "@/components/Projects/Projects";
import FadeIn from "@/components/ui/FadeIn";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://armandev.space"; // Replace with your actual domain

export const metadata: Metadata = {
  title: "Arman Thakur | Full Stack Developer & Web Engineer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. Building scalable web apps with clean UI and great user experience.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Arman Thakur",
  ],
  authors: [{ name: "Arman Thakur" }],
  creator: "Arman Thakur",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Arman Thakur | Full Stack Developer & Web Engineer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. Building scalable web apps with clean UI and great user experience.",
    siteName: "Arman Thakur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Thakur | Full Stack Developer & Web Engineer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. Building scalable web apps with clean UI and great user experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <div className="mx-auto max-w-[720px] px-8 md:px-0">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <FadeIn>
        <GitHub />
      </FadeIn>
      <FadeIn>
        <Achievments />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default page;
