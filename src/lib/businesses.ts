import type { Business } from "@/lib/placeholder-businesses";
import { placeholderBusinesses } from "@/lib/placeholder-businesses";

// Falls back to placeholder data under plain `next dev`, where the
// cloudflare:workers binding isn't available (use `npm run dev:vinext` for D1).
export async function getFeaturedBusinesses(): Promise<Business[]> {
  try {
    const { env } = await import("cloudflare:workers");
    const { results } = await env.goodboys_db
      .prepare(
        "SELECT id, name, category, owner_name as ownerName, description, photo_key as photoKey FROM businesses ORDER BY created_at DESC",
      )
      .all<Business>();
    return results;
  } catch {
    return placeholderBusinesses;
  }
}

export type NewBusiness = {
  name: string;
  category: string;
  ownerName: string;
  description: string;
  photoKey: string | null;
};

export async function insertBusiness(business: NewBusiness): Promise<void> {
  const { env } = await import("cloudflare:workers");
  await env.goodboys_db
    .prepare(
      "INSERT INTO businesses (id, name, category, owner_name, description, photo_key) VALUES (?, ?, ?, ?, ?, ?)",
    )
    .bind(
      crypto.randomUUID(),
      business.name,
      business.category,
      business.ownerName,
      business.description,
      business.photoKey,
    )
    .run();
}
