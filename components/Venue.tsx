import type { VenueInfo } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface VenueProps {
  venue: VenueInfo | null
}

export default function Venue({ venue }: VenueProps) {
  if (!venue) return null

  const venueName = getMetafieldValue(venue.metadata?.venue_name)
  const mapsUrl = getMetafieldValue(venue.metadata?.google_maps_embed_url)
  const hotelInfo = getMetafieldValue(venue.metadata?.hotel_information)
  const parkingInfo = getMetafieldValue(venue.metadata?.parking_information)

  return (
    <section id="venue" className="py-28 px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Where" title="The Venue" />

        {venueName && (
          <p className="text-center font-serif text-2xl text-navy mb-10">{venueName}</p>
        )}

        {mapsUrl && (
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-sm mb-12 border border-softgray">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={venueName || 'Venue map'}
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {hotelInfo && (
            <div>
              <p className="text-champagne text-xs uppercase tracking-widest mb-3">
                Hotel Information
              </p>
              <p className="text-stone leading-relaxed text-sm whitespace-pre-line">
                {hotelInfo}
              </p>
            </div>
          )}
          {parkingInfo && (
            <div>
              <p className="text-champagne text-xs uppercase tracking-widest mb-3">
                Parking
              </p>
              <p className="text-stone leading-relaxed text-sm whitespace-pre-line">
                {parkingInfo}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}