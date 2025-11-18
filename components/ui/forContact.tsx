import Link from 'next/link'
import React from 'react'

export default function ForContact() {
    return (
        <div className='container h-[50vh] mt-[300px] mb-[100px]'>
            <div className=' container flex gap-10 '>
                <div className='w-2/3'>
                    <h3 className='text-6xl  text-gray-700 mb-8'>Let&apos;s Have a<br></br>
                        Conversation!</h3>
                    <p className="text-2xl w-2.5/3 m-auto text-gray-700 ">Webサービスやアプリ開発のご相談、協業パートナーや取材など<br></br>
                        その他のお問い合わせはこちらから。</p>
                </div>
                <div className='w-1/3 flex items-center justify-center'>
                    <Link href="/contact" className='border-1 border-black rounded-full w-50 h-50 flex items-center justify-center px-7.5 py-7.5   hover:text-white hover:bg-orange-500 transition duration-[500ms]  hover:scale-110 '>
                        CONTACT
                    </Link>
                </div>
            </div>

        </div>


    )
}
