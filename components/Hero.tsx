import type { WeddingSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  settings: WeddingSettings | null
}

export default function Hero({ settings }: HeroProps) {
  const coupleNames = getMetafieldValue(settings?.metadata?.couple_names) || 'Alexis & Abraham'
  const weddingDate = getMetafieldValue(settings?.metadata?.wedding_date) || 'February 13, 2027'
  const location = getMetafieldValue(settings?.metadata?.location) || 'Ponce, Puerto Rico'
  const buttonLabel = getMetafieldValue(settings?.metadata?.enter_button_label) || 'Enter'
  const heroImage = settings?.metadata?.hero_image?.imgix_url

  return (
    <section id="top" className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0">
        {heroImage ? (
          <img
            src={`${heroImage}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={coupleNames}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-navy" />
        )}
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fadeUp">
        <p className="text-ivory/80 text-xs uppercase tracking-widest mb-6">
          {location}
        </p>
        <h1 className="font-serif text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide">
          {coupleNames}
        </h1>
        <div className="mt-6 mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-champagne" />
          <p className="text-champagne-light text-sm md:text-base tracking-widest uppercase">
            {weddingDate}
          </p>
          <span className="h-px w-10 bg-champagne" />
        </div>
        <a
          href="#story"
          className="inline-block border border-champagne text-ivory text-xs uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:bg-champagne hover:text-navy"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}