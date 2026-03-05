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
      <div className="text-center mt-10 space-y-1">
        <p className="animate delay text-lg md:text-2xl font-semibold text-gray-700 drop-shadow-md">
          ようこそ。<br className="sm:hidden" />下へ進むとKANOA GROUPの世界が<br className="sm:hidden" />広がります。
        </p>
        <p className="animate text-sm md:text-base text-gray-600 tracking-wide drop-shadow">
          Thanks for visiting. Scroll for more.
        </p>
      </div>

      <div className="flex justify-center my-[50px]">
        <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
      </div>

      <h2 id="company-info" className="animate text-3xl my-6 text-center lg:text-left">
        KANOA GROUP 企業情報
      </h2>

      <Attachment />

      <div className="space-y-2 md:space-y-12">

        {/* ミッション＆ビジョン */}
        <article className="h-screen flex flex-col justify-center items-center max-w-3xl mx-auto text-gray-700 my-20 md:my-32 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 animate delay">
            ミッション＆ビジョンについて
          </h3>
          <p className="text-center font-medium text-gray-600 animate delay">
            Mission & Vision
          </p>
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate">
              KANOA GROUPは、常にワクワクと自由の中心で、
            </p>
            <p className="text-sky-600 font-bold text-xl md:text-2xl animate">
              「これは面白い！を創り ∴ 自由を広げる。」
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate">
              を体現し続けます。創造と挑戦を通して、誰もが自由に生きられる社会をつくる
            </p>
          </div>
          <div className="flex justify-center mt-4">
            {/* CTAボタン */}
            <Link
              href="/about/#vision"
              className="
          relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
            hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg
        "
            >
              KANOAについてもっと知る
            </Link>
          </div>
        </article>

        {/* 事業内容 */}
        <article className="h-screen flex flex-col justify-center items-center max-w-3xl mx-auto text-gray-700 my-20 md:my-32 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 animate delay">
            サービス一覧
          </h3>
          <p className="text-center font-medium text-gray-600 animate delay">Service</p>
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate">
            KANOA GROUPは、<br className="sm:hidden" />IT領域とスキル不要型ビジネスの二軸で構成されています。
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate">
            KANOA GROUP is comprised of two pillars: <br className="sm:hidden" /> IT and skill-free businesses.
            </p>
          </div>
          <Service3D />
          <div className="flex justify-center mt-4">
            {/* CTAボタン */}
            <Link
              href="/service"
              className="
          relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
            hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg
        "
            >
              事業内容を見る
            </Link>

          </div>
        </article>

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
                className="
                relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
                hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg">会社概要を見る</Link>
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
                className="
          relative z-20 mt-8 sm:mt-12 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500
            hover:from-orange-500 hover:to-red-500 transition duration-500 font-medium shadow-lg
        ">代表挨拶を見る</Link>
            </div>
          </div>
        </article>


      </div>
    </section>
  );
}
