"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const navLinks = [
    {
      href: "/service",
      label: "サービス一覧",
      detail: "KANOAの全事業をチラッと覗けるよ",
      isCTA: false,
    },
    {
      href: "/about",
      label: "会社情報",
      detail: "どんな会社？スタッフや雰囲気を軽く覗いてみよう",
      isCTA: false,
    },
    {
      href: "/news",
      label: "お知らせ",
      detail: "最新情報や面白い動きをサッとチェック！",
      isCTA: false,
    },
    {
      href: "/recruitment",
      label: "採用情報",
      detail: "KANOAで稼ぐチャンス、募集内容をチラ見せ！",
      isCTA: false,
    },
    {
      href: "/agency",
      label: "代理店募集",
      detail: "初期リスクを抑えて、自分のビジネスを広げるチャンス",
      isCTA: false,
    },
    {
      href: "/contact",
      label: "無料お問合わせ",
      detail: "気になることはすぐ聞いてOK！簡単相談",
      isCTA: true,
    },
  ];

  return (
    <header className="z-50 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                <Image
                  src="/kanoa-logo.PNG"
                  alt="KANOAGROUP 企業ロゴ"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 36px, (max-width: 1024px) 40px, 48px"
                  priority
                />
              </div>
              <span className="sm:inline-block text-lg sm:text-xl font-bold text-gray-800">
                KANOA GROUP
              </span>
            </Link>
          </div>

          <div className="flex-1" />

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link) => (
              <div
                key={link.href}
                onMouseEnter={() => setActiveHover(link.href)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative"
              >
                <Button
                  variant={link.isCTA ? "default" : "ghost"}
                  className={link.isCTA ? "bg-sky-600 text-white hover:bg-sky-500" : ""}
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>

                {/* サブラベル */}
                {activeHover === link.href && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-white shadow-md rounded-md text-xs text-gray-700 whitespace-nowrap z-50">
                    {link.detail}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* モバイル用ハンバーガー */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルドロワー */}
      <div
        className={`md:hidden transition-max-h duration-200 ease-in-out overflow-hidden bg-white border-t border-gray-200 ${
          open ? "max-h-[480px] shadow-md" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => {
            const [showDetail, setShowDetail] = useState(false);
            return (
              <div key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className="block w-full"
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setShowDetail(true)}
                  onMouseLeave={() => setShowDetail(false)}
                  onTouchStart={() => setShowDetail((prev) => !prev)} // タップで詳細切替
                >
                  <Button
                    variant={link.isCTA ? "default" : "ghost"}
                    className={
                      link.isCTA
                        ? "bg-[#0066FF] text-white w-full justify-start"
                        : "w-full justify-start"
                    }
                    asChild
                  >
                    <span className="w-full text-left">{link.label}</span>
                  </Button>
                </Link>
                {/* モバイル用小さな詳細 */}
                {showDetail && (
                  <div className="px-2 mt-1 text-xs text-gray-600">{link.detail}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}