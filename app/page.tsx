import { CollectionContent } from './portfolio-collection';

const Arr = () => <span aria-hidden>↗</span>;

type Project = {
  pillar: string;
  pillarClass: string;
  title: string;
  venue: string;
  teaser: string;
  description: string;
  stack: string[];
  link: string;
  linkLabel: string;
};

const PROJECTS: Project[] = [
  {
    pillar: 'Simulation → Production',
    pillarClass: 'pillar-sim',
    title: 'SeatSwap',
    venue: 'Meta Reality Labs · SIGGRAPH Posters 2026',
    teaser: 'Adapts captured human motion to any furniture geometry — turning one mocap session into thousands of training examples.',
    description:
      'Learning-assisted differentiable kinematics that adapts captured human motion to arbitrary furniture geometries, generating diverse synthetic training data at production scale.',
    stack: ['PyTorch', 'Differentiable Sim', 'HOI', 'Synthetic Data'],
    link: 'https://seat-swap.github.io/',
    linkLabel: 'View project',
  },
  {
    pillar: 'Perception → Published',
    pillarClass: 'pillar-per',
    title: 'Wearable Sensor Biomechanics',
    venue: 'AAAI 2024 · Wearable Technologies Journal',
    teaser: 'Clinical knee-load prediction from wrist-worn IMU — no lab, no cameras, just a sensor and an RNN.',
    description:
      'Sequence-based RNN with explainable AI estimating knee adduction moment from IMU signals — bridging wearable sensing and clinical biomechanics at scale.',
    stack: ['Python', 'PyTorch', 'LSTM', 'IMU', 'XAI'],
    link: 'https://openreview.net/pdf?id=lWsDWnre2l',
    linkLabel: 'View paper',
  },
  {
    pillar: 'Perception',
    pillarClass: 'pillar-per',
    title: 'Real-Time Pose Estimation System',
    venue: 'Computer Vision · Sports Analytics',
    teaser: 'Tracks gymnastics routines in real time and surfaces objective scoring metrics for judges.',
    description:
      'Real-time pose estimation using OpenPose to track gymnastics movements, with body-trajectory data structures and interactive visualization for objective judging support.',
    stack: ['Python', 'OpenPose', 'OpenCV', 'Caffe', 'sklearn'],
    link: 'https://github.com/jasmineyliang/pose_estimation/blob/main/575_final.pdf',
    linkLabel: 'View presentation',
  },
  {
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Multimodal LLM Pipeline',
    venue: 'Applied AI · Fine-Tuning',
    teaser: 'One harness to fine-tune and serve models across text, audio, and image — BERT and ViT unified.',
    description:
      'End-to-end pipeline for fine-tuning and deploying LLMs across text, audio, and image modalities using BERT and ViT architectures with HuggingFace.',
    stack: ['Python', 'PyTorch', 'BERT', 'ViT', 'HuggingFace'],
    link: 'https://github.com/jasmineyliang/train',
    linkLabel: 'View code',
  },
  {
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Context-Aware ChatPDF',
    venue: 'Applied AI · RAG',
    teaser: 'Ask any question over a long document — RAG with context-aware memory keeps answers grounded.',
    description:
      'Retrieval-augmented generation system for document Q&A with context-aware memory buffers and embedding-based retrieval over long documents.',
    stack: ['Python', 'LLM', 'RAG', 'Embeddings', 'HuggingFace'],
    link: 'https://github.com/jasmineyliang/Context-aware_ChatPDF_Application',
    linkLabel: 'View code',
  },
  {
    pillar: 'Perception → Simulation',
    pillarClass: 'pillar-per',
    title: '3D Orientation Estimation via AHRS',
    venue: 'Sensor Fusion · IMU',
    teaser: 'Reconstructs full 3D orientation from raw IMU in real time using Kalman-filtered AHRS fusion.',
    description:
      'Real-time 3D orientation reconstruction from IMU signals using AHRS algorithms and advanced Kalman filtering for accurate spatial tracking.',
    stack: ['MATLAB', 'IMU', 'Kalman Filter', 'AHRS'],
    link: 'https://github.com/jasmineyliang/AHRS_sensor_fusion',
    linkLabel: 'View code',
  },
];

