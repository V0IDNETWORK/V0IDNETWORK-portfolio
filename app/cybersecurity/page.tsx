import type { Metadata } from 'next';
import { CYBER_DOMAINS, MITRE_ROWS, PENTEST_STEPS } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Cybersecurity Expertise',
  description: 'Offensive and defensive security disciplines, penetration testing methodology, and MITRE ATT&CK coverage.',
};

export default function CybersecurityPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Red Team Operations'}</div>
        <h2>Cybersecurity <span className="grad-c-p">Expertise</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Deep technical knowledge across the full spectrum of offensive and defensive security disciplines.
        </p>
        <div className="cyber-grid" style={{ marginTop: 40 }}>
          {CYBER_DOMAINS.map((c) => (
            <div className="cyber-card" key={c.title}>
              <span className={`csev ${c.badge}`}>{c.sev}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="cyber-items">
                {c.items.map((item) => (
                  <div className="cyber-item" key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 52 }}>
          <div className="eyebrow">{'// Engagement Methodology'}</div>
          <h3 style={{ marginBottom: 20 }}>Penetration Testing Process</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gap: 12 }}>
            {PENTEST_STEPS.map((s) => (
              <div
                key={s.num}
                style={{
                  background: 'rgba(10,16,34,.85)',
                  border: '1px solid var(--bc)',
                  borderRadius: 9,
                  padding: 18,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700, color: s.c, marginBottom: 7 }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: 'var(--font-disp)', fontSize: 14, fontWeight: 600, marginBottom: 5 }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--m)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 52 }}>
          <div className="eyebrow">{'// MITRE ATT&CK Framework'}</div>
          <h3 style={{ marginBottom: 6 }}>Tactics, Techniques &amp; Procedures</h3>
          <p style={{ fontSize: 13, color: 'var(--m)', marginBottom: 0 }}>
            Known and practiced offensive techniques mapped to the MITRE ATT&amp;CK matrix.
          </p>
          <div className="mitre-wrap">
            <table className="mitre-tbl">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tactic Phase</th>
                  <th>Technique</th>
                  <th>Tools Used</th>
                </tr>
              </thead>
              <tbody>
                {MITRE_ROWS.map((m) => (
                  <tr key={m.id}>
                    <td className="mid">{m.id}</td>
                    <td className="mph">{m.phase}</td>
                    <td className="mna">{m.name}</td>
                    <td style={{ fontSize: 11 }}>{m.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
