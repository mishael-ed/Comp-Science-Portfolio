import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NewPortfolio.css'

type Filter = 'All' | 'Web Development' | 'Frontend' | 'Full Stack' | 'Machine Learning' | 'AI'

const filters: Filter[] = ['All', 'Web Development', 'Frontend', 'Full Stack', 'Machine Learning', 'AI']

const projects = [
  {
    number: '01',
    name: 'LeadRanx',
    type: 'AI Lead Triage System',
    summary: 'An AI-assisted lead triage system that turns messy CSV lead data into a ranked and explainable shortlist for sales teams.',
    stack: ['React', 'FastAPI', 'Python', 'SQLite', 'Claude', 'Docker'],
    categories: ['Web Development', 'Full Stack', 'AI'] as Filter[],
    to: '/projects/leadranx',
  },
  {
    number: '02',
    name: 'AI Student Performance Predictor',
    type: 'Machine Learning · Education',
    summary: 'An early-warning system designed to identify students at risk of academic failure before final examinations, giving educators an opportunity to intervene earlier.',
    stack: ['Python', 'XGBoost', 'Random Forest', 'LSTM', 'TensorFlow', 'Streamlit'],
    categories: ['Machine Learning', 'AI'] as Filter[],
    to: '/projects/ai-performance-predictor',
  },
  {
    number: '03',
    name: 'Aggie Carpet Cleaning',
    type: 'Frontend · Lead Generation',
    summary: 'A fast, mobile-first customer acquisition website built to turn local search traffic into qualified service enquiries.',
    stack: ['React', 'JavaScript', 'CSS', 'SEO', 'FormSubmit', 'Vercel'],
    categories: ['Web Development', 'Frontend'] as Filter[],
    to: '/projects/aggie-carpet-cleaning',
  },
  {
    number: '04',
    name: 'Colour Correction',
    type: 'Applied Machine Learning · Colour Science',
    summary: 'A text-colour classifier that uses WCAG-derived photometric features to predict whether black or white text will be most readable on any RGB background.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'ipywidgets', 'Google Colab'],
    categories: ['Machine Learning', 'AI'] as Filter[],
    to: '/projects/colour-correction',
  },
  {
    number: '05',
    name: 'Web3Connect HR',
    type: 'Frontend · Recruitment Platform',
    summary: 'A specialist recruitment platform that connects Web3 professionals with companies through structured candidate and employer intake experiences.',
    stack: ['React', 'React Router', 'Vite', 'Vanilla CSS', 'JavaScript', 'Vercel'],
    categories: ['Web Development', 'Frontend'] as Filter[],
    to: '/projects/web3connect-hr',
  },
  {
    number: '06',
    name: 'BERSK',
    type: 'Frontend · Client Acquisition',
    summary: 'A focused single-page marketing site that turns high-intent traffic into qualified leads for an automated client acquisition agency.',
    stack: ['HTML5', 'Vanilla CSS', 'JavaScript', 'FormSubmit', 'Font Awesome', 'Vercel'],
    categories: ['Web Development', 'Frontend'] as Filter[],
    to: '/projects/bersk',
  },
]

const capabilities = [
  ['01', 'Frontend Development', 'Building responsive, accessible and component-driven interfaces for production applications.', 'React · TypeScript · JavaScript · Vite · Tailwind CSS'],
  ['02', 'Backend Development', 'Designing APIs, authentication systems, business logic and service integrations.', 'Node.js · Express · Python · REST APIs · JWT · Webhooks'],
  ['03', 'Data & Machine Learning', 'Building data pipelines and ML systems that turn raw data into usable predictions.', 'Python · Pandas · NumPy · Scikit-learn · XGBoost · TensorFlow/Keras'],
  ['04', 'Databases', 'Designing and integrating relational data layers for production systems.', 'PostgreSQL · MySQL · SQLite · TypeORM · SQLAlchemy'],
  ['05', 'Architecture & Deployment', 'Taking applications from local development through production deployment.', 'Docker · Git · GitHub · Vercel · Render · Clean Architecture · DDD'],
]

