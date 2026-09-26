import type { APIRoute } from "astro";
import { servicePages } from "../data/servicePages";

const pages = [
  { path: "", priority: "1.0" },
  { path: "especialidades/", priority: "0.8" },
  ...servicePages.map((page) => ({ path: `especialidades/${page.slug}/`, priority: "0.8" })),
  { path: "testimonios/", priority: "0.6" },
];

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map(({ path, priority }) => {
      const loc = new URL(path, site).toString();
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
