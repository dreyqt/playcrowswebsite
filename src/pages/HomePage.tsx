import type { Page } from '../data'
import { Hero, ServerSection, NewsGrid, GameInfoSection, DownloadSection, CommunitySection, RulesSection } from '../components/HomeSections'
export default function HomePage({ navigate, scrollTo }: { navigate: (page: Page) => void; scrollTo: (id: string) => void }) {
  return <div className="home-page">
    <Hero scrollTo={scrollTo} />
    <ServerSection onDownload={() => scrollTo('download')} />
    <NewsGrid navigate={navigate} />
    <GameInfoSection />
    <DownloadSection />
    <CommunitySection />
    <RulesSection />
  </div>
}
