import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import profilePic from './assets/hero.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about']
      let current = 'hero'

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Skills</a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero / Intro Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <img src={profilePic} alt="Mishael Edegwa" className="profile-pic" />
            <h2 className="hero-subtitle">Mishael</h2>
            <h1 className="hero-title">Specializing in Web Applications, Mobile Development, and Machine Learning Solutions</h1>
            <Link to="/contact" className="btn btn-primary work-with-me-btn">Work With Me</Link>
          </div>
          <div className="hero-right">
            <ul className="hero-roles">
              <li>Fullstack Web Developer</li>
              <li>ML/AI Engineer</li>
              <li>Mobile App Developer</li>
              <li>Software Engineer</li>
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="section-content">
          <h2 className="section-title">Top Projects</h2>
          <div className="projects-grid">
            <Link className="project-card" to="/projects/ai-performance-predictor">
              <div className="project-card-body">
                <p className="project-card-category">Machine Learning · AI for Education</p>
                <h3 className="project-card-name">AI Academic Performance Predictor</h3>
                <p className="project-card-stack">Python · Streamlit · XGBoost · Random Forest · LSTM · MySQL</p>
              </div>
              <div className="project-card-footer">
                <span>View Project</span>
                <span className="project-card-arrow">→</span>
              </div>
            </Link>
            <Link className="project-card" to="/projects/aggie-carpet-cleaning">
              <div className="project-card-body">
                <p className="project-card-category">Full-Stack Web Development · Local Business · SEO</p>
                <h3 className="project-card-name">Aggie Carpet Cleaning Website</h3>
                <p className="project-card-stack">React · React Router · FormSubmit · CSS · CRA</p>
              </div>
              <div className="project-card-footer">
                <span>View Project</span>
                <span className="project-card-arrow">→</span>
              </div>
            </Link>
            <Link className="project-card" to="/projects/moodrobe">
              <div className="project-card-body">
                <p className="project-card-category">Full-Stack · TypeScript · DDD · E-Commerce</p>
                <h3 className="project-card-name">MoodRobe Fashion Platform</h3>
                <p className="project-card-stack">React · Node.js · PostgreSQL · TypeORM · Paystack</p>
              </div>
              <div className="project-card-footer">
                <span>View Project</span>
                <span className="project-card-arrow">→</span>
              </div>
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/contact" className="btn btn-primary work-with-me-btn">Work With Me</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-content">
          <img src={profilePic} alt="Mishael Edegwa" className="profile-pic profile-pic--about" />
          <h2 className="section-title about-title">About Me</h2>
          <div className="about-grid">
            <Link className="about-card" to="/education">
              <h3>My Education</h3>
            </Link>
            <Link className="about-card" to="/experience">
              <h3>My Experience</h3>
            </Link>
            <Link className="about-card" to="/skills">
              <h3>My Skills &amp; Completed Courses</h3>
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/contact" className="btn btn-secondary-white work-with-me-btn">Work With Me</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Mishael Edegwa. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ed-mishael-5aa633230/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
