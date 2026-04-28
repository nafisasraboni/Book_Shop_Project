export async function onRequestGet() {
  return Response.json({
    ok: true,
    message: 'Cloudflare Pages Functions API is ready',
    runtime: 'cloudflare-pages-functions',
  });
}
