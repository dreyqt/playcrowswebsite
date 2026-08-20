import { useTranslation } from 'react-i18next'
import announcementImg from '../assets/announcement.png'
import { ANNOUNCEMENTS, getAnnouncementContent, type Page, type Lang } from '../data'
import { Breadcrumb } from '../components/Breadcrumb'
import { PageShell } from '../components/PageShell'
import { IcoBack } from '../components/Icons'

const SUPPORTED_LANGS: Lang[] = ['en', 'kr', 'th', 'tw', 'br']

export default function AnnouncementDetailPage({ id, navigate, goHome }: { id: string; navigate: (p: Page) => void; goHome: () => void }) {
  const { i18n } = useTranslation()
  const lang: Lang = SUPPORTED_LANGS.includes(i18n.language as Lang) ? (i18n.language as Lang) : 'en'

  const ann = ANNOUNCEMENTS.find(a => a.id === id)
  if (!ann) {
    return <PageShell><p style={{ color: '#7A6248' }}>Announcement not found.</p></PageShell>
  }

  return (
    <PageShell>
      <Breadcrumb crumbs={[{ label: 'Home', onClick: goHome }, { label: 'Announcements', onClick: () => navigate({ view: 'announcements' }) }, { label: ann.title[lang] }]} />
      <div className="relative w-full overflow-hidden mb-10" style={{ height: 260, background: '#0F0C09' }}>
        <img src={announcementImg} alt="Announcement banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,12,9,0.3) 0%, rgba(15,12,9,0.7) 100%)' }} />
        <div className="absolute bottom-8 left-8">
          <span className="section-label">Announcement</span>
        </div>
      </div>
      <div className="mb-2"><p className="font-cinzel" style={{ fontSize: 11, color: '#3A2C18', letterSpacing: '0.15em' }}>{ann.date[lang]}</p></div>
      <h1 className="font-cinzel font-bold text-white mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '0.08em', lineHeight: 1.3 }}>{ann.title[lang]}</h1>
      <div style={{ borderTop: '1px solid rgba(212,169,77,0.1)', paddingTop: 28 }}>
        {getAnnouncementContent(id)}
      </div>
      <div className="mt-12">
        <button onClick={() => navigate({ view: 'announcements' })} className="btn-secondary flex items-center gap-2" style={{ fontSize: 13, padding: '10px 24px' }}>
          <IcoBack /> Back to Announcements
        </button>
      </div>
    </PageShell>
  )
}