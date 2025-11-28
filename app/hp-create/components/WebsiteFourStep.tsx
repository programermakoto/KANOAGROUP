"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Layout, Code, Rocket } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "ヒアリング & 要件定義",
    description: "お申込時に簡単な色、好みのデザイン、利用したい画像のアップロード等を簡単にお答えください。たった3分、あとはコーヒーでも飲みながらお待ちください。",
    icon: <Monitor size={28} />,
    href: "https://lin.ee/N8Z79Gm",
  },
  {
    id: 2,
    title: "ワイヤー・デザイン",
    description: "弊社デザイナーが３営業日ほどでワイヤーフレーム(デザイン第一案)を制作をし、メールアドレスに、修正依頼フォームと共にお送り致します。",
    icon: <Layout size={28} />,
    href: "https://lin.ee/N8Z79Gm",
  },
  {
    id: 3,
    title: "実装 & テスト",
    description: "お客様からの修正内容が確認出来次第、1営業日程度でサイトが完成します。お客様のメールアドレスにご希望のドメインを繋ぎ、URLをお送りいたします。",
    icon: <Code size={28} />,
    href: "https://lin.ee/N8Z79Gm",
  },
  {
    id: 4,
    title: "公開 & 運用",
    description: "毎月の細かい修正(コンテンツ画像の差し替え、または文章、書式)は修正フォームよりシンプルに依頼が可能です。もちろん追加料金など一切なし。",
    icon: <Rocket size={28} />,
    href: "https://lin.ee/N8Z79Gm",
  },
];

export default function WebsiteFourStep({
  steps = defaultSteps,
  className = "",
}: {
  steps?: Step[];
  className?: string;
}) {
  return (
    <section className={"max-w-6xl mx-auto p-6 " + className} aria-labelledby="four-step-title">
      <header className="text-center mb-8">
        <h2 id="four-step-title" className="text-2xl md:text-3xl font-bold">Webサイト制作の4ステップ</h2>
        <p className="text-sm text-gray-500 mt-2">シンプルに、早く、成果を出すための流れ</p>
      </header>

      <div className="relative">
        <div className="hidden md:block absolute left-6 right-6 top-1/2 transform -translate-y-1/2 h-0.5 bg-slate-200" aria-hidden />

        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {steps.map((s) => (
            <li key={s.id} className="group relative">
              <Link href={s.href ?? "#"} aria-label={s.title} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-transparent hover:border-slate-200 transition-colors duration-200 h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-50 text-sky-600">{s.icon}</div>
                      <div>
                        <div className="text-xs text-gray-400">STEP {s.id}</div>
                        <h3 className="font-semibold text-lg mt-1">{s.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-4 flex-1">{s.description}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-sky-600 font-medium">公式LINEで詳細確認</span>
                      <span className="text-xs text-gray-400">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>

              <span className="hidden md:block absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-white border border-slate-200" aria-hidden />
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-500">このフローは標準的な例です。<br className="sm:hidden" />要件により順序や工程は変動します。</p>
        <br className="sm:hidden" />
        <p className="text-sm text-gray-500">3Dモデルやアニメーションなどの<br className="sm:hidden" />オプションは更に+2,3日頂いております。</p>
      </footer>
    </section>
  );
}
