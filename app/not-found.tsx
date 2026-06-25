import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Signal Lost',
};

export default function NotFound() {
  return (
    <div className="wrap">
      <div className="not-found-wrap">
        <div className="eyebrow">{'// Error 404'}</div>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)' }}>
          Signal <span className="grad-c-p">Lost</span>
        </h1>
        <p className="text-m" style={{ maxWidth: 460 }}>
          The route you requested doesn&apos;t exist on this system, or has been moved. Return to a known
          coordinate below.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-c">Return Home</Link>
          <Link href="/contact" className="btn btn-outline">Establish Contact</Link>
        </div>
      </div>
    </div>
  );
}