const PAPERS = [
  {
    year: '2026',
    venue: 'SIGGRAPH Posters',
    title:
      'SeatSwap: Learning-Assisted Differentiable Kinematics for Human-Object Interaction Adaptation in Production-Scale Character Animation',
    authors:
      'Jasmine Liang, Stephen Mylabathula, Shai Segev, Priyamvad Ravindra Deshmukh, Ying Liu, Amaury Aubel',
    link: 'https://doi.org/10.1145/3799825.3818703',
  },
  {
    year: '2024',
    venue: 'AAAI Spring Symposium on Clinical Foundation Models',
    title:
      'Striding into Clarity: Wearable Sensor-Driven Estimation of Knee Adduction Moment, Unveiling the Black Box with Sequence-Based Neural Networks and Explainable AI',
    authors: 'JY Liang, H Bian, W Zhang, CK Chang, LS Chou',
    link: 'https://openreview.net/pdf?id=lWsDWnre2l',
  },
  {
    year: '2024',
    venue: 'Wearable Technologies',
    title:
      'Center of Mass Acceleration During Walking: Comparison Between IMU and Camera-Based Motion Capture Methodologies',
    authors: 'JY Liang & LS Chou',
    link: 'https://www.cambridge.org/core/journals/wearable-technologies/article/center-of-mass-acceleration-during-walking-comparison-between-imu-and-camerabased-motion-capture-methodologies/EE637BCC2EE3335D02A3600F05FFBF28',
  },
  {
    year: '2023',
    venue: 'World Scientific Annual Review of Biomechanics',
    title:
      'Assessment of Gait Balance Control Using Inertial Measurement Units — A Narrative Review',
    authors: 'JY Liang & LS Chou',
    link: 'https://www.worldscientific.com/doi/abs/10.1142/S2810958923300068',
  },
  {
    year: '2023',
    venue: 'Journal Article',
    title: 'Estimation of STEADI Performance Using Inertial Measurement Unit',
    authors: 'JY Liang, M Zhang, N Lamoureux, J Lansing, LS Chou, GJ Welk',
    link: 'https://www.sciencedirect.com/article/pii/S2950307824000286',
  },
  {
    year: '2022',
    venue: 'IX World Congress of Biomechanics',
    title:
      'Estimation of Knee Adduction Moment During Walking Using Wearable Sensor Data With Sequence-Based Artificial Recurrent Neural Network',
    authors: 'JY Liang & LS Chou',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SnALrRkAAAAJ&sortby=pubdate&citation_for_view=SnALrRkAAAAJ:Tyk-4Ss8FVUC',
  },
];

