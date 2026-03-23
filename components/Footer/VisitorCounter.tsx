"use client";

import { useEffect, useState } from "react";

import { Eye } from "lucide-react";

import CountUp from "@/components/CountUp";

const API_BASE = "https://portfolio-3-backend.vercel.app/api/visitors/counter";
const STORAGE_KEY = "visitorId";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const storedId = localStorage.getItem(STORAGE_KEY);
        const id = storedId ?? "noid";

        const res = await fetch(`${API_BASE}/${id}`);
        const data = await res.json();

        if (data.count?.totalVisitors != null) {
          setCount(data.count.totalVisitors);
        }

        if (data.visitorId) {
          localStorage.setItem(STORAGE_KEY, data.visitorId);
        } else if (data.clearId) {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        // silently fail — counter is non-critical
      }
    };

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-neutral-100 px-4 py-1.5 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] dark:bg-neutral-800 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)]">
      <Eye size={13} className="text-neutral-500 dark:text-neutral-400" />
      <span className="text-xs font-semibold text-neutral-700 tabular-nums dark:text-neutral-300">
        <CountUp
          from={0}
          to={count}
          separator=","
          direction="up"
          duration={1.2}
          startWhen={true}
        />
      </span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">
        visitors
      </span>
    </div>
  );
};
