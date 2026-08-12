import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectAggieCC() {
  const navigate = useNavigate()
  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <a href="/#contact" className="project-nav-contact">Get in touch <span>→</span></a>
      </nav>

      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Full-Stack Web Development · React SPA · Local Business Marketing · SEO Content Strategy</p>
          <h1 className="project-title">Aggie Carpet Cleaning<br />Business Website</h1>
          <a
            href="https://aggiecarpetcleaning.com"
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
          <p>Aggie Carpet Cleaning is a professional carpet, tile, upholstery, and flooring services company serving the Las Cruces–El Paso corridor in New Mexico and Texas. The business needed a complete online presence — a fast, mobile-responsive site that could be found by local customers searching for cleaning and restoration services, communicate credibility, and convert visitors into booked jobs.</p>
          <p>This website was designed and built to accomplish exactly that. It is a <strong>React single-page application</strong> with client-side routing across 20+ distinct pages, a fully functional contact form with server-side email delivery, a searchable blog, an FAQ accordion, a customer reviews carousel, and an integrated local SEO content strategy — built for a real business already earning 5-star Google reviews and Nextdoor Neighborhood Favorite recognition at launch.</p>
          <p>This site serves as the company's primary channel for acquiring new customers. Every contact form submission is a potential booked job. The combination of local SEO content, trust signals, and frictionless call/contact CTAs turns organic search traffic directly into revenue.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>UI Framework</td><td>React 19</td></tr>
                <tr><td>Routing</td><td>React Router DOM v7</td></tr>
                <tr><td>Styling</td><td>Plain CSS (per-component stylesheets)</td></tr>
                <tr><td>Contact / Lead Capture</td><td>FormSubmit.co AJAX API</td></tr>
                <tr><td>Deployment</td><td>Static build (Create React App)</td></tr>
                <tr><td>Build Tool</td><td>react-scripts (CRA)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture */}
        <section className="project-section">
          <h2>Application Architecture</h2>
          <p>The entire site is a React SPA rendered inside a single HTML shell. <code style={{color:'var(--orange)',fontWeight:700}}>BrowserRouter</code> manages navigation — every page transition is instant with no full-page reload. The route tree spans 20 named paths across five categories.</p>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Route Group</th><th>Paths</th></tr></thead>
              <tbody>
                <tr><td>Core</td><td>/&nbsp;&nbsp;/about&nbsp;&nbsp;/contact</td></tr>
                <tr><td>Services (8)</td><td>Carpet Cleaning, Furniture & Rugs, Tile & Grout, Pet Urine Removal, Carpet Installation, Tile Installation, Laminate Flooring, Vehicle Upholstery</td></tr>
                <tr><td>Info (5)</td><td>Areas We Serve, Our Favorite Places, Reviews, FAQ, Blog</td></tr>
                <tr><td>Blog Posts (4)</td><td>Las Cruces, El Paso, Mesilla, Sunland Park geo-targeted articles</td></tr>
              </tbody>
            </table>
          </div>
          <div className="project-code-block" style={{marginTop:'1.5rem'}}>
            <pre>{`src/
├── App.js                  — Root router: all 20 routes declared here
├── Scrolltotop.js          — useLocation hook: scroll-to-top on route change
├── Components/
│   ├── Navbar.jsx + Navbar.css
│   └── Footer.jsx + Footer.css
└── pages/
    ├── Home.jsx / About.jsx / Contact.jsx
    ├── Services/           (8 service pages, each with own CSS)
    ├── Info/               (5 info pages, each with own CSS)
    └── Blog/               (4 blog post pages)`}</pre>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <h2>Key Features</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Live Lead Capture Form</h3>
              <p>Async contact form using <code style={{color:'var(--orange)'}}>fetch()</code> POST to FormSubmit.co. Includes retry logic on 5xx failures, honeypot bot filtering, CC routing, dynamic subject lines, and disabled submit during flight to prevent double-sends.</p>
            </div>
            <div className="project-model-card">
              <h3>Searchable Blog</h3>
              <p>Blog index with live search filtering against post title and subtitle using <code style={{color:'var(--orange)'}}>toLowerCase().includes()</code> — no submit required, no page reload. Zero results state handled. 4 geo-targeted long-form articles.</p>
            </div>
            <div className="project-model-card">
              <h3>Reviews Carousel</h3>
              <p>6 customer reviews in a carousel with prev/next navigation and dot indicators. Active index via <code style={{color:'var(--orange)'}}>useState</code>, wrapping with modular arithmetic. Links to live Google review page.</p>
            </div>
          </div>

          <div className="project-models" style={{marginTop:'1.5rem'}}>
            <div className="project-model-card">
              <h3>Responsive Navbar</h3>
              <p>Two-level navigation with desktop dropdowns on hover, mobile hamburger menu via <code style={{color:'var(--orange)'}}>useState</code>, active route highlighting via <code style={{color:'var(--orange)'}}>useLocation</code>, and click-outside dismissal using a cleaned-up <code style={{color:'var(--orange)'}}>document.addEventListener</code>.</p>
            </div>
            <div className="project-model-card">
              <h3>FAQ Accordion</h3>
              <p>10-item keyboard-accessible accordion. One item open at a time — clicking open closes it, clicking closed opens it and collapses the previous. CSS class toggle rotates the + icon on open state.</p>
            </div>
            <div className="project-model-card">
              <h3>Local SEO Strategy</h3>
              <p>Geo-targeted copy across every page. Blog posts target city-specific search queries. <code style={{color:'var(--orange)'}}>tel:</code> protocol on all phone numbers. Trust badges for Google rating and Nextdoor Neighborhood Favorite linked to live profiles.</p>
            </div>
          </div>
        </section>

        {/* Feature Engineering equivalent - Features Grid */}
        <section className="project-section">
          <h2>UX & Engineering Details</h2>
          <div className="project-features-grid">
            {[
              { name: 'ScrollToTop', desc: 'useEffect listening to pathname scrolls window to 0,0 on every route change — mounted once at router root' },
              { name: 'Sticky phone CTA', desc: 'Floating tel: button fixed to viewport — call access from any scroll position on any page' },
              { name: 'Bilingual CTA', desc: '"¡SE HABLA ESPAÑOL!" section targeting the Spanish-speaking Las Cruces–El Paso demographic' },
              { name: 'Inline SVG icons', desc: 'Footer social icons (Facebook, Instagram, YouTube, Pinterest, TikTok) are inline SVGs — no icon library, no extra HTTP requests' },
              { name: 'Honeypot field', desc: 'Hidden company input field in the contact form filters bot submissions before they reach the email endpoint' },
              { name: 'Protocol guard', desc: 'Submission blocked with a clear error if page is opened as a file:// URL, preventing silent failures during local testing' },
            ].map(f => (
              <div key={f.name} className="feature-pill">
                <code>{f.name}</code>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="project-section">
          <h2>Real-World Impact</h2>
          <div className="project-impact-grid">
            <div className="impact-card">
              <h3>Lead Generation</h3>
              <p>The site is the company's primary digital storefront. Every contact form submission and phone tap is a direct business lead — turning organic search traffic into booked cleaning jobs.</p>
            </div>
            <div className="impact-card">
              <h3>Local Search Visibility</h3>
              <p>Geo-targeted blog posts and service pages rank for city-specific queries across Las Cruces, El Paso, Mesilla, and Sunland Park — expanding the catchment area beyond direct referrals.</p>
            </div>
            <div className="impact-card">
              <h3>Customer Trust</h3>
              <p>Google 5-star badge, Nextdoor Neighborhood Favorite recognition, team profiles, and a real customer reviews carousel build the credibility a home-services business needs before a stranger enters your house.</p>
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
                <tr><td>Frontend Development</td><td>React 19, JSX, functional components, useState, useEffect, useLocation</td></tr>
                <tr><td>Routing</td><td>React Router DOM v7, BrowserRouter, Routes, Route, Link, useLocation</td></tr>
                <tr><td>Async / API Integration</td><td>fetch() AJAX form submission, retry logic, async/await error handling, HTTP status handling</td></tr>
                <tr><td>State Management</td><td>Form fields, send state, accordion index, carousel position, mobile menu, dropdowns — all via useState</td></tr>
                <tr><td>CSS</td><td>Per-component stylesheets, responsive layouts, media queries, CSS class toggling, hover/active states</td></tr>
                <tr><td>UX Patterns</td><td>Sticky CTA, scroll-to-top, click-outside dismissal, active route highlighting, live search, accordion, carousel, honeypot</td></tr>
                <tr><td>SEO</td><td>Semantic HTML, geo-targeted copy, descriptive URLs, local trust badge integration</td></tr>
                <tr><td>Business Web Dev</td><td>Lead capture with email routing and CC, tel: links, social media integration, Google/Nextdoor badge linking</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <a
            href="https://aggiecarpetcleaning.com"
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
