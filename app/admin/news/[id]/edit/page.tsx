import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/news";
import NewsForm from "../../NewsForm";
import { updateNews } from "../../actions";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item) notFound();

  const boundUpdateNews = updateNews.bind(null, Number(id));

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">お知らせを編集</h1>
      <NewsForm action={boundUpdateNews} initialData={item} submitLabel="更新する" />
    </div>
  );
}
