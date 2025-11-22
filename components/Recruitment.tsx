import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Recruitment() {
    return (
        <section aria-labelledby="recruit" className="container w-full space-y-10 py-12">
            <h2 id="recruit" className="text-3xl my-6">
                採用情報
            </h2>

            <div className="max-w-3xl mx-auto text-center">
                <div className="w-full h-56 sm:h-40 relative mb-6">
                    <Image alt="リクルート画像" src="/school.png" fill style={{ objectFit: "cover" }} />
                </div>

                <h3 className="text-2xl text-gray-700 mb-4">
                    最高なチームで誰もが自由にもっとシンプルな社会をつくる
                </h3>

                <p className="text-base text-gray-700 mb-6">
                    KANOA GROUPでは裁量権を持って事業を推し進めていける方を募集しております。リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方はぜひお問い合わせください。
                </p>

                <Link href="/recruitment">採用情報を見る</Link>
            </div>
        </section>
    )
}
