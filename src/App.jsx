import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Day from './pages/Day.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  if (typeof window !== 'undefined') window.scrollTo(0,0)
  return null
}

function AppShell(){
  const location = useLocation()
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/day/:id" element={<Day />} />
        <Route path="/day/12" element={<Day />} />
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <p className="font-mono text-xs tracking-widest text-[#FF4D00]">404</p>
            <h1 className="font-display text-2xl font-bold mt-2">Page not found</h1>
            <Link to="/" className="mt-4 bg-[#0E0F13] text-white px-5 py-2.5 rounded-full text-sm font-semibold">Go home</Link>
          </div>
        } />
      </Routes>

      {/* Route Map helper - visible only on small print? Hidden but we provide file */}
      <div className="sr-only">
        /<br/>/dashboard<br/>/day/12
      </div>
    </div>
  )
}

export default function App(){
  return (
    // basename auto-reads from vite.config.js "base" - works for both localhost and GitHub Pages
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  )
}
