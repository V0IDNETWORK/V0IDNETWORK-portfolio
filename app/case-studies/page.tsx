import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Enterprise-style analysis of key projects — problem definition, architecture, threat modeling, and results.',
};

export default function CaseStudiesPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Deep Dives'}</div>
        <h2>Case <span className="grad-c-p">Studies</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Enterprise-style analysis of key projects — from problem definition to architectural decisions,
          threat modeling, and measurable results.
        </p>
        <div className="case-wrap" style={{ marginTop: 40 }}>
          {CASE_STUDIES.map((cs) => (
            <div className="case-card" key={cs.slug} id={cs.slug}>
              <div className="case-head">
                <span className="cbadge" style={{ background: cs.bc, border: `1px solid ${cs.bb}`, color: cs.bt }}>
                  {cs.badge}
                </span>
                <span
                  className="cbadge"
                  style={{
                    background: 'rgba(123,97,255,0.08)',
                    border: '1px solid rgba(123,97,255,0.2)',
                    color: 'var(--p)',
                  }}
                >
                  {cs.badge2}
                </span>
              </div>
              <div className="case-title">{cs.title}</div>
              <div className="case-grid">
                <div>
                  <div className="case-field-label">Problem Statement</div>
                  <div className="case-field-text">{cs.problem}</div>
                </div>
                <div>
                  <div className="case-field-label">Architecture</div>
                  <div className="case-field-text">{cs.arch}</div>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div className="case-field-label">Security Model</div>
                <div className="case-field-text">{cs.security}</div>
              </div>
              <div className="threat-box">
                <div className="threat-box-label">Threat Model — Attack Vectors</div>
                <div className="threats-row">
                  {cs.threats.map((t) => (
                    <span className="threat-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="case-metrics">
                <div className="cmet"><div className="cmet-num">{cs.r1}</div><div className="cmet-lbl">{cs.r1l}</div></div>
                <div className="cmet"><div className="cmet-num">{cs.r2}</div><div className="cmet-lbl">{cs.r2l}</div></div>
                <div className="cmet"><div className="cmet-num">{cs.r3}</div><div className="cmet-lbl">{cs.r3l}</div></div>
                <div className="cmet"><div className="cmet-num">{cs.r4}</div><div className="cmet-lbl">{cs.r4l}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
