'use client';

import { useEffect, useRef } from 'react';

export default function HexCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hexC = ref.current;
    if (!hexC) return;
    const hx = hexC.getContext('2d');
    if (!hx) return;

    let hW = 0;
    let hH = 0;
    let hT = 0;
    let raf = 0;

    const rHex = () => {
      const dpr = window.devicePixelRatio || 1;
      hW = hexC.width = hexC.offsetWidth * dpr;
      hH = hexC.height = hexC.offsetHeight * dpr;
    };
    rHex();
    window.addEventListener('resize', rHex);

    const drawHex = () => {
      hx.clearRect(0, 0, hW, hH);
      const cx = hW / 2;
      const cy = hH / 2;
      const R = Math.min(hW, hH) * 0.38;
      const r = R / 3;
      hx.save();
      hx.translate(cx, cy);
      hx.rotate(hT * 0.003);
      for (let ring = 0; ring < 3; ring++) {
        const n = ring === 0 ? 1 : ring * 6;
        const rr = ring * r;
        for (let i = 0; i < n; i++) {
          const a = ring === 0 ? 0 : (i / n) * Math.PI * 2;
          const hcx = ring === 0 ? 0 : Math.cos(a) * rr;
          const hcy = ring === 0 ? 0 : Math.sin(a) * rr;
          hx.save();
          hx.translate(hcx, hcy);
          const sz = r * 0.42 * (1 + Math.sin(hT * 0.04 + ring + i) * 0.08);
          const pulse = Math.sin(hT * 0.05 + ring * 1.2 + i * 0.5) * 0.5 + 0.5;
          hx.beginPath();
          for (let v = 0; v < 6; v++) {
            const va = (v * Math.PI) / 3 - Math.PI / 6;
            hx.lineTo(Math.cos(va) * sz, Math.sin(va) * sz);
          }
          hx.closePath();
          const grd = hx.createLinearGradient(-sz, -sz, sz, sz);
          grd.addColorStop(0, `rgba(0,245,255,${0.08 + pulse * 0.12})`);
          grd.addColorStop(1, `rgba(123,97,255,${0.05 + pulse * 0.08})`);
          hx.fillStyle = grd;
          hx.strokeStyle = `rgba(0,245,255,${0.2 + pulse * 0.3})`;
          hx.lineWidth = 1.2 / (window.devicePixelRatio || 1);
          hx.fill();
          hx.stroke();
          hx.restore();
        }
      }
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + hT * 0.006;
        hx.beginPath();
        hx.moveTo(0, 0);
        hx.lineTo(Math.cos(a) * R * 0.85, Math.sin(a) * R * 0.85);
        hx.strokeStyle = `rgba(0,245,255,${0.06 + Math.sin(hT * 0.06 + i) * 0.04})`;
        hx.lineWidth = 0.8;
        hx.stroke();
      }
      hx.restore();
      const cg2 = hx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.4);
      cg2.addColorStop(0, 'rgba(0,245,255,0.06)');
      cg2.addColorStop(1, 'transparent');
      hx.fillStyle = cg2;
      hx.fillRect(0, 0, hW, hH);
      hT++;
      if (!reduceMotion) raf = requestAnimationFrame(drawHex);
    };
    drawHex();

    return () => {
      window.removeEventListener('resize', rHex);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="hex-canvas" ref={ref} aria-hidden="true" />;
}
