"use client";

import ForContact from "@/components/ForContact";
import Mission from "@/components/Mission";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative bg-blue-500 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">未来をつなぐ、信頼の通信インフラ</h1>
        <p className="text-lg md:text-2xl mb-8">高速・安定・安心のネットワークを、あなたのビジネスに</p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            お問い合わせはこちら
          </Link>
          <Link
            href="#services"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-500 transition"
          >
            サービスを見る
          </Link>
        </div>
      </section>







      {/* コンセプト紹介 */}
      <section className="py-16 px-4 md:px-24 text-center">
        <h2 className="text-3xl font-bold mb-6">信頼と革新で叶える『通信の安定』</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          株式会社KANOA GROUPは、高品質で信頼性の高い通信インフラを提供することを使命としています。豊富な経験・技術を持つチームが、お客様一人ひとりのニーズに応え、施工からアフターサポートまで責任を持って対応します。高速で安定したネットワークを構築し、ビジネスの成長と地域社会の発展に貢献します。
        </p>
      </section>

      {/* サービス紹介 */}
      <section id="services" className="py-16 px-4 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">提供サービス</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">通信設備工事</h3>
            <p>光ファイバー敷設、LAN/WAN構築、機器設置などネットワークインフラをトータル対応。</p>
          </div>
          <div className=" p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">モバイル通信工事</h3>
            <p>基地局・アンテナ設置、閉空間の無線通信構築、セキュリティ対応など。</p>
          </div>
          <div className=" p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">アクセス系通信工事</h3>
            <p>ケーブル敷設、設備拡張、定期点検・保守サービスなどインフラ維持管理。</p>
          </div>
          <div className=" p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-xl mb-2">宅内光ファイバ開通</h3>
            <p>家庭・オフィスへの光回線引き込み、端末設定、導入サポート。</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-[50px]">
        <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
      </div>
      {/* 業務内容セクション */}
      <section className="py-16 px-4 md:px-24 ">
        <h2 className="text-3xl font-bold text-center mb-12">業務内容</h2>
        <p className="p-5 text-center mb-12">あなたの業務はこれだけです</p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6  rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">EO光ネット開通</h3>
            <p>設置されたルーターから「スマホ、PC、TV、ゲーム機、プリンターやその他の機器」のWi-Fi設定を行います。</p>
          </div>
          <div className="p-6  rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">ウイルス対策</h3>
            <p>お客様のPCにマカフィーのインストールインストールでウイルス対策や支払い方法の設定を行います。</p>
          </div>
          <div className="p-6  rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">サブスクリプションサポート</h3>
            <p>Netflixの視聴設定や新規登録、Amazon Firestickの設定を行います。</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-[50px]">
        <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
      </div>
      {/* 業務フローセクション */}
      <section className="py-16 px-4 md:px-24 ">
        <h2 className="text-3xl font-bold text-center mb-12">業務フロー</h2>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">1.お客様への事前確認を行い、対応時間の10分前に到着し業務を開始します。</p>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">2.作業内容を確認し30分程で作業を終了し、次の訪問先へ移動します。</p>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">3.その日の作業が全て終了したら「終了の報告と書類の提出」を行い以上で終了です。</p>
        <small className="block text-center text-gray-500">※作業時間は30分程でお一人で車で移動を行い、次の訪問時間までの空き時間はお好きに過ごしてください。</small>
        <small className="block text-center text-gray-500">※時間は10:00~18:00で巻けば15:00で終わる人も・・休みは好きな曜日に週に2回取ってください。たったこれだけの仕事内容で固定給をお支払いします。</small>
      </section>

      <div className="flex justify-center my-[50px]">
        <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
      </div>
      {/* 業務フローセクション */}
      <section className="py-16 px-4 md:px-24 ">
        <h2 className="text-3xl font-bold text-center mb-12">こんなこと出来ればいいなあ💭</h2>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">1.売り上げ達成で社員のボーナスor社員旅行!!</p>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">2.作業内容を確認し30分程で作業を終了し、次の訪問先へ移動します。</p>
        <p className="font-bold bg-gray-300 w-2/3 mx-auto p-5 text-center mb-12">3.その日の作業が全て終了したら「終了の報告と書類の提出」を行い以上で終了です。</p>
        <small className="block text-center text-gray-500">※作業時間は30分程でお一人で車で移動を行い、次の訪問時間までの空き時間はお好きに過ごしてください。</small>
        <small className="block text-center text-gray-500">※時間は10:00~18:00で巻けば15:00で終わる人も・・休みは好きな曜日に週に2回取ってください。たったこれだけの仕事内容で固定給をお支払いします。</small>
      </section>
      <Mission />
      <ForContact />
    </div>
  );
}
