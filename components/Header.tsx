"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
    const [open, setOpen] = useState(false);

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
                                    alt="KANOA GROUP ロゴ"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 640px) 36px, (max-width: 1024px) 40px, 48px"
                                    priority
                                />
                            </div>
                            <span className=" sm:inline-block text-lg sm:text-xl font-bold text-gray-800">
                                KANOA GROUP
                            </span>
                        </Link>
                    </div>

                    {/* spacer */}
                    <div className="flex-1" />

                    {/* デスクトップナビ */}
                    <nav className="hidden md:flex items-center gap-2">
                        <Button variant="ghost" asChild><Link href="/service">事業内容</Link></Button>
                        <Button variant="ghost" asChild><Link href="/about">会社概要</Link></Button>
                        <Button variant="ghost" asChild><Link href="/news">企業連絡</Link></Button>
                        <Button variant="ghost" asChild><Link href="/recruitment">採用情報</Link></Button>
                        <Button variant="ghost" asChild><Link href="/contact">お問合わせ</Link></Button>
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
                            {/* simple hamburger icon */}
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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

            {/* モバイルドロワー（スライドしつつ表示） */}
            <div
                className={`md:hidden transition-max-h duration-200 ease-in-out overflow-hidden bg-white border-t border-gray-200 ${open ? "max-h-[480px] shadow-md" : "max-h-0"
                    }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {[
                        { href: "/service", label: "事業内容" },
                        { href: "/about", label: "会社概要" },
                        { href: "/news", label: "企業連絡" },
                        { href: "/recruitment", label: "採用情報" },
                        { href: "/contact", label: "お問合わせ" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block w-full"
                            onClick={() => setOpen(false)}
                        >
                            <Button variant="ghost" asChild className="w-full justify-start">
                                <span className="w-full text-left">{link.label}</span>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
