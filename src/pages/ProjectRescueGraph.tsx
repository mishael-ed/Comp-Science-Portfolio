import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

const features = [
  { name: 'Connected case histories', desc: 'Searchable rescue records connect each animal to its species, incident, threat, location, response team, interventions, facility, and outcome.' },
  { name: 'Interactive network explorer', desc: 'Cytoscape.js turns graph results into focused rescue-journey, species-threat, geographic-pressure, and organization-collaboration views.' },
  { name: 'Graph-native insights', desc: 'Multi-hop Cypher surfaces shared threats, threat hotspots, organization reach, and similar incidents without flattening the domain.' },
  { name: 'Secure session auth', desc: 'Signed HTTP-only cookies, password derivation, rate limiting, cross-site request rejection, and production security headers protect the application.' },
  { name: 'Resilient application states', desc: 'Loading, empty, error, retry, and database-unavailable states keep every major workflow understandable when data or infrastructure is unavailable.' },
  { name: 'One-service deployment', desc: 'A multi-stage Docker image packages the React build with FastAPI and serves the SPA and API from one Render service and one origin.' },
]

export default function ProjectRescueGraph() {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate(-1)} className="project-back">← Back to Portfolio</button>
        <a href="/contact" className="project-nav-contact">Get in touch <span>→</span></a>
      </nav>

      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Graph Data · Full-Stack Engineering · Wildlife Conservation</p>
          <h1 className="project-title">RescueGraph<br />Wildlife Network Explorer</h1>
          <div className="project-hero-btns">
            <a href="https://rescuegraph.onrender.com/" target="_blank" rel="noreferrer" className="project-live-btn">
              View Deployed Project
            </a>
            <a href="https://drive.google.com/file/d/1GfT97ZIFHTPLY3onqS1Khd3tYnNq6dUx/view?usp=sharing" target="_blank" rel="noreferrer" className="project-live-btn project-live-btn--outline">
              Watch Walkthrough
            </a>
            <a href="https://github.com/mishael-ed/RescueGraph" target="_blank" rel="noreferrer" className="project-live-btn project-live-btn--outline">
              View GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="project-body">
        <section className="project-section">
          <h2>Introduction</h2>
          <p>RescueGraph is a full-stack wildlife rescue network explorer that helps non-technical users understand how animals, species, incidents, threats, locations, facilities, rescuers, and partner organizations are connected.</p>
          <p>The central engineering decision was to model wildlife rescue as a connected system rather than a collection of isolated records. That makes questions such as “Which species share recurring threats?” and “How far does an organization’s rescue work reach?” natural graph traversals instead of increasingly fragile chains of relational joins.</p>
          <p><strong>Data note:</strong> the deployed experience uses deterministic, realistic synthetic international demonstration data. It does not contain or represent real wildlife rescue records.</p>
        </section>

        <section className="project-section">
          <h2>Project at a Glance</h2>
          <div className="project-metrics" aria-label="RescueGraph dataset summary">
            <div><strong>96</strong><span>Animals &amp; incidents</span></div>
            <div><strong>18</strong><span>Species</span></div>
            <div><strong>24</strong><span>Locations</span></div>
            <div><strong>100s</strong><span>Typed relationships</span></div>
          </div>
        </section>

        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Frontend</td><td>React 18, TypeScript, Vite, TanStack Query, React Router</td></tr>
                <tr><td>Visualization</td><td>Cytoscape.js for graph exploration, Recharts for dashboard analytics</td></tr>
                <tr><td>Backend</td><td>FastAPI, Pydantic Settings, repository and service layers</td></tr>
                <tr><td>Graph Data</td><td>CognoDB Cloud, official Neo4j Python driver, parameterised Cypher</td></tr>
                <tr><td>Quality</td><td>Pytest, Ruff, frontend linting, production build verification</td></tr>
                <tr><td>Deployment</td><td>Multi-stage Docker build, Render Blueprint, single-origin full-stack service</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="project-section">
          <h2>System Architecture</h2>
          <p>The production image builds the React application and copies its output into the FastAPI service. The browser, API, and session cookies therefore share one origin, while database lifecycle and error translation remain centralized behind a repository layer.</p>
          <div className="project-architecture" aria-label="RescueGraph system architecture">
            <div><small>Experience</small><strong>React + TypeScript</strong><span>TanStack Query · Cytoscape.js</span></div>
            <i aria-hidden="true">HTTPS / JSON →</i>
            <div><small>Application</small><strong>FastAPI</strong><span>Auth · Services · Repositories</span></div>
            <i aria-hidden="true">TLS / Bolt →</i>
            <div><small>Graph layer</small><strong>CognoDB Cloud</strong><span>Parameterised Cypher</span></div>
          </div>
        </section>

        <section className="project-section">
          <h2>Graph Model</h2>
          <p><strong>Animal</strong> is the central rescue entity. Its relationships connect taxonomy and conservation context to the incident, cause, response, rehabilitation, and eventual outcome—preserving the complete rescue journey.</p>
          <div className="project-graph-model" aria-label="RescueGraph domain entities">
            {['Species', 'Animal', 'Incident', 'Threat', 'Location', 'Organization', 'Rescuer', 'Facility', 'Intervention'].map((entity, index) => (
              <span className={entity === 'Animal' ? 'is-central' : ''} key={entity}><small>{String(index + 1).padStart(2, '0')}</small>{entity}</span>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Connected Questions, Not Just CRUD</h2>
          <div className="project-models">
            <div className="project-model-card">
              <h3>Species Threat Traversal</h3>
              <p>A three-hop path follows Species ← Animal → Incident → Threat to reveal the pressures observed across a species’ full rescue history.</p>
            </div>
            <div className="project-model-card">
              <h3>Shared-Threat Discovery</h3>
              <p>A shared-neighbour query connects otherwise unrelated species through threats recurring across different animals and incidents.</p>
            </div>
            <div className="project-model-card">
              <h3>Organization Reach</h3>
              <p>Indirect traversal measures the distinct incidents, animals, and species reached through each organization’s response work.</p>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Product &amp; Engineering Highlights</h2>
          <div className="project-features-grid">
            {features.map((feature) => (
              <div className="feature-pill" key={feature.name}>
                <code>{feature.name}</code>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>What This Project Demonstrates</h2>
          <ul className="project-list">
            <li>Domain modelling that uses a graph database because the product’s valuable questions are relationship questions.</li>
            <li>Clear separation across API routes, schemas, services, repositories, configuration, and graph transformation.</li>
            <li>Production-minded authentication, input handling, parameterised queries, database failure translation, and security headers.</li>
            <li>A responsive interface that turns complex graph data into approachable dashboards, directories, connected stories, and explorable networks.</li>
            <li>End-to-end delivery through automated tests, static analysis, Docker, health checks, and a public full-stack deployment.</li>
          </ul>
        </section>

        <div className="project-cta">
          <a href="https://rescuegraph.onrender.com/" target="_blank" rel="noreferrer" className="project-live-btn">Explore RescueGraph</a>
          <a href="https://github.com/mishael-ed/RescueGraph" target="_blank" rel="noreferrer" className="project-live-btn project-live-btn--outline">View Source</a>
          <button onClick={() => navigate(-1)} className="project-back-btn">← Back to Portfolio</button>
        </div>
      </div>
    </div>
  )
}
