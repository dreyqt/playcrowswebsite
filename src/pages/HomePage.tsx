import { useState } from 'react'
import type { Page } from '../data'
import type { ServerId } from '../site'
import { Hero, ServerSection, NewsGrid, GameInfoSection, DownloadSection, CommunitySection, RulesSection } from '../components/HomeSections'
export default function HomePage({ navigate, scrollTo }: { navigate: (page: Page) => void; scrollTo: (id: string) => void }) {
  const [selectedServer, setSelectedServer] = useState<ServerId>('v1')
  return <div className="home-page">
    <Hero scrollTo={scrollTo} />
    <ServerSection onDownload={server => { setSelectedServer(server); scrollTo('download') }} />
    <NewsGrid navigate={navigate} />
    <GameInfoSection />
    <DownloadSection server={selectedServer} setServer={setSelectedServer} />
    <CommunitySection />
    <RulesSection />
  </div>
}
