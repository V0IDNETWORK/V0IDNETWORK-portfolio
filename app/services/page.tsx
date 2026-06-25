import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Penetration testing, security audits, secure software development, mobile development, and Web3 services.',
};

export default function ServicesPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Capabilities Offered'}</div>
        <h2>Services & <span className="grad-c-p">Solutions</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          From penetration testing to full-stack development — comprehensive solutions for the modern digital
          landscape.
        </p>
        <div className="svc-grid" style={{ marginTop: 40 }}>
          {SERVICES.map((s) => (
            <div className="svc-card" key={s.title}>
              <div className="svc-num">{s.num}</div>
              <span className="svc-icon" aria-hidden="true">{s.icon}</span>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-feats">
                {s.feats.map((f) => (
                  <div className="svc-feat" key={f}>{f}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cta-box">
          <h3 style={{ fontSize: 22, marginBottom: 10 }}>Ready to secure your systems?</h3>
          <p style={{ color: 'var(--m)', marginBottom: 22, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', fontSize: 14 }}>
            Let&apos;s discuss your security needs and how I can help protect your assets and build robust,
            secure software.
          </p>
          <Link href="/contact" className="btn btn-c">Establish Contact →</Link>
        </div>
      </div>
    </div>
  );
}
