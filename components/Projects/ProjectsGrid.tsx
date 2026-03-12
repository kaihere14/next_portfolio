"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";
import Link from "next/link";

import { ChevronDown, ChevronUp, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import ProjectCard from "./ProjectCard";
import { ProjectType } from "./Projects";

interface ProjectsGridProps {
  projects: ProjectType[];
  initialCount?: number;
}

const ProjectsGrid = ({ projects, initialCount = 4 }: ProjectsGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent scroll when a project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);
  const hasMore = projects.length > initialCount;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className="h-full"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              animation:
                showAll && index >= initialCount
                  ? `fadeSlideIn 0.4s ease-out ${(index - initialCount) * 0.1}s both`
                  : "none",
            }}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-6 py-2.5 text-sm font-medium text-neutral-700 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all hover:translate-y-[2px] hover:border-neutral-400 hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </>
            ) : (
              <>
                Show More ({projects.length - initialCount} more)
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-10"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  layoutId={`card-${selectedProject.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-100/80 text-neutral-600 transition-all hover:bg-neutral-200 active:scale-90 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    <X size={20} />
                  </button>

                  <div className="flex w-full flex-col overflow-y-auto">
                    {/* Top: Image */}
                    <div className="relative h-64 w-full shrink-0 md:h-80 lg:h-96">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Bottom: Content */}
                    <div className="flex flex-col p-6 md:p-8">
                      <div className="mb-6">
                        <p className="mb-1 text-xs font-semibold tracking-wider text-green-500 uppercase">
                          {selectedProject.tagline}
                        </p>
                        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                          {selectedProject.name}
                        </h3>
                      </div>

                      <div className="mb-6 flex-1">
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="mt-4 flex items-center gap-2 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fixed Button in Bottom Right */}
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 md:p-8">
                    <Link
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-bold whitespace-nowrap text-white shadow-xl transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                    >
                      Visit Live Site
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default ProjectsGrid;
