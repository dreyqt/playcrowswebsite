import { useEffect, useState } from 'react'
import type { Page } from './data'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import HomePage from './pages/HomePage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import AnnouncementDetailPage from './pages/AnnouncementDetailPage'
import UpdatesPage from './pages/UpdatesPage'
import UpdateDetailPage from './pages/UpdateDetailPage'

export default function App() {
  const [page, setPage] = useState<Page>({ view: 'home' })
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  const goHome = () => navigate({ view: 'home' })

  const scrollTo = (id: string) => {
    if (page.view !== 'home') {
      setPage({ view: 'home' })
      setPendingScroll(id)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (page.view === 'home' && pendingScroll) {
      const timeout = setTimeout(() => {
        document.getElementById(pendingScroll)?.scrollIntoView({ behavior: 'smooth' })
        setPendingScroll(null)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [page.view, pendingScroll])

  return (
    <div style={{ background: '#0F0C09', minHeight: '100vh' }}>
      <Navbar navigate={navigate} goHome={goHome} scrollTo={scrollTo} />

      {page.view === 'home' && <HomePage navigate={navigate} scrollTo={scrollTo} />}
      {page.view === 'announcements' && <AnnouncementsPage navigate={navigate} goHome={goHome} />}
      {page.view === 'announcement' && <AnnouncementDetailPage id={page.id} navigate={navigate} goHome={goHome} />}
      {page.view === 'updates' && <UpdatesPage navigate={navigate} goHome={goHome} />}
      {page.view === 'update' && <UpdateDetailPage id={page.id} navigate={navigate} goHome={goHome} />}

      <Footer navigate={navigate} goHome={goHome} />
    </div>
  )
}