"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Logo = { src: string; alt?: string; href?: string };

const logos: Logo[] = [
  { src: "/co-logo/book-co.jpeg", alt: "KANOA", href: "https://www.daikouseihonsho.com/" },
  { src: "/co-logo/logo-bk.svg", alt: "KANOA", href: "https://master-key.co.jp/" },
  { src: "/kanoa-logo.PNG", alt: "KANOA", href: "https://kanoagroup.jp" },
  { src: "/co-logo/aozora.jpg", alt: "KANOA", href: "https://gmo-aozora.com/" },
];

export default function PartnerSection() {
  const seqRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [duration, setDuration] = useState(20);

  const VISIBLE_COUNT = 7;

  useEffect(() => {
    let mounted = true;

    const calc = () => {
      const w = seqRef.current?.getBoundingClientRect().width ?? 0;
      if (!mounted) return;
      setSeqWidth(Math.ceil(w));
      const pxPerSecond = 90;
      const computed = Math.max(6, Math.round(w / pxPerSecond));
      setDuration(computed);
    };

    const imgs = seqRef.current?.querySelectorAll<HTMLImageElement>("img") ?? [];
    if (imgs.length === 0) {
      calc();
    } else {
      let remaining = imgs.length;
      const onLoad = () => {
        remaining -= 1;
        if (remaining <= 0) calc();
      };
      imgs.forEach((img) => {
        if (img.complete) {
          onLoad();
        } else {
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onLoad, { once: true });
        }
      });
    }

    window.addEventListener("resize", calc);
    const ro = new ResizeObserver(calc);
    if (seqRef.current) ro.observe(seqRef.current);

    return () => {
      mounted = false;
      window.removeEventListener("resize", calc);
      ro.disconnect();
    };
  }, [VISIBLE_COUNT]);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.setProperty("--scroll-translate", `-${seqWidth}px`);
    trackRef.current.style.setProperty("--scroll-duration", `${duration}s`);
  }, [seqWidth, duration]);

  if (logos.length === 0) return null;

  return (
    <div className="container pb-40 h-auto w-full relative overflow-hidden flex flex-col space-y-5 items-center justify-center">
      <h1 className="text-1xl md:text-3xl my-6 py-5 animate delay">KANOA GROUPと関わる企業一覧</h1>

      <div className="w-full overflow-hidden relative">
        <div ref={trackRef} className="track flex whitespace-nowrap items-center">
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
                <Image
                  src={logo.src}
                  alt={logo.alt ?? ""}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain block"
                  draggable={false}
                />
              </a>
            ))}
          </div>

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
                <Image
                  src={logo.src}
                  alt={logo.alt ?? ""}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain block"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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
        .track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
