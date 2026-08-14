import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectGreenfingers() {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <a href="/contact" className="project-nav-contact">Get in touch <span>→</span></a>
      </nav>

      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Frontend Web Development · Nonprofit Website · Conservation</p>
          <h1 className="project-title">Greenfingers<br />Wildlife Initiative</h1>
          <div className="project-hero-btns">
            <a
              href="https://gfwsite2-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn"
            >
              View Deployed Project
            </a>
            <a
              href="https://github.com/mishael-ed/GFWSITE2"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn project-live-btn--outline"
            >
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="project-body">
        <section className="project-section">
          <h2>Introduction</h2>
          <p>Greenfingers Wildlife Initiative is a production website for a conservation organization. The site supports public communication, program visibility, and credibility for conservation work by presenting the organization clearly to visitors, partners, and stakeholders.</p>
          <p>The project focuses on a clean, responsive web experience that makes the organization’s mission, programs, and contact pathways easy to understand across desktop and mobile devices.</p>
        </section>

        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Frontend</td><td>React, component-based page structure</td></tr>
                <tr><td>Styling</td><td>Responsive CSS, accessible layout patterns</td></tr>
                <tr><td>Content</td><td>Mission-focused nonprofit information architecture</td></tr>
                <tr><td>Operations</td><td>Website updates and production site maintenance</td></tr>
                <tr><td>Deployment</td><td>Vercel</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="project-section">
          <h2>What I Built</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Mission-Led Website Structure</h3>
              <p>The website organizes the organization’s work into a clear public-facing experience, helping visitors quickly understand the mission, programs, and ways to engage.</p>
            </div>
            <div className="project-model-card">
              <h3>Responsive Frontend</h3>
              <p>The layout adapts across screen sizes so the site remains readable and usable on phones, tablets, and desktop displays.</p>
            </div>
            <div className="project-model-card">
              <h3>Production Deployment</h3>
              <p>The project is deployed on Vercel, giving the organization a live, shareable web presence that can be maintained and improved over time.</p>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <div className="project-features-grid">
            {[
              { name: 'Responsive pages', desc: 'A layout system built to keep nonprofit content readable across mobile and desktop screens.' },
              { name: 'Clear content hierarchy', desc: 'Structured sections that communicate the organization’s work without overwhelming visitors.' },
              { name: 'Public credibility', desc: 'A polished web presence that supports outreach, partnerships, and program visibility.' },
              { name: 'Live deployment', desc: 'Production hosting through Vercel with a direct public URL for visitors and stakeholders.' },
            ].map((feature) => (
              <div key={feature.name} className="feature-pill">
                <code>{feature.name}</code>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Skills Demonstrated</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Domain</th><th>Specifics</th></tr></thead>
              <tbody>
                <tr><td>Frontend Development</td><td>React page composition, responsive layouts, reusable structure</td></tr>
                <tr><td>Content Design</td><td>Nonprofit messaging, mission-led page flow, public information architecture</td></tr>
                <tr><td>Deployment</td><td>Vercel production deployment and live website delivery</td></tr>
                <tr><td>Website Operations</td><td>Maintaining a public-facing organizational web presence</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="project-cta">
          <a
            href="https://gfwsite2-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live-btn"
          >
            View Deployed Project
          </a>
          <a
            href="https://github.com/mishael-ed/GFWSITE2"
            target="_blank"
            rel="noreferrer"
            className="project-live-btn project-live-btn--outline"
          >
            View GitHub Repo
          </a>
          <button onClick={() => navigate(-1)} className="project-back-btn">← Back to Portfolio</button>
        </div>
      </div>
    </div>
  )
}
