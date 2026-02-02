"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";

import { useDark } from "../Navbar/ThemeProvider";

const NavBar = () => {
  const { isDark, setIsDark } = useDark();
  return (
    <nav
      style={{ backdropFilter: "blur(7px)" }}
      className="mx-5 mt-5 flex items-center justify-between backdrop-blur-[10px] md:mx-auto md:max-w-[1200px] md:justify-around"
    >
      <div className="flex items-center justify-between gap-2">
        <div
          className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white ${isDark ? "bg-amber-300" : "bg-sky-200"}`}
        >
          <Image src="/logo.webp" alt="Logo" width={60} height={60} />
        </div>
        <div className={`font-md flex gap-4 self-end text-sm font-medium`}>
          <Link href="#work">Work</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
      <div>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`rounded-lg p-3 transition-all duration-200 sm:p-[10px] ${
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
