import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectWeb3ConnectHR() {
  const navigate = useNavigate()
  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <a href="/contact" className="project-nav-contact">Get in touch <span>→</span></a>
      </nav>

      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Frontend Web Development · Recruitment Platform · React SPA</p>
          <h1 className="project-title">Web3Connect HR<br />Recruitment Platform</h1>
          <a
            href="https://web3connect-hr.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live-btn"
          >
            View Deployed Project
          </a>
        </div>
      </div>

      <div className="project-body">

        {/* Introduction */}
        <section className="project-section">
          <h2>Introduction</h2>
          <p>Web3Connect HR is a specialist recruitment platform built for the blockchain and Web3 industry. It connects Web3 professionals — engineers, product managers, growth leads, and security researchers — with companies building in the decentralised space.</p>
          <p>The site solves a two-sided recruitment problem: candidates submit their CV and portfolio for active placement consideration, while companies request a curated shortlist of vetted talent. It replaces an email-based intake process with a polished, structured web experience that builds trust and qualifies leads before any human conversation begins.</p>
          <p>Built with an intentionally lean dependency footprint — three production packages total — the site demonstrates how far vanilla CSS, custom hooks, and browser APIs can take a production-grade product without reaching for a component library or CSS framework.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>UI Framework</td><td>React 18 (hooks, functional components)</td></tr>
                <tr><td>Routing</td><td>React Router v6 (BrowserRouter)</td></tr>
                <tr><td>Build Tool</td><td>Vite 5 (HMR, tree-shaking, ES modules)</td></tr>
                <tr><td>Styling</td><td>Vanilla CSS with CSS custom properties (design tokens)</td></tr>
                <tr><td>Typography</td><td>Google Fonts — Montserrat (400, 500, 700, 800)</td></tr>
                <tr><td>Animation</td><td>Intersection Observer API + requestAnimationFrame</td></tr>
                <tr><td>Analytics</td><td>Custom dataLayer wrapper (GTM-compatible)</td></tr>
                <tr><td>Deployment</td><td>Vercel (SPA rewrite rules via vercel.json)</td></tr>
                <tr><td>Language</td><td>JavaScript (JSX)</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop:'1rem',fontSize:'0.85rem',color:'rgba(255,255,255,0.5)'}}>No CSS framework, no UI component library, no form library — intentionally lean.</p>
        </section>

        {/* Architecture */}
        <section className="project-section">
          <h2>Application Architecture</h2>
          <p>The entire site is a React SPA rendered inside a single HTML shell. <code style={{color:'var(--orange)',fontWeight:700}}>BrowserRouter</code> drives six client-side routes — every page transition is instant with no full-page reload. A <code style={{color:'var(--orange)',fontWeight:700}}>vercel.json</code> rewrite rule serves the SPA shell for any URL path, letting React Router handle navigation on the client.</p>
          <div className="project-table-wrap" style={{marginTop:'1.25rem'}}>
            <table className="project-table">
              <thead><tr><th>Route</th><th>Page</th></tr></thead>
              <tbody>
                <tr><td>/</td><td>Home — hero, stats counter, process flow, testimonial slider, trust panels</td></tr>
                <tr><td>/about</td><td>About — company story, values grid, team cards</td></tr>
                <tr><td>/services</td><td>Services — alternating image + text blocks for candidates and companies</td></tr>
                <tr><td>/jobs</td><td>Jobs — candidate CV submission form with file upload</td></tr>
                <tr><td>/blog</td><td>Blog — article cards grid</td></tr>
                <tr><td>/contact</td><td>Contact — talent request form + contact info card</td></tr>
              </tbody>
            </table>
          </div>
          <div className="project-code-block" style={{marginTop:'1.5rem'}}>
            <pre>{`src/
├── pages/          — Route-level components (Home, About, Services, Jobs, Blog, Contact)
├── components/     — Reusable UI (Header, Footer, FadeIn, FloatingField)
├── hooks/          — Custom hooks (useCounter)
├── utils/          — Side-effect utilities (trackEvent)
├── App.jsx         — BrowserRouter + route declarations
├── main.jsx        — React 18 createRoot entry point
└── styles.css      — Global design system (CSS variables, layout, components)`}</pre>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <h2>Key Features</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Animated Stats Counter</h3>
              <p>Four key metrics count from zero to their target values when scrolled into view. A custom <code style={{color:'var(--orange)'}}>useCounter</code> hook drives this via an <code style={{color:'var(--orange)'}}>IntersectionObserver</code> trigger and a <code style={{color:'var(--orange)'}}>requestAnimationFrame</code> loop with cubic ease-out (<code style={{color:'var(--orange)'}}>1 − (1 − p)³</code>) over 1,400ms. Respects <code style={{color:'var(--orange)'}}>prefers-reduced-motion</code> by jumping straight to the final value.</p>
            </div>
            <div className="project-model-card">
              <h3>Auto-Playing Testimonial Slider</h3>
              <p>A review carousel auto-rotates every 3.5s, pauses on hover or focus (accessible to keyboard and screen-reader users), and supports manual navigation via buttons and dot indicators. The interval is cleared and restarted on manual interaction to avoid conflicting with user intent.</p>
            </div>
            <div className="project-model-card">
              <h3>Custom Floating Label Form Components</h3>
              <p>Both intake forms use hand-built floating label inputs — no form library. Four components (<code style={{color:'var(--orange)'}}>FloatingInput</code>, <code style={{color:'var(--orange)'}}>FloatingTextarea</code>, <code style={{color:'var(--orange)'}}>FloatingSelect</code>, <code style={{color:'var(--orange)'}}>FileUpload</code>) use a CSS-only float trigger via <code style={{color:'var(--orange)'}}>:not(:placeholder-shown)</code>. The file upload adds full drag-and-drop support, filename display, and drag-over visual feedback — all without third-party dependencies.</p>
            </div>
          </div>

          <div className="project-models" style={{marginTop:'1.5rem'}}>
            <div className="project-model-card">
              <h3>Scroll-Triggered Fade-In System</h3>
              <p>A reusable <code style={{color:'var(--orange)'}}>{'<FadeIn>'}</code> wrapper uses <code style={{color:'var(--orange)'}}>IntersectionObserver</code> (threshold: 0.08) to add an <code style={{color:'var(--orange)'}}>is-visible</code> class when a child element enters the viewport, triggering a 650ms opacity + translateY transition. A <code style={{color:'var(--orange)'}}>delay</code> prop enables staggered multi-element reveals. The observer disconnects after first trigger.</p>
            </div>
            <div className="project-model-card">
              <h3>Glassmorphic Sticky Header</h3>
              <p>The header uses <code style={{color:'var(--orange)'}}>backdrop-filter: blur(18px)</code> with semi-transparent background for a frosted-glass scroll effect. React Router's <code style={{color:'var(--orange)'}}>{'<NavLink>'}</code> injects active classes that drive an animated underline via <code style={{color:'var(--orange)'}}>transform: scaleX()</code> transition. The mobile hamburger dropdown auto-closes on navigation.</p>
            </div>
            <div className="project-model-card">
              <h3>Lightweight Analytics Layer</h3>
              <p>A single <code style={{color:'var(--orange)'}}>trackEvent(name, payload)</code> utility pushes structured event objects to <code style={{color:'var(--orange)'}}>window.dataLayer</code> — compatible with Google Tag Manager, zero bundle overhead. Every CTA click, form submission, and menu toggle is instrumented with ISO timestamps and custom payloads for funnel analysis.</p>
            </div>
          </div>
        </section>

        {/* UX & Engineering Details */}
        <section className="project-section">
          <h2>UX & Engineering Details</h2>
          <div className="project-features-grid">
            {[
              { name: 'Skip navigation link', desc: 'Visually hidden <a href="#main-content"> becomes visible on focus — WCAG 2.1 Level A requirement, lets keyboard users bypass the nav entirely' },
              { name: 'prefers-reduced-motion', desc: 'Both useCounter and FadeIn query matchMedia and bypass animations, respecting OS-level accessibility settings' },
              { name: 'CSS design token system', desc: 'All colours, radii, and shadows defined as CSS custom properties — theme changes are single-line edits, specificity stays flat' },
              { name: 'Full-bleed hero technique', desc: 'Heroes break out of the content max-width using width: 100vw; margin-left: calc(50% - 50vw) — no extra wrapper nesting needed' },
              { name: 'Form loading states', desc: 'Submit buttons disable pointer-events and reduce opacity during async delay; success screen replaces the entire form rather than showing an inline toast' },
              { name: 'Font preconnect hints', desc: '<link rel="preconnect"> for fonts.googleapis.com and fonts.gstatic.com reduces DNS + TCP handshake latency before the font files are requested' },
            ].map(f => (
              <div key={f.name} className="feature-pill">
                <code>{f.name}</code>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="project-section">
          <h2>Real-World Impact</h2>
          <div className="project-impact-grid">
            <div className="impact-card">
              <h3>Candidate Lead Capture</h3>
              <p>The Jobs page funnels applicants into a structured submission process — CV, portfolio, role preference, and consent — giving the recruiter qualified, categorised leads instead of unstructured inbox emails.</p>
            </div>
            <div className="impact-card">
              <h3>Company Lead Capture</h3>
              <p>The Contact page talent request form collects hiring region, specific roles needed, and an optional job description upload — enough for a recruiter to begin a mandate without an initial discovery call.</p>
            </div>
            <div className="impact-card">
              <h3>Trust & Credibility</h3>
              <p>Verified metrics (240+ placements, 95% retention, 18 countries, 14-day avg. time-to-hire), testimonials, a New York HQ address, and a polished design position Web3Connect HR as a credible specialist in a competitive niche.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="project-section">
          <h2>Skills Demonstrated</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Domain</th><th>Specifics</th></tr></thead>
              <tbody>
                <tr><td>Frontend Development</td><td>React 18, functional components, useState, useEffect, custom hooks, JSX, ES modules</td></tr>
                <tr><td>Routing</td><td>React Router v6, BrowserRouter, NavLink with active state, SPA rewrite configuration</td></tr>
                <tr><td>CSS & UI Engineering</td><td>CSS custom properties, responsive grid layouts, glassmorphism, floating label forms, custom file upload, full-bleed technique</td></tr>
                <tr><td>Animation & Interaction</td><td>Intersection Observer API, requestAnimationFrame, cubic easing, staggered reveal, auto-playing carousel with pause-on-focus</td></tr>
                <tr><td>Accessibility (a11y)</td><td>Skip navigation, ARIA attributes, keyboard navigation, prefers-reduced-motion, semantic HTML, focus management</td></tr>
                <tr><td>Performance</td><td>Vite 5 build tooling, font preconnect hints, observer-based lazy animation, minimal 3-package production footprint</td></tr>
                <tr><td>Analytics</td><td>Custom dataLayer event tracking, GTM-compatible architecture, structured payloads with timestamps</td></tr>
                <tr><td>Deployment & DevOps</td><td>Vercel deployment, SPA routing via vercel.json rewrites, .gitignore hygiene</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <a
            href="https://web3connect-hr.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live-btn"
          >
            View Deployed Project
          </a>
          <button onClick={() => navigate(-1)} className="project-back-btn">← Back to Portfolio</button>
        </div>

      </div>
    </div>
  )
}
