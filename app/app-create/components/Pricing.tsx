import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">開発プラン</h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        機能・規模によって費用が大きく異なるため、まずは無料でご相談ください。
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* LIGHT */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="mb-4">
            <h3 className="text-lg font-semibold">ライトプラン</h3>
            <p className="text-sm text-gray-500">シンプルな業務アプリ・MVP開発</p>
            <div className="text-2xl font-bold mt-2">￥ASK</div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・単機能～数機能の業務アプリ</li>
            <li>・最小限の要件でスピード開発</li>
            <li>・リリース後の動作確認込み</li>
          </ul>

          <Link
            href="/contact"
            className="block rounded-md bg-blue-600 text-white py-2 font-medium text-center hover:bg-blue-700"
          >
            相談する
          </Link>
        </article>

        {/* STANDARD */}
        <article className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
          <header className="mb-4">
            <h3 className="text-lg font-semibold">スタンダードプラン</h3>
            <p className="text-sm text-gray-500">複数機能・外部連携を含む開発</p>
            <div className="text-2xl font-bold mt-2">￥ASK</div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・会員管理・予約・決済など複数機能</li>
            <li>・外部API・既存システムとの連携</li>
            <li>・UI/UX設計込みのフルオーダーメイド</li>
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
          <header className="mb-4">
            <h3 className="text-lg font-semibold">カスタム・大規模プラン</h3>
            <p className="text-sm text-gray-500">大規模システム・複数プラットフォーム対応</p>
            <div className="text-2xl font-bold mt-2">￥ASK</div>
          </header>

          <ul className="mb-6 space-y-2 text-sm">
            <li>・要件ヒアリング・プロジェクト管理</li>
            <li>・Web／アプリ等マルチプラットフォーム対応</li>
            <li>・継続的な機能追加・保守運用</li>
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
