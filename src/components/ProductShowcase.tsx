import { Mic } from 'lucide-react'

const CATEGORIES = [
  { name: 'Food', amount: '₹6,240', pct: 38, color: '#34d399' },
  { name: 'Transport', amount: '₹3,180', pct: 22, color: '#2dd4bf' },
  { name: 'Bills', amount: '₹2,900', pct: 20, color: '#60a5fa' },
  { name: 'Shopping', amount: '₹1,860', pct: 12, color: '#a78bfa' },
]

const DONUT_R = 26
const DONUT_C = 2 * Math.PI * DONUT_R
const SEGMENTS = CATEGORIES.map((cat, i) => ({
  ...cat,
  len: (cat.pct / 100) * DONUT_C,
  offset: CATEGORIES.slice(0, i).reduce((sum, p) => sum + (p.pct / 100) * DONUT_C, 0),
}))

function Donut() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden="true">
      <circle cx="32" cy="32" r={DONUT_R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      {SEGMENTS.map((seg) => (
        <circle
          key={seg.name}
          cx="32"
          cy="32"
          r={DONUT_R}
          fill="none"
          stroke={seg.color}
          strokeWidth="8"
          strokeDasharray={`${seg.len - 2} ${DONUT_C - seg.len + 2}`}
          strokeDashoffset={-seg.offset}
        />
      ))}
    </svg>
  )
}

function Phone() {
  return (
    <div className="float relative mx-auto w-[280px] rounded-[2.6rem] border border-white/15 bg-[#0a1014] p-2.5 shadow-[0_40px_120px_-20px_rgba(16,185,129,0.35)] sm:w-[300px]">
      <div className="relative overflow-hidden rounded-[2.1rem] bg-[#070d10] px-4 pb-5 pt-9">
        <div className="absolute left-1/2 top-2.5 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

        <p className="text-[11px] text-zinc-500">October · Sample data</p>
        <p className="mt-1 font-display text-[28px] font-semibold tracking-tight text-white">₹16,420</p>
        <p className="text-[11px] text-zinc-500">spent this month</p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
            <p className="text-zinc-500">Income</p>
            <p className="mt-0.5 text-sm font-semibold text-emerald-300">₹42,000</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
            <p className="text-zinc-500">Expenses</p>
            <p className="mt-0.5 text-sm font-semibold text-white">₹16,420</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
          <Donut />
          <ul className="flex-1 space-y-1 text-[11px]">
            {CATEGORIES.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </span>
                <span className="text-zinc-300">{c.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
          <div className="flex justify-between text-[11px]">
            <span className="text-zinc-400">Food budget</span>
            <span className="text-zinc-300">₹6,240 / ₹8,000</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.06] p-2.5">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-400/40" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-black">
              <Mic className="h-4 w-4" aria-hidden="true" />
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] text-emerald-100">“Spent 250 on biryani”</p>
            <div className="mt-1 flex h-3 items-center gap-[3px]" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <span
                  key={i}
                  className="wave-bar h-3 w-[3px] rounded-full bg-emerald-300/80"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="relative overflow-hidden px-4 pb-8 pt-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[min(640px,120vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(16,185,129,0.12),transparent)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2
          id="showcase-title"
          className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Say it. It's logged.
        </h2>
        <p className="mt-3 text-zinc-400">
          Speak naturally and see your month take shape.
        </p>
      </div>
      <div className="relative mt-12">
        <Phone />
        <p className="mt-6 text-center text-xs text-zinc-600">
          Illustrative interface with sample data.
        </p>
      </div>
    </section>
  )
}
