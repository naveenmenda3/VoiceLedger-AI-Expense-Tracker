import PlayButton from './PlayButton'

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden px-4 py-24 text-center sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(700px,120vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent)]"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2
          id="cta-title"
          className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-[-0.02em] text-white"
        >
          Make every rupee or dollar count.
        </h2>
        <p className="mt-4 text-zinc-400">Start understanding your money with VoiceLedger.</p>
        <div className="mt-9 flex justify-center">
          <PlayButton label="Download on Google Play" />
        </div>
      </div>
    </section>
  )
}
