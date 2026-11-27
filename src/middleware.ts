import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (context.isPrerendered) return response;
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  if (context.url.pathname === '/widgets/embed/') {
    response.headers.delete('X-Frame-Options');
  } else {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  }
  return response;
});
