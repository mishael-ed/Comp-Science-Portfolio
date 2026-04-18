import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contact from './pages/Contact.tsx'
import ProjectAI from './pages/ProjectAI.tsx'
import ProjectAggieCC from './pages/ProjectAggieCC.tsx'
import ProjectMoodRobe from './pages/ProjectMoodRobe.tsx'

// Tell the browser we handle scroll restoration ourselves
window.history.scrollRestoration = 'manual'

function ScrollManager() {
  const { pathname } = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    if (navType === 'POP') {
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
  }, [pathname, navType])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/ai-performance-predictor" element={<ProjectAI />} />
        <Route path="/projects/aggie-carpet-cleaning" element={<ProjectAggieCC />} />
        <Route path="/projects/moodrobe" element={<ProjectMoodRobe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
