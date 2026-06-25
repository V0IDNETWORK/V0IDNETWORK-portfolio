import type { Metadata } from 'next';
import { SITE } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ilya — cybersecurity engineer, penetration tester, and software developer.',
};

const VALUES = [
  { icon: '🎯', title: 'Offensive Mindset', desc: 'Think like an attacker to defend like a professional.' },
  { icon: '🔬', title: 'Research-Driven', desc: 'Continuous learning in an ever-evolving threat landscape.' },
  { icon: '⚡', title: 'Speed & Precision', desc: 'Rapid delivery without compromising security or reliability.' },
  { icon: '⛓️', title: 'Web3 Forward', desc: 'Building for the decentralized future of the internet.' },
];

const TIMELINE = [
  {
    year: '2024 — Present',
    title: 'Senior Security Researcher & Developer',
    desc: 'Leading penetration testing engagements, developing security tools, and conducting Web3 security research under the V0IDNETWORK organization. Advanced offensive security operations.',
  },
  {
    year: '2022 — 2024',
    title: 'Full Stack & Mobile Developer',
    desc: 'Built enterprise-grade applications using Flutter and Python. Integrated AI/ML capabilities including facial recognition, NLP, and computer vision into production systems.',
  },
  {
    year: '2020 — 2022',
    title: 'Offensive Security Enthusiast',
    desc: 'Deep immersion in ethical hacking, CTF competitions, and vulnerability research. First bug bounty reports submitted. Foundation of the niproot identity on GitHub.',
  },
];

export default function AboutPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="about-2col">
          <div>
            <div className="eyebrow">{'// Identity Record'}</div>
            <h2>The <span className="grad-c-p">Operative</span></h2>
            <div style={{ width: 36, height: 2, background: 'linear-gradient(90deg,var(--c),var(--p))', margin: '18px 0' }} />
            <p className="text-m" style={{ marginBottom: 16 }}>
              I&apos;m Ilya — a cybersecurity engineer, penetration tester, and software developer with several
              years of experience in offensive security, secure software development, and modern technologies.
            </p>
            <p className="text-m" style={{ marginBottom: 16 }}>
              My journey started with a deep curiosity about how systems work — and more importantly, how they
              break. That curiosity evolved into a career built on ethical hacking, security research, and
              building robust software that withstands real-world attacks.
            </p>
            <p className="text-m" style={{ marginBottom: 28 }}>
              Today I operate at the intersection of offensive security and software engineering — breaking
              things to make them stronger, building tools that protect what matters, and pushing into the
              frontier of Web3 security under the V0IDNETWORK identity.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={`mailto:${SITE.email}`} className="btn btn-c" style={{ fontSize: 11, padding: '10px 22px' }}>
                Establish Contact
              </a>
              <a
                href={SITE.githubMain}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: 11, padding: '10px 22px' }}
              >
                GitHub Profile →
              </a>
            </div>
            <div className="values-grid">
              {VALUES.map((v) => (
                <div className="val-card" key={v.title}>
                  <div className="val-icon" aria-hidden="true">{v.icon}</div>
                  <div className="val-title">{v.title}</div>
                  <div className="val-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">{'// Mission'}</div>
            <div className="card" style={{ padding: 24, marginBottom: 28 }}>
              <h3 style={{ marginBottom: 10, fontSize: 17 }}>Security is not a product — it&apos;s a process</h3>
              <p style={{ fontSize: 13.5, color: 'var(--m)', lineHeight: 1.75 }}>
                Every system has vulnerabilities. My mission is to find them before adversaries do — and build
                software with security as a core architectural principle, not an afterthought.
              </p>
            </div>
            <div className="eyebrow">{'// Operational Timeline'}</div>
            <div className="timeline-v">
              {TIMELINE.map((t) => (
                <div className="tl-item" key={t.year}>
                  <div className="tl-dot" />
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
