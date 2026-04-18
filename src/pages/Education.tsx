import { Link, useNavigate } from 'react-router-dom'
import './ProjectAI.css'
import './Education.css'

export default function Education() {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <Link to="/contact" className="btn btn-primary project-nav-contact">Contact Me</Link>
      </nav>

      {/* Hero */}
      <div className="project-hero edu-hero">
        <div className="project-hero-inner">
          <p className="project-category">Academic Background · Achievements · Skills</p>
          <h1 className="project-title">Education &amp;<br />Background</h1>
          <p className="edu-hero-sub">Pan-Atlantic University · Lagos, Nigeria · CGPA 4.6</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="edu-stats-bar">
        <div className="edu-stat">
          <span className="edu-stat-num">4.6</span>
          <span className="edu-stat-label">CGPA</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">3</span>
          <span className="edu-stat-label">Schools</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">#1</span>
          <span className="edu-stat-label">Best Graduate</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">BSc</span>
          <span className="edu-stat-label">Computer Science</span>
        </div>
      </div>

      <div className="project-body">

        {/* Education Timeline */}
        <section className="project-section">
          <h2>Academic Journey</h2>
          <div className="edu-timeline">

            <div className="edu-entry edu-entry--current">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">BSc in Computer Science</span>
                    <span className="edu-current-badge">In Progress</span>
                  </div>
                  <span className="edu-entry-year">Present</span>
                </div>
                <p className="edu-entry-school">Pan-Atlantic University — Ibeju-Lekki, Lagos, Nigeria</p>
                <p className="edu-entry-detail">Specialising in software engineering, machine learning, and system design. Consistent high achievement across all coursework with a <strong>4.76 CGPA</strong>. Developing expertise in full-stack development, artificial intelligence, and domain-driven architecture through academic projects and independent builds.</p>
                <div className="edu-entry-tags">
                  <span className="edu-tag">Software Engineering</span>
                  <span className="edu-tag">Machine Learning</span>
                  <span className="edu-tag">Database Systems</span>
                  <span className="edu-tag">Algorithms</span>
                  <span className="edu-tag">Computer Networks</span>
                </div>
              </div>
            </div>

            <div className="edu-entry">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">WAEC Certificate</span>
                    <span className="edu-award-badge">Best Graduate 2022</span>
                  </div>
                  <span className="edu-entry-year">Sep 2022</span>
                </div>
                <p className="edu-entry-school">Refiners High School — Sangotedo, Lagos, Nigeria</p>
                <p className="edu-entry-detail">Graduated as the <strong>best student</strong> of Refiners Schools in 2022 — recognising academic performance and consistent excellence throughout secondary education.</p>
              </div>
            </div>

            <div className="edu-entry edu-entry--last">
              <div className="edu-entry-content">
                <div className="edu-entry-header">
                  <div>
                    <span className="edu-entry-degree">BECE Certificate</span>
                  </div>
                  <span className="edu-entry-year">Sep 2019</span>
                </div>
                <p className="edu-entry-school">Bexhill International School — Tema, Greater Accra, Ghana</p>
                <p className="edu-entry-detail">Completed basic education with distinction at an international institution in Ghana — building an early foundation in academics and critical thinking.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Accomplishments */}
        <section className="project-section">
          <h2>Accomplishments</h2>
          <div className="project-impact-grid">
            <div className="impact-card">
              <h3>CGPA 4.6</h3>
              <p>Maintaining top academic performance at Pan-Atlantic University across all Computer Science modules — reflecting genuine mastery rather than surface-level study.</p>
            </div>
            <div className="impact-card">
              <h3>Best Graduating Student</h3>
              <p>Graduated as the best student of Refiners Schools in 2022 — recognised for consistent academic excellence and performance throughout secondary education.</p>
            </div>
            <div className="impact-card">
              <h3>100+ Brand Projects</h3>
              <p>Worked on hundreds of brand design projects across industries — building real-world creative, strategic, and client communication skills alongside academic study.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <Link to="/contact" className="project-live-btn" style={{ textDecoration: 'none' }}>
            Get In Touch
          </Link>
          <button onClick={() => navigate(-1)} className="project-back-btn">← Back to Portfolio</button>
        </div>

      </div>
    </div>
  )
}
