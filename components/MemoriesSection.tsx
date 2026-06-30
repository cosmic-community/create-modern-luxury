import type { RsvpMemories } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

interface MemoriesSectionProps {
  data: RsvpMemories | null
}

export default function MemoriesSection({ data }: MemoriesSectionProps) {
  const heading = getMetafieldValue(data?.metadata?.memories_heading) || 'Share Your Memories'
  const qrImage = data?.metadata?.qr_code_image?.imgix_url
  const uploadLink = getMetafieldValue(data?.metadata?.upload_photos_link)
  const uploadLabel = getMetafieldValue(data?.metadata?.upload_button_label) || 'Upload Photos'

  return (
    <section id="memories" className="py-28 px-6 bg-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading label="After the Day" title={heading} />

        <div className="flex flex-col items-center gap-8">
          {qrImage ? (
            <img
              src={`${qrImage}?w=480&h=480&fit=crop&auto=format,compress`}
              alt="Scan to share memories"
              className="w-48 h-48 object-cover border border-softgray rounded-sm"
            />
          ) : (
            <div className="w-48 h-48 border-2 border-dashed border-stone/40 flex items-center justify-center rounded-sm">
              <span className="text-stone text-xs uppercase tracking-widest">QR Code</span>
            </div>
          )}

          {uploadLink && (
            <a
              href={uploadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy text-navy text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              {uploadLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}