// app/news/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getAllNews, getNewsById } from "../../../lib/news";

export async function generateStaticParams() {
  const all = await getAllNews();
  return all.map(item => ({ id: item.id }));
}

export default async function NewsDetailPage({ params }) {
  const item = await getNewsById(params.id);
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">お知らせが見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/news" className="text-sm text-gray-500 inline-block mb-4">← 一覧へ戻る</Link>

      <article className="bg-white rounded-2xl shadow p-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <time className="text-sm text-gray-500">{item.date}</time>
        </header>

        <div className="mt-6">
          <div className="w-full h-64 md:h-96 bg-gray-100 overflow-hidden rounded-lg">
            <Image src={item.image} alt={item.title} width={1200} height={700} className="object-cover w-full h-full" />
          </div>

          <p className="mt-6 text-lg text-gray-700">{item.description}</p>

          <section className="mt-6 prose max-w-none text-gray-700">
            <p>{item.body}</p>
          </section>
        </div>
      </article>
    </div>
  );
}
