"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PricingPlans() {
  const [openTerms, setOpenTerms] = useState<null | { plan: string }>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">料金プラン</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* SINGLE */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">SINGLE PLAN</h3>
              <p className="text-sm text-gray-500">1店舗 / LPページ</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">¥15,000-</div>
              <div className="text-xs text-gray-500">最低利用期間24ヶ月(全込)/月々</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・LP（ランディングページ）制作</li>
            <li>・HTML/CSS/JSによりコーディング</li>
            <li>・月次保守（基本込み）</li>
            <li>・SNS連携とForm作成 </li>
          </ul>

          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 rounded-md bg-blue-600 text-white py-2 font-medium text-center hover:bg-blue-700">
              申し込み
            </Link>

            {/* モーダルを開くのは button にする */}
            <button
              onClick={() => setOpenTerms({ plan: "SINGLE PLAN" })}
              className="px-3 rounded-md border text-sm"
              aria-haspopup="dialog"
            >
              契約内容
            </button>
          </div>
        </article>

        {/* MULTI */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">MULTI PLAN</h3>
              <p className="text-sm text-gray-500">複数ページ対応</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">¥15,000-</div>
              <div className="text-xs text-gray-500">最低利用期間36ヶ月(全込)/月々</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・SINGLE PLAN内容</li>
            <li>・複数ページ作成可能</li>
            <li>・SEO基礎対策 </li>
            <li>・Next.js対応でSEO/パフォーマンスUP</li>
          </ul>

          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 rounded-md bg-blue-600 text-white py-2 font-medium text-center hover:bg-blue-700">
              申し込み
            </Link>

            <button
              onClick={() => setOpenTerms({ plan: "MULTI PLAN" })}
              className="px-3 rounded-md border text-sm"
              aria-haspopup="dialog"
            >
              契約内容
            </button>
          </div>
        </article>

        {/* FLEX */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">FLEX PLAN</h3>
              <p className="text-sm text-gray-500">大型HP制作</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">￥ASK</div>
              <div className="text-xs text-gray-500">相談する</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・要件ヒアリング</li>
            <li>・プロジェクト管理・納期調整</li>
            <li>・Blenderによる画像制作</li>
            <li>・動画編集と作成</li>
          </ul>

          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 rounded-md bg-gray-800 text-white py-2 font-medium text-center hover:bg-gray-900">
              相談する
            </Link>

            <button
              onClick={() => setOpenTerms({ plan: "FLEX PLAN" })}
              className="px-3 rounded-md border text-sm"
              aria-haspopup="dialog"
            >
              契約内容
            </button>
          </div>
        </article>
      </div>

      {/* Footer notes */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>※ 表示価格は税別です。最終見積もりはお問い合わせ後に提示します。</p>
      </div>

      {/* Terms modal */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label={`${openTerms.plan} 利用規約`}>
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenTerms(null)}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl w-full bg-white rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">{openTerms.plan} - 利用規約 / 契約内容</h4>
              <button onClick={() => setOpenTerms(null)} className="text-sm text-gray-500">閉じる</button>
            </div>

            <div className="space-y-3 text-sm text-gray-700 max-h-72 overflow-auto">
              <p>ここに利用規約の要約を入れてください。重要なポイント（契約期間、解約条件、支払い方法など）を明記します。</p>
              <ul className="list-disc ml-5">
                <li>契約期間：SINGLE 24ヶ月 / MULTI 36ヶ月 など</li>
                <li>支払い：毎月振込、カード、請求書払い</li>
                <li>解約：最低利用期間内の解約は違約金が発生する場合があります</li>
              </ul>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button className="px-4 py-2 rounded-md border" onClick={() => setOpenTerms(null)}>閉じる</button>
              <Link href="https://page.line.me/527qtybu?oat_content=url&openQrModal=true" className="px-4 py-2 rounded-md bg-blue-600 text-white">同意して続行</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
