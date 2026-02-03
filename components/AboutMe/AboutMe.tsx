import Image from "next/image";

const skills = [
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=postgres", alt: "PostgreSQL" },
  { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel" },
];

const AboutMe = () => {
  return (
    <section className="mx-auto mt-15 max-w-3xl px-0 pt-2 pb-10">
      <h2 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        About
      </h2>
      <h2 className="mb-2 text-3xl font-bold">Me</h2>
      <div className="flex flex-col items-center gap-8 rounded-2xl p-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="flex h-55 w-55 items-center justify-center overflow-hidden rounded-2xl bg-sky-200 dark:bg-amber-300">
            <Image
              src="https://res.cloudinary.com/dw87upoot/image/upload/v1763497871/Gemini_Generated_Image_2_Background_Removed_tkozqp.png"
              alt="Arman Thakur Avatar"
              width={220}
              height={220}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Arman Thakur</h1>
          <p className="mb-4 text-base">
            I&apos;m a Full Stack web developer passionate about building
            scalable SaaS and AI-powered applications. I love solving real-world
            problems and crafting seamless user experiences.
          </p>
          <div>
            <span className="text-sm font-semibold">Skills</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Image
                  key={skill.alt}
                  src={skill.src}
                  alt={skill.alt}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded bg-neutral-200 p-1 dark:bg-neutral-800"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-15" />
    </section>
  );
};

export default AboutMe;
