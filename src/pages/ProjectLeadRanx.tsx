import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectLeadRanx() {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <a href="/#contact" className="project-nav-contact">Get in touch <span>→</span></a>
      </nav>

      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">AI Integration · Full-Stack Development · Reliability Engineering</p>
          <h1 className="project-title">LeadRanx<br />AI Lead Triage System</h1>
          <div className="project-hero-btns">
            <a
              href="https://lead-triage-system.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn"
            >
              View Deployed Project
            </a>
            <a
              href="https://www.loom.com/share/41f8454b130a4a8e85aeffd8fbe89437"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn project-live-btn--outline"
            >
              Watch Walkthrough
            </a>
          </div>
        </div>
      </div>

      <div className="project-body">
        <section className="project-section">
          <h2>Introduction</h2>
          <p>LeadRanx is an AI-assisted lead triage system that turns inconsistent CSV lead data into a ranked, explainable shortlist for sales teams. It combines LLM classification with deterministic scoring so users can process large lead lists quickly without giving up visibility into why each record received its rank.</p>
          <p>The product is designed around a practical constraint: external AI services can be slow, unavailable, or return malformed output. LeadRanx treats those failures as normal operating conditions and continues producing useful results through validation, fallbacks, and circuit-breaker behaviour.</p>
        </section>

        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Frontend</td><td>React, component-driven data review interface</td></tr>
                <tr><td>API</td><td>FastAPI, Python, typed request and response models</td></tr>
                <tr><td>AI Integration</td><td>Claude for semantic lead classification</td></tr>
                <tr><td>Scoring</td><td>Deterministic weighted ranking pipeline</td></tr>
                <tr><td>Fallback</td><td>Regex and rule-based classification</td></tr>
                <tr><td>Storage</td><td>SQLite</td></tr>
                <tr><td>Deployment</td><td>Docker, single-container application</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="project-section">
          <h2>How the System Works</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>1. Import &amp; Normalise</h3>
              <p>Users upload a CSV containing imperfect lead records. The ingestion layer normalises field names, validates rows, preserves source data and prepares a consistent representation for classification.</p>
            </div>
            <div className="project-model-card">
              <h3>2. Classify &amp; Score</h3>
              <p>The AI layer identifies lead intent and fit while a deterministic scoring engine applies explicit business rules. Keeping ranking deterministic makes results reproducible and auditable.</p>
            </div>
            <div className="project-model-card">
              <h3>3. Rank &amp; Explain</h3>
              <p>The interface presents the strongest opportunities first and exposes the signals behind each score, giving sales teams a useful shortlist rather than an unexplained AI verdict.</p>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Reliability Architecture</h2>
          <p>The classification pipeline is deliberately defensive. AI responses are validated before entering the scoring system. Repeated upstream failures open a circuit breaker, preventing a struggling provider from delaying every request. When AI classification is unavailable, a regex and rules-based fallback keeps the core workflow usable.</p>
          <div className="project-features-grid">
            {[
              { name: 'LLM classification', desc: 'Semantic interpretation handles lead descriptions that do not fit rigid keyword rules.' },
              { name: 'Deterministic scoring', desc: 'Explicit weighted rules keep ordering stable, testable and explainable.' },
              { name: 'Automatic fallback', desc: 'Regex classification preserves core functionality when the AI provider is unavailable.' },
              { name: 'Circuit breaker', desc: 'Repeated API failures temporarily bypass the provider to protect latency and system health.' },
              { name: 'Response validation', desc: 'Malformed model output is rejected before it can influence rankings or stored data.' },
              { name: 'Single-container delivery', desc: 'Frontend and API ship together for straightforward local and production deployment.' },
            ].map((feature) => (
              <div className="feature-pill" key={feature.name}>
                <code>{feature.name}</code>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Key Outcomes</h2>
          <ul className="project-list">
            <li>Transforms messy lead exports into a structured, prioritised workflow.</li>
            <li>Combines AI flexibility with deterministic, explainable decision logic.</li>
            <li>Continues operating when the external AI provider fails.</li>
            <li>Packages the full product into a straightforward Docker deployment.</li>
          </ul>
        </section>

        <div className="project-cta">
          <a href="mailto:mishaeledegwa@gmail.com?subject=LeadRanx project" className="project-live-btn">Discuss This Project</a>
        </div>
      </div>
    </div>
  )
}
