import { CONTACT_EMAIL, PLAY_STORE_URL, PRIVACY_URL } from '../constants'
import Logo from './Logo'

const link = 'text-zinc-400 transition hover:text-white'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-sm md:flex-row md:justify-between">
        <Logo size={24} />
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className={link}>
            Privacy Policy
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
            Contact
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={link}>
            Get the Android app
          </a>
        </nav>
        <p className="text-zinc-500">© {new Date().getFullYear()} VoiceLedger</p>
      </div>
    </footer>
  )
}
