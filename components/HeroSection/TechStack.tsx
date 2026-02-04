"use client";

import Image from "next/image";

import { useTheme } from "@/hooks/ThemeProvider";

export const techStack = [
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    desc: "UI Library",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=next",
    desc: "Framework",
  },
  {
    name: "Node.js",
    icon: "https://skillicons.dev/icons?i=nodejs",
    desc: "Runtime",
  },
  {
    name: "Express.js",
    icon: "https://skillicons.dev/icons?i=express",
    desc: "Backend",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    desc: "Database",
  },
  {
    name: "Redis",
    icon: "https://skillicons.dev/icons?i=redis",
    desc: "Caching",
  },
  {
    name: "Socket.io",
    icon: "https://cdn.simpleicons.org/socketdotio/white",
    desc: "Real-time",
  },
  {
    name: "Tailwind",
    icon: "https://skillicons.dev/icons?i=tailwind",
    desc: "Styling",
  },
  {
    name: "Vercel",
    icon: "https://skillicons.dev/icons?i=vercel",
    desc: "Deployment",
  },
  {
    name: "Nginx",
    icon: "https://skillicons.dev/icons?i=nginx",
    desc: "Web Server",
  },
  {
    name: "Postman",
    icon: "https://skillicons.dev/icons?i=postman",
    desc: "API Testing",
  },
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    desc: "Version Control",
  },
  {
    name: "GSAP",
    icon: "https://cdn.simpleicons.org/greensock/white",
    desc: "Animations",
  },
];

const TechStack = () => {
  const { isDark } = useTheme();

  // Get icon URL, swapping color for simpleicons based on theme
  const getIconUrl = (tech: { name: string; icon: string }) => {
    if (tech.name === "Socket.io" || tech.name === "GSAP") {
      return isDark ? tech.icon : tech.icon.replace("white", "black");
    }
    return tech.icon;
  };

  return (
    <section className="mt-15 flex w-full flex-col space-y-6">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm text-neutral-500">Expertise</p>
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          Tech Stack & Tools
        </h2>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <div key={tech.name} className="group relative">
            {/* Icon Container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={getIconUrl(tech)}
                alt={tech.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm"
                unoptimized
              />
            </div>

            {/* Tooltip - shows on hover */}
            <div className="pointer-events-none absolute -top-14 left-1/2 z-20 -translate-x-1/2 rounded-lg border bg-white px-3 py-2 text-center text-xs whitespace-nowrap opacity-0 transition-all duration-200 group-hover:opacity-100 dark:bg-neutral-800">
              <div className="mb-0.5 font-bold">{tech.name}</div>
              <div className="text-[10px] font-medium text-neutral-500">
                {tech.desc}
              </div>
              {/* Tooltip arrow */}
              <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b bg-white dark:bg-neutral-800"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
