
import Link from "next/link";


export default function CompanyProfile() {
  return (
    <section id="about" className="pt-[10%] container space-y-8">
      <h2 className="w-[50%] text-4xl font-bold border-b-2 border-black text-gray-700">会社概要</h2>
      <small className="block w-[50%] text-sm text-gray-700">Company Profile</small>
      <div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1 text-gray-700">
          <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">社名 （商号）</p>
          <p className="p-2 w-3/4 border">株式会社KANOA GROUP</p>
        </div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
          <p className="bg-gray-200 p-2 w-1/4 border">コーポレートサイト</p>
          <p className="p-2 w-3/4 border">https://kanoa-group.com</p>
        </div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
          <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">設立年月日</p>
          <p className="p-2 w-3/4 border">2024年7月22日</p>
        </div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
          <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">本社所在地</p>
          <p className="p-2 w-3/4 border">
            <Link href="https://share.google/z6cwJyIVR4h2igtNO">大阪府大阪市 港区 弁天1-2-1 BEI-Tower</Link></p>
        </div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
          <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">代表電話番号</p>
          <p className="p-2 w-3/4 border">050-8887-2035</p>
        </div>
        <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
          <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">代表者名</p>
          <p className="p-2 w-3/4 border">
            <Link href="https://next-js-creative-portfolio-website.vercel.app/">寺内誠将</Link></p>
      </div>
      <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
        <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">資本金</p>
        <p className="p-2 w-3/4 border">10,000,000円</p>
      </div>
      <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
        <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">事業内容</p>
        <p className="p-2 w-3/4 border">・宅内光ファイバー設置業務<br></br>・プログラミングスクール<br></br>・システム開発<br></br>・アプリケーション開発<br></br>・ホームページ制作と保守</p>
      </div>
      <div className="w-2/3 mx-auto flex justify-around items-center space-y-1">
        <p className="bg-gray-200 p-2 w-1/4 border border-gray-300">公式LINE</p>
        <p className="p-2 w-3/4 border">
          <Link href=" https://page.line.me/527qtybu?oat_content=url&openQrModal=true"> https://page.line.me/527qtybu?oat_content=url&openQrModal=true</Link>
        </p>
      </div>
    </div>
    </section >

  );
}
