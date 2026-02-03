import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import ProjectsGrid from "./ProjectsGrid";

export type ProjectType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  link: string;
  githubLink: string;
};

const projects: ProjectType[] = [
  {
    id: "daemon-doc",
    name: "DaemonDoc",
    tagline: "AI README Generator",
    description:
      "AI-powered platform that automatically generates and keeps GitHub READMEs in sync using webhooks, background workers, and large language models.",
    image: "/demon_doc.webp",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ"],
    status: "All Systems Operational",
    link: "https://www.daemondoc.online",
    githubLink: "https://github.com/kaihere14/daemondoc",
  },
  {
    id: "nova-drive",
    name: "NovaDrive",
    tagline: "Cloud Storage Platform",
    description:
      "A next-generation cloud storage platform with chunked uploads, secure file handling, and AI-powered organization.",
    image: "/nova_drive.webp",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudflare R2"],
    status: "All Systems Operational",
    link: "https://www.novadrive.space/",
    githubLink: "https://github.com/kaihere14/Nova_Drive",
  },
  {
    id: "dns-server",
    name: "Authoritative DNS Server",
    tagline: "Custom DNS Infrastructure",
    description:
      "A minimal authoritative DNS server built in Node.js with Redis-backed storage and environment-based configuration.",
    image: "/edge_dns.webp",
    tech: ["Node.js", "dns2", "Redis", "dotenv"],
    status: "All Systems Operational",
    link: "https://dns.pawpick.store/",
    githubLink: "https://github.com/kaihere14/dns_server",
  },
  {
    id: "title-forge",
    name: "TitleForge",
    tagline: "AI Content Generator",
    description:
      "AI-powered platform for generating high-performing YouTube titles using modern NLP models.",
    image: "/title_forge.webp",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini"],
    status: "All Systems Operational",
    link: "https://www.titleforge.me/",
    githubLink: "https://github.com/kaihere14/Title-Forge",
  },
  {
    id: "disdrive",
    name: "DisDrive",
    tagline: "Discord-Powered Cloud Storage",
    description:
      "A full-stack cloud storage system that uses Discord as a backend, featuring JWT auth, file streaming, Discord bot commands, and metadata persistence.",
    image: "/dis_drive.webp",
    tech: ["React", "Node.js", "Express", "MongoDB", "Discord.js", "JWT"],
    status: "All Systems Operational",
    link: "https://drive.pawpick.store",
    githubLink: "https://github.com/kaihere14/dis_drive",
  },
  {
    id: "chatx",
    name: "ChatX",
    tagline: "Real-time Chat Application",
    description:
      "A real-time chat application with group messaging and media sharing using WebSockets.",
    image: "/chatx.webp",
    tech: ["React", "Socket.io", "Express.js", "MongoDB"],
    status: "All Systems Operational",
    link: "https://chatx-lcy3i.sevalla.app/",
    githubLink: "https://github.com/kaihere14/ChatX",
  },
  {
    id: "resolve-iq",
    name: "ResolveIQ",
    tagline: "Issue Tracking System",
    description:
      "An issue tracking platform with structured workflows and role-based access.",
    image: "/resolve_iq_huhjom.webp",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    status: "All Systems Operational",
    link: "https://resolve-iq-cqza.vercel.app/",
    githubLink: "https://github.com/kaihere14/ResolveIQ-",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-15">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-neutral-500">Featured</p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Projects
          </h2>
        </div>
        <Link
          href="https://github.com/kaihere14"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400"
        >
          View All on GitHub
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <ProjectsGrid projects={projects} initialCount={4} />

      <hr className="mt-15" />
    </section>
  );
};

export default Projects;
