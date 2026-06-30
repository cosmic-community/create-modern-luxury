import type { RsvpMemories } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface RsvpSectionProps {
  data: RsvpMemories | null
}

export default function RsvpSection({ data }: RsvpSectionProps) {
  const heading = getMetafieldValue(data?.metadata?.rsvp_heading) || 'Will You Join Us?'
  const joyLink = getMetafieldValue(data?.metadata?.joy_website_link)
  const buttonLabel = getMetafieldValue(data?.metadata?.rsvp_button_label) || 'RSVP on Joy'

  return (
    <section id="rsvp" className="py-32 px-6 bg-navy text-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-champagne font-medium mb-6">
          Kindly Respond
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-10">
          {heading}
        </h2>

        {joyLink && (
          <a
            href={joyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-champagne text-navy text-sm uppercase tracking-widest px-12 py-5 transition-all duration-300 hover:bg-champagne-light"
          >
            {buttonLabel}
          </a>
        )}
      </div>
    </section>
  )
}