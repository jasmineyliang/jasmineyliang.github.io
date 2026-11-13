import { CollectionContent } from './portfolio-collection';

const Arr = () => <span aria-hidden>↗</span>;

type Project = {
  category: string;
  compact?: boolean;
  pillar: string;
  pillarClass: string;
  title: string;
  venue: string;
  teaser: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  linkLabel: string;
};

const PROJECTS: Project[] = [
  // ── Applied AI & Production Systems ──
  {
    category: 'Applied AI & Production Systems',
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'SeatSwap: Physics-Grounded Generative Motion Adaptation',
    venue: 'Meta Reality Labs · SIGGRAPH 2026 — Poster, Selected for Technical Paper Track',
    teaser: '',
    description: '',
    image: 'https://seat-swap.github.io/teaser.gif',
    stack: ['PyTorch', 'Differentiable Sim', 'HOI', 'Synthetic Data'],
    link: 'https://seat-swap.github.io/',
    linkLabel: 'View project',
  },
  {
    category: 'Applied AI & Production Systems',
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Multimodal LLM Fine-Tuning Pipeline',
    venue: 'Applied AI · Fine-Tuning',
    teaser: '',
    description: '',
    image: '/thumbnails/finetune-pipeline.svg',
    stack: ['Python', 'PyTorch', 'BERT', 'ViT', 'HuggingFace'],
    link: 'https://github.com/jasmineyliang/train',
    linkLabel: 'View code',
  },
  {
    category: 'Applied AI & Production Systems',
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'RAG Document Q&A Agent',
    venue: 'Applied AI · RAG',
    teaser: '',
    description: '',
    image: '/thumbnails/rag-pipeline.svg',
    stack: ['Python', 'LLM', 'RAG', 'Embeddings', 'HuggingFace'],
    link: 'https://github.com/jasmineyliang/Context-aware_ChatPDF_Application',
    linkLabel: 'View code',
  },
  {
    category: 'Applied AI & Production Systems',
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Multimodal Agent Pipeline — LangChain & OpenAI API',
    venue: 'Applied AI · Agentic Systems',
    teaser: '',
    description: '',
    image: '/thumbnails/langchain-agent.svg',
    stack: ['Python', 'LangChain', 'OpenAI', 'Whisper', 'AI Agent'],
    link: 'https://github.com/jasmineyliang/MLLM_langchain',
    linkLabel: 'View code',
  },
  // ── Perception & Wearable Sensing ──
  {
    category: 'Perception & Wearable Sensing',
    pillar: 'Perception → Production',
    pillarClass: 'pillar-per',
    title: 'Striding into Clarity — AI for Wearable Clinical Sensing',
    venue: 'AAAI 2024 Spring Symposium on Clinical Foundation Models',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/Screenshot%201.png?raw=true',
    stack: ['Python', 'PyTorch', 'LSTM', 'IMU', 'XAI'],
    link: 'https://openreview.net/pdf?id=lWsDWnre2l',
    linkLabel: 'View paper',
  },
  {
    category: 'Perception & Wearable Sensing',
    pillar: 'Perception',
    pillarClass: 'pillar-per',
    title: 'AI Sports Judge — Real-Time Pose Estimation',
    venue: 'Computer Vision · Sports Analytics',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/pose1.png?raw=true',
    stack: ['Python', 'OpenPose', 'OpenCV', 'Caffe', 'sklearn'],
    link: 'https://github.com/jasmineyliang/pose_estimation/blob/main/575_final.pdf',
    linkLabel: 'View presentation',
  },
  {
    category: 'Perception & Wearable Sensing',
    pillar: 'Perception → Simulation',
    pillarClass: 'pillar-per',
    title: 'Neural Sensor Fusion for 3D Motion Tracking',
    venue: 'Sensor Fusion · IMU',
    teaser: '',
    description: '',
    image: 'https://raw.githubusercontent.com/jasmineyliang/AHRS_sensor_fusion/refs/heads/main/AHRS.jpg',
    stack: ['MATLAB', 'IMU', 'Kalman Filter', 'AHRS'],
    link: 'https://github.com/jasmineyliang/AHRS_sensor_fusion',
    linkLabel: 'View code',
  },
  // ── ML Foundations & Data Science ──
  {
    category: 'ML Foundations & Data Science',
    compact: true,
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Gaussian Anomaly Detection — Network Infrastructure AI',
    venue: 'Applied ML · Anomaly Detection',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/server2.png?raw=true',
    stack: ['Python', 'MATLAB', 'sklearn', 'Multivariate Gaussian'],
    link: 'https://github.com/jasmineyliang/recommendation_system',
    linkLabel: 'View code',
  },
  {
    category: 'ML Foundations & Data Science',
    compact: true,
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Neural Collaborative Filtering — Personalized Recommendation Engine',
    venue: 'Applied ML · Recommender Systems',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/RS1.png?raw=true',
    stack: ['Python', 'MATLAB', 'sklearn', 'Collaborative Filtering'],
    link: 'https://github.com/jasmineyliang/recommendation_system',
    linkLabel: 'View code',
  },
  {
    category: 'ML Foundations & Data Science',
    compact: true,
    pillar: 'Perception',
    pillarClass: 'pillar-per',
    title: 'Adversarial Game AI — MinMax Decision Engine',
    venue: 'AI · Game Theory',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/checker1.png?raw=true',
    stack: ['Java', 'JavaScript', 'MinMax', 'Alpha-Beta Pruning'],
    link: 'https://github.com/jasmineyliang/AI-checker-proj',
    linkLabel: 'View code',
  },
  {
    category: 'ML Foundations & Data Science',
    compact: true,
    pillar: 'Production',
    pillarClass: 'pillar-prod',
    title: 'Political NLP — Tweet Sentiment & Electoral Trend Analysis',
    venue: 'NLP · Political Data Science',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/l1.png?raw=true',
    stack: ['Java', 'SQL', 'JDBC', 'NLP', 'Sentiment Analysis'],
    link: 'https://github.com/jasmineyliang/state-legislator-tweets-election-years-proj',
    linkLabel: 'View code',
  },
  {
    category: 'ML Foundations & Data Science',
    compact: true,
    pillar: 'Perception',
    pillarClass: 'pillar-per',
    title: 'Multi-Omics ML — Manifold Learning for Gene Perturbation Networks',
    venue: 'Computational Biology · Dimensionality Reduction',
    teaser: '',
    description: '',
    image: 'https://jasmineyliang.github.io/images/g1.jpg?raw=true',
    stack: ['R', 'GENIE3', 't-SNE', 'UMAP', 'PCA'],
    link: 'https://github.com/jasmineyliang/multi-omics-analysis-of-metabolic-genes-perturbations-in-saccharomyces-cerevisiae',
    linkLabel: 'View code',
  },
];

