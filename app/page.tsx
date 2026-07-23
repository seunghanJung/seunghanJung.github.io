import { DemoPlaylist } from "./DemoPlaylist";

const publications = [
  {
    year: "2026",
    title: "Adaptive Representation Learning for Reliable Human–AI Collaboration",
    venue: "International Conference on Learning Representations · Under review",
  },
  {
    year: "2025",
    title: "Beyond Accuracy: Interpretable Models for Real-World Decision Support",
    venue: "ACM Conference on Human Factors in Computing Systems",
  },
  {
    year: "2024",
    title: "Data-Efficient Multimodal Learning with Structured Priors",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
  },
];

const news = [
  ["2026.06", "New preprint on reliable AI collaboration is now available."],
  ["2026.03", "Our work was accepted to CHI 2026."],
  ["2025.12", "Joined the Human-Centered Intelligence Lab."],
];

const studies = [
  ["01", "Deep Learning Fundamentals", "12 notes · updated Jun 2026"],
  ["02", "Paper Reading Archive", "28 papers · updated weekly"],
  ["03", "Research Toolkit", "Code, templates & checklists"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Go to homepage">
          <strong>IDEA LAB</strong>
          <span>RESEARCHER</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#top">About</a>
          <a href="#work">Research</a>
          <a href="#areas">Areas</a>
          <a href="#publications">Papers</a>
          <a href="#news">News</a>
          <a href="#study">Study</a>
          <a className="nav-contact" href="#contact">Contact ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> IDEA LAB · Research Portfolio</p>
          <h1>
            Building intelligent<br />
            <em>systems for people.</em>
          </h1>
          <p className="hero-intro">
            Hi, I&apos;m <strong>Seung han Jung</strong>, an IDEA LAB researcher exploring how to build
            intelligent systems that understand people and earn their trust.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">Explore my research <span>↓</span></a>
            <a className="text-link" href="#publications">View publications ↗</a>
          </div>
        </div>

        <aside className="model-showcase" aria-label="Engineering model slideshow">
          <div className="showcase-label"><span>FORM STUDIES</span><span>01—04</span></div>
          <div className="model-stage" aria-hidden="true">
            <div className="model-slide slide-car">
              <div className="car-model">
                <span className="car-cabin" />
                <span className="car-body" />
                <span className="car-wheel wheel-left" />
                <span className="car-wheel wheel-right" />
              </div>
              <p>AUTOMOTIVE MODEL</p>
            </div>
            <div className="model-slide slide-aircraft">
              <div className="aircraft-model" />
              <p>AIRCRAFT MODEL</p>
            </div>
            <div className="model-slide slide-fighter">
              <div className="fighter-model" />
              <p>FIGHTER CONCEPT</p>
            </div>
            <div className="model-slide slide-cad">
              <div className="cad-model">
                <span className="cad-front" />
                <span className="cad-top" />
                <span className="cad-side" />
              </div>
              <p>CAD GEOMETRY</p>
            </div>
          </div>
          <div className="showcase-footer">
            <span>Design · Simulate · Validate</span>
            <div className="slide-bars"><i /><i /><i /><i /></div>
          </div>
        </aside>
      </section>

      <section className="ticker" aria-label="Research keywords">
        <span>Human-Centered AI</span><i>✦</i>
        <span>Multimodal Learning</span><i>✦</i>
        <span>Trustworthy Systems</span><i>✦</i>
        <span>Interaction Design</span>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-index">01 — Selected research</p>
            <h2>Research Work</h2>
          </div>
          <p>From an initial question to a working system, here are selected projects and the results behind them.</p>
        </div>

        <article className="featured-work">
          <div className="demo-frame">
            <DemoPlaylist />
          </div>
          <div className="work-copy">
            <p className="work-number">01 / FEATURED</p>
            <h3>AI Agent for<br />pyHyp Meshing</h3>
            <p>
              A sequential demonstration of an AI-assisted CFD workflow: generating a mesh
              with pyHyp, inspecting the result, and preparing the RANS solver configuration.
            </p>
            <div className="tag-row"><span>AI AGENT</span><span>CFD</span><span>MESHING</span></div>
            <a href="mailto:hello@example.com?subject=Research%20Demo">Ask about this project <span>↗</span></a>
          </div>
        </article>

        <div className="project-grid">
          <article><span>02</span><p>Multimodal Learning</p><h3>Visual reasoning with fewer labels</h3><small>CVPR Workshop · 2025</small></article>
          <article><span>03</span><p>Trustworthy AI</p><h3>Explaining uncertainty in decisions</h3><small>CHI · 2025</small></article>
          <article className="project-more"><span>＋</span><h3>More projects<br />coming soon.</h3></article>
        </div>
      </section>

      <section className="section research-areas" id="areas">
        <p className="section-index">02 — Research areas</p>
        <div className="areas-layout">
          <h2>What do I<br /><em>research?</em></h2>
          <div className="area-list">
            <article><span>01</span><div><h3>Human-Centered AI</h3><p>I design intelligent systems that support better human decisions instead of simply replacing them.</p></div></article>
            <article><span>02</span><div><h3>Multimodal Learning</h3><p>I explore efficient learning methods that understand text, images, and behavioral data together.</p></div></article>
            <article><span>03</span><div><h3>Trustworthy Systems</h3><p>I study evaluation frameworks for AI systems that communicate uncertainty and earn user trust.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="section-heading publication-heading">
          <div><p className="section-index">03 — Publications</p><h2>Publications</h2></div>
          <a href="mailto:hello@example.com?subject=CV%20Request">Request full CV ↗</a>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <article key={paper.title}>
              <span className="paper-year">{paper.year}</span>
              <div><h3>{paper.title}</h3><p>{paper.venue}</p></div>
              <span className="paper-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="news">
        <div className="news-column">
          <p className="section-index">04 — Latest</p>
          <h2>News</h2>
          <div className="news-list">
            {news.map(([date, item]) => <article key={date}><time>{date}</time><p>{item}</p></article>)}
          </div>
        </div>
        <div className="study-column" id="study">
          <p className="section-index">05 — Study archive</p>
          <h2>Study Notes</h2>
          <div className="study-list">
            {studies.map(([number, title, meta]) => (
              <a href="mailto:hello@example.com?subject=Study%20Material" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{meta}</p></div><b>→</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p>Open to new research and collaboration.</p>
          <h2>Let&apos;s make something<br /><em>meaningful.</em></h2>
        </div>
        <a className="footer-mail" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        <div className="footer-bottom"><span>© 2026 SEUNG HAN JUNG</span><span>IDEA LAB · SEOUL, SOUTH KOREA</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
