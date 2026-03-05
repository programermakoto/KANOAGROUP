"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Wrapper() {

  const messages = [
    {
      title: "もうバイトで働くなんて\n考えられない",
      text: "やりたい時だけ、でもしっかり安定収入。\nスマホだけで、スキマ時間にできる仕事。",
    },
    {
      title: "「おばあちゃんでもできる」\nお仕事がたくさん",
      text: "難しいスキルは一切不要。\n誰でもできる簡単タスクを多数掲載。",
    },
  ];

  const [active,setActive] = useState(0);

  return (
    <section className="relative bg-white py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 translate-x-6 translate-y-6 bg-gray-200 rounded-3xl"/>

            <img
              src="/advertisement/advertisement01.webp"
              className="
              relative
              w-[280px] sm:w-[360px] md:w-[420px]
              rounded-3xl
              shadow-2xl
              object-cover
              "
            />

          </div>
        </motion.div>


        {/* CONTENT */}

        <div className="space-y-8">

          {/* タブ */}

          <div className="flex gap-3">

            {messages.map((_,i)=>(
              <button
              key={i}
              onClick={()=>setActive(i)}
              className={`
              px-4 py-2 text-sm rounded-full border transition
              ${active===i
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300"}
              `}
              >
                Message {i+1}
              </button>
            ))}

          </div>


          {/* MESSAGE */}

          <motion.div
            key={active}
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
          >

            <h2 className="
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            mb-6
            whitespace-pre-line
            ">
              {messages[active].title}
            </h2>

            <p className="
            text-gray-600
            text-lg
            leading-relaxed
            whitespace-pre-line
            ">
              {messages[active].text}
            </p>

          </motion.div>


          {/* CTA BOX */}

          <div className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          shadow-lg
          ">

            <p className="text-sm text-gray-500 mb-2">
              お問い合わせはこちら
            </p>

            <p className="
            text-2xl
            md:text-3xl
            font-bold
            tracking-wide
            ">
              ☎︎ 050-8887-2035
            </p>

            <p className="text-sm text-gray-600 mt-2">
              総合窓口（平日10:00-18:00）<br/>
              「Cloud Pocketについて」とお伝えください。
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}