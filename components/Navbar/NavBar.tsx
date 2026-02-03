"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/ThemeProvider";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav
      style={{ backdropFilter: "blur(7px)" }}
      className="sticky top-0 z-100 flex items-center justify-between px-[20px] py-3 backdrop-blur-[7px] sm:pl-[26px] md:mx-auto md:max-w-[1200px] md:justify-around"
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white bg-sky-200 transition-all duration-200 hover:scale-[0.9] dark:bg-amber-300"
        >
          <Image src="/Logo.webp" alt="Logo" width={60} height={60} />
        </Link>
        <div className="font-md font-sm mt-8 flex gap-4 self-end text-[16px]">
          <Link className="hover:underline" href="#work">
            Work
          </Link>
          <Link className="hover:underline" href="#projects">
            Projects
          </Link>
          <Link className="hover:underline" href="/blogs">
            Blogs
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded-lg bg-neutral-100 p-3 text-neutral-500 transition-all duration-200 hover:text-amber-500 sm:p-[10px] dark:bg-zinc-950 dark:text-white/80 dark:hover:text-yellow-400"
          style={{
            boxShadow: "var(--nav-button-shadow)",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
