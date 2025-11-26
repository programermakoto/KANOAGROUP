"use client";
import React, { useEffect, useState } from "react";

type Props = {
  src?: string;       
  durationMs?: number; 
};

export default function IntroOverlay({ src = "/op.mp4", durationMs = 4000 }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), durationMs);
    return () => clearTimeout(timer);
  }, [durationMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        src={src}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover min-h-[100dvh] min-w-full"
      />
    </div>
  );
}
