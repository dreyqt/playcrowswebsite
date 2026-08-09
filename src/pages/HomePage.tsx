import type { Page } from '../data'
import { Hero, QuickNav, NewsGrid, DownloadSection, GameInfoSection, DonationSection, RulesSection, DiscordSection } from '../components/HomeSections'

export default function HomePage({ navigate, scrollTo }: { navigate: (p: Page) => void; scrollTo: (id: string) => void }) {
  return (
    <>
      <Hero />
      <NewsGrid navigate={navigate} scrollTo={scrollTo} />
      <DownloadSection />
      <GameInfoSection />
      <DonationSection />
      <RulesSection />
      <DiscordSection />
    </>
  )
}
