"use client";

import { motion } from "framer-motion";

export default function Value() {
  const items = [
    { title: "自由", color: "text-sky-600", desc: "自分らしく挑戦できる環境をつくる" },
    { title: "創造", color: "text-orange-500", desc: "新しい価値を生み出す挑戦を続ける" },
    { title: "成長", color: "text-green-500", desc: "個人・チーム・社会が共に育つ循環をつくる" },
  ];

  return (
    <section className="relative w-full bg-white py-32 px-6 md:px-16 flex flex-col items-center">
      
      {/* タイトル */}
      <div className="text-center space-y-2">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">
          バリュー
        </h2>
        <small className="text-gray-500 uppercase tracking-widest">
          value
        </small>
      </div>

      {/* Value Grid */}
      <div className="grid md:grid-cols-3 gap-16 mt-16 w-full max-w-6xl">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 1.05, y: -5 }}  // スマホタップ対応
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="flex flex-col items-center md:items-start space-y-4 cursor-pointer"
          >
            <span className={`text-5xl md:text-6xl font-extrabold ${item.color}`}>
              {item.title}
            </span>
            <p className="text-gray-700 text-lg md:text-base leading-relaxed max-w-sm text-center md:text-left">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* デコレーション（余白を生かしたシンプルライン） */}
      <div className="mt-20 w-full flex justify-center">
        <div className="h-1 w-24 bg-gray-200 rounded-full"></div>
      </div>

    </section>
  );
}