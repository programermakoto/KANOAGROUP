import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { getAllNews } from "@/lib/news";
import { deleteNews } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const items = await getAllNews();

  return (
    <div className="container py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          お知らせ管理
        </h1>
        <UserButton />
      </div>

      <Link
        href="/admin/news/new"
        className="inline-block rounded-full px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-orange-500 transition"
      >
        + 新規作成
      </Link>

      <div className="space-y-4">
        {items.length === 0 && (
          <p className="text-gray-500">まだお知らせがありません。</p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg border border-gray-100 shadow-sm"
          >
            <div className="w-full sm:w-32 h-20 relative rounded overflow-hidden bg-gray-100 flex-shrink-0">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} sizes="128px" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <small className="text-gray-500">{item.date}</small>
              <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/admin/news/${item.id}/edit`}
                className="px-4 py-2 rounded-md text-sm text-white bg-sky-600 hover:bg-orange-500 transition"
              >
                編集
              </Link>
              <form
                action={async () => {
                  "use server";
                  await deleteNews(Number(item.id), item.image);
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm text-white bg-red-500 hover:bg-red-600 transition"
                >
                  削除
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
