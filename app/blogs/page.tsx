import { Metadata } from "next";

import BlogList from "@/components/Blogs/BlogList";
import FadeIn from "@/components/ui/FadeIn";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://armandev.space";

export const metadata: Metadata = {
  title: "Blog - Web Development Articles & Tutorials | Arman Thakur",
  description:
    "Thoughts, tutorials, and insights on engineering, networking, and programming. Articles on DNS, cURL, APIs, and more.",
  keywords: [
    "Blog",
    "Web Development",
    "Programming",
    "Tutorials",
    "DNS",
    "cURL",
    "Networking",
    "APIs",
    "Full Stack",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog - Web Development Articles & Tutorials | Arman Thakur",
    description:
      "Thoughts, tutorials, and insights on engineering, networking, and programming.",
    url: `${baseUrl}/blogs`,
    type: "website",
    images: ["/og_image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Web Development Articles & Tutorials | Arman Thakur",
    description:
      "Thoughts, tutorials, and insights on engineering, networking, and programming.",
    images: ["/og_image.png"],
  },
};

const posts = [
  {
    id: 1,
    title: "How DNS Resolution Works",
    description:
      "A deep dive into how DNS resolution works end-to-end, covering recursive resolvers, root servers, TLD servers, authoritative name servers, and practical usage of the dig command.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20250423151312675710/DNS-SERVER.webp",
    slug: "dns",
    tags: ["networking", "systems", "dns"],
    author: "Arman",
    publishedAt: "2026-01-18",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "What is cURL and How to Use It",
    description:
      "A beginner-friendly guide to cURL - the command-line tool for communicating with servers, testing APIs, and debugging requests directly from your terminal.",
    image:
      "https://accountgram-production.sfo2.cdn.digitaloceanspaces.com/nubelaco_ghost/2022/12/TLC_Using_cURL_In_5_Actual_Scenarios_Using_cURL.png",
    slug: "curls",
    tags: ["api", "terminal", "development"],
    author: "Arman",
    publishedAt: "2026-01-18",
    readTime: "6 min read",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-32 font-sans transition-colors duration-300 dark:bg-[#161618] dark:text-white">
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8">
        <FadeIn>
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight">Blogs</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Thoughts, tutorials, and insights on engineering, and programming.
            </p>
            <div className="mx-auto mt-8 h-px w-full max-w-sm bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </FadeIn>

        <FadeIn>
          <BlogList posts={posts} />
        </FadeIn>
      </main>
    </div>
  );
};

export default BlogsPage;
