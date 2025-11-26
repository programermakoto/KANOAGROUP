"use client";
import React, { useEffect, useState, useRef } from "react";

type Props = {
  src?: string;
  durationMs?: number;
};

export default function IntroOverlay({ src = "/op.mp4", durationMs = 4000 }: Props) {
  const [visible, setVisible] = useState(false); // 初期は非表示
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("introPlayed");
    if (!hasSeen) {
      setVisible(true);
      localStorage.setItem("introPlayed", "true");
    }
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), durationMs);
      return () => clearTimeout(timer);
    }
  }, [visible, durationMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
