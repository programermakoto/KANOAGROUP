"use client"; 
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  title: string;
  href: string;
  src: string;
  alt?: string;
};

const items: Item[] = [
  { id: 1, title: "IT会社", href: "/works/1", src: "/works/1.jpg", alt: "実績1" },
  { id: 2, title: "運送会社", href: "/works/2", src: "/works/2.jpg", alt: "実績2" },
  { id: 3, title: "アプリLP", href: "/works/3", src: "/works/3.jpg", alt: "実績3" },
  { id: 4, title: "美容サロン", href: "/works/4", src: "/works/4.jpg", alt: "実績4" },
  { id: 5, title: "携帯会社", href: "/works/5", src: "/works/5.jpg", alt: "実績5" },
  { id: 6, title: "焼肉屋", href: "/works/6", src: "/works/6.jpg", alt: "実績6" },
  { id: 7, title: "通信会社", href: "/works/7", src: "/works/7.jpg", alt: "実績7" },
  { id: 8, title: "スクール", href: "/works/8", src: "/works/8.jpg", alt: "実績8" },
  { id: 9, title: "キャバクラ", href: "/works/9", src: "/works/9.jpg", alt: "実績9" },
];

export default function PortfolioGrid() {
  return (
    <section aria-labelledby="portfolio-heading" className="container mx-auto px-4 py-12">
      <h2 id="portfolio-heading" className="text-2xl text-center font-bold mb-6">​WEBサイト制作事例</h2>

      {/* grid: desktop 3列 x 3行, tablet 2列, mobile 1列 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <Link
            key={it.id}
            href={it.href}
            aria-label={it.title}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={it.src}
                alt={it.alt ?? it.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-400"
                priority={it.id <= 3} // 先頭数枚だけ優先読み込み
              />
            </div>

            <div className="p-3 bg-white">
              <h3 className="text-sm font-medium text-gray-800">{it.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
