"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import { useDark } from "../../hooks/ThemeProvider";

const NavBar = () => {
  const { isDark, setIsDark } = useDark();
  return (
    <nav
      style={{ backdropFilter: "blur(7px)" }}
      className="flex items-center justify-between px-[16px] pt-5 backdrop-blur-[10px] md:mx-auto md:max-w-[1200px] md:justify-around"
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className={`flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white transition-all duration-200 hover:scale-[0.9] ${isDark ? "bg-amber-300" : "bg-sky-200"}`}
        >
          <Image src="/logo.webp" alt="Logo" width={60} height={60} />
        </Link>
        <div className={`font-md font-sm mt-8 flex gap-4 self-end text-[16px]`}>
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
          onClick={() => setIsDark(!isDark)}
          className={`cursor-pointer rounded-lg p-3 transition-all duration-200 sm:p-[10px] ${
            isDark
              ? "bg-zinc-950 text-white/80 hover:text-yellow-400"
              : "bg-neutral-100 text-neutral-500 hover:text-amber-500"
          }`}
          style={{
            boxShadow: isDark
              ? "inset 1px 1px 2px rgba(255,255,255,0.1)"
              : "inset 2px 2px 5px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)",
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
