
import { WorldModel } from "@/components/models/earth";
import RenderModel from "@/components/RenderModel";
import PartnerSection from "@/components/PartnerSection";
import Image from "next/image";
import { getAllNews } from "../lib/news";
import Link from "next/link";
import React from "react";
import ForContact from "@/components/ForContact";
import Mission from "@/components/Mission";
import Recruitment from "@/components/Recruitment";
import About from "@/components/About";
import Hero from "@/components/Hero";


type NewsItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  summary?: string;
};

function ButtonLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block px-4 py-2 border border-black rounded text-center hover:bg-accent transition ${className}`}
    >
      {children}
    </Link>
  );
}

function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <section aria-labelledby="news-heading" className="container py-10 space-y-6">
      <h2 id="news-heading" className=" animate deray text-1xl md:text-3xl text-center mb-6">
        お知らせ
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
            aria-label={`お知らせ: ${item.title}`}
          >
            <div className="w-full sm:w-[20%] h-48 sm:h-28 relative rounded overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:640px) 100vw, 20vw"
              />
            </div>

            <div className="w-full sm:w-[80%]">
              <p className=" text-lg">{item.title}</p>
              <small className="text-gray-500 block mb-2">{item.date}</small>
              {item.summary && <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>}
            </div>
          </Link>
        ))}
      </div>
      <div className=' mx-auto mt-6 text-center'>
        <Link className=' mx-auto px-6 py-2 rounded-full text-white bg-sky-600  hover:bg-orange-500 transition duration-[500ms] text-center font-medium' href="/news">お知らせ一覧を見る</Link>
      </div>
    </section>
  );
}

export default async function Home() {
  const news = (await getAllNews()) as NewsItem[];

  return (
    <>
      <main>
        {/* HERO */}
        <div className="w-full h-screen relative">
          <RenderModel>
            <WorldModel position={[2, 0, 0]} />
          </RenderModel>
          <Hero />
        </div>
        {/* 企業情報 */}
        <About />

        {/* スポンサー */}
        <PartnerSection />

        {/* お知らせ */}
        <NewsList items={news} />

        {/* 採用情報 */}
        <Recruitment />

        {/* ミッション */}
        <Mission />

        {/* お問い合わせ */}
        <ForContact />
      </main>
    </>
  );
}
