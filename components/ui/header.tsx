import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import Image from 'next/image'

export default async function Header() {
    return (
        <header className="z-10 fixed w-full h-16 flex items-center gap-3 px-6 border-b">
            <Button variant="ghost" asChild>
                <Link href="/" className=" text-gray-700  font-bold text-xl">
                    <Image
                        alt='企業ロゴ'
                        width={300}
                        height={150}
                        src="/kanoa-logo.Png"
                        className="h-full w-full object-cover" />
                    KANOA GROUP
                </Link>
            </Button>

            <span className="flex-1"></span>

            <Button variant="ghost" asChild>
                <Link href="/service" >事業内容</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/about" >会社概要</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/news">企業連絡</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/recruitment" >採用情報</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/contact" >お問合わせ</Link>
            </Button>

        </header >

    )
}
