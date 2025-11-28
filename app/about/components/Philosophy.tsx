import React from 'react'

export default function Philosophy() {
  return (
    <section
      id="vision"
      className="relative bg-[url('/kanoa-home.png')] bg-cover bg-center bg-no-repeat"
      aria-labelledby="kanoa-vision-title"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/40 backdrop-blur-none" />
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36 max-w-4xl text-center">
        <h2 id="kanoa-vision-title" className="text-lg md:text-2xl font-semibold text-white/90 leading-tight">
          KANOA GROUP
          <br className="sm:hidden" /> 理念・ビジョン・バリュー
        </h2>

        <h1 className="mt-6 text-2xl md:text-4xl font-bold text-white tracking-tight">
          「創造と挑戦を通して、誰もが自由に生きられる社会をつくる」
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/90 leading-relaxed md:leading-7 max-w-3xl mx-auto">
          KANOA GROUPは、創造と挑戦を通じて、誰もが自分らしく自由に生きられる社会を目指します。
          私たちは、固定概念にとらわれず「自らの力で価値を生み出す人」を増やし、教育・テクノロジー・デザインなどの分野で、
          個人の可能性を最大化する仕組みを創り出します。
        </p>

        <div className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-white/80 leading-relaxed md:leading-7">
          <p>
            そして、私たちが追い求めるのは“これは面白い！”という心が動く瞬間。
            その「面白さ」を創り続けることこそが、人々の価値観を変え、新しい選択肢と自由を広げていく原動力になると信じています。
          </p>

          <p className="mt-4">
            KANOA GROUPは、常にワクワクと自由の中心で、
            「これは面白い！を創り ∴ 自由を広げる。」を体現し続けます。
          </p>
        </div>

        {/* Optional small visual divider for larger screens */}
        <div className="hidden md:block h-0.5 bg-white/20 w-24 mx-auto mt-10 rounded" aria-hidden="true" />
      </div>
    </section>
  )
}
