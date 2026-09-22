import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">料金プラン</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* LP */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">LPプラン</h3>
              <p className="text-sm text-gray-500">1ページ完結のランディングページ</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">¥15,000-</div>
              <div className="text-xs text-gray-500">最低利用期間24ヶ月(全込)/月々</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・LP（ランディングページ）制作</li>
            <li>・レスポンシブ対応</li>
            <li>・お問い合わせフォーム設置</li>
            <li>・月次簡易修正込み</li>
          </ul>

          <Link
            href="/contact"
            className="block rounded-md bg-blue-600 text-white py-2 font-medium text-center hover:bg-blue-700"
          >
            申し込み
          </Link>
        </article>

        {/* EC */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">ECサイトプラン</h3>
              <p className="text-sm text-gray-500">決済・カート機能付き</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">￥ASK</div>
              <div className="text-xs text-gray-500">要相談</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・ECサイト制作（商品ページ・カート機能）</li>
            <li>・決済方法の連携</li>
            <li>・在庫・商品管理のご案内</li>
            <li>・SEO基礎対策</li>
          </ul>

          <Link
            href="/contact"
            className="block rounded-md bg-blue-600 text-white py-2 font-medium text-center hover:bg-blue-700"
          >
            相談する
          </Link>
        </article>

        {/* LARGE */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">大型・複数商品ECプラン</h3>
              <p className="text-sm text-gray-500">多商品・独自機能に対応</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">￥ASK</div>
              <div className="text-xs text-gray-500">相談する</div>
            </div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・要件ヒアリング</li>
            <li>・プロジェクト管理・納期調整</li>
            <li>・多商品カタログ／独自機能開発</li>
            <li>・既存ECからの移行相談</li>
          </ul>

          <Link
            href="/contact"
            className="block rounded-md bg-gray-800 text-white py-2 font-medium text-center hover:bg-gray-900"
          >
            相談する
          </Link>
        </article>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        <p>※ 表示価格は税別です。最終見積もりはお問い合わせ後に提示します。</p>
      </div>
    </section>
  );
}
