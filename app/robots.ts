import { MetadataRoute } from 'next';
import { SITE } from '@/data/site-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
