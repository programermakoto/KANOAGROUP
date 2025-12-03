"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Service() {

    return (
        <div className='container'>

            {/* EO光 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <div>
                        <h1 className='text-gray-700 text-2xl md:text-3xl font-bold'>宅内光ファイバー開通業務</h1>
                        <small className='block text-gray-700 text-sm mb-2'>EO光のWi-Fi訪問設定サポート</small>
                        <p className='text-gray-700 mb-6 leading-relaxed'>
                            お客様宅に訪問し、光ファイバーインターネット（EO光）の開通に伴うWi-Fi設定や通信環境の最適化を行うサービスです。
                            接続設定から動作確認までを一貫してサポートし、初めての方でも安心してご利用いただけるよう丁寧に対応いたします。
                        </p>
                    </div>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="/optical-fiber" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white hover:text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="https://lin.ee/N8Z79Gm" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 hover:text-white transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image
                        src="/eo-image.webp"
                        alt="EO光業務風景画像"
                        width={300}
                        height={150}
                        className="mx-auto h-full w-full object-cover"
                    />
                </div>
            </section>


            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>


            {/* 未来塾 */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>未来塾</h1>
                    <small className='block text-gray-700 text-sm mb-2'>プログラミングスクール</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        未来塾は、プログラミング・マーケティング・デザイン・動画編集など、
                        これからの時代に必要とされるスキルを幅広く学べる教育スクールです。
                        知識を“使える力”へと変える実践型カリキュラムを採用し、
                        年齢や経験に関係なく、自分の可能性を最大限に伸ばせる学びの場を提供しています。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="https://www.mirai-juku.site/" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="https://lin.ee/N8Z79Gm" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/school.png" alt="未来塾 Logo" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>


            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>


            {/* HP制作事業 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>HP-CREATE</h1>
                    <small className='block text-gray-700 text-sm mb-2'>ホームページ制作事業</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        KANOA GROUPのホームページ制作事業では、最短1週間で高クオリティなWebサイトを提供しています。
                        デザイン性と操作性を両立し、3Dモデルやアニメーションを取り入れた“魅せるサイト”を制作。
                        企業や店舗のブランド価値を最大限に引き出す、戦略的なWebデザインを提案しています。
                    </p>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="../hp-create" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="https://lin.ee/N8Z79Gm" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/model-3.webp" alt="彼女 Logo" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>


            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>


            {/* システム開発 */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>システムアプリ開発事業</h1>
                    <small className='block text-gray-700 text-sm mb-2'>オーダーメイドの開発</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        クライアントの課題や目的に合わせた、完全オリジナルのアプリ・システムを開発しています。
                        自社開発アプリ「GK-U」で培ったUI/UX設計・機能開発のノウハウを活かし、
                        操作性と拡張性を両立したプロダクトをスピーディーに提供。
                        業務効率化から顧客体験向上まで、一貫した開発体制で支援します。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="/" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="https://lin.ee/N8Z79Gm" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/woman.png" alt="彼女 Logo" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>


            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>


            {/* GK-U */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>GK-Uオンラインスクール</h1>
                    <small className='block text-gray-700 text-sm mb-2'>生徒にお金を支払う不思議なスクール</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        スキル毎にと打つ日や移動時間にお金支払う必要なし。この「GK-U」アプリひとつで
                        「Web/SNSマーケティング・プログラミング・デザイン・財務・AI・資産運用」を学習できます。
                    </p>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="/" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="https://lin.ee/N8Z79Gm" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/gku.png" alt="GK-Uオンラインスクール Logo" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>

        </div>
    )
}
