const FIREBASE_AUTH_ORIGIN = 'https://vibespace-370d3.firebaseapp.com';

export async function onRequest({ request }) {
  const requestUrl = new URL(request.url);
  const targetUrl = new URL(`${requestUrl.pathname}${requestUrl.search}`, FIREBASE_AUTH_ORIGIN);

  const proxyRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual',
  });

  const response = await fetch(proxyRequest);
  const headers = new Headers(response.headers);
  const location = headers.get('location');

  if (location) {
    headers.set('location', location.replace(FIREBASE_AUTH_ORIGIN, requestUrl.origin));
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
