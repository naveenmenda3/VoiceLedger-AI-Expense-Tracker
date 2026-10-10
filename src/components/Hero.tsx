import PlayButton from './PlayButton'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[min(900px,140vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(16,185,129,0.20),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="rise text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
          Your AI Money Coach
        </p>
        <h1
          id="hero-title"
          className="rise mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white [animation-delay:80ms]"
        >
          Your money.{' '}
          <span className="bg-gradient-to-b from-emerald-200 to-emerald-500 bg-clip-text text-transparent">
            Understood.
          </span>
        </h1>
        <p className="rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 [animation-delay:160ms] sm:text-lg">
          Track expenses with your voice, understand your spending, and make smarter money
          decisions — all with VoiceLedger.
        </p>
        <div className="rise mt-10 flex flex-col items-center gap-3 [animation-delay:240ms]">
          <PlayButton label="Get it on Google Play" />
          <p className="text-sm text-zinc-500">Available on Android</p>
        </div>
      </div>
    </section>
  )
}
