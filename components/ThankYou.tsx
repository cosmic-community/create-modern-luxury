import type { WeddingSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ThankYouProps {
  settings: WeddingSettings | null
}

export default function ThankYou({ settings }: ThankYouProps) {
  const message =
    getMetafieldValue(settings?.metadata?.thank_you_message) ||
    'Thank you for being part of our story.'
  const coupleNames = getMetafieldValue(settings?.metadata?.couple_names) || 'Alexis & Abraham'

  return (
    <footer className="py-32 px-6 bg-navy-dark text-ivory text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mx-auto mb-10 h-px w-16 bg-champagne" />
        <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-10">
          {message}
        </p>
        <p className="font-serif text-3xl text-champagne tracking-wide">{coupleNames}</p>
        <p className="text-ivory/40 text-xs uppercase tracking-widest mt-6">
          February 13, 2027 · Ponce, Puerto Rico
        </p>
      </div>
    </footer>
  )
}