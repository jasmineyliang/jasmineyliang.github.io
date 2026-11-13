'use client';

import { useEffect, useRef } from 'react';

const PHRASES = [
  'Physics-Grounded Generative Motion',
  'Neural Sensor Fusion for 3D Tracking',
  'Wearable Clinical AI Gait Sensing',
  'Real-Time Pose Estimation in Sports',
  'Discrete Diffusion Denoises the Signal',
];

const NOISE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>?~^';
const STEPS = 65;

const rndCh = () => NOISE_CHARS[Math.random() * NOISE_CHARS.length | 0];

const CORPUS = `
physics grounded generative motion adaptation character animation seat geometry
seatswap physics simulation adapts motion capture sequences novel seat geometries
generative models trained paired motion geometry data physics constraint learning
neural sensor fusion three dimensional human motion tracking inertial measurement
wearable inertial sensor fusion deep learning gait analysis clinical sensing precision
striding into clarity AI powered wearable sensing clinical gait assessment balance
real time pose estimation sports performance biomechanics analysis skeleton tracking
AI sports judge real time pose estimation athletic performance evaluation scoring
adversarial game AI minmax decision engine deep reinforcement learning policy optimization
center of mass walking balance control neural network prediction stability assessment
neural collaborative filtering personalized recommendation engine matrix factorization latent
multi omics manifold learning gene perturbation network analysis dimensionality reduction
gaussian anomaly detection network infrastructure machine learning unsupervised model
political sentiment analysis tweet electoral trend NLP transformer attention mechanism
multimodal large language model fine tuning pipeline cross modal understanding fusion
retrieval augmented generation document question answering vector embeddings similarity
langchain multimodal agent pipeline speech vision text generation tool use reasoning
neural operator learning physics informed simulation partial differential equations solver
wearable sensor data biomechanical gait balance fall risk assessment elderly clinical
deep learning clinical gait analysis inertial measurement unit accelerometer gyroscope signal
physics based motion synthesis generative model character animation control physics prior
human motion prediction transformer attention mechanism temporal modeling sequence
generative adversarial network motion synthesis data augmentation physics simulation
knee adduction moment prediction machine learning clinical biomechanics wearable
manifold learning dimensionality reduction gene expression perturbation network biology
network anomaly detection gaussian mixture model unsupervised representation learning
sentiment analysis political discourse natural language processing BERT transformer
recommendation system collaborative filtering neural embedding user preference learning
multimodal fusion text image audio cross modal representation contrastive learning
agent reasoning planning language model tool use API automation pipeline
physics constraint neural network simulation rigid body dynamics optimization control
biomechanical modeling musculoskeletal simulation machine learning clinical application
spatial temporal graph convolutional network skeleton action recognition human pose
wearable computing health monitoring deep learning inference edge device IoT clinical
contrastive learning self supervised representation visual embeddings pretraining model
generative model latent space sampling variational autoencoder physics prior constraint
motion capture retargeting physics simulation character control policy gradient learning
physical AI perception agentic system embodied intelligence robotics simulation planning
applied research production system deployment engineering pipeline scalable real time
physics grounded AI clinical wearable motion generative neural network deep learning
`.trim();

function buildMarkov(text: string) {
  const tokens = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 0);
  const model = new Map<string, string[]>();
  const seeds: string[] = [];
  const SEED_WORDS = new Set(['physics','neural','deep','generative','wearable','real','multi','manifold','gaussian','political','multimodal','retrieval','langchain','reinforcement','attention','contrastive','spatial','biomechanical','adversarial','striding','seatswap','ai','motion','clinical','agent','transformer','physical','human','network']);
  for (let i = 0; i < tokens.length - 2; i++) {
    const key = tokens[i] + '|' + tokens[i+1];
    if (!model.has(key)) model.set(key, []);
    model.get(key)!.push(tokens[i+2]);
    if (SEED_WORDS.has(tokens[i])) seeds.push(key);
  }
  return { model, seeds };
}

