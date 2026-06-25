import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { SITE } from '@/data/site-data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `${SITE.url}/blog/${post.slug}`,
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="blog-post">
          <Link href="/blog" className="proj-link" style={{ display: 'inline-block', marginBottom: 24 }}>
            ← Back to Blog
          </Link>
          <div className="eyebrow">{'// Field Notes'}</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: 16 }}>{post.title}</h1>
          <div className="blog-post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingTime}</span>
            <span>{post.tags.join(' · ')}</span>
          </div>
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
}
