'use client';

import { useEffect, useRef, useState } from 'react';
import { TERM_SEQS } from '@/data/site-data';

type Line = { t: 'p' | 'o' | 'w' | 'i' | 'e'; s: string };

export default function TerminalWidget() {
  const [rendered, setRendered] = useState<Line[]>([]);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let sqi = 0;
    let li = 0;
    let timer: ReturnType<typeof setTimeout>;

    const termNext = () => {
      const seq = TERM_SEQS[sqi];
      if (li >= seq.length) {
        timer = setTimeout(() => {
          setRendered([]);
          li = 0;
          sqi = (sqi + 1) % TERM_SEQS.length;
          termNext();
        }, 2500);
        return;
      }
      const l = seq[li++];
      setRendered((prev) => [...prev, l]);
      timer = setTimeout(termNext, l.t === 'p' ? 550 : 280);
    };

    if (reduceMotion) {
      setRendered(TERM_SEQS[0]);
    } else {
      timer = setTimeout(termNext, 200);
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [rendered]);

  const cls: Record<Line['t'], string> = { p: 'tp', o: 'to', w: 'tw', i: 'ti', e: 'te' };

  return (
    <div className="terminal-wrap">
      <div className="term-hud">
        <div className="term-bar">
          <div className="tdot r" />
          <div className="tdot y" />
          <div className="tdot g" />
          <div className="term-title">ilya@kali-linux — ~/cyber-ops — zsh</div>
        </div>
        <div className="term-body" id="term-out" ref={outRef} aria-live="off">
          {rendered.map((l, i) =>
            l.t === 'p' ? (
              <div className="tl" key={i} style={{ animationDelay: '0ms' }}>
                <span className="tp">root@kali:~# </span>
                <span className="tc">{l.s}</span>
              </div>
            ) : (
              <div className="tl" key={i}>
                <span className={cls[l.t]}>{l.s}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
