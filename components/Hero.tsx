import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className="absolute inset-0 flex items-center px-4 sm:px-12 lg:px-24">
            <div className="flex items-center gap-4 max-w-4xl">
                <Image
                    src="/kanoa-logo.png"
                    alt="KANOA GROUP ロゴ"
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
                    KANOA GROUP
                </h1>
            </div>
        </section>
    )
}
