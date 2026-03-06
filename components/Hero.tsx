import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className="absolute inset-0 flex items-center px-4 sm:px-12 lg:px-24">
            <div className="flex-col flex mx-auto md:mx-0  md:flex-row items-center gap-4 max-w-4xl">
                <Image
                    src="/kanoa-logo.PNG"
                    alt="KANOAGROUP会社ロゴ"
                    width={120}
                    height={120}
                    className="object-cover  opacity-80  md:opacity-100"
                    priority
                />
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight
drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]
tracking-tight">
                    KANOA GROUP
                </h1>
            </div>
        </section>
    )
}
