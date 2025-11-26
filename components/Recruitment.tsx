import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Recruitment() {
    return (
        <section aria-labelledby="recruit" className="container w-full space-y-10 py-12">
            <h2 id="recruit" className="animate text-3xl text-center my-6">
                採用情報
            </h2>

            <div className="max-w-3xl mx-auto text-center">
                <div className="w-full h-56 sm:h-40 relative mb-6">
                    <Image alt="リクルート画像" src="/school.png" fill style={{ objectFit: "cover" }} />
                </div>

                <h3 className="animate text-1xl font-bold md::text-2xl text-gray-700 mb-4">
                    最高なチームで誰もが自由にもっと<br className="sm:hidden"></br>シンプルな社会をつくる
                </h3>

                <p className="text-base animate text-gray-700 mb-6">
                    KANOA GROUPでは裁量権を持って事業を<br className="sm:hidden"></br>推し進めていける方を募集しております。<br className="sm:hidden"></br>リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方はぜひお問い合わせください。
                </p>

                <div className=' mx-auto mt-6 text-center'>
                    <Link className=' mx-auto px-6 py-2 rounded-full text-white bg-sky-600  hover:bg-orange-500 transition duration-[500ms] text-center font-medium' href="/recruitment">採用情報を見る</Link>
                </div>
            </div>
        </section>
    )
}
