'use client'

import { useState } from 'react'
import type { Faq } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface FaqSectionProps {
  faqs: Faq[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  if (!faqs || faqs.length === 0) return null

  return (
    <section id="faq" className="py-28 px-6 bg-softgray/40">
      <div className="max-w-2xl mx-auto">
        <SectionHeading label="Questions" title="FAQ" />

        <div className="divide-y divide-softgray border-t border-b border-softgray">
          {faqs.map((faq) => {
            const question = getMetafieldValue(faq.metadata?.question)
            const answer = getMetafieldValue(faq.metadata?.answer)
            const isOpen = openId === faq.id

            return (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-serif text-lg text-navy pr-6">{question}</span>
                  <span className="text-champagne text-2xl font-light shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="text-stone leading-relaxed text-sm pb-6 animate-fadeIn whitespace-pre-line">
                    {answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}