const experience = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Aggie Carpet Cleaning',
    description: 'Building and maintaining the company’s primary digital storefront and customer acquisition platform.',
    contribution: 'Built a mobile-first lead-generation website with 20+ SEO-structured pages, asynchronous lead capture and production deployment.',
    tags: ['React', 'SEO', 'Responsive Design', 'Lead Generation', 'Deployment'],
  },
  {
    role: 'Software Developer',
    company: 'Greenfingers Wildlife Initiative',
    description: 'Supporting the organization’s digital infrastructure, internal data systems and operational workflows.',
    contribution: 'Structured and maintained conservation program databases, built internal workflow automations and managed production website operations.',
    tags: ['Data Systems', 'Automation', 'Web Operations'],
  },
  {
    role: 'Freelance Developer',
    company: 'Independent',
    description: 'Designing, building and deploying production software across web, e-commerce and machine learning projects.',
    contribution: 'Taking products from early requirements through architecture, implementation and production delivery.',
    tags: ['Full Stack', 'E-Commerce', 'Machine Learning'],
  },
]

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function AnimatedMetric({ value, suffix = '', precision = 0, detail }: { value: number; suffix?: string; precision?: number; detail?: string }) {
  const metricRef = useRef<HTMLElement>(null)
  const [displayValue, setDisplayValue] = useState(precision ? (0).toFixed(precision) : '0')

  useEffect(() => {
    const element = metricRef.current
    if (!element) return
    let animationFrame = 0

    const showFinalValue = () => setDisplayValue(value.toFixed(precision))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showFinalValue()
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const startedAt = performance.now()
      const duration = 1350

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplayValue((value * eased).toFixed(precision))
        if (progress < 1) animationFrame = requestAnimationFrame(tick)
      }

      animationFrame = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.65 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [precision, value])

  return <strong ref={metricRef}>{displayValue}{suffix}{detail && <small>{detail}</small>}</strong>
}

