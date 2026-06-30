import { createBucketClient } from '@cosmicjs/sdk'
import type {
  WeddingSettings,
  StoryMoment,
  ScheduleEvent,
  VenueInfo,
  DressCode,
  HoneymoonFund,
  RsvpMemories,
  Faq,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function byOrder<T extends { metadata: { order?: number } }>(a: T, b: T): number {
  const oa = a.metadata?.order ?? 0
  const ob = b.metadata?.order ?? 0
  return oa - ob
}

export async function getWeddingSettings(): Promise<WeddingSettings | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'wedding-settings' })
      .depth(1)
    return object as WeddingSettings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch wedding settings')
  }
}

export async function getStoryMoments(): Promise<StoryMoment[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'story-moments' })
      .depth(1)
    return (objects as StoryMoment[]).sort(byOrder)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch story moments')
  }
}

export async function getScheduleEvents(): Promise<ScheduleEvent[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'schedule-events' })
      .depth(1)
    return (objects as ScheduleEvent[]).sort(byOrder)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch schedule events')
  }
}

export async function getVenueInfo(): Promise<VenueInfo | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'venue-info' })
      .depth(1)
    return object as VenueInfo
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch venue info')
  }
}

export async function getDressCode(): Promise<DressCode | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'dress-code' })
      .depth(1)
    return object as DressCode
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch dress code')
  }
}

export async function getHoneymoonFund(): Promise<HoneymoonFund | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'honeymoon-fund' })
      .depth(1)
    return object as HoneymoonFund
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch honeymoon fund')
  }
}

export async function getRsvpMemories(): Promise<RsvpMemories | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'rsvp-memories' })
      .depth(1)
    return object as RsvpMemories
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch RSVP & memories')
  }
}

export async function getFaqs(): Promise<Faq[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'faq' })
      .depth(1)
    return (objects as Faq[]).sort(byOrder)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch FAQs')
  }
}