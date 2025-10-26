import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Waitlist from './components/Waitlist'

function App() {
  useEffect(() => {
    // Smooth scrolling for in-page anchors
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')
      if (id && id.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Waitlist />

        {/* Contact + Footer */}
        <section id="contact" className="relative">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-600/10 to-transparent" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-8">
              <h4 className="text-2xl font-semibold">Contact</h4>
              <p className="mt-2 text-white/80">
                Email us at{' '}
                <a href="mailto:trimergtechsolutions@gmail.com" className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4">
                  trimergtechsolutions@gmail.com
                </a>
              </p>
            </div>
          </div>
          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">Trimerg Tech Solutions © 2024</p>
              <p className="text-xs text-white/50">Built for speed, reliability, and peace of mind.</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
