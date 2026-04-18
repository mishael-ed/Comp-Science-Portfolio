import { Link, useNavigate } from 'react-router-dom'
import './ProjectAI.css'
import './Education.css'
import './Experience.css'

export default function Experience() {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <Link to="/contact" className="btn btn-primary project-nav-contact">Contact Me</Link>
      </nav>

      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Software Development · Web Engineering · Client Work</p>
          <h1 className="project-title">Professional<br />Experience</h1>
          <p className="edu-hero-sub">Full-Stack Developer · Pan-Atlantic University · Lagos, Nigeria</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="edu-stats-bar">
        <div className="edu-stat">
          <span className="edu-stat-num">1</span>
          <span className="edu-stat-label">Live Client Site</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">3+</span>
          <span className="edu-stat-label">Projects Shipped</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">∞</span>
          <span className="edu-stat-label">Leads Generated</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">100%</span>
          <span className="edu-stat-label">Uptime Maintained</span>
        </div>
      </div>

      <div className="project-body">

        {/* Experience Timeline */}
        <section className="project-section">
          <h2>Work History</h2>
          <div className="edu-timeline">

            {/* Aggie Carpet Cleaning */}
            <div className="edu-entry edu-entry--current">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">Full-Stack Web Developer</span>
                  </div>
                </div>
                <p className="edu-entry-school">Aggie Carpet Cleaning — Albuquerque, New Mexico, USA</p>
                <p className="edu-entry-detail">
                  Designed, built, and continue to maintain the full client-facing website for Aggie Carpet Cleaning, a local carpet and upholstery cleaning business operating in Albuquerque, NM. The site serves as the company's primary digital storefront — replacing word-of-mouth-only customer acquisition with a professional online presence that generates inbound leads around the clock.
                </p>
                <p className="edu-entry-detail">
                  Built with <strong>React</strong> and <strong>React Router</strong>, the multi-page site covers all core service offerings — carpet cleaning, upholstery, tile and grout, and area rug cleaning — each with dedicated pages structured for both user clarity and search engine indexing. A custom <strong>contact and quote request form</strong> (powered by FormSubmit) routes enquiries directly to the business owner's inbox, turning site visitors into booked appointments without any intermediary platform fees.
                </p>
                <p className="edu-entry-detail">
                  Beyond build, I handle ongoing <strong>site management and content updates</strong> — ensuring service descriptions, pricing information, and contact details stay current. The site is deployed on a custom domain and maintained for uptime, load performance, and mobile responsiveness so it works for every potential customer regardless of device.
                </p>
                <div className="edu-entry-tags">
                  <span className="edu-tag">React</span>
                  <span className="edu-tag">React Router</span>
                  <span className="edu-tag">CSS</span>
                  <span className="edu-tag">FormSubmit</span>
                  <span className="edu-tag">SEO</span>
                  <span className="edu-tag">Lead Generation</span>
                  <span className="edu-tag">Site Management</span>
                  <span className="edu-tag">CRA</span>
                </div>
              </div>
            </div>

            {/* Greenfingers Wildlife Initiative */}
            <div className="edu-entry">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">Software Developer</span>
                  </div>
                </div>
                <p className="edu-entry-school">Greenfingers Wildlife Initiative — Nigeria</p>
                <p className="edu-entry-detail">
                  Worked as a developer for Greenfingers Wildlife Initiative, a conservation-focused organisation. Responsibilities spanned database management, website operations, and building internal automations to reduce manual overhead across the organisation's day-to-day processes.
                </p>
                <p className="edu-entry-detail">
                  Managed and maintained the organisation's <strong>database</strong> — ensuring data integrity, structuring records for the organisation's conservation programmes, and handling queries to support reporting needs. On the web side, handled <strong>site management</strong> duties including content updates, uptime monitoring, and keeping the digital presence aligned with the organisation's communications.
                </p>
                <p className="edu-entry-detail">
                  Built and maintained <strong>automations</strong> to streamline internal workflows — reducing repetitive manual tasks and freeing up team capacity for mission-critical work. These systems handled routine data processing and notification pipelines, making operations more efficient without requiring constant manual intervention.
                </p>
                <div className="edu-entry-tags">
                  <span className="edu-tag">Database Management</span>
                  <span className="edu-tag">Site Management</span>
                  <span className="edu-tag">Automation</span>
                  <span className="edu-tag">Workflow Tooling</span>
                  <span className="edu-tag">Data Integrity</span>
                </div>
              </div>
            </div>

            {/* Last item */}
            <div className="edu-entry edu-entry--last">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">Freelance Developer</span>
                  </div>
                </div>
                <p className="edu-entry-school">Independent — Remote</p>
                <p className="edu-entry-detail">
                  Building full-stack applications independently across a range of domains. Projects include a machine learning academic performance predictor (Python, XGBoost, LSTM, Streamlit, MySQL) and a full-stack fashion e-commerce platform (React, Node.js, Express, PostgreSQL, TypeORM, Paystack). Each project is deployed to production and publicly accessible.
                </p>
                <div className="edu-entry-tags">
                  <span className="edu-tag">Python</span>
                  <span className="edu-tag">Node.js</span>
                  <span className="edu-tag">PostgreSQL</span>
                  <span className="edu-tag">TypeScript</span>
                  <span className="edu-tag">Machine Learning</span>
                  <span className="edu-tag">Full-Stack</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* What I delivered */}
        <section className="project-section">
          <h2>What I Delivered</h2>

          <p style={{ marginBottom: '2rem' }}>Across the organisations I've worked with, here's a breakdown of what I built and shipped.</p>

          <p className="exp-org-label">Aggie Carpet Cleaning</p>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Full Website Build</h3>
              <p>Multi-page React site with dedicated pages for every service category. Clean layout, fast load times, and a design that communicates professionalism and trust to first-time visitors.</p>
            </div>
            <div className="project-model-card">
              <h3>Lead Generation System</h3>
              <p>Integrated quote request and contact form that routes enquiries directly to the business owner's inbox. Every submission is a potential booking — no third-party platform fees involved.</p>
            </div>
            <div className="project-model-card">
              <h3>SEO-Structured Pages</h3>
              <p>Service pages built with semantic HTML, proper heading hierarchy, and local business keywords so the site surfaces in Google searches for carpet cleaning in Albuquerque.</p>
            </div>
          </div>
          <div className="project-models" style={{ marginTop: '1.5rem' }}>
            <div className="project-model-card">
              <h3>Mobile Responsive</h3>
              <p>Fully responsive layout optimised for all screen sizes — most local service searches happen on mobile, so the site is built for that context from the ground up.</p>
            </div>
            <div className="project-model-card">
              <h3>Custom Domain Deployment</h3>
              <p>Site deployed and live at a custom domain, giving the business a credible web address to share on business cards, Google Maps, and social media.</p>
            </div>
            <div className="project-model-card">
              <h3>Ongoing Maintenance</h3>
              <p>Continued management post-launch — handling content updates, monitoring uptime, and iterating on the site as the business's needs evolve.</p>
            </div>
          </div>

          <p className="exp-org-label" style={{ marginTop: '3rem' }}>Greenfingers Wildlife Initiative</p>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Database Management</h3>
              <p>Maintained and structured the organisation's database — ensuring data integrity across conservation programme records and supporting internal reporting through optimised queries.</p>
            </div>
            <div className="project-model-card">
              <h3>Website Operations</h3>
              <p>Managed the organisation's site day-to-day — publishing content updates, monitoring uptime, and keeping the digital presence aligned with ongoing communications and campaigns.</p>
            </div>
            <div className="project-model-card">
              <h3>Internal Automations</h3>
              <p>Built automation systems to handle repetitive internal workflows — including data processing pipelines and notification triggers — freeing up team capacity for mission-critical conservation work.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <button onClick={() => navigate(-1)} className="project-back-btn">← Back to Portfolio</button>
        </div>

      </div>
    </div>
  )
}
