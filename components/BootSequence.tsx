'use client';

import { useEffect, useState } from 'react';
import { BOOT_LINES } from '@/data/site-data';

export default function BootSequence() {
  const [lines, setLines] = useState<number[]>([]);
  const [fillPct, setFillPct] = useState(0);
  const [granted, setGranted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('ilya-booted') === '1') {
      setDone(true);
      setHidden(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((l, i) => {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, i]);
          setFillPct(((i + 1) / BOOT_LINES.length) * 85);
        }, l.t)
      );
    });

    timers.push(
      setTimeout(() => {
        setFillPct(100);
        setGranted(true);
      }, 3000)
    );

    timers.push(
      setTimeout(() => {
        setHidden(true);
        sessionStorage.setItem('ilya-booted', '1');
        timers.push(setTimeout(() => setDone(true), 700));
      }, 3700)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <div
      id="boot-screen"
      role="status"
      aria-live="polite"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity .7s', pointerEvents: hidden ? 'none' : 'auto' }}
    >
      <div className="boot-logo">ILYA.SYS</div>
      <div className="boot-sub">Cyber Intelligence Division — v4.2.1</div>
      <div className="boot-lines">
        {BOOT_LINES.map((l, i) => (
          <div key={i} className={`boot-line${lines.includes(i) ? ' show' : ''}`}>
            <span className={l.warn ? 'warn' : 'ok'}>{l.warn ? '[~~]' : '[OK]'}</span>{'  '}
            {l.txt}
          </div>
        ))}
      </div>
      <div className="boot-bar-wrap">
        <div className="boot-bar-label">INITIALIZING SECURE ENVIRONMENT...</div>
        <div className="boot-bar-track">
          <div className="boot-bar-fill" style={{ width: `${fillPct}%` }} />
        </div>
      </div>
      <div className="boot-granted" style={{ opacity: granted ? 1 : 0 }}>
        ACCESS GRANTED
      </div>
    </div>
  );
}
