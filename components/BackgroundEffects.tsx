'use client';

import { useEffect, useRef } from 'react';

const VERT = `attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0,1);}`;

const FRAG = `precision mediump float;uniform float u_t;uniform vec2 u_res;uniform vec2 u_mouse;
float hex(vec2 p){p=abs(p);return max(dot(p,normalize(vec2(1,1.7320508))),p.x)-.5;}
float grid(vec2 uv,float sz){vec2 gp=uv/sz;vec2 id=floor(gp);vec2 lp=fract(gp)-.5;
  if(mod(id.x+id.y,2.)<1.)lp.x=-lp.x;
  float h=hex(lp);float v=smoothstep(.5,.47,h);
  float pulse=sin(u_t*.4+id.x*.4+id.y*.6)*.5+.5;
  return v*(0.04+pulse*0.025);}
float neural(vec2 uv){float r=0.;for(int i=0;i<6;i++){
  float fi=float(i);vec2 np=vec2(sin(fi*1.1+u_t*.12),cos(fi*.9+u_t*.09))*.35+.5;
  float d=length(uv-np);float s=sin(d*18.-u_t*.8+fi*.7)*.5+.5;
  r+=s*exp(-d*4.)*.06;}return r;}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*u_res)/min(u_res.x,u_res.y);
  vec2 mu=(u_mouse/u_res-.5)*vec2(u_res.x/u_res.y,1.);
  float md=length(uv-mu);
  float g=grid(uv,.08)+grid(uv,.14)*.5+grid(uv,.22)*.25;
  float n=neural(uv+.5);
  float wave=sin(uv.x*8.+u_t*.3)*sin(uv.y*6.+u_t*.25)*.012;
  float mhalo=exp(-md*md*3.)*.06;
  vec3 col=vec3(0.020,0.031,0.086);
  col+=vec3(0.,0.957,1.)*g;
  col+=vec3(0.,1.,.53)*n*.7;
  col+=vec3(0.,0.957,1.)*wave;
  col+=vec3(0.,0.957,1.)*mhalo;
  col+=vec3(0.482,0.380,1.)*(sin(uv.y*3.+u_t*.2)*.5+.5)*0.012;
  gl_FragColor=vec4(col,1.);}`;

export default function BackgroundEffects() {
  const glRef = useRef<HTMLCanvasElement>(null);
  const ptclRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let rafGL = 0;
    let rafPtcl = 0;

    const glslC = glRef.current;
    if (glslC) {
      const gl = (glslC.getContext('webgl') ||
        glslC.getContext('experimental-webgl')) as WebGLRenderingContext | null;
      if (gl) {
        const resizeGL = () => {
          glslC.width = window.innerWidth;
          glslC.height = window.innerHeight;
          gl.viewport(0, 0, glslC.width, glslC.height);
        };
        resizeGL();
        window.addEventListener('resize', resizeGL);

        const mkShader = (type: number, src: string) => {
          const s = gl.createShader(type)!;
          gl.shaderSource(s, src);
          gl.compileShader(s);
          return s;
        };
        const prog = gl.createProgram()!;
        gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT));
        gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        const pos = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

        const uTime = gl.getUniformLocation(prog, 'u_t');
        const uRes = gl.getUniformLocation(prog, 'u_res');
        const uMouse = gl.getUniformLocation(prog, 'u_mouse');

        let glMX = window.innerWidth / 2;
        let glMY = window.innerHeight / 2;
        const onMove = (e: MouseEvent) => {
          glMX = e.clientX;
          glMY = window.innerHeight - e.clientY;
        };
        document.addEventListener('mousemove', onMove);

        const renderGL = (t: number) => {
          gl.uniform1f(uTime, t * 0.001);
          gl.uniform2f(uRes, glslC.width, glslC.height);
          gl.uniform2f(uMouse, glMX, glMY);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
          rafGL = requestAnimationFrame(renderGL);
        };
        rafGL = requestAnimationFrame(renderGL);

        const cleanupGL = () => {
          window.removeEventListener('resize', resizeGL);
          document.removeEventListener('mousemove', onMove);
          cancelAnimationFrame(rafGL);
        };

        const ptclC = ptclRef.current;
        if (ptclC) {
          const ptx = ptclC.getContext('2d')!;
          let pw = 0;
          let ph = 0;
          const rPtcl = () => {
            pw = ptclC.width = window.innerWidth;
            ph = ptclC.height = window.innerHeight;
          };
          rPtcl();
          window.addEventListener('resize', rPtcl);

          const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * 2500,
            y: Math.random() * 1500,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.2 + 0.3,
            o: Math.random() * 0.35 + 0.1,
          }));

          let pmx = pw / 2;
          let pmy = ph / 2;
          const onMoveP = (e: MouseEvent) => {
            pmx = e.clientX;
            pmy = e.clientY;
          };
          document.addEventListener('mousemove', onMoveP);

          const drawPtcl = () => {
            ptx.clearRect(0, 0, pw, ph);
            particles.forEach((p) => {
              p.x += p.vx;
              p.y += p.vy;
              const dx = pmx - p.x;
              const dy = pmy - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 180) {
                p.vx += (dx / dist) * 0.004;
                p.vy += (dy / dist) * 0.004;
              }
              if (p.x < 0) p.x = pw;
              if (p.x > pw) p.x = 0;
              if (p.y < 0) p.y = ph;
              if (p.y > ph) p.y = 0;
              ptx.beginPath();
              ptx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              ptx.fillStyle = `rgba(0,245,255,${p.o})`;
              ptx.fill();
            });
            particles.forEach((a, i) => {
              particles.slice(i + 1).forEach((b) => {
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 140) {
                  ptx.beginPath();
                  ptx.moveTo(a.x, a.y);
                  ptx.lineTo(b.x, b.y);
                  ptx.strokeStyle = `rgba(0,245,255,${0.07 * (1 - d / 140)})`;
                  ptx.lineWidth = 0.4;
                  ptx.stroke();
                }
              });
            });
            rafPtcl = requestAnimationFrame(drawPtcl);
          };
          rafPtcl = requestAnimationFrame(drawPtcl);

          return () => {
            cleanupGL();
            window.removeEventListener('resize', rPtcl);
            document.removeEventListener('mousemove', onMoveP);
            cancelAnimationFrame(rafPtcl);
          };
        }

        return cleanupGL;
      }
    }
  }, []);

  return (
    <>
      <canvas id="glsl-canvas" ref={glRef} aria-hidden="true" />
      <canvas id="ptcl-canvas" ref={ptclRef} aria-hidden="true" />
      <div className="hud-overlay" aria-hidden="true">
        <div className="hud-corner tl" />
        <div className="hud-corner tr" />
        <div className="hud-corner bl" />
        <div className="hud-corner br" />
      </div>
      <div className="scanlines" aria-hidden="true" />
    </>
  );
}
