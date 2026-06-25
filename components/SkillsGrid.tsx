'use client';

import { useEffect, useRef, useState } from 'react';
import { SKILLS } from '@/data/site-data';

export default function SkillsGrid() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimated(true);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-hex-grid" style={{ marginTop: 40 }} ref={ref}>
      {SKILLS.map((s) => (
        <div className="skill-hex" key={s.name} style={{ '--bg-glow': s.glow } as React.CSSProperties}>
          <div className="skill-cat">{s.cat.toUpperCase()}</div>
          <div className="skill-name">{s.name}</div>
          <div className="skill-icons">
            {s.tags.map((t) => (
              <span className="sicon" key={t}>{t}</span>
            ))}
          </div>
          <div className="skill-bar-row">
            <div className="sbar-track">
              <div
                className="sbar-fill"
                style={{ width: animated ? `${s.pct}%` : '0%' }}
                role="progressbar"
                aria-valuenow={s.pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.name} proficiency`}
              />
            </div>
            <div className="skill-pct">{s.pct}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}
