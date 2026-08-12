import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectMoodRobe() {
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
          <p className="project-category">Full-Stack Web Dev · TypeScript · Domain-Driven Design · E-Commerce · REST API · Cloud Deployment</p>
          <h1 className="project-title">MoodRobe — Aesthetic-Driven<br />Fashion E-Commerce Platform</h1>
          <a
            href="https://mood-robe-project-frontend.vercel.app"
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
          <p>MoodRobe is a full-stack fashion e-commerce platform built around the concept of aesthetic identity — the idea that how a person dresses is an expression of a distinct visual worldview, not just a transaction. Rather than presenting a generic product catalogue, MoodRobe asks users to identify their aesthetic and then dynamically reshapes the entire UI — colour palette, typography, surface tones, accent colours — to match that identity. Every screen the user sees is styled to their aesthetic profile.</p>
          <p>The platform solves a real fragmentation problem in fashion retail: users with distinct tastes (cottagecore, dark academia, Y2K, streetwear) currently have no shopping experience tailored to their sensibility. MoodRobe addresses this by attaching <strong>aesthetic tags</strong> to every product entity and routing the product discovery layer through aesthetic filtering, so the catalogue a user browses is always contextually relevant to their identity. A weighted style quiz provides the onboarding mechanism, scoring quiz answers against per-option <code style={{color:'var(--orange)',fontWeight:700}}>aestheticWeights</code> maps and surfacing the top-matching aesthetic with percentage breakdowns.</p>
          <p>The system also supports a full merchant tier: any authenticated user can register a merchant account, onboard staff with scoped permissions, create multi-variant product listings, and receive payment via the Paystack gateway. An admin panel controls homepage carousel content, editorial copy, aesthetic imagery, and exposes a full activity log.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Frontend</td><td>React 19.2 + TypeScript 5.9 + Vite 7.2</td></tr>
                <tr><td>Styling</td><td>Tailwind CSS 4.1 + dynamic CSS custom properties via applyTheme()</td></tr>
                <tr><td>Routing</td><td>React Router DOM 7.10</td></tr>
                <tr><td>Forms</td><td>React Hook Form 7.68 + Zod 4.1 + @hookform/resolvers</td></tr>
                <tr><td>HTTP Client</td><td>Axios 1.13 with request/response interceptors</td></tr>
                <tr><td>Backend</td><td>Node.js + Express 5.2 + TypeScript (ts-node)</td></tr>
                <tr><td>ORM</td><td>TypeORM 0.3 with synchronize: false</td></tr>
                <tr><td>Database</td><td>PostgreSQL 15 — Neon serverless; uuid-ossp extension</td></tr>
                <tr><td>Auth</td><td>JWT via jsonwebtoken 9.0 + bcryptjs 3.0</td></tr>
                <tr><td>Payment</td><td>Paystack HTTP API + webhook verification</td></tr>
                <tr><td>Security</td><td>Helmet 8.1, CORS 2.8, express-validator 7.3</td></tr>
                <tr><td>Deployment</td><td>Vercel (frontend) + Render (backend) + Neon (database)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture */}
        <section className="project-section">
          <h2>Architecture</h2>
          <p>MoodRobe is structured as a <strong>monorepo</strong> with two npm workspace packages. The backend strictly follows <strong>Clean Architecture with Domain-Driven Design</strong> — every business domain lives in its own module, divided into four vertical layers.</p>
          <div className="project-code-block">
            <pre>{`backend/src/modules/
  user/
    domain/           # Entities, value objects, repository interfaces, domain exceptions
    application/      # Use cases (one class per operation), DTOs
    infrastructure/   # TypeORM entities, concrete repository implementations
    presentation/     # Express controllers, route factories, validators, middleware
  aesthetic/          # Style quiz, aesthetic profiles, theme data
  product/            # Multi-variant product catalogue
  outfit/             # Outfit builder and slot management
  payment/            # Paystack gateway, webhook handling
  merchant/           # Merchant registration, staff permissions
  admin/              # CMS panel, activity log`}</pre>
          </div>
          <p style={{marginTop:'1.5rem'}}>Domain entities are instantiated exclusively through <code style={{color:'var(--orange)',fontWeight:700}}>static create()</code> (for new objects) and <code style={{color:'var(--orange)',fontWeight:700}}>static reconstitute()</code> (for rehydration from persistence), with private constructors enforcing this. Repository interfaces are defined in the domain layer and implemented in infrastructure — use cases depend only on the interface, never on TypeORM directly.</p>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <h2>Key Features</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Weighted Style Quiz</h3>
              <p>Each quiz option carries an <code style={{color:'var(--orange)'}}>aestheticWeights</code> map. On submit, <code style={{color:'var(--orange)'}}>StyleQuiz.calculateResults()</code> accumulates weights across all answers, normalises to percentages, and returns the top match plus alternatives — entirely in the domain layer with no framework dependency.</p>
            </div>
            <div className="project-model-card">
              <h3>Dynamic UI Theming</h3>
              <p><code style={{color:'var(--orange)'}}>applyTheme()</code> writes 9 CSS custom properties directly onto <code style={{color:'var(--orange)'}}>document.documentElement.style</code> whenever the aesthetic changes. Tailwind classes reference these tokens, so the entire UI re-skins instantly — no re-renders needed. 9 named themes: Minimalist, Streetwear, Cottagecore, Dark Academia, Y2K, Bohemian, Athleisure, and more.</p>
            </div>
            <div className="project-model-card">
              <h3>Outfit Builder</h3>
              <p>Slot-based outfit composer with outfit type selection determining available <code style={{color:'var(--orange)'}}>OutfitSlotType</code> slots. Product selector fetches cart contents, resolves product details via parallel <code style={{color:'var(--orange)'}}>Promise.all()</code> calls, and presents them as assignable slot items. Supports create and edit mode via <code style={{color:'var(--orange)'}}>?id=</code> query param.</p>
            </div>
          </div>

          <div className="project-models" style={{marginTop:'1.5rem'}}>
            <div className="project-model-card">
              <h3>Multi-Tenant Merchant Portal</h3>
              <p>Any user can self-onboard as a merchant and add multi-variant products (SKU, size, colour, price, stock, JSONB attributes). <code style={{color:'var(--orange)'}}>MerchantProvider</code> exposes <code style={{color:'var(--orange)'}}>hasPermission(action)</code> and <code style={{color:'var(--orange)'}}>isOwner</code> helpers for scoped staff access without a separate admin role column.</p>
            </div>
            <div className="project-model-card">
              <h3>Paystack Payment + Webhooks</h3>
              <p>Deterministic payment references (<code style={{color:'var(--orange)'}}>PAY-{'{'}Date.now(){'}'}-{'{'}uuid{'}'}</code>), full lifecycle via <code style={{color:'var(--orange)'}}>InitiatePaymentUseCase</code> → <code style={{color:'var(--orange)'}}>VerifyPaymentUseCase</code>. <code style={{color:'var(--orange)'}}>HandlePaymentWebhookUseCase</code> verifies HMAC signatures and dispatches on <code style={{color:'var(--orange)'}}>charge.success</code>, <code style={{color:'var(--orange)'}}>charge.failed</code>, and <code style={{color:'var(--orange)'}}>refund.processed</code>.</p>
            </div>
            <div className="project-model-card">
              <h3>Admin CMS Panel</h3>
              <p>Tab-based dashboard with four panels: carousel manager, content editor, aesthetic image manager, and activity log viewer. Protected by <code style={{color:'var(--orange)'}}>{'<AdminRoute>'}  </code> email comparison — no role column needed. All admin actions are written to <code style={{color:'var(--orange)'}}>AdminActivityLogEntity</code>.</p>
            </div>
          </div>
        </section>

        {/* Engineering Details */}
        <section className="project-section">
          <h2>Engineering Details</h2>
          <div className="project-features-grid">
            {[
              { name: 'useApi<T, P> hook', desc: 'Generic hook with AbortController cancellation, mountedRef guard against setState on unmounted components, and apiFunctionRef to capture latest API function without stale closure bugs.' },
              { name: 'AuthProvider mutex', desc: 'authInProgressRef is a useRef<boolean> (not state) gating concurrent login/register calls — a pure mutex that never triggers re-renders. Initial state lazily populated from localStorage.' },
              { name: 'create() / reconstitute()', desc: 'All domain entities have private constructors. create() runs full validation; reconstitute() skips it for persistence hydration. Prevents invalid entity states anywhere in the codebase.' },
              { name: 'Money value object', desc: 'Immutable arithmetic methods (add, subtract, multiply) return new instances. subtract() throws on negative result; constructor rounds to 2dp via Math.round(amount * 100) / 100 to neutralise IEEE 754 float drift.' },
              { name: 'TypeORM synchronize: false', desc: 'Schema managed entirely through versioned SQL files. SSL conditionally enabled when DB_HOST is set and not localhost — same database.ts file serves local dev (plain TCP) and Neon production (TLS).' },
              { name: 'tsconfig-paths at runtime', desc: 'Backend uses @modules/*, @shared/*, @config/* aliases. ts-node runs with -r tsconfig-paths/register. tsconfig-paths is in dependencies (not devDependencies) so Render installs it in production.' },
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
              <h3>For Shoppers</h3>
              <p>A user who identifies as Cottagecore logs in to warm parchment tones, serif typography, and a catalogue filtered to their aesthetic — the opposite of a generic platform. The outfit builder lets them visualise coordinated looks from their cart before purchasing.</p>
            </div>
            <div className="impact-card">
              <h3>For Merchants</h3>
              <p>Any creator or small label can self-onboard, add multi-variant inventory, and start selling without contacting an admin. The Paystack integration handles the full payment lifecycle including refunds and webhooks programmatically.</p>
            </div>
            <div className="impact-card">
              <h3>For the Platform</h3>
              <p>Frontend and backend are deployed on separate services — independently scalable and redeployable. The admin CMS panel means homepage content changes require no code deployment. The activity log creates a full audit trail of admin actions.</p>
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
                <tr><td>Architecture</td><td>Clean Architecture, Domain-Driven Design, repository pattern, use-case layer, value objects, domain exceptions</td></tr>
                <tr><td>TypeScript</td><td>Strict mode, generics, discriminated unions, declaration merging, path aliases</td></tr>
                <tr><td>React</td><td>React 19, Context API, custom hooks, useRef as mutex, lazy state init, AbortController, useMemo/useCallback</td></tr>
                <tr><td>Backend</td><td>Express 5, JWT auth middleware, Helmet headers, express-validator, Multer file upload, webhook signature verification</td></tr>
                <tr><td>Database</td><td>PostgreSQL schema design, UUID PKs, JSONB columns, TypeORM DataSource, conditional SSL</td></tr>
                <tr><td>Payment</td><td>Paystack gateway integration, idempotency via deterministic references, webhook event dispatch, refund processing</td></tr>
                <tr><td>DevOps</td><td>npm workspaces monorepo, Vite env variable baking, Vercel SPA rewrite, Render zero-build deployment, Neon serverless PostgreSQL</td></tr>
                <tr><td>Security</td><td>bcryptjs hashing (cost factor 10), JWT Bearer auth, CORS, Helmet CSP, conditional TLS for known production host</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <a
            href="https://mood-robe-project-frontend.vercel.app"
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
