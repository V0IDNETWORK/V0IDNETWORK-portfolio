import type { Metadata } from 'next';
import { EXPERIENCES } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience delivering security solutions and software to clients worldwide.',
};

export default function ExperiencePage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Operational Record'}</div>
        <h2>Professional <span className="grad-c-p">Experience</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          A career built on delivering high-impact security solutions and robust software to clients worldwide.
        </p>
        <div className="exp-list" style={{ marginTop: 40 }}>
          {EXPERIENCES.map((e) => (
            <div className="exp-card" key={e.title}>
              <div className="exp-top">
                <div>
                  <div className="exp-title">{e.title}</div>
                  <div className="exp-co">{e.co}</div>
                </div>
                <div className="exp-period">{e.period}</div>
              </div>
              <div className="exp-desc">{e.desc}</div>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span className="sicon" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
