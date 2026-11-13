'use client';

import { useEffect, useRef } from 'react';

const LABEL_TEXT = 'Applied Research · Physical AI · Agentic AI';
const NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>?~';
const T = 50;

export default function HeroLabel() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rnd = () => NOISE[Math.random() * NOISE.length | 0];
    el.innerHTML = '';

    for (let i = 0; i < LABEL_TEXT.length; i++) {
      const s = document.createElement('span');
      const ch = LABEL_TEXT[i];
      s.textContent = ch === ' ' || ch === '·' ? ch : rnd();
      s.dataset.target = ch;
      s.dataset.settled = (ch === ' ' || ch === '·') ? '1' : '0';
      if (ch === '·') s.style.color = 'var(--accent)';
      el.appendChild(s);
    }

    const spans = el.querySelectorAll('span');
    let step = 0;
    const id = setInterval(() => {
      const alpha = Math.pow(Math.cos(Math.PI / 2 * (1 - step / T)), 2);
      spans.forEach(s => {
        const el = s as HTMLSpanElement;
        if (el.dataset.settled === '1') return;
        if (Math.random() < alpha) {
          el.textContent = el.dataset.target!;
          el.dataset.settled = '1';
          el.style.color = 'var(--accent)';
          el.style.opacity = '1';
          setTimeout(() => { el.style.color = ''; el.style.opacity = ''; }, 200);
        } else {
          el.textContent = rnd();
          el.style.color = 'var(--accent)';
          el.style.opacity = '0.45';
        }
      });
      step++;
      if (step > T) {
        clearInterval(id);
        spans.forEach(s => {
          const el = s as HTMLSpanElement;
          el.textContent = el.dataset.target!;
          el.style.color = el.dataset.target === '·' ? 'var(--accent)' : '';
          el.style.opacity = '';
        });
      }
    }, 60);

    return () => clearInterval(id);
  }, []);

  return (
    <p className="hero-label" ref={ref}>
      Applied Research · Physical AI · Agentic AI
    </p>
  );
}
