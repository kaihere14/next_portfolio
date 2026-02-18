"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { Clock } from "lucide-react";
import { motion } from "motion/react";

import type { LanyardData, LanyardResponse } from "@/types/discord";
import { CodeTime } from "@/types/wakatime";

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: "bg-green-500", label: "Online" },
  idle: { color: "bg-yellow-500", label: "Idle" },
  dnd: { color: "bg-red-500", label: "Do Not Disturb" },
  offline: { color: "bg-gray-500", label: "Offline" },
};

const ActiveStatus = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [discord, setDiscord] = useState<LanyardData | null>(null);
  const [codeTime, setCodeTime] = useState<CodeTime | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const fetchDiscord = async () => {
      try {
        const res = await axios.get<LanyardResponse>(
          "https://api.lanyard.rest/v1/users/1212050219538325516"
        );
        const res2 = await axios.get(
          "https://portfolio-3-backend.vercel.app/api/wakatime/today-time"
        );
        setDiscord(res.data.data);
        setCodeTime(res2.data.data[0].grand_total);
      } catch (err) {
        console.error(err);
      }

      timeoutId = setTimeout(fetchDiscord, 10000);
    };

    fetchDiscord();

    return () => clearTimeout(timeoutId);
  }, []);

  const status = discord?.discord_status ?? "offline";
  const { color, label } = statusConfig[status] ?? statusConfig.offline;

  return (
    <>
      <div
        onMouseEnter={() => setIsDisplaying(true)}
        onMouseLeave={() => setIsDisplaying(false)}
        className="transition-scale absolute right-[0.7] bottom-[0.7] z-10 h-2 w-2 rounded-full border-2 border-gray-200 bg-gray-100 p-2 duration-300 hover:scale-[0.9] dark:border-gray-800 dark:bg-black"
      >
        <span
          className={`border-background absolute right-[4] bottom-[4] size-2 rounded-full ${color}`}
        />
      </div>
      {isDisplaying && (
        <motion.div
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="absolute -bottom-2 left-[110px] z-20 flex w-max flex-col gap-2 rounded-xl border bg-white/80 p-3 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/80"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div
                className={`absolute -inset-1 animate-pulse rounded-full ${color}/20`}
              />
              <div className={`relative size-2 rounded-full ${color}`} />
            </div>
            <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
              {label}
            </span>
          </div>

          {codeTime && (
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-black/20 bg-black/5 px-2.5 py-1.5 dark:border-white/20 dark:bg-white/5">
              <Clock size={13} className="text-neutral-500" />
              <span className="text-xs font-bold text-black dark:text-white">
                {codeTime.hours}h {codeTime.minutes}m
              </span>
              <span className="text-[10px] text-neutral-400">coded today</span>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default ActiveStatus;
