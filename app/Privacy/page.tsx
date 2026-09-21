import type { Metadata } from "next";
import Mission from '@/components/Mission'
import React from 'react'

export const metadata: Metadata = {
  title: "個人情報保護方針・利用規約",
  description:
    "KANOA GROUPの個人情報保護方針（プライバシーポリシー）および利用規約のご案内。お客様の個人情報の取り扱いとサービス利用条件について定めています。",
  alternates: {
    canonical: "https://kanoa-group.com/Privacy",
  },
};

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8 md:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
        個人情報規約（Privacy &amp; Terms）
      </h1>

      <p className="text-sm sm:text-base leading-relaxed text-gray-700">
        株式会社KANOA GROUP（以下「当社」といいます）は、当社が運営するウェブサイト「KANOA
        GROUP」（
        <span className="break-all">https://kanoa-group.com</span>
        、以下「本サイト」といいます）および本サイトを通じて提供する各種サービス（以下「本サービス」といいます）における、お客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシーおよび利用規約を定めます。
      </p>

      {/* ===== プライバシーポリシー ===== */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">プライバシーポリシー（Privacy Policy）</h2>

        <h3 className="text-lg sm:text-xl font-medium mt-4">1. 事業者情報</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>事業者名：株式会社KANOA GROUP</li>
          <li>代表者：寺内 誠将</li>
          <li>所在地：大阪府大阪市港区弁天1-2-1</li>
          <li>電話番号：050-8887-2035</li>
          <li>
            お問い合わせ窓口：
            <a href="/contact" className="text-sky-600 hover:underline">
              お問い合わせフォーム
            </a>
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">2. 取得する個人情報</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、お問い合わせフォームのご利用その他本サービスのご利用にあたり、以下の情報を取得する場合があります。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>氏名（漢字・フリガナ）</li>
          <li>メールアドレス</li>
          <li>電話番号</li>
          <li>お勤め先・所属会社名およびウェブサイトのURL（任意でご提供いただいた場合）</li>
          <li>お問い合わせ内容、ご相談内容、当サイトを知った経緯</li>
          <li>採用エントリーの場合、履歴書・職務経歴書等に記載の情報</li>
          <li>その他、お客様が入力・送信された情報</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">3. 取得方法</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、本サイト内のお問い合わせフォーム、採用エントリー、電話、公式LINEその他のお問い合わせ手段を通じて、お客様ご本人から直接ご提供いただく方法により個人情報を取得します。適法かつ公正な手段によらない方法で個人情報を取得することはありません。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">4. 利用目的</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、取得した個人情報を以下の目的の範囲内で利用します。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>お問い合わせ・ご相談への回答、必要な連絡のため</li>
          <li>
            当社が提供する各事業（ホームページ制作・LP制作｜ECサイト制作・システム／アプリ開発、AI教育スクール・社会人向け教育アプリ、宅内光ファイバー業務・電気通信工事・ライフライン切替案内、代理店募集など）に関するご案内・お見積り・契約手続きのため
          </li>
          <li>採用エントリーの選考・連絡のため</li>
          <li>本サービスの維持・改善、新サービスの検討のため</li>
          <li>利用規約に違反する行為への対応、不正利用の防止のため</li>
          <li>法令に基づく対応が必要な場合の対応のため</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">5. 第三者提供</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、以下のいずれかに該当する場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">6. 業務委託・外部サービスの利用</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、お問い合わせフォームの送信処理にあたり、外部のメール配信サービス（EmailJS
          等）を利用しています。これらのサービス提供事業者に対しては、利用目的の達成に必要な範囲内で個人情報を取り扱わせるものとし、各事業者のプライバシーポリシーに基づき適切に管理されます。今後、業務委託先やサービス提供事業者を追加・変更する場合は、本ポリシーを改定のうえ公表します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">7. Cookie・アクセス解析等について</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本サイトの一部機能では、お客様の利便性向上（トップページ表示時の演出を短期間で再表示しないようにする設定等）のため、ブラウザのローカルストレージを利用する場合があります。これらは個人を特定する情報を含みません。現時点で、本サイトは広告配信や第三者によるアクセス解析目的のCookieを使用していませんが、今後導入する場合は本ポリシーを改定のうえ公表します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">8. 安全管理措置</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、取得した個人情報の紛失、破壊、改ざんおよび漏えい等を防止するため、必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う従業員および委託先に対して、必要かつ適切な監督を行います。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">9. 個人情報の開示・訂正・利用停止等の請求</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          お客様ご本人から、個人情報保護法に基づき保有個人データの開示・訂正・追加・削除・利用停止・消去および第三者提供の停止（以下「開示等」といいます）のご請求があった場合には、ご本人であることを確認のうえ、法令に従い遅滞なく対応いたします。ご請求は下記お問い合わせ窓口までご連絡ください。なお、所定の確認手続きにご協力いただけない場合や、法令上開示等の義務を負わない場合には、その旨をご説明します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">10. 未成年者に関する取り扱い</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          18歳未満の方が本サービスをご利用になる場合は、あらかじめ親権者等法定代理人の同意を得たうえでご利用ください。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">11. プライバシーポリシーの改定</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、法令の変更や事業内容の変更等に応じて、本ポリシーの内容を予告なく改定することがあります。改定後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">12. お問い合わせ窓口</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本ポリシーに関するお問い合わせ、または個人情報の開示等のご請求は、下記までご連絡ください。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>株式会社KANOA GROUP</li>
          <li>所在地：大阪府大阪市港区弁天1-2-1</li>
          <li>電話番号：050-8887-2035</li>
          <li>
            お問い合わせフォーム：
            <a href="/contact" className="text-sky-600 hover:underline">
              https://kanoa-group.com/contact
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* ===== 利用規約 ===== */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">利用規約（Terms of Service）</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          本規約は、株式会社KANOA
          GROUP（以下「当社」といいます）が本サイトを通じて提供する本サービスの利用条件を定めるものです。お客様（以下「ユーザー」といいます）には、本規約に同意のうえ本サービスをご利用いただきます。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第1条（適用）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。当社が本サイト上で掲載する各種ルール等は本規約の一部を構成します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第2条（本サービスの内容）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、本サイトを通じて主に以下の事業に関する情報提供およびお問い合わせ対応を行います。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>WEB制作（ホームページ制作、LP制作｜ECサイト制作、システム・アプリ開発）</li>
          <li>IT教育（AI教育スクール、社会人向け教育アプリ）</li>
          <li>通信インフラ（宅内光ファイバー業務、電気通信工事、ライフライン切替案内、営業代行）</li>
          <li>採用情報の提供およびエントリー受付</li>
          <li>代理店募集（Cloud Pocket）</li>
        </ul>
        <p className="text-sm sm:text-base leading-relaxed">
          各サービスの個別の契約条件（料金、納期、保守内容等）については、別途当社とユーザーとの間で締結する個別契約または見積書等の定めによるものとし、当該定めが本規約と異なる場合は個別契約の定めが優先されます。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第3条（お問い合わせ・お申し込み）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          ユーザーは、本サイトのお問い合わせフォーム、電話、公式LINEその他当社が指定する方法により、本サービスに関するお問い合わせまたはお申し込みを行うものとします。ユーザーが送信した情報に虚偽、誤記または記載漏れがあったことにより生じた損害について、当社は責任を負いません。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第4条（禁止事項）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed">
          <li>法令または公序良俗に反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当社、他のユーザーまたは第三者の権利・利益を侵害する行為</li>
          <li>不正アクセス、情報の改ざん、サーバーまたはネットワークの機能を破壊・妨害する行為</li>
          <li>虚偽の情報を登録・送信する行為</li>
          <li>本サービスを通じて得た情報を、目的外に利用または第三者に提供する行為</li>
          <li>その他、当社が不適切と合理的に判断する行為</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第5条（本サービスの提供の停止等）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、以下のいずれかに該当する場合には、ユーザーへの事前の通知なく本サービスの全部または一部の提供を停止または中断できるものとします。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed">
          <li>本サイトのシステムの保守点検または更新を行う場合</li>
          <li>地震、落雷、火災、停電または天災などの不可抗力により本サービスの提供が困難となった場合</li>
          <li>コンピュータまたは通信回線等が事故により停止した場合</li>
          <li>その他、当社が本サービスの提供が困難と判断した場合</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第6条（保証の否認および免責事項）</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed">
          <li>
            当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性等に関する欠陥、エラーやバグ、権利侵害等を含みます）がないことを明示的にも黙示的にも保証しません。
          </li>
          <li>
            当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
          </li>
          <li>
            当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第7条（知的財産権）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本サイトおよび本サイトに掲載するコンテンツ（文章、画像、ロゴ、デザイン、プログラム等）に関する著作権、商標権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。当社の事前の承諾なく、これらを複製、転用、改変、頒布その他の方法により利用することを禁止します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第8条（利用制限）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、ユーザーが本規約のいずれかの条項に違反した場合、事前の通知なく、当該ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはお問い合わせ・お申し込みをお断りすることができるものとします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第9条（秘密保持）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社およびユーザーは、本サービスに関連して知り得た相手方の技術上、営業上その他の秘密情報を、相手方の事前の書面または電磁的方法による承諾を得ることなく、第三者に開示または漏えいしてはならず、本サービスの目的以外に利用してはならないものとします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第10条（本規約の変更）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、必要と判断した場合には、ユーザーへの事前の通知なく本規約を変更することができるものとします。変更後の利用規約は、本ページに掲載した時点から効力を生じるものとし、変更後に本サービスを利用したユーザーは、変更後の規約に同意したものとみなします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第11条（準拠法・裁判管轄）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-gray-500 pt-4">
          制定日：2024年7月22日／最終改定日：2026年9月22日
        </p>
      </section>
      <Mission/>
    </div>
  )
}
