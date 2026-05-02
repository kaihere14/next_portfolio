/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";

import { useEffect } from "react";

import Image from "next/image";

import { getCalApi } from "@calcom/embed-react";

export default function Calbutton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "connect" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="connect"
      data-cal-link="arman-dmt7pl/connect"
      className="group flex cursor-pointer items-center rounded-lg border bg-neutral-100 px-5 py-1 text-sm font-semibold shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:bg-neutral-800 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      <Image
        src={"/Logo.webp"}
        alt="Logo"
        width={100}
        height={100}
        className="mr-1 size-6 object-cover pb-[3px]"
      />
      <div className="flex max-w-0 items-center gap-1.5 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:mr-2 group-hover:max-w-[120px] group-hover:opacity-100">
        <span className="text-xs">+</span>
        <span className="rounded-full bg-neutral-700 p-1 text-xs text-white dark:bg-neutral-600">
          You
        </span>
      </div>
      Book a call
    </button>
  );
}
