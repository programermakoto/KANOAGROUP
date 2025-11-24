import Link from 'next/link'
import React from 'react'

export default function ForContact() {
    return (
        <div className='container my-30 h-auto md:h-[50vh]  flex justify-center items-center'>
            <div className='container flex flex-col md:flex-row items-center md:items-start justify-center gap-10'>

                {/* テキスト部分 */}
                <div className='w-full md:w-2/3 text-center md:text-left px-4'>
                    <h3 className='text-4xl sm:text-5xl md:text-6xl text-gray-700 mb-6 md:mb-8'>
                        Let&apos;s Have a<br />Conversation!
                    </h3>
                    <p className="text-xs  md:text-2xl text-gray-700">
                        Webサービスやアプリ開発のご相談、協業パートナーや取材など<br />
                        その他のお問い合わせはこちらから。
                    </p>
                </div>

                {/* ボタン部分 */}
                {/* <div className='w-full md:w-1/3 flex justify-center md:justify-end px-4'>
                    <Link
                        href="/contact"
                        className='border-1 border-black rounded-full w-50 h-50 flex items-center justify-center 
                   px-7.5 py-7.5 hover:text-white hover:bg-orange-500 transition duration-[500ms] hover:scale-110'
                    >
                        CONTACT
                    </Link>
                </div> */}

                <div className='w-full md:w-1/3 flex justify-center md:justify-end px-4'>
                    <Link
                        href="/contact"
                        className='border border-black rounded-full w-50 h-50 flex items-center justify-center 
        px-7.5 py-7.5 hover:text-white hover:bg-orange-500 transition duration-[500ms] hover:scale-110
        animate-shake'
                    >
                        CONTACT
                    </Link>
                </div>

            </div>

        </div>


    )
}
