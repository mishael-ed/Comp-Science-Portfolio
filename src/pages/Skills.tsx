import { Link, useNavigate } from 'react-router-dom'
import './ProjectAI.css'
import './Education.css'

const years = [
  {
    label: 'Year 1',
    courses: [
      'Introduction to Computer Science',
      'Introduction to Problem Solving',
      'Elementary Mathematics I — Algebra & Trigonometry',
      'Elementary Mathematics II — Differential & Integral Calculus',
      'Elementary Mathematics III — Set Theory & Numbers',
    ],
  },
  {
    label: 'Year 2',
    courses: [
      'Computer Hardware and Networking Essentials',
      'Computer Programming I',
      'Computer Programming II',
      'Discrete Structures',
      'Introduction to Software Engineering',
      'Linear Algebra for Computer Scientists',
      'Systems Analysis and Design',
      'Computer Architecture and Organisation',
      'Computer Graphics',
      'Computer Security Fundamentals',
      'Descriptive Statistics',
      'Digital Logic Design',
      'Mathematical Method I',
      'Mathematical Method II',
      'SIWES I',
    ],
  },
  {
    label: 'Year 3',
    courses: [
      'Artificial Intelligence',
      'Compiler Construction',
      'Computer Science Innovation and New Technology',
      'Data Structures',
      'Introduction to Numerical Analysis',
      'Operating Systems',
      'Data Communication Systems and Networks',
      'Data Management I',
      'Formal Methods',
      'Introduction to Cybersecurity and Strategy',
      'Object Oriented Programming',
      'SIWES II',
    ],
  },
  {
    label: 'Year 4',
    courses: [
      'Machine Learning',
      'Algorithm and Complexities',
      'Human Computer Interface',
      'Introduction to Data Science and Engineering',
      'Data Management II',
      'Advances in Web, Mobile and Blockchain Development',
      'Ethics and Legal Issues in Computer Science',
      'Final Year Project I',
      'Final Year Project II',
      'Project Management',
      'Research Methodology and Technical Report Writing',
      'Survey of Programming',
    ],
  },
]

export default function Skills() {
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
          <p className="project-category">BSc Computer Science · Pan-Atlantic University · Lagos, Nigeria</p>
          <h1 className="project-title">Courses &amp;<br />Completed Studies</h1>
          <p className="edu-hero-sub">All computer science subjects studied across 4 years</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="edu-stats-bar">
        <div className="edu-stat">
          <span className="edu-stat-num">4</span>
          <span className="edu-stat-label">Years</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">40+</span>
          <span className="edu-stat-label">Courses</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">4.6</span>
          <span className="edu-stat-label">CGPA</span>
        </div>
        <div className="edu-stat-divider" />
        <div className="edu-stat">
          <span className="edu-stat-num">BSc</span>
          <span className="edu-stat-label">Computer Science</span>
        </div>
      </div>

      <div className="project-body">

        <section className="project-section">
          <h2>Course Breakdown by Year</h2>
          <p>The following are all computer science and technical subjects completed as part of my BSc in Computer Science at Pan-Atlantic University.</p>

          <div className="skills-years">
            {years.map(year => (
              <div key={year.label} className="skills-year-block">
                <div className="skills-year-label">{year.label}</div>
                <div className="skills-course-grid">
                  {year.courses.map(course => (
                    <div key={course} className="skills-course-pill">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
