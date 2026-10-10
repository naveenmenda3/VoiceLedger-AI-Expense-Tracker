import { PLAY_STORE_URL } from '../constants'

function PlayIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#00D7FE" d="M3.6 1.6c-.3.3-.5.8-.5 1.4v18c0 .6.2 1.1.5 1.4l.1.1L13.8 12.4v-.2L3.7 1.5z" />
      <path fill="#FFCE00" d="m17.2 15.8-3.4-3.4v-.2l3.4-3.4.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4 2.3z" />
      <path fill="#FF3A44" d="m17.3 15.7-3.5-3.5-10.2 10.2c.4.4 1 .4 1.7.1z" />
      <path fill="#00F076" d="M17.3 8.7 5.3 1.9c-.7-.4-1.3-.3-1.7.1l10.2 10.2z" />
    </svg>
  )
}

/** Primary conversion button — always points at the official Play Store listing. */
export default function PlayButton({ label }: { label: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_10px_40px_-8px_rgba(52,211,153,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_16px_56px_-6px_rgba(52,211,153,0.75)] active:translate-y-0 sm:px-10 sm:py-[18px]"
    >
      <PlayIcon className="h-7 w-7" />
      <span>{label}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
