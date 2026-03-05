"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// データ定義
const screens = [
  {
    title: "タスク一覧",
    desc: "好きな仕事を選ぶだけ",
    content: [
      { name: "レビュー評価", icon: "📝" },
      { name: "サービス紹介ブログ", icon: "📰" },
      { name: "サービス代理店販売", icon: "💼" },
      { name: "営業リスト作成", icon: "📋" },
      { name: "DM送付代行", icon: "✉️" },
      { name: "お店の紹介", icon: "🏪" },
    ],
  },
  {
    title: "タスク実行",
    desc: "スマホで30秒作業",
    content: [
      { name: "レビュー送信", icon: "📝" },
      { name: "ブログ入力", icon: "📰" },
      { name: "DM送付", icon: "✉️" },
    ],
  },
  {
    title: "収益確認",
    desc: "リアルタイムで収益表示",
    content: [
      { label: "本日", value: 3000 },
      { label: "今週", value: 15000 },
      { label: "今月", value: 45000 },
    ],
  },
]

// union型
type ContentItem = { name: string; icon: string } | { label: string; value: number }

export default function PhoneDemo() {
  const [active, setActive] = useState(0)
  const [coins, setCoins] = useState<number[]>([])
  const [checked, setChecked] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    if (active === 2) {
      const arr = Array.from({ length: 10 }, () => Math.random() * 260)
      setCoins(arr)
    } else {
      setCoins([])
    }

    if (active === 1) {
      setChecked([false, false, false])
      screens[1].content.forEach((_, i) => {
        setTimeout(() => {
          setChecked((prev) => prev.map((v, idx) => (idx === i ? true : v)))
        }, 500 + i * 700)
      })
    }
  }, [active])

  // 型ガード
  const isIconItem = (item: ContentItem): item is { name: string; icon: string } => {
    return 'icon' in item && 'name' in item
  }
  const isLabelItem = (item: ContentItem): item is { label: string; value: number } => {
    return 'label' in item && 'value' in item
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          スマホだけで完結
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* iPhone Frame */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] md:w-[340px] md:h-[700px] shadow-2xl rounded-[60px] overflow-hidden bg-white/90 backdrop-blur-sm">
              
              {/* ステータスバー */}
              <div className="absolute top-2 left-0 w-full flex justify-between px-4 text-gray-600 text-xs font-medium">
                <span className="font-mono">9:41</span>
                <span className="flex items-center gap-1">
                  <span className="flex items-end gap-[1px]">
                    <div className="w-1 h-1 bg-gray-600 rounded-sm" />
                    <div className="w-1 h-2 bg-gray-600 rounded-sm" />
                    <div className="w-1 h-3 bg-gray-600 rounded-sm" />
                    <div className="w-1 h-4 bg-gray-600 rounded-sm" />
                  </span>
                  <span>📶</span>
                  <span className="flex items-center gap-0.5">
                    <div className="w-5 h-2 border border-gray-600 rounded-sm relative">
                      <div
                        className="absolute top-0 left-0 h-2 bg-gray-600 rounded-sm"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="text-[10px] font-mono">98%</span>
                  </span>
                </span>
              </div>

              {/* App Screen */}
              <div className="absolute inset-[6px] bg-white rounded-[36px] p-4 flex flex-col overflow-hidden shadow-lg">
                
                {/* ロゴ */}
                <div className="flex justify-center mb-3">
                  <Image src="/kanoa-logo.PNG" alt="KANOA LOGO" width={100} height={32} />
                </div>

                {/* タイトル */}
                <h3 className="text-lg font-semibold text-center mb-1">{screens[active].title}</h3>
                <p className="text-gray-500 text-sm text-center mb-4">{screens[active].desc}</p>

                <div className="flex flex-col gap-3 overflow-y-auto h-full">

                  {/* タスク一覧 or 実行 */}
                  {active !== 2 &&
                    screens[active].content.map((c, i) =>
                      isIconItem(c) ? (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 shadow-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.2 }}
                        >
                          <span className="text-xl">{c.icon}</span>
                          <span className="text-sm font-medium">{c.name}</span>
                          {active === 1 && checked[i] && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="ml-auto text-green-500 text-xl font-bold"
                            >
                              ✅
                            </motion.span>
                          )}
                        </motion.div>
                      ) : null
                    )}

                  {/* 収益確認 */}
                  {active === 2 &&
                    screens[2].content.map((c, i) =>
                      isLabelItem(c) ? (
                        <div key={i} className="flex flex-col">
                          <div className="flex justify-between text-sm font-medium mb-1">
                            <span>{c.label}</span>
                            <span>¥{c.value.toLocaleString()}</span>
                          </div>
                          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(100, (c.value/50000)*100)}%` }}
                              transition={{ duration: 1.2 }}
                              className="h-4 bg-green-400 rounded-full"
                            />
                          </div>
                        </div>
                      ) : null
                    )}

                  {/* コインアニメーション */}
                  {coins.map((x, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -20, opacity: 1 }}
                      animate={{ y: 150 + Math.random() * 100, opacity: 0 }}
                      transition={{ duration: 2 + Math.random() }}
                      className="absolute bg-yellow-400 w-3 h-3 rounded-full shadow-lg"
                      style={{ left: x }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            {screens.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`p-6 rounded-xl cursor-pointer transition ${
                  active === i ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}