const PAPERS = [
  {
    year: '2026',
    venue: 'SIGGRAPH 2026 — Poster, Selected for Technical Paper Track',
    title:
      'SeatSwap: Learning-Assisted Differentiable Kinematics for Human-Object Interaction Adaptation in Production-Scale Character Animation',
    authors:
      'Jasmine Liang, Stephen Mylabathula, Shai Segev, Priyamvad Ravindra Deshmukh, Ying Liu, Amaury Aubel',
    link: 'https://doi.org/10.1145/3799825.3818703',
    image: 'https://seat-swap.github.io/teaser.gif',
  },
  {
    year: '2026',
    venue: 'APL Electronic Devices',
    title:
      'Scalable Non-Diffusive Thermal Analysis of Field-Effect Transistors Using Neural Operators',
    authors: 'JP Panda, W Shang, Y Liu, J Zhou, J Liang, JX Wang, T Luo',
    link: 'https://scholar.google.com/citations?user=1kVmiDkAAAAJ',
    image: '/thumbnails/transistor-thermal.svg',
  },
  {
    year: '2025',
    venue: 'Materials Today Physics',
    title:
      'Physics-Informed Neural Networks for the Phonon Boltzmann Transport Equation with Hard-Encoded Angle-Dependent Boundary Conditions',
    authors: 'J Zhou, R Li, W Shang, Y Liu, JP Panda, P Du, XY Liu, J Liang, BC Ma, et al.',
    link: 'https://scholar.google.com/citations?user=1kVmiDkAAAAJ',
    image: '/thumbnails/pinn-phonon.svg',
  },
  {
    year: '2024',
    venue: 'AAAI Spring Symposium on Clinical Foundation Models',
    title:
      'Striding into Clarity: Wearable Sensor-Driven Estimation of Knee Adduction Moment, Unveiling the Black Box with Sequence-Based Neural Networks and Explainable AI',
    authors: 'JY Liang, H Bian, W Zhang, CK Chang, LS Chou',
    link: 'https://openreview.net/pdf?id=lWsDWnre2l',
    image: 'https://jasmineyliang.github.io/images/Screenshot%201.png?raw=true',
  },
  {
    year: '2024',
    venue: 'Wearable Technologies',
    title:
      'Center of Mass Acceleration During Walking: Comparison Between IMU and Camera-Based Motion Capture Methodologies',
    authors: 'JY Liang & LS Chou',
    link: 'https://www.cambridge.org/core/journals/wearable-technologies/article/center-of-mass-acceleration-during-walking-comparison-between-imu-and-camerabased-motion-capture-methodologies/EE637BCC2EE3335D02A3600F05FFBF28',
    image: 'https://jasmineyliang.github.io/images/p2.png?raw=true',
  },
  {
    year: '2023',
    venue: 'World Scientific Annual Review of Biomechanics',
    title:
      'Assessment of Gait Balance Control Using Inertial Measurement Units — A Narrative Review',
    authors: 'JY Liang & LS Chou',
    link: 'https://www.worldscientific.com/doi/abs/10.1142/S2810958923300068',
    image: 'https://jasmineyliang.github.io/images/r1.jpeg?raw=true',
  },
  {
    year: '2023',
    venue: 'Archives of Gerontology and Geriatrics Plus',
    title: 'Estimation of STEADI Performance Using Inertial Measurement Unit',
    authors: 'JY Liang, M Zhang, N Lamoureux, J Lansing, LS Chou, GJ Welk',
    link: 'https://www.sciencedirect.com/science/article/pii/S2950307824000286',
    image: 'https://jasmineyliang.github.io/images/e2.jpeg?raw=true',
  },
  {
    year: '2022',
    venue: 'IX World Congress of Biomechanics',
    title:
      'Estimation of Knee Adduction Moment During Walking Using Wearable Sensor Data With Sequence-Based Artificial Recurrent Neural Network',
    authors: 'JY Liang & LS Chou',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SnALrRkAAAAJ&sortby=pubdate&citation_for_view=SnALrRkAAAAJ:Tyk-4Ss8FVUC',
    image: 'https://jasmineyliang.github.io/images/k1.jpeg?raw=true',
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
  { year: '2015', label: 'Undergraduate Research Project Presentation Award' },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="project-card">
      <div className="card-img-wrap">
        <img src={p.image} alt={p.title} className="card-img" />
      </div>
      <span className={`card-pillar ${p.pillarClass}`}>{p.pillar}</span>
      <div>
        <h3 className="card-title">{p.title}</h3>
        <p className="card-venue">{p.venue}</p>
      </div>
      {p.teaser && <p className="card-teaser">{p.teaser}</p>}
      {p.description && <p className="card-desc">{p.description}</p>}
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

function CompactProjectRow({ p }: { p: Project }) {
  return (
    <a className="compact-project-row" href={p.link} target="_blank" rel="noreferrer">
      <img src={p.image} alt="" className="compact-thumb" />
      <div className="compact-body">
        <p className="pub-venue">{p.venue}</p>
        <p className="compact-title">{p.title}</p>
        <div className="card-stack" style={{ marginTop: 4 }}>
          {p.stack.map((t) => <span className="card-tag" key={t}>{t}</span>)}
        </div>
      </div>
      <span className="pub-arrow">↗</span>
    </a>
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
            <a href="#honors">Honors & Leadership</a>
            <div className="nav-dropdown">
              <a href="#archive" className="nav-dropdown-trigger">More Work</a>
              <div className="nav-dropdown-menu">
                <a href="#archive" className="nav-dropdown-item">AI for Business — Applied Projects</a>
                <a href="#archive" className="nav-dropdown-item">Skill-Based Projects — Technical CS</a>
                <a href="#archive" className="nav-dropdown-item">AI & Research — Surveys & Theory</a>
              </div>
            </div>
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
                Applied Research · Physical AI · Agentic AI
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
                <span className="pillar-chip chip-per">Perception</span>
                <span className="pillar-chip chip-prod">Production</span>
                <span className="pillar-chip chip-sim">Agentic AI</span>
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

            </div>

            <div>
              <img
                src="https://jasmineyliang.github.io/images/20231007_160933496_iOS%20copy.jpg?raw=true"
                alt="Jasmine Liang"
                style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', marginBottom: 28, border: '2px solid var(--border)' }}
              />
              <div className="timeline">
                <div className="timeline-item">
                  <p className="timeline-label">Now</p>
                  <p className="timeline-title">Computer Vision Engineer II</p>
                  <p className="timeline-org">Physical AI · Meta Reality Labs (Contract)</p>
                  <p className="timeline-tag">Production</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-label">Postdoctoral Research Associate</p>
                  <p className="timeline-title">Scientific Machine Learning</p>
                  <p className="timeline-org">University of Notre Dame · AI & SciML</p>
                  <p className="timeline-tag">Simulation</p>
                </div>
                <div className="timeline-item">
                  <p className="timeline-label">Doctoral Graduate Researcher — AI</p>
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
          {(['Applied AI & Production Systems', 'Perception & Wearable Sensing', 'ML Foundations & Data Science'] as const).map((cat) => {
            const items = PROJECTS.filter((p) => p.category === cat);
            const isCompact = items[0]?.compact;
            return (
              <div key={cat} className="project-category">
                <p className="project-cat-label">{cat}</p>
                {isCompact ? (
                  <div className="compact-project-list">
                    {items.map((p) => <CompactProjectRow key={p.title} p={p} />)}
                  </div>
                ) : (
                  <div className="project-grid">
                    {items.map((p) => <ProjectCard key={p.title} p={p} />)}
                  </div>
                )}
              </div>
            );
          })}
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
                <img src={p.image} alt="" className="pub-thumb" />
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

        {/* ── Honors & Awards ── */}
        <section className="section wrap" id="honors">
          <div className="section-head">
            <p className="section-label">Recognition</p>
            <h2 className="section-title">Honors & service.</h2>
          </div>
          <div className="honors-cols">
            <div>
              <p className="section-label about-awards-label">Honors & Awards</p>
              {AWARDS.map((a, i) => (
                <div key={i} className="award-item">
                  <span className="award-year">{a.year}</span>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="section-label about-awards-label">Leadership & Service</p>
              <div className="award-item"><span className="award-year">2026</span><span>Reviewer, Sensors Journal (MDPI)</span></div>
              <div className="award-item"><span className="award-year">2024</span><span>Reviewer, AAAI Symposium</span></div>
              <div className="award-item">
                <span className="award-year" />
                <span>Curriculum Developer, <a href="https://classroom.github.com/classrooms/171609019-analytics-ai-health-strategies-jl-classroom" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Analytics AI Health Strategies ↗</a></span>
              </div>
              <div className="award-item">
                <span className="award-year" />
                <span>Instructor, Biomechanics — <a href="https://grader.mathworks.com/courses/109094" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>View classroom ↗</a></span>
              </div>
            </div>
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
            PERCEPTION · PRODUCTION · AGENTIC AI
          </span>
          <a href="https://github.com/jasmineyliang" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}
