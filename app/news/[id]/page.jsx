// app/news/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getAllNews, getNewsById } from "../../../lib/news";

export const dynamicParams = false;

export async function generateStaticParams() {
  const all = await getAllNews();
  return all.map(item => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://kanoa-group.com/news/${id}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://kanoa-group.com/news/${id}`,
      siteName: "KANOA GROUP",
      images: [`https://kanoa-group.com${item.image}`],
      type: "article",
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;          // ← Promise を await
  const item = await getNewsById(id);   // ← ここが重要

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">お知らせが見つかりませんでした。</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    datePublished: item.date,
    dateModified: item.date,
    description: item.description,
    inLanguage: "ja",
    image: [`https://kanoa-group.com${item.image}`],
    author: {
      "@type": "Organization",
      "@id": "https://kanoa-group.com/#organization",
      name: "KANOA GROUP",
      url: "https://kanoa-group.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://kanoa-group.com/#organization",
      name: "KANOA GROUP",
      url: "https://kanoa-group.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kanoa-group.com/kanoa-logo.PNG",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kanoa-group.com/news/${id}`,
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/news" className="text-sm text-gray-500 inline-block mb-4">
        ← 一覧へ戻る
      </Link>

      <article className="bg-white rounded-2xl shadow p-6">
        <header className="space-y-2">
          <h1 className="text-xl md:text-3xl font-bold">{item.title}</h1>
          <time className="text-sm text-gray-500">{item.date}</time>
        </header>

        <div className="mt-6">
          <div className="w-full h-64 md:h-96 bg-gray-100 overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="mt-6 text-xl font-bold md:text-lg text-gray-700">
            {item.description}
          </p>

          <section className="mt-6 prose max-w-none text-gray-700">
            <p className="leading-loose">{item.body}</p>
          </section>
        </div>
      </article>
    </div>
  );
}
