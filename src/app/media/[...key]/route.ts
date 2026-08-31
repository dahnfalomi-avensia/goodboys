export async function GET(_request: Request, { params }: { params: Promise<{ key: string[] }> }) {
  const { key } = await params;
  const objectKey = key.join("/");

  if (objectKey.includes("..")) {
    return new Response("Invalid key", { status: 400 });
  }

  try {
    const { env } = await import("cloudflare:workers");
    const object = await env.goodboys_media.get(objectKey);
    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(object.body as unknown as ReadableStream, {
      headers: {
        "Content-Type": object.httpMetadata?.contentType ?? "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Media unavailable in this dev mode", { status: 503 });
  }
}
