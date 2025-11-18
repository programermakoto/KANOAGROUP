// app/news/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getAllNews } from "../../lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">お知らせ</h1>

      <div className="space-y-4">
        {news.map(item => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="w-1/4 h-28 relative rounded overflow-hidden bg-gray-100">
              <Image src={item.image} alt={item.title} fill style={{objectFit:"cover"}} />
            </div>

            <div className="w-3/4">
              <p className="font-bold text-lg">{item.title}</p>
              <small className="text-gray-500">{item.date}</small>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
