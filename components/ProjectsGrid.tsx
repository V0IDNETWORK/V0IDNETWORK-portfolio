'use client';

import { useState } from 'react';
import { PROJECT_FILTERS, PROJECTS } from '@/data/site-data';

export default function ProjectsGrid() {
  const [activeCat, setActiveCat] = useState('all');
  const filtered = PROJECTS.filter((p) => activeCat === 'all' || p.cats.includes(activeCat as any));

  return (
    <>
      <div className="proj-filter" style={{ marginTop: 32 }} role="group" aria-label="Filter projects by category">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.cat}
            className={`pf-btn${activeCat === f.cat ? ' active' : ''}`}
            onClick={() => setActiveCat(f.cat)}
            aria-pressed={activeCat === f.cat}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((p) => {
          const on = Array(p.sec).fill(0);
          const off = Array(5 - p.sec).fill(0);
          return (
            <div
              key={p.title}
              className="proj-card"
              style={{ '--accent-a': p.a, '--accent-b': p.b } as React.CSSProperties}
            >
              <div className="proj-card-accent" />
              <div className="proj-card-head">
                <div className="proj-icon" aria-hidden="true">{p.icon}</div>
                <span className={`proj-chip ${p.status === 'live' ? 'chip-live' : 'chip-beta'}`}>
                  {p.status.toUpperCase()}
                </span>
              </div>
              <div className="proj-card-body">
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tech">
                  {p.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="sec-rating">
                  <div className="sec-pips">
                    {on.map((_, i) => <div className="sec-pip on" key={'on' + i} />)}
                    {off.map((_, i) => <div className="sec-pip off" key={'off' + i} />)}
                  </div>
                  <span className="sec-text">SEC LEVEL {p.sec}/5</span>
                </div>
                <div className="proj-links">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                    → View on GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
