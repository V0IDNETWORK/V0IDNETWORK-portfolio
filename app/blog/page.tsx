import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Field notes on offensive security, secure software architecture, and Web3 security research.',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Field Notes'}</div>
        <h2>Security <span className="grad-c-p">Blog</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Notes on offensive security, secure software architecture, and Web3 security research.
        </p>
        <div className="blog-grid" style={{ marginTop: 40 }}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              <div className="blog-card-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingTime}</span>
              </div>
              <div className="blog-card-title">{post.title}</div>
              <div className="blog-card-excerpt">{post.excerpt}</div>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-m" style={{ marginTop: 24 }}>No posts published yet — check back soon.</p>
        )}
      </div>
    </div>
  );
}
