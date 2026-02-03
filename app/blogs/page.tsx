import { Metadata } from "next";
import Link from "next/link";

import { ArrowLeft, PenLine } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://armandev.space"; // Replace with your actual domain

export const metadata: Metadata = {
  title: "Blog - Web Development Articles & Tutorials | Arman Thakur",
  description:
    "Articles on web development, React, Next.js, and full-stack engineering. Coming soon!",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog - Web Development Articles & Tutorials | Arman Thakur",
    description:
      "Articles on web development, React, Next.js, and full-stack engineering. Coming soon!",
    url: `${baseUrl}/blogs`,
    type: "website",
  },
};

const BlogsPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      {/* Icon Container */}
      <div className="relative mb-8">
        <div className="absolute -inset-4 animate-pulse rounded-full bg-emerald-500/10 dark:bg-emerald-500/5" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <PenLine
            className="h-10 w-10 text-neutral-500 dark:text-neutral-400"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <p className="mb-2 text-sm font-medium tracking-wider text-neutral-500 uppercase">
          Coming Soon
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
          Blog Posts
        </h1>
        <p className="mx-auto mb-8 max-w-md text-neutral-600 dark:text-neutral-400">
          I&apos;m currently working on some exciting articles about web
          development, full-stack engineering, and my journey as a developer.
          Stay tuned!
        </p>

        {/* Progress indicator */}
        <div className="mx-auto mb-8 max-w-xs">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>Writing in progress...</span>
            <span className="font-mono">0%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div className="h-full w-0 animate-pulse rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
          </div>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-6 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to Home
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/5 to-transparent blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-tl from-blue-500/5 to-transparent blur-3xl" />
      </div>
    </div>
  );
};

export default BlogsPage;
