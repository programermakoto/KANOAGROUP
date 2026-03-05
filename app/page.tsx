
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
import SNSImpactSection from "@/components/SNSImpactSection";


type NewsItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  summary?: string;
};

function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <section aria-labelledby="news-heading" className="container py-10 space-y-6">
      <h2 id="news-heading" className="text-2xl md:text-3xl font-bold text-center mb-6">
        最新ニュース
      </h2>
      <p className="text-center text-gray-600 mb-8">
        KANOA GROUPの動きや新しい挑戦、イベント情報をチェック！<br />
        気になるトピックはクリックして詳しく読んでみよう。
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition border border-gray-100 shadow-sm"
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
              <p className="text-lg font-semibold mb-1">{item.title}</p>
              <small className="text-gray-500 block mb-2">{item.date}</small>
              {item.summary && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.summary} <span className="text-sky-600 font-medium">続きを読む →</span>
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* CTAボタン */}
      <div className="mx-auto my-20  text-center">
        <Link
          href="/news"
          className="
          relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
            hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg
        "
        >
          詳細ページへ
        </Link>
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
            <WorldModel position={[1, 0, 1.2]} />
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

        {/* SNS */}
        <SNSImpactSection />

        {/* ミッション */}
        <Mission />

        {/* お問い合わせ */}
        <ForContact />
      </main>
    </>
  );
}