const AWARDS = [
  { year: '2024', label: 'University Research Excellence Award — top 10% of graduate students' },
  { year: '2023', label: 'Aspiring Health Professionals Scholarship' },
  { year: '2023', label: 'Print & Grace Powers Hudson Scholarship' },
  { year: '2022', label: 'Student Travel Bursary, 9th World Congress of Biomechanics' },
  { year: '2022', label: 'Biomechanics Student Award, 9th World Congress of Biomechanics' },
  { year: '2022', label: 'Print & Grace Powers Hudson Scholarship' },
  { year: '2019', label: 'Charlotte and Stanley Herren Graduate Fellowship' },
  { year: '2019', label: 'Undergraduate Research Papers Published Award' },
  { year: '2015', label: 'National Funding for Undergraduate Student Research' },
  { year: '2015', label: 'Undergraduate Research Project Presentation Award — Third Place' },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="project-card">
      <span className={`card-pillar ${p.pillarClass}`}>{p.pillar}</span>
      <div>
        <h3 className="card-title">{p.title}</h3>
        <p className="card-venue">{p.venue}</p>
      </div>
      <p className="card-teaser">{p.teaser}</p>
      <p className="card-desc">{p.description}</p>
      <div className="card-stack">
        {p.stack.map((t) => (
          <span className="card-tag" key={t}>{t}</span>
        ))}
      </div>
      <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
        {p.linkLabel} <Arr />
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <nav className="site-nav">
        <div className="nav-inner wrap">
          <a href="#" className="wordmark" aria-label="Jasmine Liang home">JL<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#publications">Publications</a>
            <a href="#archive">Archive</a>
            <a
              href="https://www.linkedin.com/in/jypliang"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Connect <Arr />
            </a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* ── Hero ── */}
        <section className="hero wrap">
          <div className="hero-layout">
            <div className="hero-text">
              <p className="hero-label">
                Computer Vision Engineer · Physical AI · Meta Reality Labs
              </p>
              <h1>
                Jasmine Liang<span className="hero-phd">, PhD</span>
              </h1>
              <p className="hero-bio">
                I develop AI methods and translate them into scalable systems — across simulation,
                perception, and production. My work spans computational biomechanics, wearable
                sensor perception, scientific machine learning, agentic AI, and production
                character animation. I build and harness AI systems end-to-end: from research
                prototype to deployed pipeline.
              </p>
              <div className="pillars">
                <span className="pillar-chip chip-sim">Simulation</span>
                <span className="pillar-chip chip-per">Perception</span>
                <span className="pillar-chip chip-prod">Production</span>
              </div>
              <a className="hero-cta" href="#about">Learn more ↓</a>
            </div>
            <div className="hero-photo-col">
              <img
                src="https://jasmineyliang.github.io/images/20231007_160933496_iOS%20copy.jpg?raw=true"
                alt="Jasmine Liang"
                className="hero-headshot"
              />
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="section wrap" id="about">
          <div className="section-head">
            <p className="section-label">About</p>
            <h2 className="section-title">The thread through it all.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-bio">
                I work at the intersection of simulation, perception, and production — developing
                AI methods and systems for understanding human motion and physical interaction.
                My background spans a PhD in Computer Science and Biomechanics from Iowa State
                University, postdoctoral research in scientific machine learning at the University
                of Notre Dame, and current work in computer vision and physical AI at Meta
                Reality Labs.
              </p>
              <p className="about-bio" style={{ marginTop: '16px' }}>
                My research experience includes wearable and camera-based sensing, time-series
                analysis, temporal deep learning, and human–object interaction. I'm also
                interested in how generative and agentic AI can support robotics and embodied
                systems.
              </p>

              <div className="about-awards">
                <p className="section-label about-awards-label">Honors & Awards</p>
                {AWARDS.map((a, i) => (
                  <div key={i} className="award-item">
                    <span className="award-year">{a.year}</span>
                    <span>{a.label}</span>
                  </div>
                ))}
                <div className="award-item">
                  <span className="award-year">2024</span>
                  <span>Reviewer, AAAI Symposium</span>
                </div>
                <div className="award-item">
                  <span className="award-year" />
                  <span>
                    Curriculum Developer,{' '}
                    <a
                      href="https://classroom.github.com/classrooms/171609019-analytics-ai-health-strategies-jl-classroom"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                      Analytics AI Health Strategies ↗
                    </a>
                  </span>
                </div>
                <div className="award-item">
                  <span className="award-year" />
                  <span>
                    Instructor, Biomechanics —{' '}
                    <a
                      href="https://grader.mathworks.com/courses/109094"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                      View classroom ↗
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://jasmineyliang.github.io/images/20231007_160933496_iOS%20copy.jpg?raw=true"
                alt="Jasmine Liang"
                style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', marginBottom: 28, border: '2px solid var(--border)' }}
              />
              <div className="timeline">
                <div className="timeline-item">
                  <p className="timeline-label">Now</p>
                  <p className="timeline-title">Computer Vision Engineer</p>
                  <p className="timeline-org">Physical AI · Meta Reality Labs</p>
                  <p className="timeline-tag">Simulation → Production</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-label">Postdoctoral Research</p>
                  <p className="timeline-title">Scientific Machine Learning</p>
                  <p className="timeline-org">University of Notre Dame · AI & SciML</p>
                  <p className="timeline-tag">Simulation</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-label">Doctoral</p>
                  <p className="timeline-title">Computer Science & Biomechanics</p>
                  <p className="timeline-org">Iowa State University</p>
                  <p className="timeline-tag">Perception</p>
                </div>
              </div>

              <div className="about-links">
                <a
                  href="https://www.linkedin.com/in/jypliang"
                  target="_blank"
                  rel="noreferrer"
                  className="about-link"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/jasmineyliang"
                  target="_blank"
                  rel="noreferrer"
                  className="about-link"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://scholar.google.com/citations?user=1kVmiDkAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="about-link"
                >
                  Google Scholar ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section className="section wrap" id="work">
          <div className="section-head">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Research built into working systems.</h2>
          </div>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* ── Publications ── */}
        <section className="section wrap" id="publications">
          <div className="section-head">
            <p className="section-label">Publications</p>
            <h2 className="section-title">Research contributions.</h2>
          </div>
          <div className="pub-list">
            {PAPERS.map((p) => (
              <a
                key={p.title}
                className="pub-item"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="pub-year">{p.year}</span>
                <div>
                  <p className="pub-venue">{p.venue}</p>
                  <p className="pub-title">{p.title}</p>
                  <p className="pub-authors">{p.authors}</p>
                </div>
                <span className="pub-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Full Archive ── */}
        <div className="archive-section wrap" id="archive">
          <div className="archive-section-head">
            <p className="section-label">Full project archive</p>
          </div>

          <details className="archive-item">
            <summary className="archive-summary">
              <span className="archive-summary-title">AI for Business — Applied Projects</span>
              <span className="archive-count">10 projects</span>
              <span className="archive-chevron">↓</span>
            </summary>
            <div className="archive-content">
              <CollectionContent index={0} collClass="coll-0" />
            </div>
          </details>

          <details className="archive-item">
            <summary className="archive-summary">
              <span className="archive-summary-title">Skill-Based Projects — Technical CS</span>
              <span className="archive-count">5 categories</span>
              <span className="archive-chevron">↓</span>
            </summary>
            <div className="archive-content">
              <CollectionContent index={1} collClass="coll-1" />
            </div>
          </details>

          <details className="archive-item">
            <summary className="archive-summary">
              <span className="archive-summary-title">AI & Research — Surveys & Theory</span>
              <span className="archive-count">3 categories</span>
              <span className="archive-chevron">↓</span>
            </summary>
            <div className="archive-content">
              <CollectionContent index={2} collClass="coll-3" />
            </div>
          </details>

          <details className="archive-item">
            <summary className="archive-summary">
              <span className="archive-summary-title">Honors, Teaching & Service</span>
              <span className="archive-count">10 awards · 3 service</span>
              <span className="archive-chevron">↓</span>
            </summary>
            <div className="archive-content">
              <CollectionContent index={3} collClass="coll-4" />
            </div>
          </details>
        </div>

      </main>

      <footer>
        <div className="footer-inner wrap">
          <span>© 2026 Jasmine Liang</span>
          <span style={{ letterSpacing: '0.08em', fontSize: '11px' }}>
            SIMULATION · PERCEPTION · PRODUCTION
          </span>
          <a href="https://github.com/jasmineyliang" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}
