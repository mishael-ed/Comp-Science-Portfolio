import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectBERSK() {
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
          <p className="project-category">Frontend Web Development · Marketing Site · Static</p>
          <h1 className="project-title">BERSK<br />Client Acquisition Agency Site</h1>
          <a
            href="https://bersktech-website.vercel.app/"
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
          <p>BERSK is a single-page marketing site for an automated client acquisition agency. The business builds end-to-end systems that turn paid social media traffic into booked appointments — without any manual follow-up from the client.</p>
          <p>The site's job is to convert high-intent visitors into qualified leads through a focused, friction-free experience: communicate the value proposition, build trust through a clear process and targeting, and funnel visitors into a single call-to-action — a lead capture form submitted directly to the agency's inbox.</p>
          <p>The entire site is a single <code style={{color:'var(--orange)',fontWeight:700}}>index.html</code> file with all CSS and JS inline. No build tool, no framework, no dependencies — deliberately minimal for maximum load performance and zero maintenance overhead.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Structure</td><td>Pure HTML5 (semantic markup)</td></tr>
                <tr><td>Styling</td><td>Vanilla CSS (inline, no framework)</td></tr>
                <tr><td>Interactivity</td><td>Vanilla JavaScript (no libraries)</td></tr>
                <tr><td>Icons</td><td>Font Awesome 6.4 (CDN)</td></tr>
                <tr><td>Typography</td><td>Custom font — Volte (Regular, Semibold, Bold)</td></tr>
                <tr><td>Form Submission</td><td>formsubmit.co (no-backend email delivery)</td></tr>
                <tr><td>Deployment</td><td>Vercel</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop:'1rem',fontSize:'0.85rem',color:'rgba(255,255,255,0.5)'}}>No build step. No bundler. No npm. A single file deployed as-is.</p>
        </section>

        {/* Architecture */}
        <section className="project-section">
          <h2>Site Structure</h2>
          <p>The site is a single scrollable page divided into seven sections. Navigation is handled entirely with anchor links and smooth-scroll CSS — no JavaScript router needed.</p>
          <div className="project-table-wrap" style={{marginTop:'1.25rem'}}>
            <table className="project-table">
              <thead><tr><th>Section</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>Hero</td><td>Animated logo fade-in, headline, radial gradient background, primary CTA</td></tr>
                <tr><td>What We Do</td><td>Core service overview — automated client acquisition systems</td></tr>
                <tr><td>What You Gain</td><td>Outcome-focused value propositions for the target client</td></tr>
                <tr><td>How It Works</td><td>3-step process: attract → qualify → book</td></tr>
                <tr><td>Who Is This For</td><td>Explicit ICP targeting — premium service businesses</td></tr>
                <tr><td>CTA</td><td>Final conversion push before the contact modal</td></tr>
                <tr><td>Contact Modal</td><td>4-field lead capture form, submitted via formsubmit.co</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <h2>Key Features</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Glassmorphism Fixed Navbar</h3>
              <p>The navigation bar sticks to the top of the viewport with a <code style={{color:'var(--orange)'}}>backdrop-filter: blur()</code> glassmorphism effect, keeping it readable over any scroll position. A "Get Started" CTA button is always visible, reducing the distance between intent and conversion at any point on the page.</p>
            </div>
            <div className="project-model-card">
              <h3>Animated Hero Logo Fade-In</h3>
              <p>The hero logo animates into view on page load via a CSS <code style={{color:'var(--orange)'}}>@keyframes</code> fade-in, combined with a radial gradient glow background. This creates an immediate premium, high-production impression — critical for a high-ticket B2B offer where the first 3 seconds determine trust.</p>
            </div>
            <div className="project-model-card">
              <h3>Contact Modal with Lead Capture Form</h3>
              <p>A JavaScript-driven modal overlays the page when any CTA is clicked. The form captures service type, business name, phone, and email, then submits directly to the agency's Gmail via <code style={{color:'var(--orange)'}}>formsubmit.co</code> with a custom subject line — no backend, no server, no database required.</p>
            </div>
          </div>

          <div className="project-models" style={{marginTop:'1.5rem'}}>
            <div className="project-model-card">
              <h3>3-Step Process Visualisation</h3>
              <p>The "How It Works" section breaks the agency's system into three steps — attract, qualify, book — displayed as a clean visual flow. Prospective clients can instantly understand the mechanism before committing, which is critical for selling a premium automated system to a skeptical B2B audience.</p>
            </div>
            <div className="project-model-card">
              <h3>Explicit ICP Targeting Section</h3>
              <p>A dedicated "Who Is This For" section pre-qualifies visitors by describing the ideal client profile: high-value service businesses ready to invest in automation. This reduces unqualified enquiries and primes the right leads to self-identify before submitting the form.</p>
            </div>
            <div className="project-model-card">
              <h3>Fully Responsive Layout</h3>
              <p>Two CSS breakpoints (<code style={{color:'var(--orange)'}}>768px</code> and <code style={{color:'var(--orange)'}}>480px</code>) handle all reflow from desktop to tablet to mobile — grid columns collapse, font sizes scale, and the navbar adapts — with no JavaScript involved in the responsive behaviour.</p>
            </div>
          </div>
        </section>

        {/* UX & Engineering Details */}
        <section className="project-section">
          <h2>Design & Engineering Details</h2>
          <div className="project-features-grid">
            {[
              { name: 'Zero border-radius', desc: 'border-radius: 0 !important applied globally — sharp corners reinforce the brand\'s aggressive, high-performance aesthetic throughout every card and button' },
              { name: 'Electric blue accent system', desc: '#173DED accent on a #000000 background with #DCDEE2 body text — high contrast, minimal palette that signals authority and focus' },
              { name: 'Custom Volte typeface', desc: 'Volte loaded in three weights (Regular, Semibold, Bold) giving typographic hierarchy without relying on system fonts or Google Fonts' },
              { name: 'formsubmit.co integration', desc: 'Form POSTs to formsubmit.co endpoint with a custom subject line — leads land directly in Gmail with zero backend infrastructure' },
              { name: 'Modal overlay via vanilla JS', desc: 'Modal open/close handled with a few lines of classList toggling and an overlay click-to-dismiss — no library, no framework needed' },
              { name: 'Inline CSS & JS', desc: 'All styles and scripts embedded directly in index.html — eliminates render-blocking resource requests and reduces total HTTP requests to one' },
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
              <h3>Lead Generation</h3>
              <p>Every form submission is a qualified business enquiry delivered directly to the agency's inbox — no CRM, no middleware, no delay between visitor intent and lead receipt.</p>
            </div>
            <div className="impact-card">
              <h3>Conversion-Optimised Structure</h3>
              <p>The page is structured around a single conversion goal. Multiple CTAs across every section funnel to the same modal, minimising decision fatigue and keeping the path to contact friction-free.</p>
            </div>
            <div className="impact-card">
              <h3>Zero Maintenance Overhead</h3>
              <p>A single static HTML file with no dependencies means nothing to update, no packages to audit, and no build pipeline to maintain — the site works and stays working indefinitely.</p>
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
                <tr><td>HTML & Semantics</td><td>Pure HTML5, semantic sectioning elements, accessible form markup</td></tr>
                <tr><td>CSS</td><td>Glassmorphism, CSS custom properties, @keyframes animations, flexbox/grid, responsive media queries (768px, 480px)</td></tr>
                <tr><td>JavaScript</td><td>Vanilla JS modal control, classList manipulation, event listeners — no libraries</td></tr>
                <tr><td>UI / Visual Design</td><td>Dark minimal design system, custom typography (Volte), electric blue accent palette, radial gradient hero</td></tr>
                <tr><td>Conversion Design</td><td>ICP targeting copy, 3-step process visualisation, multi-CTA funnel to single conversion goal</td></tr>
                <tr><td>Form Integration</td><td>formsubmit.co no-backend form delivery, custom subject line configuration</td></tr>
                <tr><td>Performance</td><td>Single-file architecture, zero render-blocking resources, no JavaScript framework overhead</td></tr>
                <tr><td>Deployment</td><td>Vercel static site deployment</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <a
            href="https://bersktech-website.vercel.app/"
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
