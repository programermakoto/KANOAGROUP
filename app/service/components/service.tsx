"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

function CategoryHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center my-[60px]">
            <h2 className="inline-block text-xl md:text-2xl font-bold text-gray-800 border-b-4 border-sky-500 pb-2">
                {children}
            </h2>
        </div>
    );
}

function Divider() {
    return (
        <div className="flex justify-center my-[50px]">
            <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
        </div>
    );
}

export default function Service() {

    return (
        <div className='container'>

            <CategoryHeading>WEB制作</CategoryHeading>

            {/* ホームページ制作 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>ホームページ制作</h1>
                    <small className='block text-gray-700 text-sm mb-2'>HP-CREATE</small>
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
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/model-3.webp" alt="ホームページ制作イメージ" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>

            <Divider />

            {/* LP・ECサイト制作 */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>LP・ECサイト制作</h1>
                    <small className='block text-gray-700 text-sm mb-2'>販売・集客に特化したページ制作</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        商品・サービスの魅力を伝えるランディングページや、ネット販売に対応したECサイトを制作します。集客からコンバージョンまでを意識した設計で、売上につながるWebページを提供します。
                    </p>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="/lp-create" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像（仮：後日差し替え予定） */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <div className="w-full h-full min-h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                        画像準備中
                    </div>
                </div>
            </section>

            <Divider />

            {/* アプリ開発 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>アプリ開発</h1>
                    <small className='block text-gray-700 text-sm mb-2'>オーダーメイドの開発</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        クライアントの課題や目的に合わせた、完全オリジナルのアプリ・システムを開発しています。
                        自社開発アプリ「GK-U」で培ったUI/UX設計・機能開発のノウハウを活かし、
                        操作性と拡張性を両立したプロダクトをスピーディーに提供。
                        業務効率化から顧客体験向上まで、一貫した開発体制で支援します。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/woman.png" alt="アプリ開発イメージ" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>

            <Divider />

            <CategoryHeading>IT教育</CategoryHeading>

            {/* 社会人向け教育アプリ（GK-U） */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>社会人向け教育アプリ</h1>
                    <small className='block text-gray-700 text-sm mb-2'>GK-Uオンラインスクール｜生徒にお金を支払う不思議なスクール</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        各スキルの学習に応じた費用や移動時間の負担はありません。この「GK-U」アプリひとつで、「Web/SNSマーケティング・プログラミング・デザイン・財務・AI・資産運用」を学習できます。
                    </p>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="https://general-knowledge-university.app/" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
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

            <Divider />

            {/* 未来塾 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>未来塾</h1>
                    <small className='block text-gray-700 text-sm mb-2'>プログラミングスクール</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        未来塾は、プログラミング・マーケティング・デザイン・動画編集など、
                        これからの時代に必要とされるスキルを幅広く学べる教育スクールです。
                        知識を“実践で使える力”に変えるカリキュラムを採用し、年齢や経験に関係なく、個々の可能性を最大限に伸ばせる学びの場を提供しています。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="https://www.mirai-juku.site/" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
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

            <Divider />

            <CategoryHeading>通信インフラ</CategoryHeading>

            {/* 営業代行 */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>営業代行</h1>
                    <small className='block text-gray-700 text-sm mb-2'>営業を外注できる営業会社</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        営業人材の採用・教育・固定費などの負担を抑えながら、貴社の商品・サービスの営業活動を外部に任せられる営業支援事業です。案件をいただければ、SNSでのDM営業やLPを活用したWeb集客、既存顧客へのアプローチなど複数のチャネルを組み合わせて、集客からアポイント獲得、商談・成約までを一貫して代行します。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像（仮：後日差し替え予定） */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <div className="w-full h-full min-h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                        画像準備中
                    </div>
                </div>
            </section>

            <Divider />

            {/* 宅内光ファイバー開通業務 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <div>
                        <h1 className='text-gray-700 text-2xl md:text-3xl font-bold'>宅内光ファイバー開通業務</h1>
                        <small className='block text-gray-700 text-sm mb-2'>個人事業主として働ける方を募集中</small>
                        <p className='text-gray-700 mb-6 leading-relaxed'>
                        提携先から受託する宅内光ファイバー開通に伴うWi-Fi設定業務を、個人事業主として担っていただける方を募集しています（3次受け）。週4日以上稼働できる方であれば経験を問わず活躍でき、車・パソコンの支給など安心して始められる体制を整えています。
                        </p>
                    </div>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 hover:text-white transition duration-[500ms]" variant="outline">
                                ご応募・お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image
                        src="/eo-image.webp"
                        alt="光ファイバー業務風景画像"
                        width={300}
                        height={150}
                        className="mx-auto h-full w-full object-cover"
                    />
                </div>
            </section>

            <Divider />

            {/* 電気通信工事 */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>電気通信工事</h1>
                    <small className='block text-gray-700 text-sm mb-2'>個人事業主として働ける方を募集中</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        光回線やLAN配線など通信インフラに関わる各種工事を、提携先から3次受けで担っていただける個人事業主の方を募集しています。宅内配線から設備設置まで、現場経験を活かして活躍いただけます。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                ご応募・お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像（仮：後日差し替え予定） */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <div className="w-full h-full min-h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                        画像準備中
                    </div>
                </div>
            </section>

            <Divider />

            {/* ライフライン切替案内 */}
            <section className='flex flex-col-reverse md:flex-row items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>ライフライン切替案内</h1>
                    <small className='block text-gray-700 text-sm mb-2'>ガス・電気・Wi-Fiの乗り換えご案内</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                        ご家庭・法人のお客様へ、ガス・電気・Wi-Fiなど生活インフラの乗り換えをご案内。お客様に合ったプランをご提案し、お申し込みまでサポートします。
                    </p>

                    <div className='flex justify-center gap-5 items-center'>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像（仮：後日差し替え予定） */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <div className="w-full h-full min-h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                        画像準備中
                    </div>
                </div>
            </section>

            <Divider />

            {/* Cloud Pocket */}
            <section className='flex flex-col-reverse md:flex-row-reverse items-center w-9/10 mx-auto h-auto md:h-96 gap-6 my-[50px]'>
                {/* テキスト */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex flex-col justify-center'>
                    <h1 className='text-2xl md:text-3xl text-gray-700 font-bold'>Cloud Pocket</h1>
                    <small className='block text-gray-700 text-sm mb-2'>起業サービス</small>
                    <p className='text-gray-700 mb-6 leading-relaxed'>
                    個人事業主や新規事業を立ち上げる企業向けに、最先端のサービス提供や協業支援を行うプラットフォームです。
                    </p>

                    <div className='flex justify-center gap-5 items-center w-1/2 mx-auto'>
                        <Link href="/agency" target="_blank" rel="noopener noreferrer">
                            <Button className="block bg-lime-500 hover:bg-orange-500 text-white transition duration-[500ms]" variant="outline">
                                Read More
                            </Button>
                        </Link>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                            <Button className="block text-white bg-sky-600 hover:bg-orange-500 transition duration-[500ms]" variant="outline">
                                お問い合わせ
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 画像 */}
                <div className='w-full md:w-1/2 p-[18px] h-full flex items-center justify-center'>
                    <Image src="/cloud.webp" alt="Cloud Pocket Logo" width={300} height={150} className="mx-auto h-full w-full object-cover" />
                </div>
            </section>
        </div>
    )
}
