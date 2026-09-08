import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ANNOUNCEMENTS, UPDATES, type Page } from './data'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import AnnouncementDetailPage from './pages/AnnouncementDetailPage'
import UpdatesPage from './pages/UpdatesPage'
import UpdateDetailPage from './pages/UpdateDetailPage'

function readRoute(hash: string): Page {
  try {
    const [view, id] = hash.replace(/^#\/?/, '').split('/')
    if (view === 'announcements' || view === 'updates') return { view }
    if ((view === 'announcement' || view === 'update') && id) return { view, id: decodeURIComponent(id) }
  } catch { /* Unknown or malformed URLs return to the home page. */ }
  return { view: 'home' }
}

export default function App() {
  const { t, i18n } = useTranslation()
  const [hash, setHash] = useState(window.location.hash)
  const main = useRef<HTMLElement>(null)
  const page = readRoute(hash)
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    const id = page.view === 'home' && hash && !hash.startsWith('#/') ? hash.slice(1) : null
    const frame = requestAnimationFrame(() => {
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
      else { window.scrollTo({ top: 0, behavior: 'instant' }); if (page.view !== 'home') main.current?.focus({ preventScroll: true }) }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])
  useEffect(() => {
    const langMap: Record<string, string> = { en: 'en', kr: 'ko', th: 'th', br: 'pt-BR', tw: 'zh-Hant' }
    document.documentElement.lang = langMap[i18n.language] ?? 'en'
    const item = page.view === 'announcement' ? ANNOUNCEMENTS.find(a => a.id === page.id) : page.view === 'update' ? UPDATES.find(a => a.id === page.id) : undefined
    const title = item ? item.title[i18n.language as keyof typeof item.title] ?? item.title.en : page.view === 'announcements' ? t('site.announcements') : page.view === 'updates' ? t('site.updates') : t('site.pageTitle')
    document.title = `${title} | PlayCrows`
  }, [hash, i18n.language, t])
  const setLocation = (next: string) => {
    if (window.location.hash !== next) window.location.hash = next
    else if (next.startsWith('#/')) window.scrollTo({ top: 0, behavior: 'auto' })
    else document.getElementById(next.slice(1))?.scrollIntoView({ behavior: 'auto' })
  }
  const navigate = (next: Page) => setLocation(next.view === 'home' ? '#/' : 'id' in next ? `#/${next.view}/${encodeURIComponent(next.id)}` : `#/${next.view}`)
  const goHome = () => navigate({ view: 'home' })
  const scrollTo = (id: string) => setLocation(`#${id}`)
  return <>
    <a className="skip-link" href="#main-content">{t('site.skipContent')}</a>
    <Navbar navigate={navigate} goHome={goHome} scrollTo={scrollTo} />
    <main id="main-content" ref={main} tabIndex={-1}>
      {page.view === 'home' && <HomePage navigate={navigate} scrollTo={scrollTo} />}
      {page.view === 'announcements' && <AnnouncementsPage navigate={navigate} goHome={goHome} />}
      {page.view === 'announcement' && <AnnouncementDetailPage id={page.id} navigate={navigate} goHome={goHome} />}
      {page.view === 'updates' && <UpdatesPage navigate={navigate} goHome={goHome} />}
      {page.view === 'update' && <UpdateDetailPage id={page.id} navigate={navigate} goHome={goHome} />}
    </main>
    <Footer navigate={navigate} goHome={goHome} />
  </>
}
