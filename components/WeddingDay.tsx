import type { ScheduleEvent } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface WeddingDayProps {
  events: ScheduleEvent[]
}

export default function WeddingDay({ events }: WeddingDayProps) {
  if (!events || events.length === 0) return null

  return (
    <section id="wedding-day" className="py-28 px-6 bg-navy text-ivory">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-champagne font-medium mb-4">
            February 13, 2027
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-ivory">
            Wedding Day
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-champagne" />
        </div>

        <div className="space-y-px">
          {events.map((event) => {
            const name = getMetafieldValue(event.metadata?.event_name)
            const time = getMetafieldValue(event.metadata?.time)
            const locationDetail = getMetafieldValue(event.metadata?.location_detail)
            const description = getMetafieldValue(event.metadata?.description)

            return (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6 border-b border-navy-light"
              >
                <div className="sm:w-32 shrink-0">
                  <p className="text-champagne tracking-widest text-sm">{time}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-ivory mb-1">{name}</h3>
                  {locationDetail && (
                    <p className="text-ivory/60 text-xs uppercase tracking-widest mb-1">
                      {locationDetail}
                    </p>
                  )}
                  {description && (
                    <p className="text-ivory/70 text-sm leading-relaxed">{description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}