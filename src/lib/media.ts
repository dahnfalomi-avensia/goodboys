export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

const EXTENSION_BY_CONTENT_TYPE: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export function isSupportedPhoto(file: File): boolean {
  return file.type in EXTENSION_BY_CONTENT_TYPE && file.size > 0 && file.size <= MAX_PHOTO_BYTES;
}

export async function uploadBusinessPhoto(file: File): Promise<string> {
  const { env } = await import("cloudflare:workers");
  const extension = EXTENSION_BY_CONTENT_TYPE[file.type];
  const key = `businesses/${crypto.randomUUID()}.${extension}`;
  await env.goodboys_media.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });
  return key;
}
