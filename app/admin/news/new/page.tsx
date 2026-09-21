import NewsForm from "../NewsForm";
import { createNews } from "../actions";

export default function NewNewsPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">お知らせを新規作成</h1>
      <NewsForm action={createNews} submitLabel="作成する" />
    </div>
  );
}
