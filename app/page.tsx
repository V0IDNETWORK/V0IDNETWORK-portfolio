import type { Metadata } from 'next';
import Link from 'next/link';
import HexCanvas from '@/components/HexCanvas';
import TerminalWidget from '@/components/TerminalWidget';
import AnimatedCounter from '@/components/AnimatedCounter';
import GithubActivityGrid from '@/components/GithubActivityGrid';
import { DASHBOARD_METRICS, HERO_STATS, TICKER } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ilya — Elite Cybersecurity Engineer, Penetration Tester, Full Stack Developer & Web3 Architect.',
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            CLASSIFIED OPERATIVE — CYBER DIVISION
          </div>
          <h1>
            <span className="hero-title-line">Elite</span>
            <span className="hero-title-line grad-c-p">Security</span>
            <span className="hero-title-line grad-g-c">Architect</span>
          </h1>
          <div className="hero-roles">
            <div className="role-item">Cybersecurity Engineer</div>
            <div className="role-item">Penetration Tester</div>
            <div className="role-item">Full Stack Developer</div>
            <div className="role-item">Web3 Architect</div>
          </div>
          <p className="hero-sub">
            Penetration tester, offensive security engineer, and full-stack developer operating at the
            intersection of cybersecurity and next-generation software. Specialized in ethical hacking,
            secure architecture, and Web3 technologies.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="btn btn-c">View Operations →</Link>
            <Link href="/contact" className="btn btn-outline">Establish Contact</Link>
          </div>
          <div className="hero-stats">
            {HERO_STATS.map((s) => (
              <div className="hstat" key={s.id}>
                <div className="hstat-num"><AnimatedCounter end={s.end} suffix={s.end > 10 ? '+' : ''} /></div>
                <div className="hstat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <HexCanvas />
          <TerminalWidget />
        </div>
      </section>

      <div className="threat-ticker" aria-hidden="true">
        <div className="ticker-inner">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span className="ticker-item" key={i}>
              <span className={t.cls}>[{t.label}]</span>
              <span className="ticker-sep">—</span>
              {t.msg}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="section-pad">
          <div className="eyebrow">{'// Operational Metrics'}</div>
          <h2>Security <span className="grad-c-p">Intelligence</span> Dashboard</h2>
          <div className="metrics-row">
            {DASHBOARD_METRICS.map((m) => (
              <div className="met-card" key={m.id}>
                <div className="met-num"><AnimatedCounter end={m.end} /></div>
                <div className="met-lbl">{m.label}</div>
              </div>
            ))}
          </div>
          <GithubActivityGrid />
        </div>
      </div>
    </>
  );
}
