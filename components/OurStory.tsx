import type { StoryMoment } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface OurStoryProps {
  moments: StoryMoment[]
}

export default function OurStory({ moments }: OurStoryProps) {
  if (!moments || moments.length === 0) return null

  return (
    <section id="story" className="py-28 px-6 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="The Beginning" title="Our Story" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-softgray md:-translate-x-1/2" />

          <div className="space-y-16">
            {moments.map((moment, index) => {
              const title = getMetafieldValue(moment.metadata?.title)
              const dateLabel = getMetafieldValue(moment.metadata?.date_label)
              const description = getMetafieldValue(moment.metadata?.description)
              const photo = moment.metadata?.photo?.imgix_url
              const isLeft = index % 2 === 0

              return (
                <div
                  key={moment.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-champagne md:-translate-x-1/2 -translate-x-1/2 z-10" />

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                    {photo && (
                      <img
                        src={`${photo}?w=800&h=600&fit=crop&auto=format,compress`}
                        alt={title}
                        className="w-full h-64 object-cover rounded-sm shadow-sm"
                      />
                    )}
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-10 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    {dateLabel && (
                      <p className="text-champagne text-xs uppercase tracking-widest mb-2">
                        {dateLabel}
                      </p>
                    )}
                    <h3 className="font-serif text-2xl text-navy mb-3">{title}</h3>
                    {description && (
                      <p className="text-stone leading-relaxed text-sm">{description}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}