"use client";
import { useEffect, useState } from "react";
import { initScrollAnimations } from "@/lib/api";
import Image from 'next/image'
import Link from 'next/link'
import Movie from "./ui/movie";
import Attachment from './ui/Attachment';
import Service3D from "./Service3D";

export default function About() {
  const [isPC, setIsPC] = useState(true);

  useEffect(() => {
    initScrollAnimations();

    // 画面サイズ判定
    const handleResize = () => setIsPC(window.innerWidth >= 768);
    handleResize(); // 初期判定
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-labelledby="company-info" className="container w-full pt-12">
      <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 my-10 md:my-16">
        {/* 企業情報 + 画像 */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
          <h2
            id="company-info"
            className="animate text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left"
          >
            KANOA GROUP 企業情報
          </h2>
          <div className="w-full flex-1 min-h-[240px] rounded-2xl overflow-hidden shadow-lg">
            <Attachment className="w-full h-full min-h-[240px]" />
          </div>
        </div>

        {/* サービス一覧 */}
        <article className="w-full lg:w-1/2 flex flex-col items-center text-gray-700 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center lg:text-left w-full">KANOA GROUP 会社概要</h3>
          <p className="text-center font-medium text-gray-600 animate delay">Service</p>
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed lg:whitespace-nowrap animate">KANOA GROUPは、IT領域とスキル不要型ビジネスの二軸で構成されています。</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 animate delay">
            {["WEB制作", "IT教育", "通信インフラ"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 text-sm text-gray-500 bg-sky-50 border border-sky-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <Service3D />
          {/* CTAボタン */}
          <Link
            href="/service"
            className="relative z-20 mt-4 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap bg-gradient-to-r from-sky-600 to-sky-500 hover:from-orange-500 hover:to-red-500 transition duration-500 shadow-lg"
          >
            事業一覧を見る
          </Link>
        </article>
      </div>

      <div className="space-y-2 md:space-y-12">
        {/* 会社概要 */}
        <article className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50">
          {/* 画像 or 動画 */}
          <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
            {isPC ? (
              <Movie />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/leaf.webp"
                  alt="KANOA GROUP ロゴ"
                  width={300}
                  height={100}
                  className="object-contain w-auto h-auto"
                />
              </div>
            )}
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl text-center animate delay">KANOA GROUP 会社概要</h3>
            <p className="text-sm text-gray-600 text-center mb-2 animate">About</p>
            <p className="text-sm text-gray-500 text-center mb-10 animate ">
              KANOA GROUPのビジョンと挑戦への想いを<br className="sm:hidden" />ここでお伝えします。<br />
              Discover the vision and aspirations<br className="sm:hidden" /> of KANOA GROUP.
            </p>
            <div className='mx-auto'>
              {/* CTAボタン */}
              <Link
                href="/about"
                className="relative z-20 mt-8 sm:mt-12 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap bg-gradient-to-r from-sky-600 to-sky-500 hover:from-orange-500 hover:to-red-500 transition duration-500 shadow-lg"
              >
                会社概要を見る
              </Link>
            </div>
          </div>
        </article>

        {/* 代表挨拶 */}
        <article className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-12 px-4 lg:px-0 my-50">
          {/* 画像 */}
          <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
            <div>
              <Image
                src="/makoto.webp"
                alt="寺内誠将（代表）"
                width={300}
                height={100}
                className='w-full h-full object-cover animate'
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="w-full lg:w-1/2 flex justify-center flex-col gap-3 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl text-center animate delay">寺内誠将 - KANOA GROUP 代表挨拶</h3>
            <p className="text-sm text-center text-gray-600 mb-2 animate">Message</p>
            <p className="text-sm text-gray-500 text-center mb-10 animate ">
              KANOA GROUPを設立した想いを<br className="sm:hidden" />ここでお伝えします。<br />
              Here we would like to share with you the thoughts behind the founding of KANOA GROUP.
            </p>
            <div className='mx-auto'>
              {/* CTAボタン */}
              <Link
                href="/about#message"
                className="relative z-20 mt-8 sm:mt-12 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap bg-gradient-to-r from-sky-600 to-sky-500 hover:from-orange-500 hover:to-red-500 transition duration-500 shadow-lg"
              >
                代表挨拶を見る
              </Link>
            </div>
          </div>
        </article>


      </div>
    </section>
  );
}
