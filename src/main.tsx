import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contact from './pages/Contact.tsx'
import ProjectAI from './pages/ProjectAI.tsx'
import ProjectAggieCC from './pages/ProjectAggieCC.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  const navType = useNavigationType()
  useEffect(() => {
    if (navType !== 'POP') window.scrollTo(0, 0)
  }, [pathname, navType])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/ai-performance-predictor" element={<ProjectAI />} />
        <Route path="/projects/aggie-carpet-cleaning" element={<ProjectAggieCC />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
