"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = {
  src?: string;
  durationMs?: number;
};

export default function IntroOverlay({ src = "/op.mp4", durationMs = 4000 }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef<number | null>(null);

  // ルートに来たときだけ ON
  useEffect(() => {
    if (pathname === "/") {
      setLoaded(false);
      setFadeOut(false);
      setVisible(true);

      // duration 経過したらフェードアウト開始
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setFadeOut(true);
      }, durationMs);
    } else {
      // 別ページでは非表示にする
      setVisible(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, durationMs]);

  // フェードアウト完了後に完全に消す
  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 600); // CSS duration と合わせる
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src={src}
        autoPlay
        muted
        style={{
          objectFit: "cover",        // 中央クロップ（縦長に見せたいなら cover）
          width: "100%",
          height: "100%",
          aspectRatio: "9/16",       // 縦長比を強制（ブラウザ対応）
          maxHeight: "100vh",
          transform: "translateZ(0)" // レンダリング安定化
        }}
        playsInline
        preload="auto"
        onCanPlay={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
