import type { DressCode } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface DressCodeSectionProps {
  dressCode: DressCode | null
}

export default function DressCodeSection({ dressCode }: DressCodeSectionProps) {
  if (!dressCode) return null

  const title = getMetafieldValue(dressCode.metadata?.title) || 'Dress Code'
  const description = getMetafieldValue(dressCode.metadata?.description)
  const guidelines = getMetafieldValue(dressCode.metadata?.guidelines)

  return (
    <section id="dress-code" className="py-28 px-6 bg-softgray/40">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading label="Attire" title={title} />

        <div className="flex justify-center gap-12 mb-10">
          <div className="flex flex-col items-center gap-3">
            <svg className="w-10 h-10 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2l3 4-3 14-3-14 3-4z" />
              <path d="M9 6l-4 3 4 11M15 6l4 3-4 11" />
            </svg>
            <span className="text-xs uppercase tracking-widest text-stone">Gowns</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <svg className="w-10 h-10 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M8 2v6l4 14 4-14V2M8 2h8M10 8h4" />
            </svg>
            <span className="text-xs uppercase tracking-widest text-stone">Suits</span>
          </div>
        </div>

        {description && (
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">{description}</p>
        )}
        {guidelines && (
          <p className="text-navy font-serif text-xl leading-relaxed whitespace-pre-line">
            {guidelines}
          </p>
        )}
      </div>
    </section>
  )
}