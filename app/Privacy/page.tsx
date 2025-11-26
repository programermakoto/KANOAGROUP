import Mission from '@/components/Mission'
import React from 'react'

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8 md:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
        個人情報規約（Privacy & Terms）
      </h1>

      <p className="text-sm sm:text-base leading-relaxed text-gray-700">
        以下は、サービス利用者向けの一般的な「個人情報保護方針（プライバシーポリシー）」および「利用規約」のサンプルです。
        事業内容や法的要件に合わせて適宜修正してください。
      </p>

      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">プライバシーポリシー（Privacy Policy）</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          当社（以下「当社」といいます）は、提供する各種サービス（以下「本サービス」といいます）において取得する個人情報の重要性を認識し、以下の方針に基づき適切に保護・管理いたします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">1. 取得する情報</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>氏名、住所、メールアドレス、電話番号などの連絡先情報</li>
          <li>決済に必要な情報</li>
          <li>サービス利用履歴、アクセスログ、Cookie等の技術情報</li>
          <li>その他、利用目的の達成に必要な情報</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">2. 利用目的</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>本サービス提供・運営のため</li>
          <li>ユーザーサポートのため</li>
          <li>各種案内・マーケティングのため</li>
          <li>利用規約に違反する行為への対応</li>
          <li>サービス改善および新サービス開発のため</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">3. 第三者提供</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">4. 安全管理措置</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          取得した情報へ不正アクセス・紛失・改ざん・漏えいが生じないよう、適切な安全管理措置を講じます。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">5. 共同利用</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          必要に応じて、当社グループ内で個人情報を共同利用する場合があります。その際は利用目的を明示します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">6. 個人情報の開示・訂正・削除</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本人からの開示・訂正・削除の請求があった場合は、法令に基づき速やかに対応します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">7. プライバシーポリシーの変更</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          必要に応じて本ポリシーを改定する場合があります。改定後の内容は本ページにて公表します。
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">利用規約（Terms of Service）</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          本規約は、当社が提供する本サービスの利用条件を定めるものです。ユーザーは本規約に同意した上でサービスを利用するものとします。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第1条（適用）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本規約は、ユーザーと当社との間の本サービス利用に関わる一切の関係に適用されます。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第2条（禁止事項）</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed">
          <li>法令または公序良俗に反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>他のユーザー・第三者の権利を侵害する行為</li>
          <li>不正アクセス・情報改ざん・サーバー攻撃等</li>
          <li>当社が不適切と判断する行為</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第3条（サービスの提供・変更・停止）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          当社は、ユーザーへの事前通知なく、サービス内容の変更・停止を行う場合があります。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第4条（免責事項）</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed">
          <li>天災・通信障害その他不可抗力によりサービスが停止した場合、当社は責任を負いません。</li>
          <li>当社は、ユーザー間またはユーザーと第三者間で生じたトラブルについて一切責任を負いません。</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第5条（利用制限・登録抹消）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          ユーザーが本規約に違反した場合、当社は事前通知なく利用制限または登録抹消を行うことができます。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第6条（知的財産権）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本サービスに関する著作権・商標権その他の知的財産権は、当社または正当な権利者に帰属します。
        </p>

        <h3 className="text-lg sm:text-xl font-medium mt-4">第7条（準拠法・裁判管轄）</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          本規約は日本法を準拠法とし、当社所在地を管轄する裁判所を専属的合意管轄とします。
        </p>
      </section>
      <Mission/>
    </div>
  )
}
