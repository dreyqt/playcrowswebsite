import patchBannerImg from '../assets/image-2.png'
import { UPDATES, getUpdateContent, type Page } from '../data'
import { Breadcrumb } from '../components/Breadcrumb'
import { PageShell } from '../components/PageShell'
import { IcoBack } from '../components/Icons'

export default function UpdateDetailPage({ id, navigate, goHome }: { id: string; navigate: (p: Page) => void; goHome: () => void }) {
  const update = UPDATES.find(item => item.id === id)
  if (!update) {
    return <PageShell><p style={{ color: '#4A6280' }}>Update not found.</p></PageShell>
  }

  return (
    <PageShell>
      <Breadcrumb crumbs={[{ label: 'Home', onClick: goHome }, { label: 'Updates', onClick: () => navigate({ view: 'updates' }) }, { label: update.title }]} />
      <div className="w-full overflow-hidden mb-10" style={{ background: '#050810' }}>
        <img src={patchBannerImg} alt="Patch Notes banner" className="w-full object-cover" style={{ maxHeight: 280, objectPosition: 'center' }} />
      </div>
      <div className="mb-2"><p className="font-cinzel" style={{ fontSize: 11, color: '#1E3A5A', letterSpacing: '0.15em' }}>{update.date}</p></div>
      <h1 className="font-cinzel font-bold text-white mb-8" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', letterSpacing: '0.06em', lineHeight: 1.4 }}>{update.title}</h1>
      <div style={{ borderTop: '1px solid rgba(59,158,255,0.1)', paddingTop: 28 }}>
        {getUpdateContent(id)}
      </div>
      <div className="mt-12">
        <button onClick={() => navigate({ view: 'updates' })} className="btn-secondary flex items-center gap-2" style={{ fontSize: 13, padding: '10px 24px' }}>
          <IcoBack /> Back to Updates
        </button>
      </div>
    </PageShell>
  )
}
