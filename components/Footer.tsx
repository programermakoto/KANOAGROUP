import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="sticky top-full min-h-16 flex flex-col items-center px-6 border-t py-4">
            <div className='text-gray-700 flex justify-between md:flex-row  flex-col    w-full max-w-4xl '>
                <div className="flex flex-col py-4 space-y-2 ">
                    <h3 className='font-bold text-center py-3 border-b-2'>規約事項等 (POLICY)</h3>
                    <Link href="Privacy" className="py-3 text-center text-sm hover:underline ">個人情報規約(Privacy & Term)</Link>
                    <Link href="about" className="py-3 text-center text-sm hover:underline">特商法の記載 (Company info)</Link>
                    <Link href="recruitment" className="py-3 text-center text-sm hover:underline">採用情報(Recruit)</Link>
                </div>
                <div className="flex flex-col py-4 space-y-2">
                    <h3 className=' font-bold text-center py-3 border-b-2'>お問い合わせ(CONTACT)</h3>
                    <Link href="/contact" className=" text-center py-3 text-sm hover:underline">お問い合わせ(Form)</Link>
                    <Link href="https://lin.ee/N8Z79Gm" className="text-center py-3 text-sm hover:underline">専属担当へのお問合せ(CHAT)</Link>
                    <Link href="tel:050-8887-2035" className="text-center py-3 text-sm hover:underline">TEL：050-8887-2035 (日本語)</Link>
                </div>
                <div className="flex flex-col py-4 space-y-2">
                    <h3 className='font-bold text-center py-3 border-b-2'>関連会社HP(COMPANY)</h3>
                    <Link href="https://www.mirai-juku.site/" className="py-3 text-center text-sm hover:underline">未来塾</Link>
                    <Link href="/" className="py-3 text-center text-sm hover:underline">株式会社Lien</Link>
                    <Link href="https://on-cloud.jp/" className="py-3 text-center text-sm hover:underline">合同会社ON CROUD</Link>
                </div>
            </div>
            <small className=" block text-center mx-auto my-20 ">© KANOA GROUP Corporation. All rights reserved.</small>
        </footer>
    )
}