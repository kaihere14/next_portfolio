"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { motion } from "motion/react";

import type { LanyardData, LanyardResponse } from "@/types/discord";

const ActiveStatus = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [discord, setDiscord] = useState<LanyardData | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const fetchDiscord = async () => {
      try {
        const res = await axios.get<LanyardResponse>(
          "https://api.lanyard.rest/v1/users/1212050219538325516"
        );
        setDiscord(res.data.data);
      } catch (err) {
        console.error(err);
      }

      // reset timer AFTER request finishes
      timeoutId = setTimeout(fetchDiscord, 10000);
    };

    fetchDiscord(); // initial call

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsDisplaying(true)}
        onMouseLeave={() => setIsDisplaying(false)}
        className="transition-scale absolute right-[0.7] bottom-[0.7] z-10 h-2 w-2 rounded-full border-2 border-gray-200 bg-gray-100 p-2 duration-300 hover:scale-[0.9] dark:border-gray-800 dark:bg-black"
      >
        <span
          className={`border-background absolute right-[4] bottom-[4] size-2 rounded-full ${discord?.discord_status === "online" ? "bg-green-500" : discord?.discord_status === "idle" ? "bg-yellow-500" : discord?.discord_status === "dnd" ? "bg-red-500" : "bg-gray-500"}`}
        />
      </div>
      {isDisplaying && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.3,
          }}
          className="absolute bottom-[2px] left-[85px] flex h-4 w-[60px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 pl-1 text-sm font-bold text-gray-400 dark:border-gray-600 dark:bg-black"
        >
          {discord?.discord_status}
        </motion.div>
      )}
    </>
  );
};

export default ActiveStatus;
