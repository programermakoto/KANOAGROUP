import Image from 'next/image'
import React from 'react'

export default function MainWrapper() {
    return (
        <div className='text-gray-700'>
            <h3 className=' text-center my-10 font-bold text-xl md:text-3xl'>あなたはどんなホームページ作成を<br className="sm:hidden" />求めてる？!</h3>
            <p className=' text-center  my-5 md:my-10 font-normal md:font-bold '>なぜ、たった３分でホームページ制作可能か「秘密」を公開</p>
            <iframe className='mx-auto w-full md:w-[560px] h-auto  md:h-[315px]'   src="https://www.youtube.com/embed/bRU2rDSpuQw?si=VHsqPrTjlH6_YOsC&amp;start=58" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            <p className=' text-center my-10 font-bold '>↑「シンプル」で見やすいサイトに！</p>
            <p className=' text-center my-10 font-bold '>オプションで「3Dで飛び出るリアルなサイト」<br className="sm:hidden" />「リアルなアニメーション」<br className="sm:hidden" />「音が出るwebサイト」これは面白い!と<br className="sm:hidden" />思わすwebサイトも依頼可能</p>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
            
            <h3 className=' text-center my-5 md:my-10 font-bold text-xl md:text-3xl'>ホームページは会社の顔。<br className="sm:hidden" />ただ存在していたら良いものでは<br className="sm:hidden" />ありません</h3>
            <p className=' text-center my-10 font-normal md:font-bold'>マーケティング要素を理解し→<br className="sm:hidden" />あなたがよく変更するInstagramの<br className="sm:hidden" />プロフィール画像の様に新しく更新するものです</p>
            <div className="flex justify-center my-[50px]">
                <Image src="/scroll-movie.gif" alt="スクロールバー" width={300} height={150} className="rotate-90" />
            </div>
        </div>
    )
}
