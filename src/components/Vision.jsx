import { motion } from 'framer-motion'
import { Shield, Cpu, RefreshCcw, Workflow } from 'lucide-react'

const bullets = [
  { icon: RefreshCcw, text: 'Zero human intervention' },
  { icon: Cpu, text: 'True AI autonomy' },
  { icon: Workflow, text: 'Cross-platform healing' },
  { icon: Shield, text: 'Enterprise-grade security' },
]

export default function Vision() {
  return (
    <section id="vision" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/20 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">The Future of System Reliability</h2>
          <p className="mt-4 text-white/70">
            AutoHeal Core continuously detects, diagnoses, and remediates issues across your stack—before users ever notice.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <Icon size={18} />
                </div>
                <p className="font-medium text-white/90">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
