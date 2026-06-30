import type { HoneymoonFund } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface HoneymoonFundSectionProps {
  fund: HoneymoonFund | null
}

export default function HoneymoonFundSection({ fund }: HoneymoonFundSectionProps) {
  if (!fund) return null

  const title = getMetafieldValue(fund.metadata?.title) || 'Honeymoon Fund'
  const message = getMetafieldValue(fund.metadata?.message)
  const ath = getMetafieldValue(fund.metadata?.ath_movil_link)
  const zelle = getMetafieldValue(fund.metadata?.zelle_link)
  const paypal = getMetafieldValue(fund.metadata?.paypal_link)

  const buttons = [
    { label: 'ATH Móvil', href: ath },
    { label: 'Zelle', href: zelle },
    { label: 'PayPal', href: paypal },
  ].filter((b) => b.href)

  return (
    <section id="honeymoon" className="py-28 px-6 bg-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading label="A Gift" title={title} />

        {message && (
          <p className="text-stone leading-relaxed mb-12 max-w-xl mx-auto">{message}</p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {buttons.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-navy text-navy text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-navy hover:text-ivory"
              >
                {b.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}