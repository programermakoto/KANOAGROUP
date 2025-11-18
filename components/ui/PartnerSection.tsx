"use client";

import React, { useEffect, useRef, useState } from "react";

type Logo = { src: string; alt?: string; href?: string };

const logos: Logo[] = [
  { src: "https://storage.googleapis.com/studio-design-asset-files/projects/G3qbE8LNOJ/s-2223x1998_v-frms_webp_d39989cd-4f3b-49aa-95c9-169ed74c3998_small.webp", alt: "KANOA", href: "https://kanoagroup.jp" }, // ここ空白はまずい（下で説明）
  { src: "/co-logo/book-co.jpeg", alt: "KANOA", href: "https://kanoagroup.jp" },
  { src: "/co-logo/logo-bk.svg", alt: "KANOA", href: "https://kanoagroup.jp" },
  { src: "/co-logo/logo_white.svg", alt: "KANOA", href: "https://kanoagroup.jp" },
  { src: "/kanoa-logo.png", alt: "KANOA", href: "https://kanoagroup.jp" },
  { src: "/co-logo/aozora.jpg", alt: "KANOA", href: "https://kanoagroup.jp" },
];



export default function PartnerSection() {
  const seqRef = useRef<HTMLDivElement | null>(null); // 1セット目（幅を計測）
  const trackRef = useRef<HTMLDivElement | null>(null); // アニメーション要素
  const [seqWidth, setSeqWidth] = useState(0);
  const [duration, setDuration] = useState(20);

  // 表示する枚数（画面に何枚見せたいか）
  const VISIBLE_COUNT = 7; // ←ここを変えれば「一場面に見える枚数」を変更できる

  // 画像読み込み & リサイズ監視して幅を計測する
  useEffect(() => {
    let mounted = true;
    const calc = () => {
      const w = seqRef.current?.getBoundingClientRect().width ?? 0;
      if (!mounted) return;
      setSeqWidth(Math.ceil(w));
      // px/s の速度で自然な動きにする（ここは好きに調整可）
      const pxPerSecond = 90; // 90px/s の速さ（値を上げると速くなる）
      const computed = Math.max(6, Math.round(w / pxPerSecond)); // 最低6秒
      setDuration(computed);
    };

    // 画像ロード完了を待つ
    const imgs = seqRef.current?.querySelectorAll("img") ?? [];
    if (imgs.length === 0) {
      calc();
    } else {
      let remaining = imgs.length;
      const onLoad = () => {
        remaining -= 1;
        if (remaining <= 0) calc();
      };
      imgs.forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          onLoad();
        } else {
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onLoad, { once: true });
        }
      });
    }

    // ウィンドウリサイズでも再計測
    window.addEventListener("resize", calc);
    // small observer for layout changes (optional but helpful)
    const ro = new ResizeObserver(calc);
    if (seqRef.current) ro.observe(seqRef.current);

    return () => {
      mounted = false;
      window.removeEventListener("resize", calc);
      ro.disconnect();
    };
  }, [logos, VISIBLE_COUNT]);

  // seqWidth が変わったら CSS 変数をセット
  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.setProperty("--scroll-translate", `-${seqWidth}px`);
    trackRef.current.style.setProperty("--scroll-duration", `${duration}s`);
  }, [seqWidth, duration]);

  if (logos.length === 0) return null;

  return (
    <div className="container py-40 h-auto w-full relative overflow-hidden flex flex-col space-y-5 items-center justify-center">
      <h1 className="text-3xl my-6 py-5">KANOA GROUPと関わる企業一覧</h1>

      <div className="w-full overflow-hidden relative">
        {/* track: アニメーション要素。JSで --scroll-translate と --scroll-duration をセット */}
        <div
          ref={trackRef}
          className="track flex whitespace-nowrap items-center"
        // no inline style needed; variables are set in effect
        >
          {/* seq: 1セット目（幅を計測するので ref をつける） */}
          <div ref={seqRef} className="flex items-center">
            {logos.map((logo, i) => (
              <a
                key={`a-${i}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                style={{ width: `calc(100vw / ${VISIBLE_COUNT})`, padding: "0 8px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt ?? ""}
                  className="w-full h-auto object-contain block"
                  draggable={false}
                />
              </a>
            ))}
          </div>

          {/* seq: 2セット目（コピー） */}
          <div className="flex items-center" aria-hidden>
            {logos.map((logo, i) => (
              <a
                key={`b-${i}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                style={{ width: `calc(100vw / ${VISIBLE_COUNT})`, padding: "0 8px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt ?? ""}
                  className="w-full h-auto object-contain block"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* slide-left uses JS-set --scroll-translate and --scroll-duration */
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-translate, -100%));
          }
        }
        .track {
          will-change: transform;
          animation: slide-left var(--scroll-duration, 20s) linear infinite;
        }
        /* ホバーで一時停止（任意） */
        .track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
