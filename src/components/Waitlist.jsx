import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Waitlist() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ email: '', company: '', industry: 'Healthcare' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    try {
      // Simulate async
      await new Promise((res) => setTimeout(res, 900))
      console.log('Waitlist submission:', form)
      setSuccess(true)
      setForm({ email: '', company: '', industry: 'Healthcare' })
    } catch (err) {
      console.error('Submission failed', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tl from-purple-600/20 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Join the Revolution</h3>
            <p className="text-white/70">Be the first to experience autonomous system healing.</p>
            <ul className="list-disc pl-5 text-white/60 space-y-1">
              <li>Early access invitations</li>
              <li>Product roadmap insights</li>
              <li>Founding customer perks</li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Company</label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  placeholder="Company name"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Industry</label>
                <select
                  value={form.industry}
                  onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                >
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>E-commerce</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60"
              >
                {loading ? 'Submitting…' : 'Request Early Access'}
              </button>
              {success && (
                <p className="text-emerald-400 text-sm">Thanks! You’re on the waitlist. We’ll be in touch soon.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