export default function NewPortfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [activeSection, setActiveSection] = useState('home')
  const filterRef = useRef<HTMLDivElement>(null)
  const [filterMarker, setFilterMarker] = useState({ left: 0, width: 0 })

  const webDevelopmentOrder = ['Web3Connect HR', 'Aggie Carpet Cleaning', 'BERSK', 'LeadRanx']
  const visibleProjects = projects
    .filter((project) => activeFilter === 'All' || project.categories.includes(activeFilter))
    .sort((a, b) => activeFilter === 'Web Development'
      ? webDevelopmentOrder.indexOf(a.name) - webDevelopmentOrder.indexOf(b.name)
      : 0)

  useLayoutEffect(() => {
    const updateMarker = () => {
      const container = filterRef.current
      const activeButton = container?.querySelector<HTMLButtonElement>(`button[data-filter="${activeFilter}"]`)
      if (!activeButton) return

      const edgeInset = activeButton === container?.querySelector('button') ? 0 : 15
      setFilterMarker({
        left: activeButton.offsetLeft + edgeInset,
        width: Math.max(24, activeButton.offsetWidth - edgeInset * 2),
      })
    }

    updateMarker()
    window.addEventListener('resize', updateMarker)
    return () => window.removeEventListener('resize', updateMarker)
  }, [activeFilter])

  useLayoutEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.np-section-head, .np-timeline, .np-cap-title, .np-cap-list, .np-about-main, .np-contact > *')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    targets.forEach((target) => target.classList.add('np-reveal'))

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = ['home', 'work', 'experience', 'capabilities', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0, .1, .25, .5] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="np-page">
      <header className="np-header">
        <nav className="np-nav" aria-label="Primary navigation">
          <a href="#work" className={activeSection === 'work' ? 'is-active' : ''}>Work</a>
          <a href="#experience" className={activeSection === 'experience' ? 'is-active' : ''}>Experience</a>
          <a href="#capabilities" className={activeSection === 'capabilities' ? 'is-active' : ''}>Capabilities</a>
          <a href="#about" className={activeSection === 'about' ? 'is-active' : ''}>About</a>
        </nav>
        <a className="np-header-cta" href="#contact">Get in touch <Arrow /></a>
      </header>

      <main>
        <section className="np-hero" id="home">
          <div className="np-hero-copy">
            <p className="np-eyebrow"><span /> Software Developer · Lagos, Nigeria</p>
            <h1>Mishael Edegwa’s<br /><em>Portfolio.</em></h1>
            <p className="np-hero-intro">Building production-ready applications, APIs, data systems, and intelligent software from idea to deployment.</p>
            <div className="np-hero-actions">
              <a className="np-button np-button--light" href="#work">View my work <span>↓</span></a>
              <a className="np-button np-button--ghost" href="https://github.com/mishael-ed" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="np-button np-button--ghost" href="https://www.linkedin.com/in/ed-mishael-5aa633230/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
            <div className="np-hero-stats" aria-label="Career highlights">
              <div><AnimatedMetric value={4.7} precision={1} detail=" / 5.0" /><span>Computer Science CGPA</span></div>
              <div><AnimatedMetric value={5} suffix="+" /><span>Production Systems Shipped</span></div>
              <div><AnimatedMetric value={300} suffix="+" /><span>Users Reached</span></div>
            </div>
            <p className="np-availability"><span /> Open to software development opportunities.</p>
          </div>
        </section>

        <div className="np-marquee" aria-hidden="true">
          <div className="np-marquee-track">
            <div className="np-marquee-group">
              <span>Full-Stack Development</span><i>✦</i>
              <span>Applied Machine Learning</span><i>✦</i>
              <span>Production Software</span><i>✦</i>
              <span>Data Systems</span><i>✦</i>
            </div>
            <div className="np-marquee-group">
              <span>Full-Stack Development</span><i>✦</i>
              <span>Applied Machine Learning</span><i>✦</i>
              <span>Production Software</span><i>✦</i>
              <span>Data Systems</span><i>✦</i>
            </div>
          </div>
        </div>

        <section className="np-work" id="work">
          <div className="np-section-head">
            <p className="np-kicker">Selected work / 2024—26</p>
            <h2>Software with<br /><em>something to prove.</em></h2>
            <p>Substantial projects across web development, intelligent systems and production deployment.</p>
          </div>

          <div className="np-filter" aria-label="Filter projects" ref={filterRef}>
            <span className="np-filter-marker" style={{ left: filterMarker.left, width: filterMarker.width }} aria-hidden="true" />
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? 'is-active' : ''}
                type="button"
                key={filter}
                data-filter={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
                <span>{filter === 'All' ? projects.length : projects.filter((project) => project.categories.includes(filter)).length}</span>
              </button>
            ))}
          </div>

          <div className="np-project-list" aria-live="polite">
            {visibleProjects.map((project) => (
                <article className="np-project" key={project.name}>
                  <div className="np-project-meta">
                    <span>/{project.number}</span>
                    <p>{project.type}</p>
                  </div>
                  <div className="np-project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="np-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <Link className="np-case-button" to={project.to}>View project</Link>
                  </div>
                </article>
              ))}
          </div>
        </section>

        <section className="np-experience" id="experience">
          <div className="np-section-head np-section-head--compact">
            <p className="np-kicker">Experience</p>
            <h2>Where I’ve<br /><em>done the work.</em></h2>
          </div>
          <div className="np-timeline">
            {experience.map((item, index) => (
              <article className="np-role" key={item.company}>
                <span className="np-role-number">0{index + 1}</span>
                <div><p className="np-role-company">{item.company}</p><h3>{item.role}</h3></div>
                <div className="np-role-copy">
                  <p>{item.description}</p>
                  <strong>Key contribution</strong>
                  <p>{item.contribution}</p>
                  <div className="np-stack">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="np-capabilities" id="capabilities">
          <div className="np-cap-title">
            <p className="np-kicker">Technical capabilities</p>
            <h2>Built for the<br /><em>whole system.</em></h2>
          </div>
          <div className="np-cap-list">
            {capabilities.map(([number, title, description, tools]) => (
              <article className="np-capability" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p><small>{tools}</small></div>
              </article>
            ))}
          </div>
        </section>

        <section className="np-about" id="about">
          <p className="np-about-side">ABOUT MISHAEL</p>
          <div className="np-about-main">
            <h2>Engineer first.<br /><em>Technology second.</em></h2>
            <div className="np-about-copy">
              <p>I’m Mishael Edegwa, a software developer based in Lagos, Nigeria.</p>
              <p>I enjoy building complete systems: understanding the problem, designing the architecture, developing the interface and backend, working with data, and ultimately getting the product into production.</p>
              <p>My work spans full-stack web development and applied machine learning, from customer-facing platforms and e-commerce systems to ML-powered prediction and decision-support tools.</p>
              <p>I graduated from Pan-Atlantic University with a BSc in Computer Science and a 4.7 CGPA, with coursework spanning machine learning, artificial intelligence, data structures and algorithms, data management, and software development.</p>
              <p>I’m particularly interested in engineering problems where software, data and intelligent systems come together.</p>
              <div className="np-text-links">
                <a href="mailto:mishaeledegwa@gmail.com?subject=Resume request">Request résumé <Arrow /></a>
                <a href="https://www.linkedin.com/in/ed-mishael-5aa633230/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href="https://github.com/mishael-ed" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="np-contact" id="contact">
          <p className="np-kicker">Have something interesting in mind?</p>
          <h2>Let’s build something<br /><em>worthwhile.</em></h2>
          <p>I’m open to software development opportunities, collaborations and interesting technical projects.</p>
          <a className="np-contact-button" href="mailto:mishaeledegwa@gmail.com">Get in touch <Arrow /></a>
          <a className="np-email" href="mailto:mishaeledegwa@gmail.com">mishaeledegwa@gmail.com</a>
          <div className="np-contact-socials">
            <a href="https://www.linkedin.com/in/ed-mishael-5aa633230/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/mishael-ed" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="np-footer">
        <p>© 2026 Mishael Edegwa</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}
