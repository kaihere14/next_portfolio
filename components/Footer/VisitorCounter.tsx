"use client";

import { useEffect, useState } from "react";

import { Eye } from "lucide-react";

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

        if (data.vistitorId) {
          localStorage.setItem(STORAGE_KEY, data.vistitorId);
        }
      } catch {
        // silently fail — counter is non-critical
      }
    };

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs opacity-40">
      <Eye size={12} />
      {count.toLocaleString()} visitors
    </span>
  );
};
