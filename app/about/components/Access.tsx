import Image from 'next/image'
import React from 'react'

export default function Access() {
  return (
    <section className="pt-[10%] container space-y-8">
      <h2 className="w-[50%] text-4xl font-bold border-b-2 border-black text-gray-700">会社アクセス</h2>
      <small className="block w-[50%] text-sm text-gray-700">Company Access</small>

      {/* ← ここを丸ごと差し替えてください */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* マップ（レスポンシブ） */}
        <div className="w-full md:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.396063046516!2d135.4581776257918!3d34.66995217293054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e74f6b766f89%3A0xe4fde1dceb7bdc44!2z5aSn6Ziq44OZ44Kk44K_44Ov44O844Os44K444OH44Oz44K5!5e0!3m2!1sja!2sjp!4v1762600772569!5m2!1sja!2sjp"
            className="w-full h-[250px] md:h-[450px] border border-black rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 画像（レスポンシブ） */}
        <div className="w-full md:w-[400px] flex items-center justify-center">
          <Image
            src="/BeiTower.webp"
            alt="KANOA GROUP本社ビル外観"
            width={400}
            height={450}
            className="rounded-lg shadow-lg object-cover object-center w-full h-[250px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  )
}