function sampleTitle(mc: { model: Map<string, string[]>; seeds: string[] }) {
  const { model, seeds } = mc;
  const seed = seeds[Math.random() * seeds.length | 0];
  let chain = seed.split('|');
  const max = 10;
  for (let i = 0; i < max; i++) {
    const key = chain[chain.length-2] + '|' + chain[chain.length-1];
    const nexts = model.get(key);
    if (!nexts) break;
    chain.push(nexts[Math.random() * nexts.length | 0]);
  }
  if (chain.length > max) chain = chain.slice(0, max);
  return chain.map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
}

export default function GenerativeSection() {
  const ikCanvasRef = useRef<HTMLCanvasElement>(null);
  const diffDisplayRef = useRef<HTMLDivElement>(null);
  const diffFillRef = useRef<HTMLDivElement>(null);
  const diffInfoRef = useRef<HTMLSpanElement>(null);
  const diffPlayBtnRef = useRef<HTMLButtonElement>(null);
  const diffPillsRef = useRef<HTMLDivElement>(null);
  const markovTitleRef = useRef<HTMLDivElement>(null);
  const markovMetaRef = useRef<HTMLDivElement>(null);
  const markovHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── FABRIK IK ──
    function startIK() {
      const canvasEl = ikCanvasRef.current;
      if (!canvasEl) return;
      const canvas: HTMLCanvasElement = canvasEl;
      const ctxOrNull = canvas.getContext('2d');
      if (!ctxOrNull) return;
      const ctx: CanvasRenderingContext2D = ctxOrNull;
      const N = 8, SEG = 30, IT = 15;
      const ACCENT = '#0a6b65', MUTED = '#595957', BG = '#f9f9f7', BORDER = '#e2e2e0';
      let W: number, H: number, rootX: number, rootY: number;
      let joints: { x: number; y: number }[] = [];
      let smoothTx: number, smoothTy: number;
      let mouseX = -1, mouseY = -1, mouseActive = false;
      let mouseTimer: ReturnType<typeof setTimeout>;
      let phi = 0;

      function initCanvas() {
        W = canvas.offsetWidth || 460; H = canvas.offsetHeight || 240;
        canvas.width = W; canvas.height = H;
        rootX = W / 2; rootY = H - 20;
        joints = [];
        for (let i = 0; i < N; i++) joints.push({ x: rootX, y: rootY - i * SEG });
        smoothTx = rootX; smoothTy = rootY - (N - 1) * SEG * 0.6;
      }

      function fabrik(tx: number, ty: number) {
        const total = (N - 1) * SEG;
        const dist = Math.hypot(tx - rootX, ty - rootY);
        if (dist > total) {
          const a = Math.atan2(ty - rootY, tx - rootX);
          for (let i = 0; i < N; i++) {
            joints[i].x = rootX + Math.cos(a) * i * SEG;
            joints[i].y = rootY + Math.sin(a) * i * SEG;
          }
          return;
        }
        for (let it = 0; it < IT; it++) {
          joints[N-1].x = tx; joints[N-1].y = ty;
          for (let i = N-2; i >= 0; i--) {
            const d = Math.hypot(joints[i].x - joints[i+1].x, joints[i].y - joints[i+1].y) || 1e-9;
            const r = SEG / d;
            joints[i].x = joints[i+1].x + (joints[i].x - joints[i+1].x) * r;
            joints[i].y = joints[i+1].y + (joints[i].y - joints[i+1].y) * r;
          }
          joints[0].x = rootX; joints[0].y = rootY;
          for (let i = 1; i < N; i++) {
            const d = Math.hypot(joints[i].x - joints[i-1].x, joints[i].y - joints[i-1].y) || 1e-9;
            const r = SEG / d;
            joints[i].x = joints[i-1].x + (joints[i].x - joints[i-1].x) * r;
            joints[i].y = joints[i-1].y + (joints[i].y - joints[i-1].y) * r;
          }
          if (Math.hypot(joints[N-1].x - tx, joints[N-1].y - ty) < 0.5) break;
        }
      }

      function lerp(a: number, b: number, f: number) { return a + (b - a) * f; }

      function autoTarget() {
        const rx = W * 0.26, ry = H * 0.32;
        const cx = rootX, cy = rootY - (N - 1) * SEG * 0.58;
        return { x: cx + rx * Math.cos(phi * 0.7), y: cy + ry * Math.sin(phi * 1.1) };
      }

      let frameId: number;
      function draw() {
        frameId = requestAnimationFrame(draw);
        phi += 0.018;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = BG; ctx.fillRect(0, 0, W, H);
        const raw = mouseActive ? { x: mouseX, y: mouseY } : autoTarget();
        smoothTx = lerp(smoothTx, raw.x, 0.1);
        smoothTy = lerp(smoothTy, raw.y, 0.1);
        fabrik(smoothTx, smoothTy);

        ctx.beginPath(); ctx.arc(rootX, rootY, (N-1)*SEG, 0, Math.PI*2);
        ctx.setLineDash([3,5]); ctx.strokeStyle = BORDER; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);

        const tx = smoothTx, ty = smoothTy;
        ctx.globalAlpha = 0.55;
        ctx.beginPath(); ctx.arc(tx, ty, 9, 0, Math.PI*2);
        ctx.strokeStyle = ACCENT; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(tx-6, ty); ctx.lineTo(tx+6, ty);
        ctx.moveTo(tx, ty-6); ctx.lineTo(tx, ty+6);
        ctx.stroke(); ctx.globalAlpha = 1;

        for (let i = 0; i < N-1; i++) {
          const t = i / (N-2);
          ctx.beginPath();
          ctx.moveTo(joints[i].x, joints[i].y); ctx.lineTo(joints[i+1].x, joints[i+1].y);
          ctx.strokeStyle = ACCENT; ctx.lineWidth = 2.5 - t * 1.2;
          ctx.lineCap = 'round'; ctx.globalAlpha = 0.28 + t * 0.72; ctx.stroke();
        }
        ctx.globalAlpha = 1;

        for (let i = 0; i < N; i++) {
          const t = i / (N-1);
          if (i === 0) {
            ctx.fillStyle = MUTED;
            ctx.beginPath(); ctx.roundRect(joints[0].x-9, joints[0].y-5, 18, 10, 3); ctx.fill();
          } else {
            const r = i === N-1 ? 6 : 3.5;
            ctx.beginPath(); ctx.arc(joints[i].x, joints[i].y, r, 0, Math.PI*2);
            ctx.fillStyle = ACCENT; ctx.globalAlpha = 0.3 + t * 0.7; ctx.fill(); ctx.globalAlpha = 1;
            if (i === N-1) {
              ctx.beginPath(); ctx.arc(joints[i].x, joints[i].y, 11, 0, Math.PI*2);
              ctx.strokeStyle = ACCENT; ctx.lineWidth = 1; ctx.globalAlpha = 0.22; ctx.stroke(); ctx.globalAlpha = 1;
            }
          }
        }

        ctx.font = '10px "JetBrains Mono", ui-monospace, monospace';
        ctx.fillStyle = MUTED; ctx.globalAlpha = 0.7;
        ctx.fillText('FABRIK · ' + (N-1) + ' DOF · ' + IT + ' iters', 12, 18);
        ctx.globalAlpha = 1;
      }

      canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) * (W / rect.width);
        mouseY = (e.clientY - rect.top) * (H / rect.height);
        mouseActive = true;
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(() => { mouseActive = false; }, 1800);
      });
      canvas.addEventListener('mouseleave', () => { mouseActive = false; });
      canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect(), t = e.touches[0];
        mouseX = (t.clientX - rect.left) * (W / rect.width);
        mouseY = (t.clientY - rect.top) * (H / rect.height);
        mouseActive = true;
      }, { passive: false });
      window.addEventListener('resize', () => { cancelAnimationFrame(frameId); initCanvas(); draw(); });

      initCanvas();
      draw();
    }

    setTimeout(startIK, 300);

    // ── DIFFUSION DEMO ──
    let dPhraseIdx = 0, dStep = 0;
    let dId: ReturnType<typeof setInterval> | null = null;

    function buildDiffDOM() {
      const display = diffDisplayRef.current;
      if (!display) return;
      display.innerHTML = '';
      const phrase = PHRASES[dPhraseIdx];
      for (let i = 0; i < phrase.length; i++) {
        const s = document.createElement('span');
        s.className = 'ch-noise';
        s.textContent = phrase[i] === ' ' ? ' ' : rndCh();
        s.dataset.t = phrase[i];
        s.dataset.ok = phrase[i] === ' ' ? '1' : '0';
        display.appendChild(s);
      }
    }

    function resetDiff() {
      if (dId) { clearInterval(dId); dId = null; }
      dStep = 0;
      buildDiffDOM();
      if (diffFillRef.current) diffFillRef.current.style.width = '0%';
      if (diffInfoRef.current) diffInfoRef.current.textContent = 't = T  (noise)';
      if (diffPlayBtnRef.current) diffPlayBtnRef.current.textContent = '▶ Run';
    }

    function tickDiff() {
      const phrase = PHRASES[dPhraseIdx];
      const display = diffDisplayRef.current;
      if (!display) return;
      const spans = display.querySelectorAll('span');
      const alpha = Math.pow(Math.cos(Math.PI / 2 * (1 - dStep / STEPS)), 2);
      spans.forEach(s => {
        const el = s as HTMLSpanElement;
        if (el.dataset.ok === '1') return;
        if (Math.random() < alpha) {
          el.textContent = el.dataset.t!;
          el.dataset.ok = '1';
          el.className = 'ch-mid';
          setTimeout(() => { el.className = 'ch-clean'; }, 150);
        } else {
          el.textContent = rndCh();
          el.className = 'ch-noise';
        }
      });
      if (diffFillRef.current) diffFillRef.current.style.width = ((dStep / STEPS) * 100).toFixed(1) + '%';
      if (diffInfoRef.current) diffInfoRef.current.textContent = `t = ${STEPS - dStep}`;
      dStep++;
      if (dStep > STEPS) {
        if (dId) { clearInterval(dId); dId = null; }
        const allSpans = display.querySelectorAll('span');
        allSpans.forEach((s, i) => {
          const el = s as HTMLSpanElement;
          el.textContent = phrase[i] === ' ' ? ' ' : phrase[i];
          el.className = 'ch-clean';
        });
        if (diffFillRef.current) diffFillRef.current.style.width = '100%';
        if (diffInfoRef.current) diffInfoRef.current.textContent = 't = 0  (denoised ✓)';
        if (diffPlayBtnRef.current) diffPlayBtnRef.current.textContent = '↺ Again';
      }
    }

    // Build pills
    const pillsContainer = diffPillsRef.current;
    if (pillsContainer) {
      PHRASES.forEach((p, i) => {
        const btn = document.createElement('button');
        btn.className = 'diff-pill' + (i === 0 ? ' active' : '');
        btn.textContent = p.split(' ').slice(0, 3).join(' ') + (p.split(' ').length > 3 ? '…' : '');
        btn.addEventListener('click', () => {
          dPhraseIdx = i;
          pillsContainer.querySelectorAll('.diff-pill').forEach((b, j) => b.classList.toggle('active', j === i));
          resetDiff();
        });
        pillsContainer.appendChild(btn);
      });
    }

    const playBtn = diffPlayBtnRef.current;
    if (playBtn) {
      playBtn.addEventListener('click', function() {
        if (dStep > STEPS) { resetDiff(); setTimeout(() => { dId = setInterval(tickDiff, 55); playBtn.textContent = '⏸ Pause'; }, 80); return; }
        if (dId) { clearInterval(dId); dId = null; playBtn.textContent = '▶ Continue'; }
        else { dId = setInterval(tickDiff, 55); playBtn.textContent = '⏸ Pause'; }
      });
    }

    const resetBtn = document.getElementById('diffResetBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetDiff);

    resetDiff();

    // ── MARKOV CHAIN ──
    const MC = buildMarkov(CORPUS);
    const history: string[] = [];

    function renderMarkov(title: string) {
      const el = markovTitleRef.current;
      const meta = markovMetaRef.current;
      const hist = markovHistoryRef.current;
      if (!el || !meta || !hist) return;
      el.textContent = title;
      el.classList.remove('placeholder');
      meta.textContent = `${title.split(' ').length} tokens · ${MC.model.size}-state bigram model`;
      history.unshift(title);
      if (history.length > 8) history.pop();
      hist.innerHTML = '';
      history.slice(1).forEach(t => {
        const d = document.createElement('div');
        d.className = 'gen-history-item';
        d.textContent = t;
        hist.appendChild(d);
      });
    }

    const genBtn = document.getElementById('markovGenBtn');
    const clearBtn = document.getElementById('markovClearBtn');
    if (genBtn) genBtn.addEventListener('click', () => renderMarkov(sampleTitle(MC)));
    if (clearBtn) clearBtn.addEventListener('click', () => {
      history.length = 0;
      if (markovHistoryRef.current) markovHistoryRef.current.innerHTML = '';
      const el = markovTitleRef.current;
      if (el) { el.textContent = 'Click Generate to sample a title…'; el.classList.add('placeholder'); }
      if (markovMetaRef.current) markovMetaRef.current.textContent = '';
    });

    setTimeout(() => renderMarkov(sampleTitle(MC)), 600);
  }, []);

  return (
    <section className="gen-section wrap" id="generative">
      <div className="section-head">
        <p className="section-label">Generative Models</p>
        <h2 className="section-title">No API. Just math.</h2>
      </div>
      <p className="gen-intro">
        Three generative model demos running entirely in-browser — zero API calls, zero server, fully static. Each implements a real algorithm from scratch.
      </p>

      <div className="gen-rows">
        {/* Row 1: IK */}
        <div className="gen-row">
          <div className="gen-method">
            <p className="gen-method-label">01 · Inverse Kinematics</p>
            <p className="gen-method-name">FABRIK Real-Time Solver</p>
            <p className="gen-method-desc">Move your mouse. 7 joints solve for it in real time — the same algorithm behind character animation rigs and robot arm control.</p>
          </div>
          <div className="gen-row-demo">
            <canvas ref={ikCanvasRef} id="ikCanvas"></canvas>
            <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '0.72rem', color: 'var(--muted)' }}>
              Move mouse over canvas · FABRIK auto-solves in real time
            </span>
          </div>
        </div>

        {/* Row 2: Diffusion */}
        <div className="gen-row">
          <div className="gen-method">
            <p className="gen-method-label">02 · Discrete Diffusion</p>
            <p className="gen-method-name">Text Denoising Animation</p>
            <p className="gen-method-desc">Characters start as noise and forget what they are. Cosine variance schedule (Improved DDPM), no neural network.</p>
          </div>
          <div className="gen-row-demo">
            <div className="diff-phrases" ref={diffPillsRef}></div>
            <div className="diff-mini-bar"><div className="diff-mini-fill" ref={diffFillRef}></div></div>
            <div className="diff-mini-display" ref={diffDisplayRef}></div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="gen-btn gen-btn-primary" ref={diffPlayBtnRef}>▶ Run</button>
              <button className="gen-btn gen-btn-ghost" id="diffResetBtn">Reset</button>
              <span ref={diffInfoRef} style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '0.72rem', color: 'var(--muted)', marginLeft: 'auto' }}>t = T</span>
            </div>
          </div>
        </div>

        {/* Row 3: Markov */}
        <div className="gen-row">
          <div className="gen-method">
            <p className="gen-method-label">03 · Markov Chain</p>
            <p className="gen-method-name">Research Title Generator</p>
            <p className="gen-method-desc">Trained on your papers. Bigram model, 358 states — different title every run.</p>
          </div>
          <div className="gen-row-demo">
            <div className="markov-output">
              <div className="markov-generated placeholder" ref={markovTitleRef}>Click Generate to sample a title…</div>
              <div className="markov-meta-line" ref={markovMetaRef}></div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button className="gen-btn gen-btn-primary" id="markovGenBtn">⟳ Generate</button>
              <button className="gen-btn gen-btn-ghost" id="markovClearBtn">Clear</button>
            </div>
            <div className="gen-history" ref={markovHistoryRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
