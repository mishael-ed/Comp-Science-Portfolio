import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import './fonts.css'
import './index.css'
import Contact from './pages/Contact.tsx'
import ProjectAI from './pages/ProjectAI.tsx'
import ProjectAggieCC from './pages/ProjectAggieCC.tsx'
import ProjectMoodRobe from './pages/ProjectMoodRobe.tsx'
import ProjectColorCC from './pages/ProjectColorCC.tsx'
import ProjectWeb3ConnectHR from './pages/ProjectWeb3ConnectHR.tsx'
import ProjectBERSK from './pages/ProjectBERSK.tsx'
import Education from './pages/Education.tsx'
import Experience from './pages/Experience.tsx'
import Skills from './pages/Skills.tsx'
import NewPortfolio from './pages/NewPortfolio.tsx'
import ProjectLeadRanx from './pages/ProjectLeadRanx.tsx'
import ProjectGreenfingers from './pages/ProjectGreenfingers.tsx'

// Tell the browser we handle scroll restoration ourselves
window.history.scrollRestoration = 'manual'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView()
        })
      })
    } else if (navType === 'POP') {
      const saved = sessionStorage.getItem(`scroll:${pathname}`)
      const y = saved ? parseInt(saved, 10) : 0
      // Double rAF ensures the DOM is fully painted before restoring
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y)
        })
      })
    } else {
      window.scrollTo(0, 0)
    }

    const saveScroll = () => sessionStorage.setItem(`scroll:${pathname}`, String(window.scrollY))
    window.addEventListener('scroll', saveScroll, { passive: true })
    return () => window.removeEventListener('scroll', saveScroll)
  }, [pathname, hash, navType])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<NewPortfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/ai-performance-predictor" element={<ProjectAI />} />
        <Route path="/projects/aggie-carpet-cleaning" element={<ProjectAggieCC />} />
        <Route path="/projects/moodrobe" element={<ProjectMoodRobe />} />
        <Route path="/projects/colour-correction" element={<ProjectColorCC />} />
        <Route path="/projects/web3connect-hr" element={<ProjectWeb3ConnectHR />} />
        <Route path="/projects/bersk" element={<ProjectBERSK />} />
        <Route path="/projects/leadranx" element={<ProjectLeadRanx />} />
        <Route path="/projects/greenfingers-wildlife-initiative" element={<ProjectGreenfingers />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/new" element={<NewPortfolio />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
