"use client";

import { useRef, useState } from "react";

import Image from "next/image";

const VIDEO_SRC =
  "https://pub-e788e87cb08043ab80dcbe889ea20c84.r2.dev/uploads/6938711c1aafcfa552a1d8ef/19a0ee4e504fe7caaa4e0922881d11537887bd262b9d83f3728b3428c34f8cd1%2B18";

const THUMBNAIL = "https://img.youtube.com/vi/rifVkhqVpWQ/maxresdefault.jpg";

const Testimonial = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <section className="mt-15">
      <h2 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        Social Proof
      </h2>
      <h2 className="mb-6 text-3xl font-bold">Featured On</h2>

      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="relative pb-[56.25%]">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            controls={playing}
            playsInline
            preload="metadata"
            onPause={handlePause}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Thumbnail overlay — hidden once user clicks play */}
          {!playing && (
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={handlePlay}
            >
              <Image
                src={THUMBNAIL}
                alt="Featured on YouTube"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-200 group-hover:scale-96">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-7 w-7 fill-white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="mt-15" />
    </section>
  );
};

export default Testimonial;
