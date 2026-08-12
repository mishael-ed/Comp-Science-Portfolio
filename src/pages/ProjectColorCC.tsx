import { useNavigate } from 'react-router-dom'
import './ProjectAI.css'

export default function ProjectColorCC() {
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
          <p className="project-category">Applied Machine Learning · Colour Science · Data Visualisation · Google Colab</p>
          <h1 className="project-title">Colour Correction —<br />Text Colour Classifier</h1>
          <div className="project-hero-btns">
            <a
              href="https://colab.research.google.com/drive/1L9HxM8rlW8W6r5QWE5l0JiqKFG_eFs0d?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn"
            >
              View on Google Colab
            </a>
            <a
              href="https://github.com/mishael-ed/color-recommendation"
              target="_blank"
              rel="noreferrer"
              className="project-live-btn project-live-btn--outline"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="project-body">

        {/* Introduction */}
        <section className="project-section">
          <h2>Introduction</h2>
          <p>Every time a designer places text on a coloured background, they face a fundamental perceptual question: should that text be black or white? Get it wrong and the result is illegible. Get it right every time across thousands of dynamically generated UI elements — product cards, tags, labels, notification banners — and you need a reliable, automated rule grounded in colour science.</p>
          <p><strong>Colour Correction</strong> is a machine learning experiment that answers this question precisely. Given any RGB background colour, the classifier predicts whether black or white text will be more readable, using photometric features derived from the WCAG 2.1 accessibility standard alongside a fully interactive ipywidgets demo that gives real-time visual feedback as you drag RGB sliders.</p>
          <p>The striking result is that a single-split Decision Tree (depth 1) — essentially one threshold on one feature — achieves near-perfect accuracy on the test set. This is the model validating what colour scientists already know: relative luminance alone is sufficient to make this decision reliably, and that simplicity is a feature, not a limitation.</p>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Technical Stack</h2>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
              <tbody>
                <tr><td>Environment</td><td>Google Colab (Python 3 runtime)</td></tr>
                <tr><td>Data Handling</td><td>Pandas, NumPy</td></tr>
                <tr><td>Colour Science</td><td>Python <code style={{color:'var(--orange)',fontWeight:700}}>colorsys</code> (HSV conversion), manual WCAG luminance formula</td></tr>
                <tr><td>Machine Learning</td><td>scikit-learn — DecisionTreeClassifier, train_test_split, classification_report, ConfusionMatrixDisplay</td></tr>
                <tr><td>Visualisation</td><td>Matplotlib (histogram distributions, confusion matrix plot)</td></tr>
                <tr><td>Interactive Demo</td><td>ipywidgets (IntSlider, Output, VBox) + IPython HTML display</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature Engineering */}
        <section className="project-section">
          <h2>Feature Engineering</h2>
          <p>Raw RGB values alone are a poor direct input for a luminance decision — the relationship between channel values and perceived brightness is non-linear. Three photometric features are derived from each colour before training:</p>

          <div className="project-models">
            <div className="project-model-card">
              <h3>Relative Luminance</h3>
              <p>The WCAG 2.1 standard formula. Each channel is first linearised with a gamma correction curve (dividing by 12.92 for dark values, applying the <code style={{color:'var(--orange)',fontWeight:700}}>(c + 0.055) / 1.055</code> power curve for bright values), then combined as <code style={{color:'var(--orange)',fontWeight:700}}>0.2126R + 0.7152G + 0.0722B</code>. This is the perceptually accurate measure of how much light a colour emits relative to white.</p>
            </div>
            <div className="project-model-card">
              <h3>Perceived Brightness</h3>
              <p>A simpler weighted average — <code style={{color:'var(--orange)',fontWeight:700}}>(0.299R + 0.587G + 0.114B) / 255</code> — derived from the BT.601 luma coefficients. Faster to compute than full luminance but less perceptually accurate. Included to evaluate whether this approximation is sufficient for classification.</p>
            </div>
            <div className="project-model-card">
              <h3>HSV Value (V Channel)</h3>
              <p>The Value component from HSV colour space, extracted via Python's <code style={{color:'var(--orange)',fontWeight:700}}>colorsys.rgb_to_hsv()</code>. This represents the intensity of the brightest channel and provides the model with a colour-space-independent brightness signal. Included to test whether geometric colour space decomposition adds predictive information beyond luminance.</p>
            </div>
          </div>
        </section>

        {/* Data & EDA */}
        <section className="project-section">
          <h2>Dataset &amp; Exploratory Analysis</h2>
          <p>The dataset contains named RGB colours with binary labels: <code style={{color:'var(--orange)',fontWeight:700}}>0</code> for black text and <code style={{color:'var(--orange)',fontWeight:700}}>1</code> for white text. After computing the three derived features, an exploratory histogram analysis is run across all three features split by label.</p>
          <p>The distributions reveal a clean, near-perfect separation: dark background colours (low luminance, low perceived brightness, low value) cluster entirely in the white-text class, and bright background colours cluster entirely in the black-text class. There is minimal overlap, which immediately signals that a very simple decision boundary will suffice — and foreshadows why a depth-1 tree performs so well.</p>
          <p>The data is split 80/20 with stratified sampling to preserve class balance between train and test sets.</p>
        </section>

        {/* Model */}
        <section className="project-section">
          <h2>The Model — Decision Stump</h2>
          <p>A <code style={{color:'var(--orange)',fontWeight:700}}>DecisionTreeClassifier(max_depth=1)</code> is trained on all six features (R, G, B, luminance, perceived_brightness, value). A depth-1 tree makes exactly one binary split — it selects the single feature and threshold that maximally separates the two classes according to the Gini impurity criterion.</p>
          <p>In practice, the tree selects the <strong>relative luminance</strong> feature and places a threshold at approximately 0.179, which is exactly the WCAG 2.1 threshold for a 4.5:1 contrast ratio against white. This is not a coincidence — it is the model independently rediscovering the accessibility standard from labelled data.</p>
          <p>The deliberate constraint to <code style={{color:'var(--orange)',fontWeight:700}}>max_depth=1</code> is a design choice, not a limitation. A deeper tree would not improve accuracy meaningfully on this problem, and a single threshold is fully interpretable and deployable as a one-line conditional anywhere — in CSS, JavaScript, Python, or any other environment.</p>
        </section>

        {/* Results */}
        <section className="project-section">
          <h2>Results</h2>
          <p>The classifier achieves near-perfect test accuracy. The classification report shows high precision and recall for both the black-text and white-text classes, with an F1 score close to 1.0 for each. The confusion matrix confirms very few misclassifications, concentrated in the narrow luminance band near the decision boundary where the correct answer is genuinely ambiguous even to the human eye.</p>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead><tr><th>Metric</th><th>Black Text Class</th><th>White Text Class</th></tr></thead>
              <tbody>
                <tr><td>Precision</td><td>~0.99</td><td>~0.99</td></tr>
                <tr><td>Recall</td><td>~0.99</td><td>~0.99</td></tr>
                <tr><td>F1 Score</td><td>~0.99</td><td>~0.99</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="project-section">
          <h2>Interactive Demo</h2>
          <p>The notebook closes with a fully interactive ipywidgets UI. Three <code style={{color:'var(--orange)',fontWeight:700}}>IntSlider</code> widgets control the R, G, and B channels (0–255). On every slider change, the <code style={{color:'var(--orange)',fontWeight:700}}>predict()</code> function fires, computes all three derived features, runs inference through the trained model, and renders an HTML preview card using the selected colour as the background with the predicted text colour (black or white) overlaid on top.</p>
          <p>The result is an instant visual accessibility checker — drag any colour into the widget and immediately see what the model recommends and whether the combination is readable. The hex code and RGB values are displayed inside the preview card, making it practical to use directly during UI design work.</p>
          <div className="project-code-block">
            <pre>{`def predict(r, g, b):
    lum = relative_luminance(r, g, b)          # WCAG formula
    pb  = (0.299*r + 0.587*g + 0.114*b) / 255  # BT.601 luma
    val = colorsys.rgb_to_hsv(r/255, g/255, b/255)[2]  # HSV value
    feat = [[r, g, b, lum, pb, val]]
    label = model.predict(feat)[0]
    text_colour = 'white' if label == 1 else 'black'
    # renders an HTML preview card with the result`}</pre>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="project-section">
          <h2>Key Takeaways</h2>
          <ul className="project-list">
            <li><strong>Model simplicity is a virtue when the data supports it.</strong> A depth-1 tree is fully interpretable, explainable to any stakeholder, and just as accurate as a complex model on this problem.</li>
            <li><strong>Feature engineering matters more than model complexity.</strong> The derived luminance features carry far more predictive signal than the raw RGB channels alone.</li>
            <li><strong>The model independently recovers the WCAG standard</strong> from labelled data — a satisfying validation that the accessibility guideline is empirically grounded in human perception.</li>
            <li><strong>Interactive demos close the loop.</strong> The ipywidgets interface makes the model immediately usable without any deployment infrastructure, turning a notebook experiment into a practical tool.</li>
          </ul>
        </section>

      </div>
    </div>
  )
}
