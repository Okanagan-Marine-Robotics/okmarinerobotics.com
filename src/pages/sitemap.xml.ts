import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { pagePath } from '../lib/content';

export const GET: APIRoute = async ({ site }) => {
  const pages = await getCollection('pages', page => page.id !== '404');
  const paths = pages.map(({ id }) => pagePath(id)).sort();

  return new Response([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map(path => '  <url><loc>' + new URL(path, site).href + '</loc></url>'),
    '</urlset>',
    '',
  ].join('\n'), { headers: { 'Content-Type': 'application/xml' } });
};
