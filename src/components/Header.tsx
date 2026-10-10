import { PLAY_STORE_URL } from '../constants'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#05090c]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400 sm:inline">
            Android App
          </span>
        </div>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-300/50 hover:bg-white/[0.08]"
        >
          Get the App<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </header>
  )
}
