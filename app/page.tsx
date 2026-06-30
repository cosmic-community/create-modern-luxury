import {
  getWeddingSettings,
  getStoryMoments,
  getScheduleEvents,
  getVenueInfo,
  getDressCode,
  getHoneymoonFund,
  getRsvpMemories,
  getFaqs,
} from '@/lib/cosmic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import OurStory from '@/components/OurStory'
import WeddingDay from '@/components/WeddingDay'
import Venue from '@/components/Venue'
import DressCodeSection from '@/components/DressCodeSection'
import HoneymoonFundSection from '@/components/HoneymoonFundSection'
import RsvpSection from '@/components/RsvpSection'
import MemoriesSection from '@/components/MemoriesSection'
import FaqSection from '@/components/FaqSection'
import ThankYou from '@/components/ThankYou'

export default async function HomePage() {
  const [
    settings,
    story,
    schedule,
    venue,
    dressCode,
    honeymoon,
    rsvpMemories,
    faqs,
  ] = await Promise.all([
    getWeddingSettings(),
    getStoryMoments(),
    getScheduleEvents(),
    getVenueInfo(),
    getDressCode(),
    getHoneymoonFund(),
    getRsvpMemories(),
    getFaqs(),
  ])

  return (
    <main>
      <Navigation coupleNames={settings?.metadata?.couple_names} />
      <Hero settings={settings} />
      <OurStory moments={story} />
      <WeddingDay events={schedule} />
      <Venue venue={venue} />
      <DressCodeSection dressCode={dressCode} />
      <HoneymoonFundSection fund={honeymoon} />
      <RsvpSection data={rsvpMemories} />
      <MemoriesSection data={rsvpMemories} />
      <FaqSection faqs={faqs} />
      <ThankYou settings={settings} />
    </main>
  )
}