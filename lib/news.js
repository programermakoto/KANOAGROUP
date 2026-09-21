// lib/news.js
import { getDb } from "./db";
import { news } from "./db/schema";
import { eq, desc } from "drizzle-orm";

function toNewsItem(row) {
  return {
    id: String(row.id),
    title: row.title,
    date: row.date,
    image: row.image,
    description: row.description,
    body: row.body,
  };
}

export async function getAllNews() {
  const db = getDb();
  const rows = await db.select().from(news).orderBy(desc(news.date));
  return rows.map(toNewsItem);
}

export async function getNewsById(id) {
  const db = getDb();
  const rows = await db.select().from(news).where(eq(news.id, Number(id)));
  return rows[0] ? toNewsItem(rows[0]) : null;
}
