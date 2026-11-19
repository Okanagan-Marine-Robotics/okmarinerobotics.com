import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { pagePaths, renderDocument, renderSitemap, robotsTxt } from './src/site.ts';

function staticPages(): Plugin {
  return {
    name: 'okmr-static-pages',
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const index = bundle['index.html'];
        if (index?.type !== 'asset' || typeof index.source !== 'string') {
          this.error('The Vite HTML template is missing from the build.');
        }

        const template = index.source;
        index.source = renderDocument(template, '/');

        for (const path of [...pagePaths.filter(path => path !== '/'), '/404']) {
          this.emitFile({
            type: 'asset',
            fileName: `${path.slice(1)}.html`,
            source: renderDocument(template, path),
          });
        }

        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: renderSitemap() });
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt });
      },
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') return next();
          try {
            const path = new URL(req.url ?? '/', 'http://localhost').pathname.replace(/\/$/, '') || '/';
            const site = await server.ssrLoadModule('/src/site.ts') as typeof import('./src/site.ts');
            if (path === '/sitemap.xml' || path === '/robots.txt') {
              const isSitemap = path === '/sitemap.xml';
              res.setHeader('Content-Type', isSitemap ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
              return res.end(isSitemap ? site.renderSitemap() : site.robotsTxt);
            }

            if (!site.pagePaths.includes(path) && req.headers.accept && !req.headers.accept.includes('text/html') && !req.headers.accept.includes('*/*')) return next();

            const template = await readFile(resolve(server.config.root, 'index.html'), 'utf8');
            const html = await server.transformIndexHtml(path, site.renderDocument(template, path));
            res.statusCode = site.pagePaths.includes(path) ? 200 : 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(html);
          } catch (error) {
            next(error);
          }
        });
      };
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = new URL(req.url ?? '/', 'http://localhost');
        const path = url.pathname.replace(/\/$/, '') || '/';
        if (pagePaths.includes(path)) {
          req.url = `${path === '/' ? '/index' : path}.html${url.search}`;
        }
        next();
      });

      return () => {
        server.middlewares.use(async (req, res, next) => {
          if ((req.method !== 'GET' && req.method !== 'HEAD') || (req.headers.accept && !req.headers.accept.includes('text/html') && !req.headers.accept.includes('*/*'))) {
            return next();
          }
          try {
            const html = await readFile(resolve(server.config.root, server.config.build.outDir, '404.html'), 'utf8');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(html);
          } catch (error) {
            next(error);
          }
        });
      };
    },
  };
}

export default defineConfig({
  appType: 'custom',
  plugins: [staticPages()],
});
