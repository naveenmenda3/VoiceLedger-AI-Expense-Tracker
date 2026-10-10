import { asset } from '../constants'

export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={asset('logo-192.png')}
        width={size}
        height={size}
        alt=""
        className="rounded-full"
      />
      <span className="font-display text-[17px] font-semibold tracking-tight text-white">
        Voice<span className="text-emerald-300">Ledger</span>
      </span>
    </span>
  )
}
