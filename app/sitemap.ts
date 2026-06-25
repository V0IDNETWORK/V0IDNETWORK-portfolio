import { MetadataRoute } from 'next';
import { NAV_ITEMS, SITE } from '@/data/site-data';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Array.from(new Set(NAV_ITEMS.map((n) => n.href))).map((href) => ({
    url: `${SITE.url}${href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: href === '/' ? 1 : 0.7,
  }));

  const postRoutes = getAllSlugs().map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
