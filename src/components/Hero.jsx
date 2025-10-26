import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/40 to-purple-600/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Status: Coming Soon
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Trimerg Tech Solutions
            </h1>
            <p className="text-lg sm:text-xl text-white/80">Autonomous Self-Healing Systems</p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-widest text-indigo-300">Product</p>
              <p className="text-2xl font-semibold text-white">AutoHeal Core</p>
            </div>
            <div>
              <p className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                COMING SOON
              </p>
            </div>
            <p className="max-w-xl text-white/70">
              Building the world's first true AI-powered autonomous healing platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-900/30 hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50">
                Join the Waitlist
              </a>
              <a href="#vision" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {['Zero human intervention','True AI autonomy','Cross-platform healing','Enterprise-grade security'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-wider text-white/60">Tagline</p>
                <p className="text-white">Autonomous Self-Healing Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
