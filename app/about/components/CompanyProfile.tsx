import Link from "next/link";

export default function CompanyProfile() {
  return (
    <section id="about" className="pt-[10%] container space-y-8">
      <h2 className="w-[50%] text-2xl md:text-4xl font-bold border-b-2 border-black text-gray-700">
        会社概要
      </h2>
      <small className="block w-[50%] text-sm text-gray-700">
        Company Profile
      </small>

      <div className="space-y-3">

        {/* 各行：SP 最適化、PC はそのまま */}
        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center text-gray-700">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            社名 （商号）
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left">
            株式会社KANOA GROUP
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border text-center md:text-left">
            コーポレートサイト
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left break-words">
            https://kanoa-group.com
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            設立年月日
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left">
            2024年7月22日
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            本社所在地
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left break-words">
            <Link href="https://share.google/z6cwJyIVR4h2igtNO">
              大阪府大阪市 港区弁天1-2-1 BEI-Tower
            </Link>
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            代表電話番号
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left">
            050-8887-2035
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            代表者名
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left">
            <Link href="https://next-js-creative-portfolio-website.vercel.app/">
              寺内誠将
            </Link>
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            資本金
          </p>
          <p className="p-2 w-full md:w-3/4 border text-center md:text-left">
            10,000,000円
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            事業内容
          </p>
          <p className="p-2 w-full md:w-3/4 border text-left">
            【IT教育】<br />
            ・プログラミングスクール<br />
            ・アプリ教育[GK-U]<br /><br />

            【WEB制作】<br />
            ・ホームページ制作<br />
            ・システム・アプリ開発<br /><br />

            【通信インフラ】<br />
            ・宅内光ファイバー業務<br />
            ・電気通信工事<br />
          </p>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row md:justify-around md:items-center">
          <p className="bg-gray-200 p-2 w-full md:w-1/4 border border-gray-300 text-center md:text-left">
            公式LINE
          </p>
          <p className="p-2 w-full md:w-3/4 border break-words text-center md:text-left">
            <Link href="https://page.line.me/527qtybu?oat_content=url&openQrModal=true">
              公式LINEはKANOAGROUPの全事業の統括者が管理してますので全て質問可能です
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
