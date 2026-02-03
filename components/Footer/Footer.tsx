import React from "react";

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-15 space-y-8 pb-24">
      <div className="flex flex-col items-center justify-between gap-6 pb-8 md:flex-row">
        <div className="text-center md:text-left">
          <p
            className={`mb-2 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent`}
          >
            Let&apos;s build something amazing.
          </p>
          <p className={`mb-3 text-sm`}>
            Open to freelance projects and collaborations
          </p>
          <a
            href="mailto:armanthakur200814@gmail.com"
            className={`group inline-flex items-center gap-2 text-sm transition-colors`}
          >
            <Mail
              size={16}
              className="transition-transform group-hover:scale-110"
            />
            armanthakur200814@gmail.com
          </a>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/kaihere14"
            className={`hover: rounded-xl border bg-neutral-100 bg-neutral-200 p-3 transition-all duration-300 hover:scale-110 dark:bg-neutral-800 dark:bg-neutral-900`}
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/arman-thakur14/"
            className={`hover: rounded-xl border bg-neutral-100 bg-neutral-200 p-3 transition-all duration-300 hover:scale-110 hover:border-blue-900/50 hover:text-blue-400 dark:bg-neutral-800 dark:bg-neutral-900`}
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:armanthakur200814@gmail.com"
            className={`hover: bg-neutral-200hover:scale-110 rounded-xl border bg-neutral-100 p-3 transition-all duration-300 hover:border-purple-900/50 hover:text-purple-400 dark:bg-neutral-800 dark:bg-neutral-900`}
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div className={`border-t pt-8 text-center`}>
        <p className={`text-xs`}>
          © 2025 Crafted with <span className="text-red-500">♥</span> by Arman
          Thakur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
