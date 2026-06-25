import type { Metadata } from 'next';
import { CERTS, TOOLS } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Formal certifications, completed courses, and professional training in cybersecurity and software development.',
};

export default function CertificationsPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Credentials & Training'}</div>
        <h2>Certifications & <span className="grad-c-p">Credentials</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Formal certifications, completed courses, and professional training in cybersecurity and software
          development.
        </p>
        <div className="cert-grid" style={{ marginTop: 40 }}>
          {CERTS.map((c) => (
            <div className="cert-card" key={c.name}>
              <span className="cert-icon" aria-hidden="true">{c.icon}</span>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-year">{c.year}</div>
              <span className={`cert-badge ${c.done ? 'cert-done' : 'cert-wip'}`}>
                {c.done ? '✓ Completed' : '◈ In Progress'}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 52 }}>
          <div className="eyebrow">{'// Security Toolchain'}</div>
          <h3 style={{ marginBottom: 20 }}>Tools & Platforms</h3>
          <div className="tool-grid">
            {TOOLS.map((t) => (
              <div className="tool-card" key={t.name}>
                <div className="tool-name">{t.name}</div>
                <div className="tool-cat">{t.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
