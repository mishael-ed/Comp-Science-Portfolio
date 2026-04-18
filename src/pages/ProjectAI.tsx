import { Link } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectAI() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <Link to="/" className="project-back">← Back to Portfolio</Link>
        <Link to="/contact" className="btn btn-primary project-nav-contact">Contact Me</Link>
      </nav>

      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero-inner">
          <p className="project-category">Applied Machine Learning · AI for Education · Predictive Analytics · Full-Stack Data Science</p>
          <h1 className="project-title">AI Student Academic<br />Performance Predictor</h1>
          <a
            href="https://final-year-project-5klwvgbbd76zt3u9lq87oh.streamlit.app/"
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
          <p>Every semester, students quietly fall behind. By the time final exams arrive and results are published, it is already too late for meaningful intervention. Teachers are left reacting instead of preventing, and struggling students get no signal that they are heading toward failure until it happens.</p>
          <p><strong>The AI Student Academic Performance Predictor</strong> was built to change that dynamic entirely. This system is an intelligent, intra-semester early-warning platform that analyzes continuous assessment scores, attendance patterns, behavioral ratings, and subject-level performance data — mid-semester, before finals — and produces a calibrated pass/fail probability for every student.</p>
          <p>Using an ensemble of three machine learning models (Random Forest, XGBoost, and LSTM), it classifies each student into a risk tier, surfaces the top contributing risk factors, and delivers a full prediction report that educators can act on immediately.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Web Interface</td><td>Streamlit (real-time interactive dashboard)</td></tr>
                <tr><td>Machine Learning</td><td>Random Forest, XGBoost (sklearn), LSTM (TensorFlow / Keras)</td></tr>
                <tr><td>Data Processing</td><td>Pandas, NumPy, scikit-learn</td></tr>
                <tr><td>Database</td><td>MySQL + SQLAlchemy ORM</td></tr>
                <tr><td>Export / Reporting</td><td>CSV, PDF (ReportLab)</td></tr>
                <tr><td>Deployment</td><td>Streamlit Cloud + optional Docker</td></tr>
                <tr><td>CLI</td><td>Python argparse (train.py, predict.py)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ML Pipeline */}
        <section className="project-section">
          <h2>The Machine Learning Pipeline</h2>
          <p>Three fundamentally different model architectures are trained independently and combined at inference time into a single ensemble. Each model brings a different inductive bias, making the combination more robust than any single model alone.</p>

          <div className="project-models">
            <div className="project-model-card">
              <h3>Random Forest</h3>
              <p>An ensemble of 300 decision trees trained with randomized feature subsets and bootstrap sampling. Uses stratified group k-fold cross-validation to prevent data leakage across students. Produces feature importance scores giving educators an interpretable ranked list of which signals matter most.</p>
            </div>
            <div className="project-model-card">
              <h3>XGBoost</h3>
              <p>Gradient boosting with 200 sequential rounds. Each tree corrects the residual errors of the previous one with a learning rate of 0.05 and 80% subsampling. Particularly effective at capturing subtle interaction effects — e.g. low CA combined with low attendance is worse than either alone.</p>
            </div>
            <div className="project-model-card">
              <h3>LSTM Neural Network</h3>
              <p>A deep learning architecture that processes sequences of 3 consecutive terms per student, learning how trajectory over time predicts future risk. Two LSTM layers (64→32 units) with dropout regularization. The only model that explicitly reasons about whether a student is improving or declining.</p>
            </div>
          </div>
        </section>

        {/* Ensemble */}
        <section className="project-section">
          <h2>Ensemble Inference</h2>
          <p>At prediction time, all three models run independently and produce a pass probability between 0 and 1. The final output is their average — a soft voting ensemble. If any model fails to load it is excluded gracefully without crashing the app.</p>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Pass Probability</th><th>Risk Tier</th><th>Interpretation</th></tr></thead>
              <tbody>
                <tr><td>≥ 75%</td><td><span className="badge badge-low">Low</span></td><td>Student is on track</td></tr>
                <tr><td>50% – 74%</td><td><span className="badge badge-medium">Medium</span></td><td>Student needs monitoring</td></tr>
                <tr><td>&lt; 50%</td><td><span className="badge badge-high">High</span></td><td>Immediate intervention needed</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section className="project-section">
          <h2>Feature Engineering</h2>
          <p>Raw per-subject student records are aggregated at the student-term level. One student enrolled in 8 subjects produces one feature row per term, not 8. Key features include:</p>
          <div className="project-features-grid">
            {[
              { name: 'avg_ca_pct', desc: 'Average CA score as a percentage across all subjects that term' },
              { name: 'avg_attendance', desc: 'Mean attendance percentage across subjects' },
              { name: 'min_attendance', desc: 'Worst-case attendance — the subject they attend least' },
              { name: 'subject_failure_count', desc: 'Number of subjects where CA% < 50 (risk proxy)' },
              { name: 'attendance_trend', desc: 'Change in attendance % relative to the student\'s first recorded term' },
              { name: 'ca_trend', desc: 'Change in CA % relative to the student\'s first recorded term' },
            ].map(f => (
              <div key={f.name} className="feature-pill">
                <code>{f.name}</code>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="project-section">
          <h2>System Architecture</h2>
          <div className="project-code-block">
            <pre>{`app.py                  (Streamlit UI — all user-facing logic)
│
├── sap/io.py           — File loading, column normalization, prepare()
├── sap/features.py     — clean_data(), build_term_features()
├── sap/model.py        — train_rf(), train_xgboost(), train_lstm(), infer()
├── sap/db.py           — SQLAlchemy ORM: save/fetch records & predictions
├── sap/reporting.py    — export_csv(), export_pdf()
├── sap/schema.py       — Ordinal encoding maps, column name lists
├── sap/config.py       — Paths, default thresholds, constants
│
├── train.py            — CLI: train all three models
├── predict.py          — CLI: run ensemble inference, output CSV
│
└── models/
    ├── rf_model.joblib
    ├── xgboost_model.joblib
    ├── lstm_model.keras
    └── lstm_scaler.joblib`}</pre>
          </div>
        </section>

        {/* Impact */}
        <section className="project-section">
          <h2>Project Impact</h2>
          <div className="project-impact-grid">
            <div className="impact-card">
              <h3>For Educators</h3>
              <p>An objective, model-backed risk score in front of the right people early enough to act — without requiring any data science expertise. Upload a spreadsheet, click Run Predictions, walk away with a prioritized intervention list.</p>
            </div>
            <div className="impact-card">
              <h3>For Students</h3>
              <p>An early warning before damage is irreversible. The model's risk factor diagnosis gives students and counselors a concrete, actionable starting point for a conversation while there is still time to change outcomes.</p>
            </div>
            <div className="impact-card">
              <h3>For Institutions</h3>
              <p>The prediction archive grows into a longitudinal dataset — enabling analysis of which interventions historically improved outcomes, which classes consistently produce high-risk cohorts, and how academic health trends term to term.</p>
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
                <tr><td>Machine Learning</td><td>Ensemble modeling, Random Forest, Gradient Boosting, LSTM, stratified group k-fold CV, class imbalance handling, feature importance</td></tr>
                <tr><td>Deep Learning</td><td>TensorFlow / Keras, LSTM architecture, sliding window sequence construction, dropout regularization, StandardScaler pipeline</td></tr>
                <tr><td>Feature Engineering</td><td>Student-term aggregation, ordinal encoding, derived features, trend features, forward-shifted temporal targets (no label leakage)</td></tr>
                <tr><td>Data Engineering</td><td>Pandas, median/mode imputation, schema normalization, flexible column aliasing</td></tr>
                <tr><td>Backend</td><td>Python, SQLAlchemy ORM, MySQL, parameterized queries</td></tr>
                <tr><td>Web Development</td><td>Streamlit, custom CSS injection, session state management, dynamic data editor</td></tr>
                <tr><td>Reporting</td><td>PDF generation (ReportLab), CSV export, timestamped report archiving</td></tr>
                <tr><td>DevOps</td><td>Docker containerization, Streamlit Cloud deployment</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="project-cta">
          <a
            href="https://final-year-project-5klwvgbbd76zt3u9lq87oh.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live-btn"
          >
            View Deployed Project
          </a>
          <Link to="/" className="project-back-btn">← Back to Portfolio</Link>
        </div>

      </div>
    </div>
  )
}
