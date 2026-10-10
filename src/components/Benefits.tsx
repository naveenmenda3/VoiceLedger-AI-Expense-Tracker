import { Mic, PieChart, Target, type LucideIcon } from 'lucide-react'

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Mic,
    title: 'Track by voice',
    body: 'Record everyday expenses naturally using voice input.',
  },
  {
    icon: PieChart,
    title: 'Understand your spending',
    body: 'See where your money goes through spending summaries and insights.',
  },
  {
    icon: Target,
    title: 'Plan with confidence',
    body: 'Organize budgets and financial goals in one place.',
  },
]

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="px-4 py-20 sm:py-28">
      <h2 id="benefits-title" className="sr-only">
        Why VoiceLedger
      </h2>
      <ul className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/[0.08]">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="md:px-10 md:first:pl-0 md:last:pr-0">
            <Icon className="h-6 w-6 text-emerald-300" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
