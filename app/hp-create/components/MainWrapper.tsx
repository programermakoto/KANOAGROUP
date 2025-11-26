import Image from 'next/image'
import React from 'react'

export default function MainWrapper() {
    return (
        <div className='text-gray-700'>
            <h3 className=' text-center my-10 font-bold text-3xl'>あなたはどんなホームページ作成を求めてる？!</h3>
            <p className=' text-center my-10 font-bold '>なぜ、たった３分でホームページ制作可能か「秘密」を公開</p>
            <iframe className='mx-auto w-full md:w-[560px] h-[450px]  md:h-[315px]'   src="https://www.youtube.com/embed/bRU2rDSpuQw?si=VHsqPrTjlH6_YOsC&amp;start=58" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            <p className=' text-center my-10 font-bold '>↑シンプルで良い。見やすいサイトに！でしたね</p>
            <p className=' text-center my-10 font-bold '>もう一度。違う方向から聞きます！</p>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            <h3 className=' text-center my-10 font-bold text-3xl'>あなたはどんなホームページ作成を求めてる？!</h3>
            <p className=' text-center my-10 font-bold '>なぜ、たった３日でホームページ制作可能か「秘密」を公開</p>
            <iframe className='mx-auto w-full md:w-[560px] h-[450px] md:h-[315px]'  src="https://www.youtube.com/embed/bRU2rDSpuQw?si=VHsqPrTjlH6_YOsC&amp;start=58" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            <p className=' text-center my-10 font-bold '>↑3Dモデルを作成した。インパクトのあるあまり出会えないサイトに！でしたね</p>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            <h3 className=' text-center my-10 font-bold text-3xl'>ホームページは会社の顔。ただ存在していたら良いものではありません</h3>
            <p className=' text-center my-10 font-bold'>マーケティング要素を理解し→あなたがよく変更するInstagramのプロフィール画像の様に新しく更新するものです</p>
        </div>
    )
}
