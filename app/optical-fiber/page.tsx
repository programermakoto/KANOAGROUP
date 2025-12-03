"use client";

import ForContact from "@/components/ForContact";
import Mission from "@/components/Mission";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative bg-blue-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">未来をつなぐ、信頼の通信インフラ</h1>
        <p className="text-lg md:text-2xl mb-8">高速・安定・安心のネットワークを、あなたのビジネスに</p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            お問い合わせはこちら
          </Link>
          <Link
            href="#services"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition"
          >
            サービスを見る
          </Link>
        </div>
      </section>

      {/* コンセプト紹介 */}
      <section className="py-16 px-4 md:px-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">信頼と革新で叶える『通信の安定』</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          株式会社KANOA GROUPは、高品質で信頼性の高い通信インフラを提供することを使命としています。豊富な経験・技術を持つチームが、お客様一人ひとりのニーズに応え、施工からアフターサポートまで責任を持って対応します。高速で安定したネットワークを構築し、ビジネスの成長と地域社会の発展に貢献します。
        </p>
      </section>

      {/* サービス紹介 */}
      <section id="services" className="py-16 px-4 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">提供サービス</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">通信設備工事</h3>
            <p>光ファイバー敷設、LAN/WAN構築、機器設置などネットワークインフラをトータル対応。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">モバイル通信工事</h3>
            <p>基地局・アンテナ設置、閉空間の無線通信構築、セキュリティ対応など。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">アクセス系通信工事</h3>
            <p>ケーブル敷設、設備拡張、定期点検・保守サービスなどインフラ維持管理。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">宅内光ファイバ開通</h3>
            <p>家庭・オフィスへの光回線引き込み、端末設定、導入サポート。</p>
          </div>
        </div>
      </section>

      {/* 強みセクション */}
      <section className="py-16 px-4 md:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">KANOA GROUPが選ばれる理由</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">高品質な施工と安定性</h3>
            <p>豊富な経験と技術で、安心・安定した通信環境を構築します。</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">ワンストップ対応</h3>
            <p>設計・施工・保守・運用サポートまで一括で対応可能です。</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">柔軟かつ迅速な対応</h3>
            <p>お客様第一主義、ニーズに合わせ柔軟に対応します。</p>
          </div>
        </div>
      </section>

      

     
      <Mission/>
      <ForContact/>
    </div>
  );
}
