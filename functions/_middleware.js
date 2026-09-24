/**
 * Cloudflare Pages Functions middleware — host-scoped crawl control.
 *
 * The static build serves identical dist output on every host bound to this
 * Pages project (the *.pages.dev deployment host AND any custom domain like
 * serverbannermaker.com). A `_headers` rule cannot distinguish hosts, so it
 * would noindex the ranking domain too. This middleware inspects the request
 * host at the edge and stamps `X-Robots-Tag: noindex, nofollow` ONLY on
 * *.pages.dev responses — the cross-domain dedup signal — while the canonical
 * ranking domain is left fully indexable.
 */
export async function onRequest(context) {
  const response = await context.next();
  const host = new URL(context.request.url).hostname;

  if (host.endsWith('.pages.dev')) {
    // Clone so we can mutate headers even when the asset response is immutable.
    const deduped = new Response(response.body, response);
    deduped.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return deduped;
  }

  return response;
}
