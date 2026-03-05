"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const posters = [
  "/advertisement/advertisement01.webp",
  "/advertisement/advertisement02.webp",
  "/advertisement/advertisement03.webp",
];

export default function Service3D() {
  const controls = useAnimationControls();
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const gap = 24;

  useEffect(() => {
    if (!trackRef.current) return;

    const first = trackRef.current.querySelector(
      "[data-item='true']"
    ) as HTMLElement;

    if (first) {
      setItemWidth(first.offsetWidth + gap);
    }
  }, []);

  useEffect(() => {
    if (!itemWidth) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      controls.start({
        x: -index * itemWidth,
        transition: {
          duration: 1.8,
          ease: "easeInOut",
        },
      });

      if (index >= posters.length) {
        setTimeout(() => {
          controls.set({ x: 0 });
          index = 0;
        }, 2000);
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [itemWidth, controls]);

  return (
    <div className="relative w-full overflow-hidden py-20 bg-white select-none">
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-6 w-max"
      >
        {[...posters, ...posters].map((src, i) => (
          <div
            key={i}
            data-item="true"
            onContextMenu={(e) => e.preventDefault()} // 右クリック禁止
            className="
              relative
              w-[160px]
              sm:w-[220px]
              md:w-[280px]
              aspect-square
              rounded-2xl
              overflow-hidden
              shadow-xl
              bg-white
            "
          >
            <Image
              src={src}
              alt="advertisement"
              fill
              draggable={false} // ドラッグ禁止
              className="object-cover pointer-events-none"
              priority={i === 0}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}