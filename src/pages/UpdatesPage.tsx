import { useTranslation } from 'react-i18next'
import { UPDATES, type Page, type Lang } from '../data'
import { Breadcrumb } from '../components/Breadcrumb'
import { PageShell } from '../components/PageShell'
import { IcoArrow } from '../components/Icons'

const SUPPORTED_LANGS: Lang[] = ['en', 'kr', 'th', 'tw', 'br']

export default function UpdatesPage({ navigate, goHome }: { navigate: (p: Page) => void; goHome: () => void }) {
  const { i18n } = useTranslation()
  const lang: Lang = SUPPORTED_LANGS.includes(i18n.language as Lang) ? (i18n.language as Lang) : 'en'

  return (
    <PageShell>
      <Breadcrumb crumbs={[{ label: 'Home', onClick: goHome }, { label: 'Updates' }]} />
      <div className="mb-12">
        <p className="section-label mb-3">Patch Notes</p>
        <h1 className="font-cinzel font-bold text-white tracking-widest" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '0.15em' }}>UPDATES</h1>
        <div className="divider-blue mt-6" style={{ margin: '20px 0 0' }} />
      </div>
      <div className="flex flex-col gap-4">
        {UPDATES.map(update => (
          <button key={update.id} onClick={() => navigate({ view: 'update', id: update.id })} className="text-left w-full bg-transparent border-none cursor-pointer group" style={{ padding: 0 }}>
            <div className="flex items-start justify-between gap-4 p-6 transition-all duration-200" style={{ border: '1px solid rgba(212,169,77,0.1)', background: '#15110A' }} onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#1A140D'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,169,77,0.22)' }} onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#15110A'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,169,77,0.1)' }}>
              <div>
                <p className="font-cinzel font-semibold mb-2" style={{ fontSize: 15, letterSpacing: '0.05em', color: '#EAD9B8' }}>{update.title[lang]}</p>
                <p className="font-inter font-light mb-2" style={{ fontSize: 14, color: '#7A6248' }}>{update.preview[lang]}</p>
                <p className="font-cinzel" style={{ fontSize: 11, color: '#3A2C18', letterSpacing: '0.15em' }}>{update.date[lang]}</p>
              </div>
              <span style={{ color: '#4A3720', flexShrink: 0, marginTop: 4 }}><IcoArrow /></span>
            </div>
          </button>
        ))}
      </div>
    </PageShell>
  )
}