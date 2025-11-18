
import { WorldModel } from "@/components/models/earth";
import RenderModel from "@/components/RenderModel";
import ForContact from "@/components/ui/forContact";
import Mission from "@/components/ui/Mission";
import PartnerSection from "@/components/ui/PartnerSection";
import Image from "next/image";
import { getAllNews } from "../lib/news";
import Link from "next/link";
export default async  function Home() {

  const news = await getAllNews();
  return (

    <>
      <div className="w-full h-screen relative">
        {/* 3D */}
        <RenderModel>
          <WorldModel position={[2, 0, 0]} />
        </RenderModel>
        <h1 className="w-2/3 absolute inset-0 flex items-center justify-start gap-2 px-4 md:px-12 lg:px-24">
          <Image
            src="/kanoa-logo.png"
            alt="会社ロゴ"
            width={100}
            height={100}
            className="object-cover block"
          />
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-700">
            KANOA<br></br>GROUP
          </span>

        </h1>
      </div>

      {/* 企業情報 */}
      <div className="container  w-full ">
        <h1 className="text-3xl my-6 py-5">KANOA GROUP 企業情報 </h1>
        <section className="my-5 p-6 space-y-6">
          <h2 className="text-3xl text-center">KANOAGROUP ビジョンについて</h2>
          <p className="text-1xl text-center">ビジョン</p>
          <p className="text-1xl text-center">KANOA GROUPは、常にワクワクと自由の中心で、<br></br><br></br>
            「これは面白い！を創り ∴ 自由を広げる。」を体現し続けます。創造と挑戦を通して、誰もが自由に生きられる社会をつくる」</p>
          <Link href="/about/#vision" className="mx-auto block text-center w-[10%] p-2 border-1 border-black hover:bg-accent">詳細へ</Link>

          <article className="h-[70vh] my-10  flex flex-row-reverse justify-around  items-center backdrop-blur-md text-gray-700 bg-white/30 border border-white/40 shadow-lg rounded-2xl p-6">

            <Image
              src="/kanoa-logo.png"
              alt="会社ロゴ"
              width={100}
              height={100}
              className="object-cover block w-1/3"
            />

            <div className="space-y-4 w-1/2">
              <h2 className="text-3xl text-center">KANOAGROUP 会社概要について</h2>
              <p className="text-1xl text-center">会社概要</p>
              <Link href="/about/#vision" className="mx-auto block text-center w-[30%] p-2 border-1 border-black hover:bg-accent">詳細へ</Link>
            </div>
          </article>
          <article className="h-[70vh] my-10   flex  justify-around  items-center backdrop-blur-md text-gray-700 bg-white/30 border border-white/40 shadow-lg rounded-2xl p-6">

            <Image
              src="/makoto.webp"
              alt="会社ロゴ"
              width={100}
              height={100}
              className="object-cover block w-1/3"
            />

            <div className="space-y-4 w-1/2">
              <h2 className="text-3xl text-center">寺内誠将<br></br>KANOA GROUP 代表挨拶</h2>
              <p className="text-1xl text-center">メッセージ</p>
              <Link href="/about/#vision" className="mx-auto block text-center w-[30%] p-2 border-1 border-black hover:bg-accent">詳細へ</Link>
            </div>
          </article>
        </section>
      </div>
      {/* スポンサー */}
      <div className="">
        <PartnerSection />
      </div>

      {/* お知らせ　 */}
      <div className="container py-10 space-y-6">
        <h1 className="text-3xl font-bold mb-6">お知らせ</h1>

        <div className="space-y-4">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="flex items-center gap-4 p-5 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="w-[20%] h-28 relative rounded overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="w-[50%]">
                <p className="font-bold text-lg">{item.title}</p>
                <small className="text-gray-500">{item.date}</small>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/news"
          className="mx-auto block text-center w-[20%] p-4 border border-black rounded hover:bg-gray-100 transition"
        >
          詳細はこちらから
        </Link>
      </div>
      {/* 採用情報 */}
      <div className="container w-full space-y-20">
        <h1 className="text-3xl my-6 py-5">採用情報</h1>
        <Image
          alt='リクルート画像'
          width={200}
          height={150}
          src="/school.png"
          className="w-1/2 object-cover mx-auto block" />
        <h1 className="text-center text-4xl text-gray-700">最高なチームで誰もが自由にもっとシンプルな社会をつくる</h1>
        <p className="text-1xl text-center w-1/2 mx-auto text-gray-700">
          KANOA GROUPでは裁量権を持って事業を推し進めていける方を募集しております。<br></br>
          リーダーとしてチームを引っ張っていきたい方、エンジニアを目指している方、上昇志向のある学生、新規事業の企画開発に興味のある方はぜひお問い合わせください。
        </p>
        <Link className="mx-auto block text-center w-[20%] p-4 border-1 border-black hover:bg-accent" href="/recruitment">詳細はこちらから</Link>
      </div>
      <Mission />
      {/* お問い合わせ */}
      <ForContact />
      <div className="w-full">
        <RenderModel>
          <WorldModel position={[2, 0, 0]} />
        </RenderModel>
      </div>
    </>




  );
}
