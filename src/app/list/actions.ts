"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { insertBusiness } from "@/lib/businesses";
import { isSupportedPhoto, uploadBusinessPhoto, MAX_PHOTO_BYTES } from "@/lib/media";

const MAX_LENGTHS = {
  name: 80,
  category: 40,
  ownerName: 60,
  description: 500,
};

function readField(formData: FormData, field: string, maxLength: number): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function createBusiness(formData: FormData) {
  const name = readField(formData, "name", MAX_LENGTHS.name);
  const category = readField(formData, "category", MAX_LENGTHS.category);
  const ownerName = readField(formData, "ownerName", MAX_LENGTHS.ownerName);
  const description = readField(formData, "description", MAX_LENGTHS.description);

  if (!name || !category || !ownerName || !description) {
    redirect(`/list?error=${encodeURIComponent("Please fill in every field.")}`);
  }

  const photo = formData.get("photo");
  const hasPhoto = photo instanceof File && photo.size > 0;

  if (hasPhoto && !isSupportedPhoto(photo)) {
    redirect(
      `/list?error=${encodeURIComponent(
        `Photo must be a JPEG, PNG, WEBP, or GIF under ${MAX_PHOTO_BYTES / (1024 * 1024)}MB.`,
      )}`,
    );
  }

  try {
    const photoKey = hasPhoto ? await uploadBusinessPhoto(photo) : null;
    await insertBusiness({ name, category, ownerName, description, photoKey });
  } catch {
    redirect(
      `/list?error=${encodeURIComponent("Listings need the Cloudflare dev server — run npm run dev:vinext.")}`,
    );
  }

  revalidatePath("/");
  redirect("/?listed=1");
}
