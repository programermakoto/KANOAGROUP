type NewsFormValues = {
  title?: string;
  date?: string;
  description?: string;
  body?: string;
  image?: string;
};

export default function NewsForm({
  action,
  initialData,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  initialData?: NewsFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">タイトル</label>
        <input
          name="title"
          type="text"
          required
          defaultValue={initialData?.title}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">日付</label>
        <input
          name="date"
          type="date"
          required
          defaultValue={initialData?.date}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">説明文（一覧に表示される短い文章）</label>
        <textarea
          name="description"
          required
          rows={2}
          defaultValue={initialData?.description}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">本文</label>
        <textarea
          name="body"
          required
          rows={8}
          defaultValue={initialData?.body}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          画像{initialData?.image ? "（変更する場合のみ選択）" : ""}
        </label>
        {initialData?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={initialData.image} alt="現在の画像" className="w-40 h-24 object-cover rounded mb-2" />
        )}
        <input
          name="image"
          type="file"
          accept="image/*"
          required={!initialData?.image}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-full px-8 py-3 text-white font-semibold bg-sky-600 hover:bg-orange-500 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
}
