"use server";

import { auth } from "@clerk/nextjs/server";
import { put, del } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { news } from "@/lib/db/schema";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
}

async function uploadImage(file: File) {
  const blob = await put(`news/${Date.now()}-${file.name}`, file, {
    access: "public",
  });
  return blob.url;
}

function revalidateNews(id?: string) {
  revalidatePath("/");
  revalidatePath("/news");
  if (id) revalidatePath(`/news/${id}`);
}

export async function createNews(formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const imageFile = formData.get("image") as File | null;

  if (!title || !date || !description || !body || !imageFile || imageFile.size === 0) {
    throw new Error("すべての項目を入力し、画像を選択してください。");
  }

  const imageUrl = await uploadImage(imageFile);

  const db = getDb();
  await db.insert(news).values({ title, date, description, body, image: imageUrl });

  revalidateNews();
  redirect("/admin/news");
}

export async function updateNews(id: number, formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const imageFile = formData.get("image") as File | null;

  if (!title || !date || !description || !body) {
    throw new Error("すべての項目を入力してください。");
  }

  const db = getDb();
  const updates: Partial<typeof news.$inferInsert> = {
    title,
    date,
    description,
    body,
    updatedAt: new Date(),
  };

  if (imageFile && imageFile.size > 0) {
    updates.image = await uploadImage(imageFile);
  }

  await db.update(news).set(updates).where(eq(news.id, id));

  revalidateNews(String(id));
  redirect("/admin/news");
}

export async function deleteNews(id: number, imageUrl: string) {
  await requireAdmin();

  const db = getDb();
  await db.delete(news).where(eq(news.id, id));

  if (imageUrl.includes("blob.vercel-storage.com")) {
    await del(imageUrl).catch(() => {});
  }

  revalidateNews(String(id));
}
