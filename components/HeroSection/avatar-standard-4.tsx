"use client";

import { useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import ActiveStatus from "./ActiveStatus";

export const title = "Avatar with Online Indicator";

const RIPPLES = [0, 0.15, 0.3];

const ProfileAvatar = () => {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const [easterState, setEasterState] = useState(false);
  const [sparkleKey, setSparkleKey] = useState(0);

  const getAudio = () => {
    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio("/click.mp3");
      clickSoundRef.current.volume = 0.7;
    }
    return clickSoundRef.current;
  };

  const handleClick = () => {
    const audio = getAudio();
    audio.currentTime = 0;
    audio.play().catch((err) => console.error("Sound play failed:", err));
    setEasterState((prev) => !prev);
    setSparkleKey((k) => k + 1);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="relative w-fit cursor-pointer"
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Ripple burst on click */}
      {sparkleKey > 0 &&
        RIPPLES.map((delay, i) => (
          <motion.span
            key={`${sparkleKey}-${i}`}
            className="pointer-events-none absolute inset-0 z-20 rounded-full"
            style={{
              border: `2px solid ${easterState ? "rgba(96,165,250,0.8)" : "rgba(129,140,248,0.8)"}`,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
          />
        ))}

      {/* Avatar with bounce-pop on toggle */}
      <motion.div
        className="relative z-10"
        animate={
          easterState
            ? { scale: [1, 1.13, 0.95, 1.05, 1], rotate: [0, -6, 6, -3, 0] }
            : { scale: [1, 0.9, 1.04, 1], rotate: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Blue focus border + glow ring in easter state */}
        <AnimatePresence>
          {easterState && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                outline: "3px solid rgba(96, 165, 250, 0.9)",
                outlineOffset: "4px",
                boxShadow:
                  "0 0 0 6px rgba(59, 130, 246, 0.2), 0 0 22px 6px rgba(59, 130, 246, 0.35)",
              }}
            />
          )}
        </AnimatePresence>

        <Avatar>
          <AvatarImage
            className={easterState ? "scale-300 pt-6" : ""}
            alt="@armanthakur"
            src={easterState ? "/Logo_easter.webp" : "/Logo.webp"}
            loading="eager"
            fetchPriority="high"
          />
        </Avatar>
      </motion.div>

      {/* Handwritten annotation — hint before, reveal after */}
      <AnimatePresence mode="wait">
        {!easterState ? (
          <motion.div
            key="hint"
            className="pointer-events-none absolute top-1/2 left-[115%] flex -translate-y-1/2 items-center sm:right-[115%] sm:left-auto"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            style={{ rotate: "-5deg" }}
          >
            <span
              className="flex w-max flex-row-reverse items-center gap-1 text-lg leading-none text-neutral-400 sm:flex-row dark:text-neutral-500"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              psst, click me!
              <svg
                width="30"
                height="18"
                viewBox="0 0 30 18"
                fill="none"
                className="inline-block -rotate-12 transform-[scaleX(-1)] sm:rotate-12 sm:transform-[scaleX(1)]"
                style={{ verticalAlign: "middle" }}
              >
                <path
                  d="M2 14 C6 6, 18 4, 26 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M21 3 L26 6 L22 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="found"
            className="pointer-events-none absolute top-1/2 left-[115%] flex -translate-y-1/2 items-center sm:right-[115%] sm:left-auto"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            style={{ rotate: "-5deg" }}
          >
            <span
              className="flex w-max flex-row-reverse items-center gap-1 text-lg leading-none text-neutral-500 sm:flex-row dark:text-neutral-400"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              you found me!
              <svg
                width="30"
                height="18"
                viewBox="0 0 30 18"
                fill="none"
                className="inline-block -rotate-12 transform-[scaleX(-1)] sm:rotate-12 sm:transform-[scaleX(1)]"
                style={{ verticalAlign: "middle" }}
              >
                <path
                  d="M2 14 C6 6, 18 4, 26 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M21 3 L26 6 L22 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <ActiveStatus />
    </motion.div>
  );
};

export default ProfileAvatar;
